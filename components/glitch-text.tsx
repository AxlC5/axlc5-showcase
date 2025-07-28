"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface GlitchTextProps {
  text: string
  className?: string
}

export default function GlitchText({ text, className = "" }: GlitchTextProps) {
  const [glitchText, setGlitchText] = useState(text)

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() < 0.1) {
        const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?"
        const glitched = text
          .split("")
          .map((char) => (Math.random() < 0.1 ? chars[Math.floor(Math.random() * chars.length)] : char))
          .join("")

        setGlitchText(glitched)

        setTimeout(() => setGlitchText(text), 100)
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [text])

  return (
    <motion.span
      className={`inline-block ${className}`}
      animate={{
        textShadow: ["0 0 0 transparent", "2px 0 0 #ff00ff, -2px 0 0 #00ffff", "0 0 0 transparent"],
      }}
      transition={{
        duration: 0.1,
        repeat: Number.POSITIVE_INFINITY,
        repeatDelay: 3,
      }}
    >
      {glitchText}
    </motion.span>
  )
}
