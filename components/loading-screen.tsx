"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import GlitchText from "./glitch-text"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        return prev + Math.random() * 10
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
          }}
          className="text-6xl font-bold mb-8"
        >
          <GlitchText text="AXLC5" />
        </motion.div>

        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden mb-4">
          <motion.div
            className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        <p className="text-purple-400">Loading... {Math.round(progress)}%</p>
      </div>
    </motion.div>
  )
}
