"use client"

import { useState, useEffect } from "react"
import { GradientBackground } from "@/components/gradient-background"
import { Portfolio } from "@/components/portfolio"
import Image from "next/image"

export default function Page() {
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [showPortfolio, setShowPortfolio] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleClick = () => {
    if (isTransitioning || showPortfolio) return
    setIsTransitioning(true)
    
    setTimeout(() => {
      setShowPortfolio(true)
    }, 1200)
  }

  if (!mounted) {
    return <div className="min-h-screen bg-black" />
  }

  return (
    <main className="relative min-h-screen bg-black">
      {/* Intro Screen */}
      {!showPortfolio && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center cursor-pointer"
          onClick={handleClick}
        >
          {/* Gradient Background */}
          <div
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <GradientBackground />
          </div>

          {/* Logo */}
          <div
            className={`relative z-10 flex flex-col items-center transition-all duration-1000 ease-out ${
              isTransitioning ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
          >
            <img
              src="/logo.png"
              alt="hilarión"
              className="w-[280px] md:w-[400px] h-auto drop-shadow-2xl"
            />
            <p className="text-white/60 text-center text-sm mt-8">
              click anywhere to enter
            </p>
          </div>

          {/* Footer */}
          <div className="absolute bottom-6 text-center text-xs text-white/50 px-4">
            <p>Made by Z Studios with the help of hilarión</p>
            <p className="mt-1">This website is in beta</p>
          </div>
        </div>
      )}

      {/* Portfolio */}
      <div
        className={`transition-opacity duration-700 ${
          showPortfolio ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Portfolio />
      </div>
    </main>
  )
}