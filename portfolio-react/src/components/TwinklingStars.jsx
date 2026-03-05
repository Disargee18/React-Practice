import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const TwinklingStars = ({ starCount = 100 }) => {
  const stars = useMemo(() => {
    return Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      size: Math.random() * 5 + 1, // Random size between 1px and 3px
      top: Math.random() * 100 + '%',
      left: Math.random() * 100 + '%',
      // Randomize animation rhythm
      duration: Math.random() * 2 + 1, 
      delay: Math.random() * 3,
    }));
  }, [starCount]);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden bg-black">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          style={{
            width: star.size,
            height: star.size,
            top: star.top,
            left: star.left,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.5, 1],
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

export default TwinklingStars;