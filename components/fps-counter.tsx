"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function FPSCounter() {
  const [fps, setFps] = useState(60)

  useEffect(() => {
    const interval = setInterval(() => {
      setFps(Math.floor(Math.random() * 20) + 55) // Simulate 55-75 FPS
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-20 left-4 z-40 bg-black/80 border border-green-500/30 rounded-lg p-3"
    >
      <div className="text-green-400 font-mono text-sm">
        <div>FPS: {fps}</div>
        <div>Status: Online</div>
      </div>
    </motion.div>
  )
}
