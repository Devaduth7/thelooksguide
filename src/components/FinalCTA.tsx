import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const FinalCTA: React.FC = () => {
  const [isVisible, elementRef] = useIntersectionObserver(0.3);

  return (
    <section 
      ref={elementRef}
      className="py-24 bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 relative overflow-hidden"
    >
      {/* Enhanced animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-white/30 via-yellow-200/20 to-transparent animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-gradient"></div>
      </div>
      
      {/* Enhanced floating elements */}
      <div className="absolute inset-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-white/20 rounded-full animate-float shadow-lg"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-7xl font-black text-black mb-8 leading-tight drop-shadow-lg">
            Your Glow-Up Starts Today.
            <span className="block text-white drop-shadow-2xl">
              Don't Wait Another Year.
            </span>
          </h2>
          
          <div className="mb-6">
            <button 
              onClick={() => window.open('https://example.com/product', '_blank')}
              className="group bg-gradient-to-r from-black to-gray-800 text-yellow-400 px-16 py-8 text-2xl font-black rounded-3xl hover:from-gray-900 hover:to-black transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-black/50 flex items-center gap-4 mx-auto border-2 border-black/20 hover:border-yellow-400/30"
            >
              Start Now
              <span className="text-3xl group-hover:animate-bounce group-hover:scale-125 transition-transform duration-300">🚀</span>
            </button>
          </div>
          
          <p className="text-lg md:text-xl text-black/90 font-semibold max-w-2xl mx-auto drop-shadow-sm">
            Instant access to glow-up guidance, tips, and transformations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;