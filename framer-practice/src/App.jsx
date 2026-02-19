import React from 'react'
import { delay, motion } from 'framer-motion'


function App() {

  const sectionVariant = {

    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
      },
    },
  }

  const divVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }

  const fadeOut = {
    hidden: { opacity: 0, y: 100 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      }
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, 
      transition:{
        duration: 1,
        ease: "easeIn",
        delay: 0.75,
      }
    }
  }


return (
  <div className='flex flex-col gap-10 overflow-x-hidden'>
    <motion.section variants={sectionVariant}
      initial='hidden'
      animate='show'
      className='grid grid-cols-3 p-10 gap-10'>
      <motion.div variants={divVariant}
        className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'>
        <motion.div className='bg-stone-100 w-20 h-20 rounded-lg'
          variants={fadeOut}></motion.div>
        <motion.div className='bg-stone-100 w-20 h-20 rounded-full'
          variants={fadeIn}></motion.div>
      </motion.div>
      <motion.div variants={divVariant}
        className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'>

        <motion.div className='w-1/3 h-1/3 bg-blue-300'
          animate={{
            scale: [1, 2, 2, 1],
            rotate: [0, 90, 180, 360],
            borderRadius: ["10%", "20%", "30%", "10%"],
          }}
          transition={{ duration: 5, ease: "easeOut", repeat: 2, delay: 1 }}
        ></motion.div>

      </motion.div>
      <motion.div variants={divVariant}
        className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></motion.div>
      <div className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></div>
      <div className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></div>
      <div className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></div>
    </motion.section>
  </div>
)
}

export default App
