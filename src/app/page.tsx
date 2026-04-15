'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Envelope from '@/components/Envelope';
import WeddingInvitation from '@/components/WeddingInvitation';
import MusicPlayer from '@/components/MusicPlayer';

export default function Home() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 flex items-center justify-center p-4">
      <AnimatePresence mode="wait">
        {!isInvitationOpen ? (
          <motion.div
            key="envelope"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="text-center mb-12">
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-4"
              >
                You're Invited!
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg md:text-xl text-gray-600"
              >
                A special invitation awaits...
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-sm md:text-base text-gray-500 mt-2"
              >
                🎵 "A Thousand Years" will play when you open the invitation
              </motion.p>
            </div>
            <Envelope onOpen={() => setIsInvitationOpen(true)} isOpen={isInvitationOpen} />
          </motion.div>
        ) : (
          <motion.div
            key="invitation"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <WeddingInvitation />
          </motion.div>
        )}
      </AnimatePresence>
      <MusicPlayer />
    </div>
  );
}
