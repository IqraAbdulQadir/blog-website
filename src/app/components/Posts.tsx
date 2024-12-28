'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';

interface Blog {

  slug: string;
  name: string;
  subheading: string;
  author: string;
  publishedAt: string;
  image: string;
}

const BlogPosts: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res: Blog[] = await client.fetch(
          `*[_type == 'blog']{
            name,
            subheading,
            author,
            "slug": slug.current,
            publishedAt,
            "image": poster.asset->url
          }`
        );

        setBlogs(
          res.map((blog) => ({
            name: blog.name,
            slug: blog.slug, // `slug` is now a string
            subheading: blog.subheading,
            author: blog.author,
            publishedAt: blog.publishedAt,
            image: blog.image,
          }))
        );
      } catch (error) {
        console.error('Error fetching blogs from Sanity:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div
            key={blog.slug}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            {blog.image && (
              <img
                src={blog.image}
                alt={blog.name}
                className="w-full h-48 object-cover rounded-t-lg mb-4"
              />
            )}
            <h3 className="text-xl font-bold text-[#333333] mb-4">{blog.name}</h3>
            <p className="text-[#2f4f4f] text-sm mb-4">
              <span>{blog.author}</span> | <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
            </p>
            <p className="text-[#333333]">
              {blog.subheading ? blog.subheading.slice(0, 100) : ''}...
            </p>
            <Link href={`/blog/${blog.slug}`}>
              <button className="inline-block bg-electric-green text-midnight-blue py-1 px-4 mt-2 rounded-full text-sm font-semibold hover:bg-green-600 transition duration-300">
                Read More
              </button>
            </Link>
          </div>
        ))
      ) : (
        <p className="text-center col-span-3">Loading...</p>
      )}
    </div>
  );
};

export default BlogPosts;
