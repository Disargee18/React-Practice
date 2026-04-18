import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
// Removed unused h1 import from framer-motion/client

function CardStack() {
  const [activeID, setActiveID] = useState(0);
  const isScrolling = useRef(false);

  const colorblocks = [
    'bg-black', 'bg-black', 'bg-black', 'bg-black', 'bg-black', 'bg-black', 'bg-black'
  ];

  const textData = [
    ["Yo, this is Arji. I'm an aspiring software dev studying BSIT in UCLM."],
    ["I want to be able to create unique apps that can help people"],
    ["I love thinking of new startup ideas"],
    ["My greatest asset is my ability to communicate my thoughts"],
    ["Learning AI concepts", "Database management", "Better UI/UX designs"],
    ["Github.com", "LinkedIn", "Email", "Instagram"],
    ["Know me again?"]
  ];

  // Logic for moving up and down
  const moveUp = () => {
    setActiveID((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const moveDown = () => {
    setActiveID((prev) => (prev < colorblocks.length - 1 ? prev + 1 : prev));
  };  

  const handleScroll = (e) => {
    if (isScrolling.current) return;
    isScrolling.current = true;

    if (e.deltaY > 0) {
      moveDown();
    } else if (e.deltaY < 0) {
      moveUp();
    }

    setTimeout(() => {
      isScrolling.current = false;
    }, 600);
  };

  const handleReset = () => setActiveID(0);

  return (
    <div className="relative flex items-center gap-8">
      {/* 1. Main Card Stack */}
      <div
        onWheel={handleScroll}
        className='h-80 w-200 rounded-4xl relative cursor-pointer flex items-center justify-center'
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
                y: isPast ? -350 : (index - activeID) * 15,
                opacity: isPast ? 0 : 1,
                scale: isActive ? 1 : 1 - (index - activeID) * 0.05,
                zIndex: colorblocks.length - index,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className={`h-80 w-200 rounded-4xl flex flex-col justify-center absolute shadow-2xl p-8 text-left ${colors} border border-white/20`}
            >
              <div className="text-white">
                {textData[index].length > 1 ? (
                  <ul className="list-disc list-inside space-y-2">
                    {textData[index].map((item, i) => (
                      <li key={i} className="text-xl leading-tight">{item}</li>
                    ))}
                  </ul>
                ) : (
                  <h1 className="text-2xl leading-snug">{textData[index][0]}</h1>
                )}
              </div>

              {isLastCard && isActive && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={handleReset}
                  className="mt-6 px-6 py-2 bg-white text-black rounded-full text-sm hover:bg-gray-200 transition-colors self-start"
                >
                  ↺ Start Over
                </motion.button>
              )}
            </motion.div>
          );
        })}

        {/* Status Indicator */}
        <div className="absolute -bottom-20 text-gray-500 text-xs font-mono">
          {activeID === colorblocks.length - 1 ? "END" : `${activeID + 1}/${colorblocks.length}`}
        </div>
      </div>

      {/* 2. Side Navigation Buttons */}
      <div className="flex flex-col gap-2 z-50">
        <button
          onClick={moveUp}
          disabled={activeID === 0}
          className="p-3 rounded-full border border-white/20 bg-black text-white hover:bg-white hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Previous Card"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>

        <button
          onClick={moveDown}
          disabled={activeID === colorblocks.length - 1}
          className="p-3 rounded-full border border-white/20 bg-black text-white hover:bg-white hover:text-black disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Next Card"
        >
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CardStack;