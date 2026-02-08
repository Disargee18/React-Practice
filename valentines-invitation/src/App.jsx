import { useState } from 'react'
import './App.css'
import rizz from './assets/shrek-shrek-rizz.gif'
import { useEffect } from 'react'

function App() {
  

  return (
    <>
      <div className="bg-[#FADADD] min-h-screen flex justify-center p-15">
        <div className='flex flex-col items-center'>
          <img src={rizz} alt="" className='h-60 m-5' />
          <p className='text-2xl m-5'>Hey what’s up baby girl, are you free this saturday? 😉</p>
          <div className='flex flex-row justify-between mt-10 gap-80'>
            <div className='bg-green-600 w-13 h-20 w-35 flex items-center justify-center'>
              <h1 className=''>YES</h1>
            </div>
            <div className='bg-red-600 w-13 h-20 w-35 flex items-center justify-center'>
              <h1>NO</h1>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
