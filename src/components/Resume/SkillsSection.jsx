import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const SkillsSection = ({ skills }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skillCategories = [
    { title: 'Frontend', skills: skills.frontend, color: 'blue' },
    { title: 'Backend', skills: skills.backend, color: 'green' },
    { title: 'Tools & Others', skills: skills.tools, color: 'purple' }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-600',
      green: 'bg-green-600',
      purple: 'bg-purple-600'
    }
    return colors[color] || 'bg-primary-600'
  }

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {skillCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
          className="card"
        >
          <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
          <div className="space-y-4">
            {category.skills.map((skill, skillIndex) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium">{skill.name}</span>
                  <span className="text-sm text-gray-500">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <motion.div
                    className={`h-2 rounded-full ${getColorClasses(category.color)}`}
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ 
                      duration: 1, 
                      delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                      ease: "easeOut"
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default SkillsSection