import { useEffect, useRef, useState } from 'react';
import TestimonialCard from './TestinmonialCard';

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Designer",
    content: "The attention to detail and user experience is unmatched. This product has transformed how I work.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Alex Rodriguez",
    role: "Software Engineer",
    content: "Incredible performance and beautiful design. It's rare to find both in one package.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Emily Watson",
    role: "Creative Director",
    content: "This has become an essential part of my creative workflow. Simply outstanding.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=500&auto=format&fit=crop",
  },
  {
    name: "Michael Park",
    role: "UX Researcher",
    content: "The intuitive design makes complex tasks feel effortless. A game-changer for our team.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop",
  },
];

const TestimonialCarousel = () => {
  const [position, setPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setPosition((prev) => (prev >= testimonials.length * 300 ? 0 : prev + 1));
      }, 20); // Smooth auto-scroll speed
    }
    
    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  return (
    <div className=" text-center py-12 bg-gray-50">
      {/* ✅ Added Section Title & Subtitle */}
      {/* ✅ Auto-scroll with pause on hover */}
      <div
        className="w-full overflow-hidden mt-8 relative max-w-[var(--mw)] mx-auto"
        ref={containerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
      <div className='text-left'>
      <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-bold text-gray-900 dark:text-white">What Our Users Say</h2>
      <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg">
        Hear from our happy customers who love using our platform.
      </p>

      </div>
        <div
          className="flex gap-6 transition-transform ease-linear "
          style={{ transform: `translateX(-${position}px)` }}
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div key={index} className="flex-none" style={{ transition: 'transform 0.3s ease-out' }}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
