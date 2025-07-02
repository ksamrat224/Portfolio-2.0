import React from 'react'
import { Search } from 'lucide-react'

const SearchFilter = ({ searchTerm, setSearchTerm, selectedTag, setSelectedTag, tags }) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
      {/* Search Input */}
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <input
          type="text"
          placeholder="Search blog posts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 transition-colors"
        />
      </div>

      {/* Tag Filter */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              selectedTag === tag
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-600'
            }`}
          >
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </button>
        ))}
      </div>
    </div>
  )
}

export default SearchFilter