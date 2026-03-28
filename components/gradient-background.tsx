"use client"

import { GrainGradient } from "@paper-design/shaders-react"

export function GradientBackground() {
  return (
    <div className="absolute inset-0">
      <GrainGradient
        style={{ height: "100%", width: "100%" }}
        colorBack="hsl(0, 0%, 0%)"
        softness={0.5}
        intensity={0.45}
        noise={1}
        shape="corners"
        offsetX={0}
        offsetY={0}
        scale={1}
        rotation={0}
        speed={1}
        colors={["hsl(0, 0%, 100%)", "hsl(0, 0%, 0%)", "#7f7f7f4b"]}
      />
    </div>
  )
}
