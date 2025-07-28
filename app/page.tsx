"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Star, Shield, Menu, X, Play, DollarSign, Clock, Download, Moon, Sun } from "lucide-react"
import ParticleBackground from "@/components/particle-background"
import GlitchText from "@/components/glitch-text"
import LoadingScreen from "@/components/loading-screen"
import ProductCard from "@/components/product-card"
import TestimonialSlider from "@/components/testimonial-slider"
import FPSCounter from "@/components/fps-counter"
import CheatStatusBar from "@/components/cheat-status-bar"
import MouseTracker from "@/components/mouse-tracker"
import ClickEffect from "@/components/click-effect"

export default function AXLC5Showcase() {
  const [isLoading, setIsLoading] = useState(true)
  const [isDarkMode, setIsDarkMode] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [currentSection, setCurrentSection] = useState("home")

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  const playClickSound = () => {
    // Simulate click sound effect
    console.log("🔊 Click sound played")
  }

  const playHoverSound = () => {
    // Simulate hover sound effect
    console.log("🔊 Hover sound played")
  }

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark bg-black" : "bg-white"} text-white overflow-x-hidden`}>
      <MouseTracker />
      <ClickEffect />
      <ParticleBackground />
      <FPSCounter />
      <CheatStatusBar />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-purple-500/20"
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.div className="text-2xl font-bold" whileHover={{ scale: 1.05 }}>
            <GlitchText text="AXLC5" />
          </motion.div>

          <div className="hidden md:flex space-x-8">
            {[
              { name: "Home", id: "home" },
              { name: "Products", id: "products" },
              { name: "Status", id: "status" },
              { name: "Discord", id: "discord" },
            ].map((item) => (
              <motion.a
                key={item.name}
                href={item.id === "discord" ? "https://discord.gg/axlc5" : `#${item.id}`}
                target={item.id === "discord" ? "_blank" : "_self"}
                className="text-gray-300 hover:text-purple-400 transition-colors"
                whileHover={{ scale: 1.1, color: "#a855f7" }}
                onHoverStart={playHoverSound}
                onClick={() => {
                  if (item.id !== "discord") {
                    setCurrentSection(item.id)
                    playClickSound()
                  }
                }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="text-purple-400 hover:text-purple-300"
            >
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <Button
              variant="outline"
              onClick={() => {
                setShowRegisterModal(true)
                playClickSound()
              }}
              className="border-purple-500/30 text-purple-400 hover:bg-purple-500/10"
            >
              Register
            </Button>

            <Button
              onClick={() => {
                setShowLoginModal(true)
                playClickSound()
              }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              Login
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-md z-40 p-6 pt-20"
          >
            {[
              { name: "Home", id: "home" },
              { name: "Products", id: "products" },
              { name: "Status", id: "status" },
              { name: "Discord", id: "discord" },
            ].map((item) => (
              <motion.a
                key={item.name}
                href={item.id === "discord" ? "https://discord.gg/axlc5" : `#${item.id}`}
                target={item.id === "discord" ? "_blank" : "_self"}
                className="block py-3 text-gray-300 hover:text-purple-400"
                whileHover={{ x: 10 }}
                onClick={() => {
                  if (item.id !== "discord") {
                    setCurrentSection(item.id)
                  }
                  setIsMobileMenuOpen(false)
                }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              className="block py-3 text-gray-300 hover:text-purple-400 w-full text-left"
              whileHover={{ x: 10 }}
              onClick={() => {
                setShowRegisterModal(true)
                setIsMobileMenuOpen(false)
              }}
            >
              Register
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              <GlitchText text="WELCOME TO AXLC5" />
            </h1>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">COMMUNITY</h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              High Performance – Safe Operation – Advanced Features
            </p>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                onClick={playClickSound}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-xl px-8 py-4"
              >
                <Play className="mr-2" />
                Explore Collection
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badge */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="py-12 text-center"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full px-6 py-3 border border-purple-500/30"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="text-yellow-400 fill-current" />
            <span className="text-lg">Trusted by customers with an average rating of 4.95</span>
          </motion.div>
        </div>
      </motion.section>

      {/* Product Showcase */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-center mb-16"
          >
            <GlitchText text="PRODUCTS" />
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProductCard
              title="Color Assistant"
              description="High-quality Color Assistant"
              price="$20"
              onHover={playHoverSound}
              onClick={playClickSound}
            />
            <ProductCard
              title="Aim Enhancement"
              description="Professional aim assistance"
              price="$35"
              onHover={playHoverSound}
              onClick={playClickSound}
            />
            <ProductCard
              title="ESP Vision"
              description="Advanced visual enhancements"
              price="$45"
              onHover={playHoverSound}
              onClick={playClickSound}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-center mb-16"
          >
            Why Choose Us
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { icon: Shield, title: "Trusted Developers", desc: "Verified and secure" },
              { icon: DollarSign, title: "Hot Prices", desc: "Best value guaranteed" },
              { icon: Clock, title: "24/7 Support", desc: "Always here to help" },
              { icon: Download, title: "Easy to Buy", desc: "Simple purchase process" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="text-center p-6 rounded-lg bg-black/30 border border-purple-500/20"
              >
                <item.icon className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center text-xl text-purple-300 font-semibold"
          >
            "Unmatched security, premium quality, and cheats that are super easy to use."
          </motion.p>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSlider />

      {/* Crypto Payment */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-6">Payment Methods</h3>
          <div className="flex justify-center space-x-8">
            {["BTC", "ETH", "USDT"].map((crypto) => (
              <motion.div
                key={crypto}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center font-bold"
              >
                {crypto}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-center mb-16"
          >
            FAQ
          </motion.h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              { q: "Is AXLC5 safe to use?", a: "Yes, our software is completely undetected and safe." },
              { q: "How do I install the software?", a: "Simple download and installation process with full support." },
              { q: "What games are supported?", a: "We support all major FPS games with regular updates." },
              { q: "Do you offer refunds?", a: "Yes, we offer a 24-hour refund policy." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-black/30 border border-purple-500/20 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-2 text-purple-300">{item.q}</h3>
                <p className="text-gray-400">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 border-t border-purple-500/20 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                <GlitchText text="AXLC5" />
              </h3>
              <p className="text-gray-400">Premium gaming enhancement software</p>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {["Home", "Status", "Terms", "Privacy", "Refund"].map((link) => (
                  <a key={link} href="#" className="block text-gray-400 hover:text-purple-400">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Partners</h4>
              <a href="#" className="text-purple-400 hover:text-purple-300">
                CheatGlobal
              </a>
            </div>
          </div>

          <div className="border-t border-purple-500/20 pt-8 text-center text-gray-400">
            <p>© 2025 AXLC5. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      <AnimatePresence>
        {showLoginModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowLoginModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-black/90 border border-purple-500/30 rounded-lg p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-6 text-center">
                <GlitchText text="LOGIN" />
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full p-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400"
                />
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">Login</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Register Modal */}
      <AnimatePresence>
        {showRegisterModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowRegisterModal(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-black/90 border border-purple-500/30 rounded-lg p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-6 text-center">
                <GlitchText text="REGISTER" />
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full p-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full p-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full p-3 bg-black/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-400"
                />
                <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600">Create Account</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Status Section - yeni ekle */}
      <section id="status" className="py-20 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-center mb-16"
          >
            <GlitchText text="STATUS" />
          </motion.h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-black/30 border border-green-500/30 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-green-400">System Status</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>API Server</span>
                    <span className="text-green-400">Online</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Authentication</span>
                    <span className="text-green-400">Operational</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Download Server</span>
                    <span className="text-green-400">Online</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-black/30 border border-purple-500/30 rounded-lg p-6"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-400">Recent Updates</h3>
                <div className="space-y-3 text-sm">
                  <div className="border-l-2 border-purple-500 pl-3">
                    <p className="text-purple-300">v2.1.5 Released</p>
                    <p className="text-gray-400">Enhanced detection bypass</p>
                  </div>
                  <div className="border-l-2 border-blue-500 pl-3">
                    <p className="text-blue-300">Server Maintenance</p>
                    <p className="text-gray-400">Scheduled for tonight</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
