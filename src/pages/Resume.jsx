import React from 'react'
import { motion } from 'framer-motion'
import EducationCard from '../components/Resume/EducationCard'
import ExperienceCard from '../components/Resume/ExperienceCard'
import SkillsSection from '../components/Resume/SkillsSection'
import DownloadButton from '../components/Resume/DownloadButton'
import { resumeData } from '../data/resume-data'

const Resume = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resume</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
              My professional journey, education, and technical expertise in web development.
            </p>
            <DownloadButton />
          </motion.div>

          {/* Experience Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
            <div className="space-y-6">
              {resumeData.experience.map((job, index) => (
                <ExperienceCard key={index} job={job} index={index} />
              ))}
            </div>
          </motion.section>

          {/* Education Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
            <div className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <EducationCard key={index} education={edu} index={index} />
              ))}
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
            <SkillsSection skills={resumeData.skills} />
          </motion.section>
        </div>
      </div>
    </div>
  )
}

export default Resume