'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Music } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Auto-play music with multiple attempts
    const startMusic = () => {
      if (audioRef.current && !hasStarted) {
        audioRef.current.volume = 0.3;
        
        // Create a user interaction context
        const playWithInteraction = async () => {
          try {
            if (audioRef.current) {
              // First try with muted (more likely to succeed)
              audioRef.current.muted = true;
              await audioRef.current.play();
              
              // Then unmute after successful play
              setTimeout(() => {
                if (audioRef.current) {
                  audioRef.current.muted = false;
                  audioRef.current.volume = 0.3;
                }
              }, 100);
              
              setIsPlaying(true);
              setHasStarted(true);
              console.log('Music started: A Thousand Years');
              
              // Clean up event listeners after successful play
              events.forEach(event => {
                document.removeEventListener(event, playWithInteraction);
              });
            }
          } catch (error) {
            console.log('Play attempt failed, will try again:', error);
          }
        };

        // Try immediate play first
        playWithInteraction().catch(() => {
          console.log('Autoplay prevented, waiting for user interaction');
        });

        // Set up multiple interaction events as fallback
        const events = ['click', 'touchstart', 'mousedown', 'keydown', 'scroll'];
        events.forEach(event => {
          document.addEventListener(event, playWithInteraction, { once: true });
        });
      }
    };

    // Try to start music after a short delay
    const timer = setTimeout(startMusic, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [hasStarted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.volume = 0.3;
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setHasStarted(true);
        }).catch(() => {
          console.log('Manual play failed');
        });
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio ref={audioRef} loop autoPlay muted>
        <source src="/music/a-thousand-years.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        className="bg-pink-500 text-white p-4 rounded-full shadow-lg hover:bg-pink-600 transition-colors"
      >
        {isPlaying ? (
          <Pause className="w-6 h-6" />
        ) : (
          <Music className="w-6 h-6" />
        )}
      </motion.button>
      
      {isPlaying && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-pink-400"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [1, 0.5, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  );
}
