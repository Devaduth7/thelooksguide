import React from 'react';
import { Gem, Zap, Flame, Moon } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const GlowUpHacks: React.FC = () => {
  const [isVisible, elementRef] = useIntersectionObserver(0.2);

  const hacks = [
    {
      icon: Gem,
      title: 'Clear Skin Science',
      description: 'Routines backed by dermatological research'
    },
    {
      icon: Zap,
      title: 'Facial Structure',
      description: 'Exercises and techniques for definition'
    },
    {
      icon: Flame,
      title: 'Lifestyle Glow',
      description: 'Changes for lasting transformation'
    },
    {
      icon: Moon,
      title: 'Daily Habits',
      description: 'Sustainable routines for long-term results'
    }
  ];

  return (
    <section ref={elementRef} className="py-24 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 via-transparent to-pink-400/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_theme(colors.yellow.400/0.15)_0%,_transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_theme(colors.purple.400/0.15)_0%,_transparent_50%)]"></div>
      </div>
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse"></div>
      
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-lg">
            Glow-Up Secrets That Work
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hacks.map((hack, index) => {
            const Icon = hack.icon;
            return (
              <div
                key={index}
                className={`group bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 text-center hover:bg-gradient-to-br hover:from-yellow-400 hover:to-orange-400 hover:shadow-2xl hover:shadow-yellow-400/25 transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border-2 border-gray-700/50 hover:border-yellow-300 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 group-hover:bg-gradient-to-br group-hover:from-black group-hover:to-gray-800 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-lg group-hover:shadow-xl">
                    <Icon className="w-10 h-10 text-black group-hover:text-yellow-400 transition-all duration-300" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white group-hover:text-black mb-4 transition-colors duration-300">
                  {hack.title}
                </h3>
                
                <p className="text-gray-300 group-hover:text-black font-medium leading-relaxed transition-colors duration-300">
                  {hack.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GlowUpHacks;