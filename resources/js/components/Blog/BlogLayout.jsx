
import React from 'react';
import { Button } from '../ui/button';



const BlogLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
        <header className="py-16 md:py-24 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Welcome to PeUniqueBlog</h1>
        <p className="text-xl text-gray-600 mb-8">Insights and tips about web development, programming, and tech trends.</p>
        <div className="flex justify-center gap-4">
          <Button>Latest Posts</Button>
          <Button variant="outline">Subscribe</Button>
        </div>
      </div>
    </header>
      <main className="max-w-7xl mx-auto px-4 pb-12">
        {children}
      </main>
     
    </div>
  );
};

export default BlogLayout;