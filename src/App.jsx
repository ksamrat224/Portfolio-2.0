import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import ScrollToTop from './components/UI/ScrollToTop'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import { useTheme } from './contexts/ThemeContext'
import { useScrollToTop } from './hooks/useScrollToTop'

// 404 Not Found Component
const NotFound = () => {
  return (
    <div className="min-h-screen pt-20 flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            The page you're looking for doesn't exist.
          </p>
          <a
            href="/"
            className="btn-primary"
          >
            Go Home
          </a>
        </motion.div>
      </div>
    </div>
  )
}

function App() {
  const { theme } = useTheme()
  useScrollToTop()

  return (
    <div className={theme}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Navbar />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>
        <Footer />
        <ScrollToTop />
      </div>
    </div>
  )
}

export default App