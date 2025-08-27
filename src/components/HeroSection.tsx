import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    document.getElementById('motivation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-300 to-yellow-500 overflow-hidden">
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-yellow-300/30 via-transparent to-transparent animate-pulse"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <h1 className="text-5xl md:text-7xl font-black text-black leading-tight mb-6">
              Transform Your
              <span className="block bg-gradient-to-r from-black to-gray-800 bg-clip-text text-transparent">
                Looks.
              </span>
              <span className="block text-white drop-shadow-lg">
                Transform Your Life.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-black/80 font-medium mb-8 max-w-2xl">
              The ultimate glow-up guidance trusted by 15k+ followers.
            </p>
            
            <button 
              onClick={() => window.open('https://example.com/product', '_blank')}
              className="group bg-black text-yellow-400 px-12 py-6 text-xl font-bold rounded-2xl hover:bg-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 mx-auto lg:mx-0"
            >
              Start Now
              <span className="text-2xl group-hover:animate-bounce">🚀</span>
            </button>
          </div>

          {/* Illustration placeholder */}
          <div className={`hidden lg:block transition-all duration-1200 delay-300 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-black/50 text-6xl font-light">✨</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-black/70 hover:text-black transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;