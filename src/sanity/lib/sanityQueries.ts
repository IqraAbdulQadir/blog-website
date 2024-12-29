// sanity/lib/sanityQueries.ts

import { client } from './client';
import imageUrlBuilder from '@sanity/image-url';

const builder = imageUrlBuilder(client);

// Helper function to generate image URLs
export const urlFor = (source: any) => builder.image(source);

export const getAllBlogs = async () => {
  const query = `
    *[_type == "blog"] | order(publishedAt desc) {
      name,
      subheading,
      author,
      publishedAt,
      poster,
      slug
    }
  `; // Query to get all blog posts with necessary fields
  const blogs = await client.fetch(query);

  // Map blogs to include the image URL
  return blogs.map((blog: any) => ({
    ...blog,
    image: blog.poster ? urlFor(blog.poster).url() : null,
  }));
};

export const getBlogBySlug = async (slug: string) => {
  const query = `
    *[_type == "blog" && slug.current == $slug][0] {
      name,
      subheading,
      author,
      publishedAt,
      poster,
      slug,
      content
    }
  `;
  const blog = await client.fetch(query, { slug });

  // Add the image URL
  return {
    ...blog,
    image: blog?.poster ? urlFor(blog.poster).url() : null,
  };
};

