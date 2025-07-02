import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const BlogCard = ({ post, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="card group hover:shadow-xl transition-all duration-300"
    >
      {/* Featured Image */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4">
          <div className="flex items-center space-x-1">
            <Calendar size={14} />
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span>{post.readTime}</span>
          </div>
        </div>

        <h2 className="text-xl font-semibold group-hover:text-primary-600 transition-colors line-clamp-2">
          {post.title}
        </h2>

        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3">
          {post.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Read More Link */}
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:translate-x-1 transition-all duration-200"
        >
          Read More
          <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </motion.article>
  )
}

export default BlogCard