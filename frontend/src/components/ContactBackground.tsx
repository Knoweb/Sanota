// @ts-nocheck
"use client";

import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

export default function ContactBackground() {
  return (
    <div className="fixed inset-0 -z-20 pointer-events-none">
      <ShaderGradientCanvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        <ShaderGradient
          animate="on"
          axesHelper="off"
          brightness={1.5}
          cAzimuthAngle={250}
          cDistance={1.5}
          cPolarAngle={140}
          cameraZoom={12.5}
          color1="#000057"
          color2="#124614"
          color3="#00cb00"
          destination="onCanvas"
          embedMode="off"
          envPreset="city"
          format="gif"
          fov={45}
          frameRate={10}
          gizmoHelper="hide"
          grain="off"
          lightType="3d"
          pixelDensity={1}
          positionX={0}
          positionY={0}
          positionZ={0}
          range="disabled"
          rangeEnd={40}
          rangeStart={0}
          reflection={0.5}
          rotationX={0}
          rotationY={0}
          rotationZ={140}
          shader="defaults"
          type="sphere"
          uAmplitude={7}
          uDensity={0.8}
          uFrequency={3.5}
          uSpeed={0.08}
          uStrength={0.4}
          uTime={0}
          wireframe={false}
        />
      </ShaderGradientCanvas>
      {/* Fallback overlay to ensure text remains readable */}
      <div className="absolute inset-0 bg-[#050B14]/60 mix-blend-multiply pointer-events-none" />
    </div>
  )
}
