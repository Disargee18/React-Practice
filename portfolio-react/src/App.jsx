import { useState } from 'react'
import './App.css'
import { motion } from "framer-motion";
import CardStack from "./components/CardStack.jsx";

export default function App() {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen w-screen'>
        <CardStack />
      </div >
    </>
  )

  



}