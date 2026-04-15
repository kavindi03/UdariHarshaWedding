'use client';

import { motion } from 'framer-motion';
import { Heart, Star, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function BackgroundCards() {
  const cards = [
    {
      id: 1,
      image: '/images/udari image.jpeg',
      title: 'Our Love Story',
      description: 'Every moment with you is precious',
      icon: Heart,
      position: 'top-left',
    },
    {
      id: 2,
      image: '/images/udari image.jpeg',
      title: 'Forever Together',
      description: 'Two hearts, one soul',
      icon: Heart,
      position: 'top-right',
    },
    {
      id: 3,
      image: '/images/udari image.jpeg',
      title: 'The Journey',
      description: 'From this day forward',
      icon: Heart,
      position: 'bottom-left',
    },
    {
      id: 4,
      image: '/images/udari image.jpeg',
      title: 'Dream Come True',
      description: 'Happily ever after begins',
      icon: Star,
      position: 'bottom-right',
    },
  ];

  const getPositionClasses = (position: string) => {
    switch (position) {
      case 'top-left':
        return 'top-4 left-4 sm:top-10 sm:left-10';
      case 'top-right':
        return 'top-4 right-4 sm:top-10 sm:right-10';
      case 'bottom-left':
        return 'bottom-4 left-4 sm:bottom-10 sm:left-10';
      case 'bottom-right':
        return 'bottom-4 right-4 sm:bottom-10 sm:right-10';
      default:
        return 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Animated particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1.5 h-1.5 sm:w-2 sm:h-2 bg-pink-300 rounded-full opacity-30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.sin(i) * 50, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating hearts */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute text-pink-300 sm:text-pink-400 opacity-30 sm:opacity-40"
          style={{
            left: `${5 + i * 10}%`,
            top: `${15 + (i % 3) * 25}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, -15, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        >
          <Heart className="w-6 h-6 fill-current" />
        </motion.div>
      ))}

      {/* Background image cards */}
      {cards.map((card, index) => (
        <motion.div
          key={card.id}
          className={`absolute ${getPositionClasses(card.position)} w-32 h-40 sm:w-48 sm:h-60 lg:w-64 lg:h-80 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl opacity-100`}
          initial={{ scale: 0.8, rotate: Math.random() * 10 - 5 }}
          animate={{
            scale: [1, 1.05, 1],
            rotate: [Math.random() * 10 - 5, Math.random() * 10 - 5 + 5, Math.random() * 10 - 5],
          }}
          transition={{
            duration: 8 + index * 2,
            repeat: Infinity,
            delay: index * 0.5,
            ease: "easeInOut",
          }}
        >
          <div className="relative w-full h-full">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
              onError={(e) => {
                console.log('Image failed to load:', card.image);
                console.log('Error details:', e);
              }}
              onLoad={() => {
                console.log('Image loaded successfully:', card.image);
              }}
              unoptimized={true}
            />
            
            {/* Card content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-gradient-to-t from-black/70 to-transparent">
              <div className="flex items-center mb-2">
                <card.icon className="w-3 h-3 sm:w-4 sm:h-4 text-white mr-1 sm:mr-2" />
                <h4 className="text-white font-semibold text-xs sm:text-sm">{card.title}</h4>
              </div>
              <p className="text-white/80 text-xs hidden sm:block">{card.description}</p>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Sparkles effect */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`sparkle-${i}`}
          className="absolute hidden sm:block"
          style={{
            left: `${3 + (i * 6)}%`,
            top: `${5 + (i * 5)}%`,
          }}
          animate={{
            rotate: 360,
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        >
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300" />
        </motion.div>
      ))}
    </div>
  );
}
