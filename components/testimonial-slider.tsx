"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "ProGamer2024",
    rating: 5,
    text: "AXLC5 completely changed my gaming experience. Undetected and smooth!",
  },
  {
    name: "EliteShooter",
    rating: 5,
    text: "Best investment I've made for gaming. The color assistant is incredible.",
  },
  {
    name: "CyberNinja",
    rating: 5,
    text: "Amazing support team and the software works flawlessly. Highly recommended!",
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-center mb-16"
        >
          What Our Users Say
        </motion.h2>

        <div className="max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="text-center bg-black/30 border border-purple-500/20 rounded-lg p-8"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xl mb-4 text-gray-300">"{testimonials[currentIndex].text}"</p>
              <p className="text-purple-400 font-bold">- {testimonials[currentIndex].name}</p>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-purple-400" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
