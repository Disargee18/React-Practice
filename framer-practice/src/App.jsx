import React from 'react'
import { motion } from 'framer-motion'


function App() {

  const sectionVariant = {

    hidden: { opacity: 0 },
    show: {
      opacity: 1,
        transition: {
        staggerChildren: 0.50,
        },
    },
  }

  const divVariant = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  }
return (
  <div className='flex flex-col gap-10 overflow-x-hidden'>
    <motion.section variants={sectionVariant}
      initial='hidden'
      animate='show'
      className='grid grid-cols-3 p-10 gap-10'>
      <motion.div variants={divVariant}
        className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></motion.div>
      <motion.div variants={divVariant}
        className='bg-slate-800 aspect-square rounded-lg justify-center flex items-center gap-10'></motion.div>
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
