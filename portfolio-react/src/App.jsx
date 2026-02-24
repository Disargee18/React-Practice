import { useState } from 'react'
import './App.css'
import { delay, motion } from 'framer-motion'

export default function App() {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen w-screen'>
        <CardStack />
      </div >
    </>
  )

  function CardStack() {

    // const [count, setCount] = ('z-0');

    const [activeID, setActiveID] = useState(0);

    const handleActiveID = (id) => {
      setActiveID(id);
      console.log('This is ' + id);
    }

    // const handleButton = (id) => {
    //   console.log('hello world '+id);
    // }

    const buttons = ['btn1', 'btn2', 'btn3', 'btn4'];
    const colorblocks = [
      'bg-blue-700',
      'bg-red-700',
      'bg-green-700',
      'bg-purple-700'
    ]

    return (
      <>
          <div className='h-1/2 w-1/2 rounded-4xl relative'>
          {colorblocks.map((colors, index) => {
            const isActive = index === activeID;

            return (
              <motion.div
                key={index}
                animate={{
                  zIndex: isActive ? 40 : 10 - index,
                  y: isActive ? -10 : index * 8,
                  scale: isActive ? 1 : 0.95,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className={`h-full w-full rounded-4xl flex items-center justify-center absolute top-0 shadow-xl ${colors}`}
              >
                <h1 className="text-white text-2xl font-bold">
                  Card {index + 1}
                </h1>
              </motion.div>
            );
          })}
        </div>

          <div className='flex flex-row gap-10 m-10'>
            {buttons.map((id, index) => (
              <button
                key={id}
                className='btn btn-white'
                onClick={() => handleActiveID(index)}
              >{index + 1}</button>
            ))}

        </div>
      </>
    )
  }

  


}