import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, CheckCircle } from 'lucide-react'

const DownloadButton = () => {
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloaded, setDownloaded] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    
    try {
      // Simulate download delay
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Create a temporary link to trigger download
      const link = document.createElement('a')
      link.href = '/resume-samrat-karki.pdf' // This should be placed in public folder
      link.download = 'Samrat_Karki_Resume.pdf'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      setDownloaded(true)
      setTimeout(() => setDownloaded(false), 3000)
    } catch (error) {
      console.error('Download failed:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <motion.button
      onClick={handleDownload}
      disabled={isDownloading}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
        downloaded
          ? 'bg-green-600 text-white'
          : 'btn-primary'
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {isDownloading ? (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
          />
          Downloading...
        </>
      ) : downloaded ? (
        <>
          <CheckCircle size={20} />
          Downloaded!
        </>
      ) : (
        <>
          <Download size={20} />
          Download Resume
        </>
      )}
    </motion.button>
  )
}

export default DownloadButton