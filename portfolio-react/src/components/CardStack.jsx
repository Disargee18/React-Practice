import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function CardStack() {
  const [activeID, setActiveID] = useState(0);
  const isScrolling = useRef(false);

  const colorblocks = [
    'bg-blue-700',
    'bg-red-700',
    'bg-green-700',
    'bg-purple-700',
    'bg-yellow-700',
    'bg-slate-900' // Final "Reset" Card
  ];

  const text = [
    '-Yo, this is arji i\'m an aspiring software dev studying BSIT in uclm. ',
    '-I want to be able to create unique apps that can help people',
    '-I love thinking of new startup ideas',
    '-My greatest asset is my ability to communicate my thoughts',
    '-I\'m currently learning AI concepts, database, and better UIs',
    'Know me again?' // Text for the final card
  ];

  const handleScroll = (e) => {
    if (isScrolling.current) return;
    isScrolling.current = true;

    if (e.deltaY > 0) {
      // Scroll Down -> Stops at the final reset card
      setActiveID((prev) => (prev < colorblocks.length - 1 ? prev + 1 : prev));
    } else if (e.deltaY < 0) {
      // Scroll Up -> Standard back navigation
      setActiveID((prev) => (prev > 0 ? prev - 1 : 0));
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 600); 
  };

  // Function to jump back to the start
  const handleReset = () => {
    setActiveID(0);
  };

  return (
    <div 
      onWheel={handleScroll}
      className='h-80 w-120 rounded-4xl relative cursor-ns-resize flex items-center justify-center'
      style={{ perspective: '1000px' }}
    >
      {colorblocks.map((colors, index) => {
        const isActive = index === activeID;
        const isPast = index < activeID;
        const isLastCard = index === colorblocks.length - 1;

        return (
          <motion.div
            key={index}
            animate={{
              y: isPast ? -350 : (index - activeID) * 15, // Slides up if past
              opacity: isPast ? 0 : 1,
              scale: isActive ? 1 : 1 - (index - activeID) * 0.05,
              zIndex: colorblocks.length - index,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 25,
            }}
            className={`h-64 w-full rounded-4xl flex flex-col justify-center absolute shadow-2xl p-8 text-left ${colors}`}
          >
            <h1 className="text-white text-2xl font-bold white-space:pre-line">
              {text[index]}
            </h1>

            {/* Render the Reset Option only on the last card */}
            {isLastCard && isActive && (
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                onClick={handleReset}
                className="mt-6 px-6 py-2 bg-white text-slate-900 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors shadow-lg"
              >
                ↺ Start Over
              </motion.button>
            )}
          </motion.div>
        );
      })}
      
      {/* Visual Indicator */}
      <div className="absolute -bottom-12 text-gray-500 text-xs font-mono">
        {activeID === colorblocks.length - 1 
          ? "END OF STACK" 
          : `SCROLL TO EXPLORE • ${activeID + 1}/${colorblocks.length}`}
      </div>
    </div>
  );
}

export default CardStack;