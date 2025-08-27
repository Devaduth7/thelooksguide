import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const MotivationSection: React.FC = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const [isVisible, elementRef] = useIntersectionObserver(0.3);
  
  const words = ['Confidence', 'Attraction', 'Success', 'Growth', 'Power'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section 
      id="motivation"
      ref={elementRef}
      className="py-24 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-yellow-400/20 via-purple-500/10 to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_theme(colors.yellow.400/0.3)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_theme(colors.pink.400/0.3)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,_theme(colors.blue.400/0.2)_0%,_transparent_50%)]"></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/60 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 drop-shadow-lg">
            Why Invest in Yourself?
          </h2>
          
          {/* Animated words */}
          <div className="mb-12 h-20 flex items-center justify-center">
            <span className="text-6xl md:text-8xl font-black bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent transition-all duration-500 drop-shadow-2xl">
              {words[currentWord]}
            </span>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-100 leading-relaxed font-medium mb-6">
              Your appearance is your first impression. With the right guidance, you can unlock{' '}
              <span className="text-yellow-300 font-bold bg-yellow-300/20 px-2 py-1 rounded-lg">confidence</span>,{' '}
              <span className="text-yellow-300 font-bold bg-yellow-300/20 px-2 py-1 rounded-lg">respect</span>, and{' '}
              <span className="text-yellow-300 font-bold bg-yellow-300/20 px-2 py-1 rounded-lg">opportunities</span>{' '}
              you never thought possible.
            </p>
            <p className="text-2xl md:text-3xl font-bold text-white mt-8 drop-shadow-lg">
              Don't wait—your transformation begins today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotivationSection;