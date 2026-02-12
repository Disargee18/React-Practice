import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import shrek from './assets/shrek.webp'
import farquad from './assets/farquad.jpg'


function App() {

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }

  // const [points, setPoints] = useState(0);
 

  return (
    <>
      <div className='w-100 h-full border-1 border-black absolute right-30 top-0 flex flex-col items-center'>
        <div className='flex flex-col'>
          <div className='flex flex-col justify-center items-center'>
            <h1 className='text-2xl m-10 '>Shrek vs Mike</h1>
            <div className='flex flex-row gap-20 items-center justify-center'>
              <img src={shrek} alt="shrek" className='cursor-pointer size-25' />
              <img src={farquad} alt="mike" className='cursor-pointer size-25' />
            </div>
          </div>
          <div className='flex flex-col mt-15'>
            <h1 className='text-2xl my-5'>Points</h1>
            <div className='align'>
              <p className='text-lg'>Shrek: {count}</p>
              <p className='text-lg'>Mike: 0</p>
            </div>

          </div>
        </div>

      </div>
      <div className='flex flex-col items-center gap-4 m-10'>
        <h1 className='text-2xl'><b>tic-tac-toe</b></h1>
        <div className='grid grid-cols-3 gap-2'>
          <div className='w-20 h-20 border-2 border-black flex items-center justify-center text-4xl font-bold cursor-pointer' onClick={handleClick}>

          </div>
          <div className='w-20 h-20 border-2 border-black flex items-center justify-center text-4xl font-bold cursor-pointer' onClick={handleClick}>

          </div>
          <div className='w-20 h-20 border-2 border-black flex items-center justify-center text-4xl font-bold cursor-pointer' onClick={handleClick}>

          </div>
          <div className='w-20 h-20 border-2 border-black flex items-center justify-center text-4xl font-bold cursor-pointer' onClick={handleClick}>

          </div>
          <div className='w-20 h-20 border-2 border-black flex items-center justify-center text-4xl font-bold cursor-pointer' onClick={handleClick}>

          </div>
          <div className='w-20 h-20 border-2 border-black flex items-center justify-center text-4xl font-bold cursor-pointer' onClick={handleClick}>

          </div>
          <div className='w-20 h-20 border-2 border-black flex items-center justify-center text-4xl font-bold cursor-pointer' onClick={handleClick}>

          </div>
          <div className='w-20 h-20 border-2 border-black flex items-center justify-center text-4xl font-bold cursor-pointer' onClick={handleClick}>

          </div>
          <div className='w-20 h-20 border-2 border-black flex items-center justify-center text-4xl font-bold cursor-pointer' onClick={handleClick}>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
