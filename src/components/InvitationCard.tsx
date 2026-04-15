'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, MapPin, Clock, Calendar, Users, Sparkles, Crown, Flower, Star, X, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function InvitationCard() {
  const [showMapModal, setShowMapModal] = useState(false);
  
  const mapUrls = {
    googleMaps: "https://maps.google.com/?q=Kolonne+Riverside+Garden+Hotel+Avissawella",
    directions: "https://www.google.com/maps/dir/?api=1&destination=Kolonne+Riverside+Garden+Hotel+Avissawella",
    hotelInfo: "https://en.planetofhotels.com/sri-lanka/avissawella/kolonne-riverside-garden-hotel"
  };

  const coupleData = {
    brideName: "Udari",
    groomName: "Harsha",
    brideParents: "Mr. R. A. Ajith Kumara and Mrs.Kumara",
    groomParents: "Mr. E. D. Ariyasena and Mrs. Ariyasena",
  };

  const weddingDetails = {
    sinhalaDate: "May 10, 2026",
    time: "9:00 AM to 4:00 PM",
    ceremonyTime: "(Poruwa Ceremony at 9:15 AM)",
    venue: "KOLONNE RIVERSIDE GARDEN HOTEL",
    address: "Avissawella",
    contact: "📞 0701785075",
  };

  const sinhalaInvitationText = `Auspicious Wedding

Of Mr. E. D. Ariyasena
and Mrs. Ariyasena's beloved son
Harsha

And Mr. R. A. Ajith Kumara
and Mrs. Kumara's beloved daughter
Udari

As the wedding bells ring gently
With hands joined in holy matrimony
At the auspicious moment of the poruwa ceremony
We invite you to join us...

${weddingDetails.sinhalaDate}

${weddingDetails.venue}
${weddingDetails.address}

${weddingDetails.time}
We cordially invite you to participate in the joyous celebration

${weddingDetails.ceremonyTime}
${weddingDetails.contact}`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      {/* Main Invitation Card */}
      <div className="bg-gradient-to-br from-amber-50 via-white to-rose-50 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden relative border-2 sm:border-4 border-gradient-to-r from-amber-200 via-rose-200 to-amber-200">
        {/* Ornate Border Pattern */}
        <div className="absolute inset-0 border-4 sm:border-8 border-double border-amber-300/20 rounded-2xl sm:rounded-3xl pointer-events-none" />
        
        {/* Background with subtle pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full bg-repeat" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>
        
        {/* Background Image with Premium Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/udari image.jpeg"
            alt="Wedding Background"
            fill
            className="object-cover opacity-20 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900/10 via-rose-900/10 to-amber-900/10" />
        </div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Premium Header with Gold Accents */}
          <div className="relative bg-gradient-to-br from-amber-50/95 via-white/95 to-rose-50/95 p-6 sm:p-8 lg:p-12 border-b-4 sm:border-b-8 border-double border-amber-300 backdrop-blur-sm">
            {/* Corner Decorations */}
            <div className="absolute top-4 left-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Crown className="w-8 h-8 text-amber-500" />
              </motion.div>
            </div>
            <div className="absolute top-4 right-4">
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Crown className="w-8 h-8 text-amber-500" />
              </motion.div>
            </div>
            
            {/* Central Heart Animation */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full shadow-lg">
                <Heart className="w-10 h-10 sm:w-12 sm:h-12 text-white fill-white" />
              </div>
            </motion.div>
            
            {/* Traditional Sinhala Header with Gold Effect */}
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif text-center mb-6 sm:mb-8 font-bold"
              style={{ fontFamily: 'serif', textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
            >
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-700 via-amber-500 to-rose-700 drop-shadow-2xl" style={{ letterSpacing: '0.1em' }}>
                Auspicious Wedding
              </span>
              <div className="h-2 w-24 sm:w-32 md:w-40 mx-auto mt-4 bg-gradient-to-r from-amber-400 via-rose-400 to-amber-400 rounded-full shadow-lg"></div>
            </motion.h1>
            
            {/* Welcome Message with Premium Styling */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-center mb-6 sm:mb-8 bg-gradient-to-br from-white/80 via-amber-50/80 to-rose-50/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border-2 border-amber-300/50 shadow-xl"
            >
              <div className="space-y-4">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-600 via-amber-500 to-rose-600 bg-clip-text text-transparent leading-tight drop-shadow-lg" style={{ fontFamily: 'serif', letterSpacing: '0.05em' }}>
                  2026
                </p>
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-amber-700 italic" style={{ fontFamily: 'serif' }}>
                  {weddingDetails.sinhalaDate}
                </p>
                <div className="border-t-2 border-amber-300/50 my-4"></div>
                <div className="space-y-3 text-gray-800" style={{ fontFamily: 'serif', lineHeight: '1.8' }}>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-amber-800">
                    <span className="italic">KOLONNE RIVERSIDE GARDEN HOTEL</span>
                  </p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-rose-700">
                    {weddingDetails.address}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-700">
                    {weddingDetails.time}
                  </p>
                  <p className="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-amber-600 italic">
                    {weddingDetails.ceremonyTime}
                  </p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-rose-600">
                    {weddingDetails.contact}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Premium Decorative Elements */}
            <div className="flex justify-center space-x-6 sm:space-x-8 md:space-x-12 mb-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={`decoration-${i}`}
                  animate={{
                    scale: [1, 1.3, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                >
                  <Star className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${i % 2 === 0 ? 'text-amber-400' : 'text-rose-400'} fill-current`} />
                </motion.div>
              ))}
            </div>
          </div>

        {/* Premium Wedding Details Section */}
        <div className="p-6 sm:p-8 lg:p-12 bg-gradient-to-br from-amber-50/80 via-white/80 to-rose-50/80 backdrop-blur-sm">
          {/* Section Title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-center mb-10"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-amber-400 to-rose-400 rounded-full mb-4 shadow-lg">
              <Flower className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600 font-bold">
              Wedding Details
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Date & Time - Premium Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-gradient-to-br from-amber-50 to-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border-2 border-amber-200 relative overflow-hidden"
            >
              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-200/30 to-transparent rounded-bl-full" />
              
              <div className="flex items-center mb-6">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full mr-3 sm:mr-4 shadow-lg">
                  <Calendar className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-gray-800 font-semibold">Date & Time</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center text-gray-700 bg-white/50 rounded-xl p-2 sm:p-3">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-amber-500" />
                  <span className="text-sm sm:text-base md:text-lg font-medium">{weddingDetails.sinhalaDate}</span>
                </div>
                <div className="flex items-center text-gray-700 bg-white/50 rounded-xl p-2 sm:p-3">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-amber-500" />
                  <span className="text-sm sm:text-base md:text-lg font-medium">{weddingDetails.time}</span>
                </div>
                <div className="flex items-center text-gray-600 bg-amber-50/50 rounded-xl p-2 sm:p-3">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-rose-500" />
                  <span className="text-xs sm:text-sm font-medium">{weddingDetails.ceremonyTime}</span>
                </div>
              </div>
            </motion.div>

            {/* Venue - Premium Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              whileHover={{ scale: 1.03, y: -5 }}
              onClick={() => setShowMapModal(true)}
              className="bg-gradient-to-br from-rose-50 to-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-xl border-2 border-rose-200 relative overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300"
            >
              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-rose-200/30 to-transparent rounded-bl-full" />
              
              <div className="flex items-center mb-6">
                <div className="p-2 sm:p-3 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full mr-3 sm:mr-4 shadow-lg">
                  <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-serif text-gray-800 font-semibold">Venue</h3>
              </div>
              <div className="space-y-4">
                <div className="text-gray-700 bg-white/50 rounded-xl p-2 sm:p-3">
                  <span className="font-semibold text-base sm:text-lg">{weddingDetails.venue}</span>
                </div>
                <div className="flex items-start text-gray-600 bg-rose-50/50 rounded-xl p-2 sm:p-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 text-rose-500 mt-1 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium">{weddingDetails.address}</span>
                </div>
                <div className="flex items-center justify-center mt-4 text-rose-500 text-xs sm:text-sm font-medium">
                  <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  <span>Click to view map</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Parents Names - Ultra Premium Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className="mt-8 sm:mt-12 bg-gradient-to-br from-amber-50 via-white to-rose-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border-2 sm:border-4 border-double border-amber-300/30 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full bg-repeat" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d4af37' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15zm30 0c0-8.3-6.7-15-15-15s-15 6.7-15 15 6.7 15 15 15 15-6.7 15-15z'/%3E%3C/g%3E%3C/svg%3E")`
              }} />
            </div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-400 via-rose-400 to-amber-400 rounded-full mb-4 sm:mb-6 shadow-xl">
                  <Heart className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-current" />
                </div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600 font-bold mb-2">
                  Together Forever in Love
                </h3>
                <div className="h-1 w-20 sm:w-24 mx-auto bg-gradient-to-r from-amber-400 to-rose-400 rounded-full" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <motion.div 
                  whileHover={{ scale: 1.02, y: -3 }}
                  className="bg-gradient-to-br from-amber-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border-2 border-amber-200 text-center"
                >
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full mb-3">
                      <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <p className="text-amber-600 font-semibold mb-3 text-sm sm:text-base">Groom's Parents</p>
                  </div>
                  <p className="text-gray-800 font-medium text-sm sm:text-base md:text-lg mb-3 italic" style={{ fontFamily: 'serif' }}>{coupleData.groomParents}</p>
                  <p className="text-gray-600 mb-3 sm:mb-4 font-semibold text-amber-700 text-sm sm:text-base">Their beloved son</p>
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600 font-bold" style={{ letterSpacing: '0.05em', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
                    {coupleData.groomName}
                  </p>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.02, y: -3 }}
                  className="bg-gradient-to-br from-rose-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border-2 border-rose-200 text-center"
                >
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-rose-400 to-rose-500 rounded-full mb-3">
                      <Flower className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <p className="text-rose-600 font-semibold mb-3 text-sm sm:text-base">Bride's Parents</p>
                  </div>
                  <p className="text-gray-800 font-medium text-sm sm:text-base md:text-lg mb-3 italic" style={{ fontFamily: 'serif' }}>{coupleData.brideParents}</p>
                  <p className="text-gray-600 mb-3 sm:mb-4 font-semibold text-rose-700 text-sm sm:text-base">Their beloved daughter</p>
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600 font-bold" style={{ letterSpacing: '0.05em', textShadow: '1px 1px 2px rgba(0,0,0,0.1)' }}>
                    {coupleData.brideName}
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Premium Blessing Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.8 }}
            className="mt-8 sm:mt-12 bg-gradient-to-br from-amber-100 via-rose-50 to-amber-100 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xl border-2 border-amber-200/50"
          >
            <div className="text-center">
              <motion.div 
                animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-amber-400 via-rose-400 to-amber-400 rounded-full mb-4 sm:mb-6 shadow-lg"
              >
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600 mb-4 sm:mb-6 font-bold" style={{ letterSpacing: '0.05em' }}>
                2026
              </h3>
              <div className="bg-gradient-to-br from-white/80 via-amber-50/80 to-rose-50/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border-2 border-amber-200/50 shadow-xl">
                <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl lg:text-2xl font-medium italic" style={{ fontFamily: 'serif', lineHeight: '1.8' }}>
                  Your presence in our union is the most precious gift.
                  We look forward to celebrating this special occasion with you.
                </p>
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t-2 border-amber-300/50">
                  <p className="text-amber-600 font-bold text-lg sm:text-xl md:text-2xl text-center" style={{ fontFamily: 'serif', letterSpacing: '0.02em' }}>
                    Your blessings mean the world to us
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Premium Footer with Gold Accents */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="bg-gradient-to-r from-amber-600 via-rose-600 to-amber-600 p-6 sm:p-8 text-white text-center relative overflow-hidden"
        >
          {/* Decorative Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-repeat" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center justify-center mb-4">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-current mr-2 sm:mr-3" />
              </motion.div>
              <span className="font-semibold text-lg sm:text-xl">pulmonary</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-2 sm:ml-3" />
              </motion.div>
            </div>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-rose-200" style={{ letterSpacing: '0.05em', textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
              {coupleData.brideName} <span className="mx-2">&</span> {coupleData.groomName}
            </p>
            <div className="flex items-center justify-center">
              <span className="text-sm sm:text-base lg:text-lg font-medium bg-white/20 px-3 sm:px-4 py-1 sm:py-2 rounded-full backdrop-blur-sm">
                {weddingDetails.contact}
              </span>
            </div>
          </div>
        </motion.div>
        </div>

        {/* Map Modal */}
        <AnimatePresence>
          {showMapModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
              onClick={() => setShowMapModal(false)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="bg-gradient-to-r from-amber-500 to-rose-500 p-4 sm:p-6 text-white relative">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <MapPin className="w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" />
                      <div>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{weddingDetails.venue}</h3>
                        <p className="text-amber-100 text-sm sm:text-base">{weddingDetails.address}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setShowMapModal(false)}
                      className="p-1.5 sm:p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                    >
                      <X className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                  </div>
                </div>

                {/* Map Content */}
                <div className="p-4 sm:p-6">
                  {/* Embedded Map */}
                  <div className="rounded-2xl overflow-hidden shadow-lg mb-6">
                    <iframe
                      src="https://maps.google.com/maps?q=Kolonne+Riverside+Garden+Hotel+Avissawella&t=&z=15&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full"
                      title="Kolonne Riverside Garden Hotel Location"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    <motion.a
                      href={mapUrls.googleMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl flex items-center justify-center space-x-2 sm:space-x-3 shadow-lg hover:shadow-xl transition-all"
                    >
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="font-semibold text-sm sm:text-base">View on Google Maps</span>
                    </motion.a>

                    <motion.a
                      href={mapUrls.directions}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-green-500 to-green-600 text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl flex items-center justify-center space-x-2 sm:space-x-3 shadow-lg hover:shadow-xl transition-all"
                    >
                      <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="font-semibold text-sm sm:text-base">Get Directions</span>
                    </motion.a>

                    <motion.a
                      href={mapUrls.hotelInfo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl flex items-center justify-center space-x-2 sm:space-x-3 shadow-lg hover:shadow-xl transition-all"
                    >
                      <Star className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="font-semibold text-sm sm:text-base">Hotel Info</span>
                    </motion.a>
                  </div>

                  {/* Additional Information */}
                  <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-amber-50 rounded-xl sm:rounded-2xl border border-amber-200">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-amber-500 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-medium mb-2 text-sm sm:text-base">Location Details:</p>
                        <p className="text-gray-600 text-xs sm:text-sm">
                          Kolonne Riverside Garden Hotel is located in Avissawella, Sri Lanka. 
                          The venue offers beautiful riverside settings perfect for wedding ceremonies.
                        </p>
                        <p className="text-amber-600 text-xs sm:text-sm mt-2 font-medium">
                          Click any of the buttons above for more information and directions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
