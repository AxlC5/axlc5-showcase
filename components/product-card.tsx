"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Gamepad2 } from "lucide-react"

interface ProductCardProps {
  title: string
  description: string
  price: string
  onHover?: () => void
  onClick?: () => void
}

export default function ProductCard({ title, description, price, onHover, onClick }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        y: -10,
        boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)",
      }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={onHover}
      className="group"
    >
      <Card className="bg-black/30 border-purple-500/30 hover:border-purple-400/50 transition-all duration-300">
        <CardContent className="p-6">
          <motion.div
            animate={{
              rotateY: [0, 10, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4 mx-auto"
          >
            <Gamepad2 className="w-8 h-8 text-white" />
          </motion.div>

          <h3 className="text-xl font-bold mb-2 text-center group-hover:text-purple-300 transition-colors">{title}</h3>
          <p className="text-gray-400 text-center mb-4">{description}</p>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-400 mb-4">{price}</p>
            <Button
              onClick={() => {
                onClick?.()
                // Scroll to products section
                document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })
              }}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
