"use client";

import React, { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface DriftWallProps {
  items: { image: string; title: string; href?: string }[];
  columns?: number;
  tileWidth?: number;
  tileHeight?: number;
  gap?: number;
  tilt?: number;
  turn?: number;
  perspective?: number;
  depth?: number;
  speed?: number;
  direction?: 'up' | 'down';
  variance?: number;
  parallax?: number;
  lift?: number;
  fade?: number;
  dim?: number;
  overlayColor?: string;
  radius?: number;
  roll?: number;
  pauseOnHover?: boolean;
  grayscale?: boolean;
}

export default function DriftWall({
  items = [],
  columns = 5,
  tileWidth = 200,
  tileHeight = 132,
  gap = 18,
  tilt = 16,
  turn = -14,
  perspective = 1200,
  depth = 120,
  speed = 42,
  direction = 'up',
  variance = 0.45,
  parallax = 0.6,
  lift = 64,
  fade = 0.6,
  dim = 0.55,
  overlayColor = '#060010',
  radius = 14,
  roll = 0,
  pauseOnHover = false,
  grayscale = false,
}: DriftWallProps) {
  
  // Generate slightly randomized columns on mount
  const columnData = useMemo(() => {
    return Array.from({ length: columns }).map(() => {
      // Create a shuffled copy of items for each column so they look organic
      const shuffled = [...items].sort(() => Math.random() - 0.5);
      // We repeat the array 4 times to ensure we have enough height to scroll seamlessly
      return {
        items: [...shuffled, ...shuffled, ...shuffled, ...shuffled],
        originalLength: shuffled.length,
        // Add random speed variance: speed + (speed * randomVariance)
        speedOffset: speed * (1 + (Math.random() * variance * 2 - variance))
      };
    });
  }, [items, columns, speed, variance]);

  // Exact scroll distance for seamless loop: Height of original items + gaps
  const scrollDistance = columnData[0]?.originalLength * (tileHeight + gap);

  return (
    <div 
      className="relative w-full h-full overflow-hidden flex items-center justify-center pointer-events-auto"
      style={{ perspective: `${perspective}px` }}
    >
      <div 
        className="flex"
        style={{
          transform: `rotateX(${tilt}deg) rotateY(${turn}deg) rotateZ(${roll}deg) translateZ(${depth}px)`,
          gap: `${gap}px`,
          transformStyle: 'preserve-3d',
        }}
      >
        {columnData.map((col, i) => {
          const animDirection = direction === 'up' ? 'normal' : 'reverse';
          
          return (
            <div 
              key={i}
              className={`flex flex-col ${pauseOnHover ? 'hover:[animation-play-state:paused]' : ''}`}
              style={{
                gap: `${gap}px`,
                animation: `driftWallScroll-${direction} ${col.speedOffset}s linear infinite ${animDirection}`,
                width: `${tileWidth}px`,
              }}
            >
               {col.items.map((item, j) => {
                 const tileContent = (
                   <div 
                     className="relative group overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer"
                     style={{
                       width: `${tileWidth}px`,
                       height: `${tileHeight}px`,
                       borderRadius: `${radius}px`,
                       transform: 'translateZ(0px)', // Hardware acceleration
                     }}
                   >
                      <Image 
                        src={item.image} 
                        alt={item.title} 
                        fill
                        className={`object-cover transition-transform duration-700 ease-out ${grayscale ? 'grayscale group-hover:grayscale-0' : ''}`}
                        style={{
                          transform: 'scale(1)',
                        }}
                      />
                      
                      {/* Dim Overlay */}
                      <div 
                        className="absolute inset-0 transition-opacity duration-700"
                        style={{
                          backgroundColor: overlayColor,
                          opacity: dim,
                        }}
                      />
                      
                      {/* Title Badge */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
                         <span className="text-white font-bold text-sm tracking-wider drop-shadow-lg bg-black/50 px-4 py-1.5 rounded-full backdrop-blur-md">
                           {item.title}
                         </span>
                      </div>

                      {/* Dynamic hover styles injected via style block to support props */}
                      <style dangerouslySetInnerHTML={{__html: `
                        .group:hover img {
                          transform: scale(${1 + (parallax * 0.5)}) translateY(-${lift * 0.1}px) !important;
                        }
                        .group:hover > div:nth-child(2) {
                           opacity: ${Math.max(0, dim - fade)} !important;
                        }
                      `}} />
                   </div>
                 );

                 return item.href ? (
                   <Link href={item.href} key={j} className="block">
                     {tileContent}
                   </Link>
                 ) : (
                   <div key={j}>{tileContent}</div>
                 );
               })}
            </div>
          );
        })}
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes driftWallScroll-up {
          0% { transform: translateY(0); }
          100% { transform: translateY(-${scrollDistance}px); }
        }
        @keyframes driftWallScroll-down {
          0% { transform: translateY(-${scrollDistance}px); }
          100% { transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
