import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock } from 'lucide-react';

const FeaturedPost = ({ post, index }) => {
  // Only render if the index is 0 or 1
  if (index !== 0 && index !== 1) return null;

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-16 rounded-xl overflow-hidden shadow-lg">
      <div className="h-64 md:h-auto overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <div className="p-6 flex flex-col justify-center">
        <Badge className="mb-2 w-fit">{post.category}</Badge>
        <h2 className="text-2xl md:text-3xl font-bold mb-3 hover:text-blue-600 transition-colors">
          <a href={post.link} target="_blank" rel="noopener noreferrer">{post.title}</a>
        </h2>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="flex items-center mr-4">
            <Calendar className="w-4 h-4 mr-1" />
            {post.date}
          </span>
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {post.readTime}
          </span>
        </div>
        <div className="mt-2">
          <Button>Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;