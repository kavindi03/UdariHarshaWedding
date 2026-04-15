'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Calendar, Heart } from 'lucide-react';

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(targetDate).getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
      <div className="flex items-center justify-center mb-4">
        <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-pink-600 mr-1 sm:mr-2 animate-pulse" />
        <h3 className="text-lg sm:text-xl font-semibold text-gray-800">Countdown to the Big Day</h3>
        <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-pink-600 ml-1 sm:ml-2 animate-pulse" />
      </div>
      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {[
          { value: timeLeft.days, label: 'Days', icon: Calendar },
          { value: timeLeft.hours, label: 'Hours', icon: Clock },
          { value: timeLeft.minutes, label: 'Minutes', icon: Clock },
          { value: timeLeft.seconds, label: 'Seconds', icon: Clock },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="text-center"
          >
            <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md">
              <item.icon className="w-4 h-4 sm:w-6 sm:h-6 text-purple-600 mx-auto mb-1 sm:mb-2" />
              <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm text-gray-600 mt-1">{item.label}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
