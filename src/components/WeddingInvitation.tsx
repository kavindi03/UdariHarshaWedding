'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MapPin, Clock, Calendar, Music, Camera, Gift, Sparkles } from 'lucide-react';
import Image from 'next/image';
import CountdownTimer from './CountdownTimer';
import ImageCarousel from './ImageCarousel';
import GoogleFormRSVP from './GoogleFormRSVP';
import CreativeGallery from './CreativeGallery';
import BackgroundCards from './BackgroundCards';
import InvitationCard from './InvitationCard';

export default function WeddingInvitation() {
  const [rsvpStatus, setRsvpStatus] = useState<'attending' | 'not-attending' | null>(null);

  // Wedding data - you can modify this
  const weddingData = {
    brideName: "Udari",
    groomName: "Harsha",
    date: "2026-05-10",
    time: "6:00 PM",
    venue: "Kolonne River Side Garden Hotel",
    address: "Kolonne River Side Garden Hotel",
    images: [
      "/images/udari image.jpeg",
    ],
    backgroundImages: [
      "/images/couple-bg-1.jpg",
      "/images/couple-bg-2.jpg",
      "/images/couple-bg-3.jpg",
      "/images/couple-bg-4.jpg",
    ]
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Cards */}
      <BackgroundCards />
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen bg-gradient-to-br from-pink-10/50 via-white/10 to-purple-10/50 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-8 sm:py-10 lg:py-12"
        >
          <div className="max-w-4xl mx-auto">
            <CountdownTimer targetDate={weddingData.date} />
            
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block mb-4"
            >
              <Heart className="w-12 h-12 text-pink-500 fill-pink-500" />
            </motion.div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-serif mb-4 sm:mb-6 font-bold" style={{ fontFamily: 'serif', letterSpacing: '0.05em', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}>
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-rose-500 to-amber-600">
                {weddingData.brideName}
              </span>
              <span className="mx-2 sm:mx-3 md:mx-4 text-amber-500">&</span>
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-amber-500 to-rose-600">
                {weddingData.groomName}
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-700 font-light italic mb-2 sm:mb-3" style={{ fontFamily: 'serif' }}>
              Together with their families
            </p>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 mt-2 sm:mt-3 font-semibold" style={{ fontFamily: 'serif', letterSpacing: '0.02em' }}>
              Invite you to celebrate their wedding
            </p>
          </div>
        </motion.div>

        {/* Invitation Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto pb-6 sm:pb-8"
        >
          <div className="text-center mb-6">
            <motion.div
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="inline-block"
            >
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500 mb-2 sm:mb-3" />
            </motion.div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600" style={{ fontFamily: 'serif', letterSpacing: '0.05em', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
              Wedding Invitation
            </h3>
          </div>
          
          <InvitationCard />
        </motion.div>

        {/* Wedding Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-4xl mx-auto pb-8 sm:pb-10 lg:pb-12"
        >
          {/* Google Form RSVP */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <GoogleFormRSVP />
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center py-6 sm:py-8"
        >
          <div className="flex items-center justify-center mb-4">
            <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 mr-1 sm:mr-2" />
            <p className="text-gray-200 text-sm sm:text-base font-medium italic" style={{ fontFamily: 'serif' }}>Your presence is the best gift</p>
            <Gift className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 ml-1 sm:ml-2" />
          </div>
          <p className="text-sm sm:text-base text-gray-300 font-medium" style={{ fontFamily: 'serif' }}>
            With love and gratitude,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-semibold">
              {weddingData.brideName} & {weddingData.groomName}
            </span>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
