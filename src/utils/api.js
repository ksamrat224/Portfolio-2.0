// Mock API functions for development
export const api = {
  // Contact form submission
  submitContactForm: async (formData) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Simulate random success/failure for demo
    if (Math.random() > 0.1) {
      return { success: true, message: 'Message sent successfully!' }
    } else {
      throw new Error('Failed to send message')
    }
  },

  // Blog posts
  getBlogPosts: async (page = 1, limit = 10) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    // Return mock data - in real app, this would fetch from API
    return {
      posts: [],
      totalPages: 1,
      currentPage: page
    }
  },

  // Project data
  getProjects: async () => {
    await new Promise(resolve => setTimeout(resolve, 800))
    // Return mock data
    return []
  },

  // Newsletter subscription
  subscribeNewsletter: async (email) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return { success: true, message: 'Subscribed successfully!' }
  }
}