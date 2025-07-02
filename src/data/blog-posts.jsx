export const blogPosts = [
  {
    id: 1,
    title: 'Building Modern React Applications with TypeScript',
    slug: 'building-modern-react-applications-typescript',
    excerpt: 'Learn how to set up and build scalable React applications using TypeScript, covering best practices and advanced patterns.',
    content: `# Building Modern React Applications with TypeScript

TypeScript has become an essential tool for React developers looking to build robust and maintainable applications. In this comprehensive guide, we'll explore how to set up and structure a modern React application with TypeScript.

## Why TypeScript with React?

TypeScript brings several advantages to React development:

- **Type Safety**: Catch errors at compile time rather than runtime
- **Better IDE Support**: Enhanced autocomplete and refactoring capabilities
- **Improved Documentation**: Types serve as documentation for your components
- **Enhanced Collaboration**: Clear interfaces make team collaboration easier

\`\`\`typescript
interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger'
  size: 'sm' | 'md' | 'lg'
  onClick: () => void
  children: React.ReactNode
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ 
  variant, 
  size, 
  onClick, 
  children, 
  disabled = false 
}) => {
  return (
    <button
      className={\`btn btn-\${variant} btn-\${size}\`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
\`\`\`

## Setting Up Your Project

Start by creating a new React project with TypeScript:

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
\`\`\`

This gives you a solid foundation with TypeScript configured out of the box.

## Best Practices

1. **Define Clear Interfaces**: Always define props interfaces for your components
2. **Use Generic Types**: Leverage generics for reusable components
3. **Strict Mode**: Enable strict mode in your tsconfig.json
4. **Type Your Hooks**: Properly type custom hooks and their return values

TypeScript with React is a powerful combination that will make your development experience more enjoyable and your applications more reliable.`,
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'React',
    tags: ['react', 'typescript', 'frontend', 'development'],
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=600&fit=crop'
  },
  {
    id: 2,
    title: 'Mastering CSS Grid: A Complete Guide',
    slug: 'mastering-css-grid-complete-guide',
    excerpt: 'Deep dive into CSS Grid layout system with practical examples and real-world use cases for modern web development.',
    content: `# Mastering CSS Grid: A Complete Guide

CSS Grid is one of the most powerful layout systems available in CSS. It allows you to create complex, responsive layouts with ease and precision.

## Grid Basics

CSS Grid works by defining a grid container and grid items:

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 200px 200px;
  gap: 20px;
}

.grid-item {
  background-color: #f0f0f0;
  padding: 20px;
  text-align: center;
}
\`\`\`

## Advanced Techniques

### Grid Template Areas

\`\`\`css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main main"
    "footer footer footer";
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
\`\`\`

### Responsive Grid

\`\`\`css
.responsive-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}
\`\`\`

CSS Grid opens up endless possibilities for creating beautiful, responsive layouts. Master these concepts and you'll be able to tackle any layout challenge!`,
    date: '2024-01-10',
    readTime: '12 min read',
    category: 'CSS',
    tags: ['css', 'grid', 'layout', 'responsive'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop'
  },
  {
    id: 3,
    title: 'Node.js Performance Optimization Techniques',
    slug: 'nodejs-performance-optimization-techniques',
    excerpt: 'Learn essential techniques to optimize your Node.js applications for better performance and scalability.',
    content: `# Node.js Performance Optimization Techniques

Performance is crucial for Node.js applications, especially when dealing with high traffic and complex operations. Here are proven techniques to optimize your Node.js applications.

## 1. Use Clustering

Take advantage of multi-core systems:

\`\`\`javascript
const cluster = require('cluster')
const numCPUs = require('os').cpus().length

if (cluster.isMaster) {
  console.log(\`Master \${process.pid} is running\`)

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(\`Worker \${worker.process.pid} died\`)
  })
} else {
  // Workers can share any TCP connection
  require('./app.js')
  console.log(\`Worker \${process.pid} started\`)
}
\`\`\`

## 2. Implement Caching

Use Redis for caching frequently accessed data:

\`\`\`javascript
const redis = require('redis')
const client = redis.createClient()

async function getCachedData(key) {
  try {
    const cachedData = await client.get(key)
    if (cachedData) {
      return JSON.parse(cachedData)
    }
    return null
  } catch (error) {
    console.error('Cache error:', error)
    return null
  }
}

async function setCachedData(key, data, expireTime = 3600) {
  try {
    await client.setex(key, expireTime, JSON.stringify(data))
  } catch (error) {
    console.error('Cache set error:', error)
  }
}
\`\`\`

## 3. Database Optimization

- Use connection pooling
- Implement proper indexing
- Optimize queries
- Use database-specific optimizations

## 4. Memory Management

Monitor and optimize memory usage to prevent memory leaks and improve garbage collection performance.

These techniques will significantly improve your Node.js application performance and user experience.`,
    date: '2024-01-05',
    readTime: '10 min read',
    category: 'Backend',
    tags: ['nodejs', 'performance', 'backend', 'optimization'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop'
  }
]