

import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-midnight-blue to-bright-cyan text-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="relative z-10 max-w-screen-lg mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
          Welcome to AI Insights
        </h1>
        <p className="text-lg sm:text-xl lg:text-2xl mb-6">
          Explore the latest advancements in Artificial Intelligence. Discover tutorials, trends, and in-depth articles.
        </p>
        <Link href="/blog">
          <button className="inline-block bg-electric-green text-midnight-blue py-3 px-8 rounded-full text-xl font-semibold hover:bg-green-600 transition duration-300">
            Read the Blog
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
