"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function MouseTracker() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Add to trail
      setTrail((prev) => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }]
        return newTrail.slice(-10) // Keep only last 10 positions
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    // Clean up old trail points
    const interval = setInterval(() => {
      setTrail((prev) => prev.filter((point) => Date.now() - point.id < 500))
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Mouse cursor glow */}
      <motion.div
        className="fixed pointer-events-none z-50 w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-50 blur-sm"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Trail effect */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed pointer-events-none z-40 w-2 h-2 rounded-full bg-purple-400"
          initial={{
            x: point.x - 4,
            y: point.y - 4,
            opacity: 0.8,
            scale: 1,
          }}
          animate={{
            opacity: 0,
            scale: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
        />
      ))}
    </>
  )
}
