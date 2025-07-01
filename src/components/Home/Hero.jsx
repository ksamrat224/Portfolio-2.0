import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import TypewriterEffect from '../UI/TypewriterEffect'
import AnimatedBackground from '../UI/AnimatedBackground'

const Hero = () => {
  const skills = ['React', 'Redux', 'Tailwind', 'Node.js', 'Prisma', 'PostgreSQL']

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100
      }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-4xl mx-auto px-4"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
            Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent"
        >
          Samrat Karki
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-8"
        >
          MERN Stack Developer
        </motion.h2>

        <motion.div variants={itemVariants} className="mb-8">
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-4">
            Specialized in
          </p>
          <div className="h-8">
            <TypewriterEffect words={skills} />
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#about"
            className="btn-primary"
          >
            Learn More About Me
          </a>
          <a
            href="/contact"
            className="btn-secondary"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block"
          >
            <ChevronDown size={32} className="text-gray-400" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero