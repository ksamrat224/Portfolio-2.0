import React from 'react'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/samratkarki', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/samratkarki', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:samrat@example.com', label: 'Email' },
  ]

  return (
    <footer className="bg-gray-50 dark:bg-gray-800 border-t dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-xl">Samrat Karki</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              MERN Stack Developer passionate about creating amazing web experiences
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors">
                About
              </a>
              <a href="#projects" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors">
                Projects
              </a>
              <a href="#blog" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors">
                Blog
              </a>
              <a href="#contact" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t dark:border-gray-700 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center justify-center">
            Made with <Heart className="mx-1 text-red-500" size={16} /> by Samrat Karki
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer