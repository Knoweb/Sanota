import { useEffect, useMemo, useRef, useState, ReactNode } from 'react';
import { motion, useMotionValue, useTransform, PanInfo } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import './Carousel.css';

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

interface CarouselItemProps {
  item: any;
  index: number;
  itemWidth: number;
  round: boolean;
  trackItemOffset: number;
  x: any;
  transition: any;
}

function CarouselItem({ item, index, itemWidth, round, trackItemOffset, x, transition }: CarouselItemProps) {
  const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
  const outputRange = [90, 0, -90];
  const rotateY = useTransform(x, range, outputRange, { clamp: false });

  return (
    <motion.div
      key={`${item?.id ?? index}-${index}`}
      className={`carousel-item ${round ? 'round' : ''}`}
      style={{
        width: itemWidth,
        height: '100%',
        rotateY: rotateY,
        ...(round && { borderRadius: '50%' })
      }}
      transition={transition}
    >
      {item.content ? (
        <div className="w-full h-full flex flex-col">{item.content}</div>
      ) : (
        <>
          <div className={`carousel-item-header ${round ? 'round' : ''}`}>
            <span className="carousel-icon-container">{item.icon}</span>
          </div>
          <div className="carousel-item-content">
            <div className="carousel-item-title">{item.title}</div>
            <p className="carousel-item-description">{item.description}</p>
          </div>
        </>
      )}
    </motion.div>
  );
}

interface CarouselProps {
  items: any[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

export default function Carousel({
  items = [],
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false
}: CarouselProps) {
  const containerPadding = 16;

  // Use state for responsive width
  const [currentBaseWidth, setCurrentBaseWidth] = useState(baseWidth);

  useEffect(() => {
    const handleResize = () => {
      // Add responsive logic for baseWidth
      if (window.innerWidth < 640) {
        setCurrentBaseWidth(window.innerWidth - 48); // small screens padding
      } else if (window.innerWidth < 1024) {
        setCurrentBaseWidth(window.innerWidth - 64);
      } else {
        // Max width for desktop
        setCurrentBaseWidth(Math.min(1300, window.innerWidth - 80));
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [baseWidth]);

  const itemWidth = currentBaseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const itemsForRender = useMemo(() => {
    if (!loop) return items;
    if (items.length === 0) return [];
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState(loop ? 1 : 0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return undefined;
    if (pauseOnHover && isHovered) return undefined;

    const timer = setInterval(() => {
      setPosition(prev => Math.min(prev + 1, itemsForRender.length - 1));
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

  useEffect(() => {
    const startingPosition = loop ? 1 : 0;
    setPosition(startingPosition);
    x.set(-startingPosition * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  useEffect(() => {
    if (!loop && position > itemsForRender.length - 1) {
      setPosition(Math.max(0, itemsForRender.length - 1));
    }
  }, [itemsForRender.length, loop, position]);

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false);
      return;
    }
    const lastCloneIndex = itemsForRender.length - 1;

    if (position === lastCloneIndex) {
      setIsJumping(true);
      const target = 1;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    if (position === 0) {
      setIsJumping(true);
      const target = items.length;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    setIsAnimating(false);
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) return;

    setPosition(prev => {
      const next = prev + direction;
      const max = itemsForRender.length - 1;
      return Math.max(0, Math.min(next, max));
    });
  };

  const dragProps = loop
    ? {}
    : {
      dragConstraints: {
        left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
        right: 0
      }
    };

  const activeIndex =
    items.length === 0 ? 0 : loop ? (position - 1 + items.length) % items.length : Math.min(position, items.length - 1);

  const handlePrev = () => {
    setPosition((prev) => {
      const target = prev - 1;
      return loop ? target : Math.max(0, target);
    });
  };

  const handleNext = () => {
    setPosition((prev) => {
      const target = prev + 1;
      return loop ? target : Math.min(itemsForRender.length - 1, target);
    });
  };

  return (
    <div
      ref={containerRef}
      className={`carousel-container ${round ? 'round' : ''} mx-auto`}
      style={{
        width: `${currentBaseWidth}px`,
        ...(round && { height: `${currentBaseWidth}px`, borderRadius: '50%' })
      }}
    >
      <div className="relative w-full">
        <motion.div
          className="carousel-track"
          drag={isAnimating ? false : 'x'}
          {...dragProps}
          style={{
            width: itemWidth,
            gap: `${GAP}px`,
            perspective: 1000,
            perspectiveOrigin: `${position * trackItemOffset + itemWidth / 2}px 50%`,
            x
          }}
          onDragEnd={handleDragEnd}
          animate={{ x: -(position * trackItemOffset) }}
          transition={effectiveTransition as any}
          onAnimationStart={handleAnimationStart}
          onAnimationComplete={handleAnimationComplete}
        >
          {itemsForRender.map((item, index) => (
            <CarouselItem
              key={`${item?.id ?? index}-${index}`}
              item={item}
              index={index}
              itemWidth={itemWidth}
              round={round}
              trackItemOffset={trackItemOffset}
              x={x}
              transition={effectiveTransition}
            />
          ))}
        </motion.div>

        {/* Navigation Arrows - New Sleek Style */}
        <button
          onClick={handlePrev}
          disabled={!loop && position === 0}
          className="absolute left-0 lg:-left-10 top-1/2 -translate-y-1/2 z-20 p-2 text-slate-500 hover:text-[#E8B84B] transition-all disabled:opacity-0 disabled:pointer-events-none hidden md:block group"
        >
          <ChevronLeft className="w-12 h-12 drop-shadow-[0_0_10px_rgba(232,184,75,0.0)] group-hover:drop-shadow-[0_0_10px_rgba(232,184,75,0.5)] group-hover:-translate-x-1 transition-all duration-300" strokeWidth={1.5} />
        </button>

        <button
          onClick={handleNext}
          disabled={!loop && position === itemsForRender.length - 1}
          className="absolute right-0 lg:-right-10 top-1/2 -translate-y-1/2 z-20 p-2 text-slate-500 hover:text-[#E8B84B] transition-all disabled:opacity-0 disabled:pointer-events-none hidden md:block group"
        >
          <ChevronRight className="w-12 h-12 drop-shadow-[0_0_10px_rgba(232,184,75,0.0)] group-hover:drop-shadow-[0_0_10px_rgba(232,184,75,0.5)] group-hover:translate-x-1 transition-all duration-300" strokeWidth={1.5} />
        </button>
      </div>

      <div className={`carousel-indicators-container ${round ? 'round' : ''} mt-1`}>
        <div className="carousel-indicators flex gap-2.5">
          {items.map((_, index) => (
            <motion.button
              type="button"
              key={index}
              className={`carousel-indicator w-3 h-3 rounded-full transition-colors ${activeIndex === index ? 'bg-[#E8B84B]' : 'bg-slate-700 hover:bg-slate-500'}`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeIndex === index}
              animate={{
                scale: activeIndex === index ? 1.2 : 1
              }}
              onClick={() => setPosition(loop ? index + 1 : index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
