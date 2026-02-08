import { useState } from 'react'
import './App.css'
import rizz from './assets/shrek-shrek-rizz.gif'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://tenor.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div className="bg-[#FADADD] min-h-screen flex justify-center p-20">
        <div className='flex flex-col items-center'>
          <img src={rizz} alt="" className='h-60 m-5' />
          <p className='text-2xl'>Hey what’s up baby girl, are you free this saturday? *wink</p>
          <div className='flex flex-row justify-between mt-20'>
            <div className='bg-green-600 w-13 h-20 w-25 flex items-center justify-center'>
              <h1 className=''>YES</h1>
            </div>
            <div className='bg-red-600 w-13 h-20 w-25 flex items-center justify-center'>
              <h1>NO</h1>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
