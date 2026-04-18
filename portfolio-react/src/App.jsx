import React, { useState } from 'react'
import './App.css'
import { motion } from "framer-motion";
import CardStack from "./components/CardStack.jsx";
import TwinklingStars from './components/TwinklingStars.jsx';
import { ArrowUp } from 'lucide-react'


export default function App() {
  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen min-w-screen'>        
        <CardStack />
        <TwinklingStars/>
      </div >
    </>
  )
  
  



}