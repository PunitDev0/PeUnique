import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';

const PostCard = ({ post }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
        />
      </div>
      <div className="p-5">
        <Badge className="mb-2">{post.category}</Badge>
        <h3 className="text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
          <a href={post.link} target="_blank" rel="noopener noreferrer">{post.title}</a>
        </h3>
        <p 
          className="text-gray-600 text-sm mb-3 line-clamp-2"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <div className="flex items-center text-xs text-gray-500">
          <span className="flex items-center mr-3">
            <Calendar className="w-3 h-3 mr-1" />
            {post.date}
          </span>
          <span className="flex items-center">
            <Clock className="w-3 h-3 mr-1" />
            {post.readTime}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;