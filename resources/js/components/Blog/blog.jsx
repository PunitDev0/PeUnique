import React from 'react';
import BlogLayout from './BlogLayout';
import FeaturedPost from './FeaturedPost';
import PostCard from './PostCard';
import { posts } from './posts';

const Index = () => {
  const featuredPosts = posts.filter(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <BlogLayout>
      {/* <BlogHeader 
        title="Welcome to DevBlog"
        subtitle="Insights and tips about web development, programming, and tech trends."
      /> */}
      
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Featured Posts</h2>
        {featuredPosts.map((post, index) => (
          <FeaturedPost key={index} post={post} index={index} />
        ))}
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-6 border-b pb-2">Latest Articles</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </BlogLayout>
  );
};

export default Index;