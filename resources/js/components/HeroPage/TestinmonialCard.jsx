// TestimonialCarousel.jsx
"use client"

import { useEffect, useRef, useState } from 'react';

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

 const TestimonialCard = ({ name, role, content, image }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-[300px] h-[400px] perspective-1000"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`w-full h-full transition-transform duration-700 transform-style-3d cursor-pointer ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front side */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg bg-card/80 backdrop-blur-sm border border-border">
            <div className="relative w-full h-3/4">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <h3 className="text-primary-foreground text-xl font-medium">{name}</h3>
                <p className="text-primary-foreground/80 text-sm">{role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back side */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="w-full h-full rounded-2xl p-6 bg-card/80 backdrop-blur-sm border border-border shadow-lg">
            <div className="h-full flex flex-col justify-center">
              <p className="text-muted-foreground text-lg leading-relaxed italic">"{content}"</p>
              <div className="mt-4">
                <p className="text-foreground font-medium">{name}</p>
                <p className="text-muted-foreground text-sm">{role}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard