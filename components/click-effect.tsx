"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ClickRipple {
  id: number
  x: number
  y: number
}

export default function ClickEffect() {
  const [ripples, setRipples] = useState<ClickRipple[]>([])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple: ClickRipple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      }

      setRipples((prev) => [...prev, newRipple])

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== newRipple.id))
      }, 600)
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={ripple.id}
            className="absolute rounded-full border-2 border-purple-400"
            initial={{
              x: ripple.x - 10,
              y: ripple.y - 10,
              width: 20,
              height: 20,
              opacity: 1,
            }}
            animate={{
              width: 100,
              height: 100,
              x: ripple.x - 50,
              y: ripple.y - 50,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
            }}
          />
        ))}
      </AnimatePresence>

      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.div
            key={`inner-${ripple.id}`}
            className="absolute rounded-full bg-purple-400/30"
            initial={{
              x: ripple.x - 5,
              y: ripple.y - 5,
              width: 10,
              height: 10,
              opacity: 0.8,
            }}
            animate={{
              width: 60,
              height: 60,
              x: ripple.x - 30,
              y: ripple.y - 30,
              opacity: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.4,
              ease: "easeOut",
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
