import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import BlogCard from '../components/Blog/BlogCard'
import SearchFilter from '../components/Blog/SearchFilter'
import { blogPosts } from '../data/blog-posts'

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState('all')

  const allTags = useMemo(() => {
    const tags = blogPosts.flatMap(post => post.tags)
    return ['all', ...new Set(tags)]
  }, [])

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesTag = selectedTag === 'all' || post.tags.includes(selectedTag)
      return matchesSearch && matchesTag
    })
  }, [searchTerm, selectedTag])

  return (
    <div className="min-h-screen pt-20">
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Thoughts, tutorials, and insights about web development, technology, and my journey as a developer.
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <SearchFilter
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedTag={selectedTag}
              setSelectedTag={setSelectedTag}
              tags={allTags}
            />
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </motion.div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No blog posts found matching your criteria.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Blog