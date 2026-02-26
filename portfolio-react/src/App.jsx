import { useState } from 'react'
import './App.css'
import { delay, motion } from 'framer-motion'
import Buttons from './components/Buttons'

export default function App() {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen w-screen'>
        <CardStack />
      </div >
    </>
  )

  



}