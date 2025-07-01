import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code, Database, Globe } from 'lucide-react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Expert in React, Redux, and modern JavaScript frameworks with focus on user experience.'
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Proficient in Node.js, Express, and database management with PostgreSQL and Prisma.'
    },
    {
      icon: Globe,
      title: 'Full Stack Solutions',
      description: 'End-to-end web application development with modern tools and best practices.'
    }
  ]

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I'm a passionate MERN Stack Developer with a love for creating efficient, 
            scalable, and user-friendly web applications. With expertise in modern 
            technologies and a keen eye for design, I bring ideas to life through code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="card text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                <feature.icon size={32} className="text-primary-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About