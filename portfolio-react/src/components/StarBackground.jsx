import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const StarBackground = () => {
  // We use useMemo so the stars don't "re-roll" their positions 
  // every time your CardStack state updates.
  const stars = useMemo(() => {
    return [...Array(100)].map((_, i) => ({
      id: i,
      size: Math.random() * 3,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 3 + 2, // Twinkle speed
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] bg-[#020617] overflow-hidden">
      {/* Subtle Gradient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e293b_0%,#020617_100%)]" />
      
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            top: star.top,
            left: star.left,
            filter: "blur(0.5px)"
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;