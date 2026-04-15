'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Music } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Auto-play music when invitation opens
    const startMusic = () => {
      if (audioRef.current && !hasStarted) {
        audioRef.current.volume = 0.3; // Set volume to 30%
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setHasStarted(true);
          console.log('🎵 Music started: A Thousand Years');
        }).catch((error) => {
          console.log('Autoplay prevented, will try on user interaction:', error);
          // Try again on any user interaction
          const tryPlayOnInteraction = () => {
            if (audioRef.current && !hasStarted) {
              audioRef.current.volume = 0.3;
              audioRef.current.play().then(() => {
                setIsPlaying(true);
                setHasStarted(true);
                console.log('🎵 Music started on user interaction');
              }).catch(() => {
                console.log('Music play failed even on interaction');
              });
            }
          };

          // Add multiple event listeners for better autoplay success
          const events = ['click', 'touchstart', 'keydown', 'scroll'];
          events.forEach(event => {
            document.addEventListener(event, tryPlayOnInteraction, { once: true });
          });
        });
      }
    };

    // Try to start music immediately when component mounts
    const timer = setTimeout(startMusic, 1000); // Wait 1 second then try

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
      <audio ref={audioRef} loop>
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
