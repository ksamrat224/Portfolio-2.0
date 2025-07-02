import React, { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ChevronDown, ChevronUp, MapPin, Calendar, Award } from 'lucide-react'

const EducationCard = ({ education, index }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="card"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">
            {education.degree}
          </h3>
          <h4 className="text-lg font-medium mb-2">{education.institution}</h4>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
            <div className="flex items-center gap-1">
              <MapPin size={14} />
              <span>{education.location}</span>
            </div>
            <div className="flex items-center gap-1">
              <Calendar size={14} />
              <span>{education.period}</span>
            </div>
            {education.gpa && (
              <div className="flex items-center gap-1">
                <Award size={14} />
                <span>GPA: {education.gpa}</span>
              </div>
            )}
          </div>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          aria-label={isExpanded ? 'Collapse details' : 'Expand details'}
        >
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pt-4 border-t dark:border-gray-700">
          <h5 className="font-semibold mb-3">Achievements & Activities:</h5>
          <ul className="space-y-2">
            {education.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-primary-600 mt-1">•</span>
                <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default EducationCard