'use client';

import React, { useState } from 'react';

interface Comment {
  name: string;
  message: string;
}

const BlogComments: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [form, setForm] = useState({ name: '', message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.name && form.message) {
      setComments([...comments, { name: form.name, message: form.message }]);
      setForm({ name: '', message: '' });
    }
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Comments</h2>

      {/* Display Comments */}
      {comments.length > 0 ? (
        <ul className="space-y-4 mb-6">
          {comments.map((comment, index) => (
            <li key={index} className="p-4 border rounded-lg shadow-sm">
              <p className="font-bold">{comment.name}</p>
              <p>{comment.message}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 mb-6">No comments yet. Be the first to comment!</p>
      )}

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Your Comment
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            value={form.message}
            onChange={handleInputChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Submit Comment
        </button>
      </form>
    </section>
  );
};

export default BlogComments;
