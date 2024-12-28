// sanity/lib/sanityQueries.ts

import { client } from './client';

export const getAllBlogs = async () => {
  const query = '*[_type == "blog"] | order(publishedAt desc)'; // Query to get all blog posts
  const blogs = await client.fetch(query);
  return blogs;
};

export const getBlogBySlug = async (slug: string) => {
    const query = `*[_type == "blog" && slug.current == $slug][0]`;
  const blog = await client.fetch(query, { slug });
  return blog;
};
