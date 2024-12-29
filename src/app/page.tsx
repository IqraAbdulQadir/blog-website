import React from 'react';
import HeroSection from './components/Hero';
import BlogPage from './blog/page';

export default async function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header>
        <HeroSection />
      </header>

      {/* Main content section */}
      <main className="flex-grow">
        <section className="bg-[#f0f8ff] py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#2f4f4f]">
              Featured 
            </h2>
            <BlogPage/>
          </div>
        </section>
      </main>

     
    </div>
  );
}
