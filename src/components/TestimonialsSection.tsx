import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const TestimonialsSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, elementRef] = useIntersectionObserver(0.3);

  const testimonials = [
    {
      text: "The guidance completely changed my confidence levels. The transformation was incredible and the results speak for themselves. 10/10 worth every penny.",
      author: "Priya S."
    },
    {
      text: "Simple, science-backed hacks that actually work. I've tried everything before, but this was different - real results that last.",
      author: "Arjun K."
    },
    {
      text: "I started seeing results within weeks—life-changing advice! My friends keep asking what I did differently. Pure gold.",
      author: "Ananya R."
    },
    {
      text: "Best investment I've made in myself. The confidence boost alone was worth it, but the physical transformation exceeded all expectations.",
      author: "Rohit M."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section 
      ref={elementRef}
      className="py-24 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-yellow-400/20 via-purple-500/10 to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,_theme(colors.pink.400/0.2)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,_theme(colors.blue.400/0.2)_0%,_transparent_50%)]"></div>
      </div>
      
      {/* Floating testimonial elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-yellow-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${5 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent drop-shadow-lg">
            Trusted by Our Community
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 mx-auto rounded-full mb-16"></div>
          
          <div className="max-w-4xl mx-auto relative h-64 flex items-center">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-500 transform ${
                  index === currentTestimonial 
                    ? 'translate-x-0 opacity-100' 
                    : index < currentTestimonial 
                      ? '-translate-x-full opacity-0' 
                      : 'translate-x-full opacity-0'
                }`}
              >
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20 shadow-2xl">
                  {/* Stars */}
                  <div className="flex justify-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-8 h-8 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6 text-gray-100">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <cite className="text-yellow-300 font-semibold text-lg">
                    — {testimonial.author}
                  </cite>
                </div>
              </div>
            ))}
          </div>
          
          {/* Dots indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-yellow-400' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;