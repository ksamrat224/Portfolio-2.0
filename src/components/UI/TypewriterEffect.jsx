import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TypewriterEffect = ({ words, speed = 100, deleteSpeed = 50, pauseTime = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[currentWordIndex]
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setCurrentText(currentWord.substring(0, currentText.length + 1))
        
        if (currentText === currentWord) {
          // Word completed, start deleting after pause
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        // Deleting
        setCurrentText(currentWord.substring(0, currentText.length - 1))
        
        if (currentText === '') {
          setIsDeleting(false)
          setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length)
        }
      }
    }, isDeleting ? deleteSpeed : speed)

    return () => clearTimeout(timeout)
  }, [currentText, isDeleting, currentWordIndex, words, speed, deleteSpeed, pauseTime])

  return (
    <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400 min-h-[1.2em] flex items-center justify-center">
      <span>{currentText}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1 text-current"
      >
        |
      </motion.span>
    </div>
  )
}

export default TypewriterEffect