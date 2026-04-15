'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

interface CreativeGalleryProps {
  images: string[];
  title: string;
}

export default function CreativeGallery({ images, title }: CreativeGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openImage = (index: number) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    } else {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  return (
    <div className="relative">
      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openImage(index)}
            className="relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-lg"
          >
            <Image
              src={image}
              alt={`${title} ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center justify-between">
                  <Camera className="w-5 h-5 text-white" />
                  <Heart className="w-5 h-5 text-white fill-white" />
                </div>
              </div>
            </div>

            {/* Floating heart animation */}
            <motion.div
              className="absolute top-2 right-2"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            >
              <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={closeImage}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-full w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={images[selectedImage]}
                  alt={`Enlarged ${title} ${selectedImage + 1}`}
                  fill
                  className="object-contain"
                />
              </div>

              {/* Close button */}
              <button
                onClick={closeImage}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>

              {/* Image counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-white font-medium">
                  {selectedImage + 1} / {images.length}
                </span>
              </div>

              {/* Floating decorations */}
              <motion.div
                className="absolute top-8 left-8"
                animate={{
                  rotate: [0, 15, -15, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-8 h-8 text-pink-400 fill-pink-400" />
              </motion.div>
              
              <motion.div
                className="absolute bottom-8 right-8"
                animate={{
                  rotate: [0, -15, 15, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <Heart className="w-8 h-8 text-pink-400 fill-pink-400" />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
