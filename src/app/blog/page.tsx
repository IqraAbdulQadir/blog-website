import { getAllBlogs } from '@/sanity/lib/sanityQueries';
import Link from 'next/link';

interface Blog {
  slug: {
    current: string;
  };
  name: string;
  subheading: string;
  author: string;
  publishedAt: string;
  image: string;
}

const BlogPage = async () => {
  const blogs: Blog[] = await getAllBlogs(); // Specify the type here

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#2f4f4f]">
        Blog Posts
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog: Blog) => (
  <div key={blog.slug.current} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
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
    <Link href={`/blog/${blog.slug.current}`}>
      <button className="inline-block bg-electric-green text-midnight-blue py-1 px-4 mt-2 rounded-full text-sm font-semibold hover:bg-green-600 transition duration-300">
        Read More
      </button>
    </Link>
  </div>
))}

      </div>
    </div>
  );
};


export default BlogPage;