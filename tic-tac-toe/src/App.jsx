import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import shrek from './assets/shrek.webp'
import farquad from './assets/farquad.jpg'


function App() {

  const [shrekScore, setShrekscore] = useState(0);
  const [farScore, setFarscore] = useState(0);
  const [box, setBoxes] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState(0);



  const handleClick = (value) => {
    // console.log(value);
    if (box[value])
      return;

    const newBoxes = [...box];
    if (turn % 2 == 0) {
      newBoxes[value] = shrek;
      // console.log("shrek");
    } else {
      newBoxes[value] = farquad;
      // console.log("farquad");

    }


    setBoxes(newBoxes);
    setTurn(turn + 1);
    checkWinner(newBoxes);
  }

  const checkWinner = (box) => {
    const winningCombo = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ]


    for (let i = 0; i < winningCombo.length; i++) {
      const [a, b, c] = winningCombo[i];
      if (box[a] && box[a] === box[b] && box[a] === box[c]) {
        if (box[a] === shrek) {
          setShrekscore(shrekScore + 1);
          alert("Shrek wins!");
        } else {
          setFarscore(farScore + 1);
          alert("Farquad wins!");
        }
        setBoxes(Array(9).fill(""));
        setTurn(0);
      }
    }
  }







  // const handleClick = () => {
  //   if (count%2 == 0) {
  //     setContent(shrek);
  //     setCount(count + 1)
  //   }else{
  //     setContent(farquad);
  //     setCount(count + 1)
  //   }}





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
              <p className='text-lg'>Shrek: {shrekScore}</p>
              <p className='text-lg'>Mike: {farScore}</p>
            </div>

          </div>
        </div>

      </div>
      <div className='flex flex-col items-center gap-4 m-10'>
        <h1 className='text-2xl'><b>tic-tac-toe</b></h1>
        <div className='grid grid-cols-3 gap-2'>
          {box.map((box, index) => (
            <div
              className='w-20 h-20 border-2 border-black flex items-center justify-center text-4xl font-bold cursor-pointer'
              onClick={() => handleClick(index)}
              key={index}>
              <img src={box} alt="" />
            </div>
          ))}


          {/* <div className='w-20 h-20 border-2 border-black flex items-center justify-center text-4xl font-bold cursor-pointer' onClick={() => handleClick(0)}>
            <img src={setBoxes} alt="" />
          </div>
          <div className='w-20 h-20 border-2 border-black flex items-center justify-center text-4xl font-bold cursor-pointer' onClick={() => handleClick(1)}>
            <img src={box} alt="" />
          </div>
          <div className='w-20 h-20 border-2 border-black flex items-center justify-center text-4xl font-bold cursor-pointer' onClick={() => handleClick(2)}>
            <img src="" alt="" />
          </div>
          <div className='w-20 h-20 border-2 border-black flex items-center justify-center text-4xl font-bold cursor-pointer' onClick={() => handleClick(3)}>

          </div>
          <div className='w-20 h-20 border-2 border-black flex items-center justify-center text-4xl font-bold cursor-pointer' onClick={() => handleClick(4)}>

          </div>
          <div className='w-20 h-20 border-2 border-black flex items-center justify-center text-4xl font-bold cursor-pointer' onClick={() => handleClick(5)}>

          </div>
          <div className='w-20 h-20 border-2 border-black flex items-center justify-center text-4xl font-bold cursor-pointer' onClick={() => handleClick(6)}>

          </div>
          <div className='w-20 h-20 border-2 border-black flex items-center justify-center text-4xl font-bold cursor-pointer' onClick={() => handleClick(7)}>

          </div>
          <div className='w-20 h-20 border-2 border-black flex items-center justify-center text-4xl font-bold cursor-pointer' onClick={() => handleClick(8)}>

          </div> */}
        </div>
      </div>
    </>
  )
}

export default App
