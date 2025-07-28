"use client"

import { motion } from "framer-motion"
import { Activity, Shield, Zap } from "lucide-react"

export default function CheatStatusBar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-20 right-4 z-40 bg-black/80 border border-purple-500/30 rounded-lg p-3"
    >
      <div className="flex items-center space-x-4 text-sm">
        <div className="flex items-center space-x-1 text-green-400">
          <Shield className="w-4 h-4" />
          <span>Secure</span>
        </div>
        <div className="flex items-center space-x-1 text-blue-400">
          <Activity className="w-4 h-4" />
          <span>Active</span>
        </div>
        <div className="flex items-center space-x-1 text-purple-400">
          <Zap className="w-4 h-4" />
          <span>Enhanced</span>
        </div>
      </div>
    </motion.div>
  )
}
