import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Reply, Heart, MoreVertical } from 'lucide-react'

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([
    {
      id: 1,
      author: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      content: 'Great article! This really helped me understand the concepts better.',
      date: '2024-01-16',
      likes: 5,
      replies: [
        {
          id: 2,
          author: 'Samrat Karki',
          avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
          content: 'Thanks John! I\'m glad you found it helpful.',
          date: '2024-01-16',
          likes: 2,
          isAuthor: true
        }
      ]
    },
    {
      id: 3,
      author: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b332c3b1?w=40&h=40&fit=crop&crop=face',
      content: 'Could you write a follow-up article about state management patterns?',
      date: '2024-01-17',
      likes: 3,
      replies: []
    }
  ])

  const [newComment, setNewComment] = useState('')
  const [replyingTo, setReplyingTo] = useState(null)
  const [replyContent, setReplyContent] = useState('')

  const handleSubmitComment = (e) => {
    e.preventDefault()
    if (!newComment.trim()) return

    const comment = {
      id: Date.now(),
      author: 'You',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face',
      content: newComment,
      date: new Date().toISOString().split('T')[0],
      likes: 0,
      replies: []
    }

    setComments([...comments, comment])
    setNewComment('')
  }

  const handleSubmitReply = (e, commentId) => {
    e.preventDefault()
    if (!replyContent.trim()) return

    const reply = {
      id: Date.now(),
      author: 'You',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face',
      content: replyContent,
      date: new Date().toISOString().split('T')[0],
      likes: 0
    }

    setComments(comments.map(comment => 
      comment.id === commentId 
        ? { ...comment, replies: [...comment.replies, reply] }
        : comment
    ))
    setReplyContent('')
    setReplyingTo(null)
  }

  const toggleLike = (commentId, isReply = false, parentId = null) => {
    if (isReply) {
      setComments(comments.map(comment => 
        comment.id === parentId
          ? {
              ...comment,
              replies: comment.replies.map(reply =>
                reply.id === commentId
                  ? { ...reply, likes: reply.likes + 1 }
                  : reply
              )
            }
          : comment
      ))
    } else {
      setComments(comments.map(comment =>
        comment.id === commentId
          ? { ...comment, likes: comment.likes + 1 }
          : comment
      ))
    }
  }

  return (
    <div className="border-t dark:border-gray-700 pt-8">
      <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <MessageCircle size={24} />
        Comments ({comments.length})
      </h3>

      {/* Comment Form */}
      <form onSubmit={handleSubmitComment} className="mb-8">
        <div className="flex gap-4">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&crop=face"
            alt="Your avatar"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts..."
              className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 resize-none"
              rows="3"
            />
            <div className="flex justify-end mt-2">
              <button
                type="submit"
                disabled={!newComment.trim()}
                className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Post Comment
              </button>
            </div>
          </div>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <motion.div
            key={comment.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4"
          >
            {/* Comment Header */}
            <div className="flex items-start gap-3 mb-3">
              <img
                src={comment.avatar}
                alt={comment.author}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-semibold">
                    {comment.author}
                    {comment.isAuthor && (
                      <span className="ml-2 px-2 py-1 bg-primary-600 text-white text-xs rounded-full">
                        Author
                      </span>
                    )}
                  </h4>
                  <span className="text-sm text-gray-500">
                    {new Date(comment.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 mb-3">
                  {comment.content}
                </p>
                
                {/* Comment Actions */}
                <div className="flex items-center gap-4 text-sm">
                  <button
                    onClick={() => toggleLike(comment.id)}
                    className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors"
                  >
                    <Heart size={16} />
                    <span>{comment.likes}</span>
                  </button>
                  <button
                    onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                    className="flex items-center gap-1 text-gray-500 hover:text-primary-600 transition-colors"
                  >
                    <Reply size={16} />
                    <span>Reply</span>
                  </button>
                </div>
              </div>
              
              <button className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors">
                <MoreVertical size={16} />
              </button>
            </div>

            {/* Reply Form */}
            {replyingTo === comment.id && (
              <form onSubmit={(e) => handleSubmitReply(e, comment.id)} className="ml-13 mt-4">
                <div className="flex gap-3">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=32&h=32&fit=crop&crop=face"
                    alt="Your avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex-1">
                    <textarea
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      placeholder={`Reply to ${comment.author}...`}
                      className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 resize-none"
                      rows="2"
                    />
                    <div className="flex justify-end gap-2 mt-2">
                      <button
                        type="button"
                        onClick={() => setReplyingTo(null)}
                        className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={!replyContent.trim()}
                        className="px-3 py-1 bg-primary-600 text-white text-sm rounded disabled:opacity-50"
                      >
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            )}

            {/* Replies */}
            {comment.replies.length > 0 && (
              <div className="ml-13 mt-4 space-y-4">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="flex items-start gap-3">
                    <img
                      src={reply.avatar}
                      alt={reply.author}
                      className="w-8 h-8 rounded-full"
                    />
                    <div className="flex-1 bg-white dark:bg-gray-700 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <h5 className="font-medium text-sm">
                          {reply.author}
                          {reply.isAuthor && (
                            <span className="ml-2 px-2 py-1 bg-primary-600 text-white text-xs rounded-full">
                              Author
                            </span>
                          )}
                        </h5>
                        <span className="text-xs text-gray-500">
                          {new Date(reply.date).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                        {reply.content}
                      </p>
                      <button
                        onClick={() => toggleLike(reply.id, true, comment.id)}
                        className="flex items-center gap-1 text-xs text-gray-500 hover:text-red-500 transition-colors"
                      >
                        <Heart size={12} />
                        <span>{reply.likes}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default CommentSection