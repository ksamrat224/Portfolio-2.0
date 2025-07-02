import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react'

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: 'samrat.karki@example.com',
      href: 'mailto:samrat.karki@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: 'https://maps.google.com/?q=San+Francisco,CA'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ksamrat224',
      color: 'hover:text-gray-800 dark:hover:text-gray-200'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/samratkarki',
      color: 'hover:text-blue-600'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/samratkarki',
      color: 'hover:text-blue-400'
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >
      {/* Contact Info */}
      <div className="card">
        <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
        <div className="space-y-4">
          {contactDetails.map((detail) => (
            <a
              key={detail.label}
              href={detail.href}
              target={detail.href.startsWith('http') ? '_blank' : undefined}
              rel={detail.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white transition-all">
                <detail.icon size={20} className="text-primary-600 group-hover:text-white" />
              </div>
              <div>
                <p className="font-medium">{detail.label}</p>
                <p className="text-gray-600 dark:text-gray-400 group-hover:text-primary-600 transition-colors">
                  {detail.value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="card">
        <h2 className="text-2xl font-semibold mb-6">Follow Me</h2>
        <div className="flex gap-4">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-110 ${social.color}`}
              aria-label={social.label}
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div className="card">
        <h2 className="text-2xl font-semibold mb-4">Availability</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-green-600 dark:text-green-400 font-medium">Available for new projects</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            I typically respond to messages within 24 hours. For urgent inquiries, 
            please feel free to call or mention "URGENT" in your message subject.
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="card">
        <h2 className="text-2xl font-semibold mb-6">Quick Stats</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">50+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">5+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">99%</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">24/7</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Support Available</div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactInfo