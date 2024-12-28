// import React from 'react'
// import FeaturedSection from '../components/Featured'

// export default function Blog() {
//   return (
//     <main className="bg-[#f0f8ff] py-12 min-h-screen flex flex-col">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#2f4f4f]">
//           AI Insights Blog Posts
//         </h2>
//         <FeaturedSection/>
//         </div>
//         </main>
//   )
// }

// src/app/blog/page.tsx

import { getAllBlogs } from '@/sanity/lib/sanityQueries';
import Link from 'next/link';

interface Blog {
  slug: {
    current: string;
  };
  name: string;
  subheading: string;
}

const BlogPage = async () => {
  const blogs: Blog[] = await getAllBlogs(); // Specify the type here

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog: Blog) => ( // Use the Blog type here
          <div key={blog.slug.current} className="border rounded-lg p-4">
            <h2 className="text-2xl font-semibold">
              <Link href={`/blog/${blog.slug.current}`}>{blog.name}</Link>
            </h2>
            <p>{blog.subheading}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
