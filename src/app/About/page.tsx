// src/app/about/page.tsx

import React from 'react';

const About: React.FC = () => {
  return (
    <main className="bg-[#f0f8ff] py-12 min-h-screen flex flex-col">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-[#2f4f4f]">
          About AI Insights
        </h1>
        <p className="text-lg md:text-xl text-center mb-6">
          AI Insights is your go-to source for the latest advancements in Artificial Intelligence. 
          Our mission is to provide insightful articles, tutorials, and trends that help you stay 
          informed and inspired in the rapidly evolving world of AI.
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#2f4f4f]">
          Our Vision
        </h2>
        <p className="text-lg md:text-xl text-center mb-6">
          We envision a world where AI technology is accessible to everyone, empowering individuals 
          and organizations to harness its potential for innovation and growth.
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-[#2f4f4f]">
          Join Us
        </h2>
        <p className="text-lg md:text-xl text-center mb-6">
          Join us on this exciting journey as we explore the endless possibilities of AI. 
          Whether you are a beginner or an expert, there is something for everyone at AI Insights.
        </p>
      </div>
    </main>
  );
};

export default About;