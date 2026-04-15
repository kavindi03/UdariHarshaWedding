'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { weddingConfig } from '../config/wedding-config';

// Confetti SVG burst
function ConfettiBurst({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.svg
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 w-full h-full pointer-events-none z-30"
        >
          {[...Array(24)].map((_, i) => (
            <motion.circle
              key={i}
              cx="50%"
              cy="60%"
              r={Math.random() * 2 + 2}
              fill={`hsl(${i * 15},90%,60%)`}
              initial={{
                x: 0,
                y: 0,
                opacity: 1,
              }}
              animate={{
                x: 120 * Math.cos((i / 24) * 2 * Math.PI),
                y: 120 * Math.sin((i / 24) * 2 * Math.PI),
                opacity: 0,
              }}
              transition={{ duration: 1.2, delay: 0.1 + i * 0.01 }}
            />
          ))}
        </motion.svg>
      )}
    </AnimatePresence>
  );
}

interface EnvelopeProps {
  onOpen: () => void;
  isOpen: boolean;
}

export default function Envelope({ onOpen, isOpen }: EnvelopeProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [burst, setBurst] = useState(false);

  // const coupleNames = `${weddingConfig.couple.brideName} & ${weddingConfig.couple.groomName}`;
  return (
    <div className="relative w-full max-w-md mx-auto">
      <ConfettiBurst show={burst} />
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Envelope Body with glassmorphism and neon border */}
            <motion.div
              className="relative w-full h-72 bg-white/30 backdrop-blur-2xl rounded-3xl shadow-2xl cursor-pointer overflow-hidden border-4 border-pink-400/40"
              style={{ boxShadow: '0 8px 40px 0 rgba(255,0,150,0.15), 0 1.5px 0 0 #fff inset' }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => { setBurst(true); setTimeout(() => setBurst(false), 1400); setTimeout(onOpen, 700); }}
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
            >
              {/* Animated Holographic Gradient */}
              <motion.div
                className="absolute inset-0 z-0"
                style={{
                  background: 'linear-gradient(120deg, #f9a8d4 0%, #c4b5fd 50%, #f472b6 100%)',
                  opacity: 0.25,
                  filter: 'blur(16px)',
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
              {/* 3D Envelope Flap with perspective */}
              <motion.div
                className="absolute top-0 left-0 w-full h-36 bg-gradient-to-br from-pink-200 to-pink-400 origin-top rounded-t-3xl shadow-lg z-10"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  perspective: 800,
                  transformStyle: 'preserve-3d',
                }}
                animate={{
                  rotateX: isHovered ? -30 : 0,
                  boxShadow: isHovered ? "0 8px 32px 0 #f472b6" : "0 2px 8px 0 #f472b6",
                }}
                transition={{ duration: 0.5, type: "spring" }}
              >
                {/* Light streaks */}
                <motion.div
                  className="absolute left-1/4 top-1/3 w-1/2 h-2 bg-gradient-to-r from-white/80 to-pink-300/0 rounded-full blur-lg"
                  animate={{ x: [0, 60, -60, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
              {/* Wax Seal with glow and sparkles */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
                animate={{
                  scale: isHovered ? 1.13 : 1,
                  rotate: isHovered ? 8 : 0,
                  filter: isHovered ? 'drop-shadow(0 0 16px #f472b6)' : 'drop-shadow(0 0 8px #f472b6)',
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-fuchsia-600 rounded-full shadow-2xl flex items-center justify-center border-4 border-white/60">
                    <Heart className="w-10 h-10 text-white fill-white drop-shadow-lg animate-pulse" />
                  </div>
                  {/* Sparkles around seal */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Sparkles className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-5 h-5 text-yellow-300" />
                    <Sparkles className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-5 h-5 text-pink-200" />
                    <Sparkles className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-2 w-5 h-5 text-fuchsia-300" />
                    <Sparkles className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-2 w-5 h-5 text-purple-200" />
                  </motion.div>
                </div>
              </motion.div>
              {/* Click Me Text modernized */}
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center z-20"
                animate={{
                  y: isHovered ? -4 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-fuchsia-700 font-bold text-xl tracking-widest drop-shadow-lg animate-bounce">
                  OPEN INVITE
                </p>
                <motion.div
                  className="w-20 h-1 bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 mx-auto mt-2 rounded-full shadow"
                  animate={{
                    width: isHovered ? "120px" : "80px",
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              {/* Floating holographic hearts */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute opacity-70 pointer-events-none"
                  initial={{ y: 0, opacity: 0 }}
                  animate={{
                    y: -120 - i * 10,
                    opacity: [0, 0.7, 0],
                    x: Math.sin(i * 2) * 30,
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3.5 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut",
                  }}
                  style={{
                    left: `${15 + i * 18}%`,
                    bottom: '18%',
                    filter: `hue-rotate(${i * 60}deg) blur(0.5px)`,
                  }}
                >
                  <Heart className="w-6 h-6 fill-current text-pink-300" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
