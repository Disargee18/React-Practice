import React from 'react'
import { useState } from 'react';

function App() {

  const [result, setResult] = useState('');
  const [num, setNum] = useState([]);
  const [operand, setOperand] = useState([]);

  const buttons = [
    '9', '8', '7', '/',
    '6', '5', '4', '*',
    '3', '2', '1', '-',
    'C', '0', '=', '+'
  ];

  const handleButton = (value) => {
    if (value === 'C') {
      setResult('');
    }
    else if (value === '=') {
      setResult('');
      setResult(calculation());
      console.log(num);
      console.log(operand);
    }
    else {
      if (value === '+' || value === '-' || value === '*' || value === '/') {
        setOperand(prev => [...prev, value]);
      } else {
        setNum(prev => [...prev, value]);
      }
      setResult(prev => prev + value);
    }
  }

  const calculation = () => {
    let total = parseInt(num[0]);
    for(let i = 1; i<num.length; i++)
    {
      if(operand[i-1] === '+'){total+=parseInt(num[i])}
      if(operand[i-1] === '-'){total-=parseInt(num[i])}
      if(operand[i-1] === '*'){total*=parseInt(num[i])}
      if(operand[i-1] === '/'){total/=parseInt(num[i])}
    }
    return total;
  }

  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <div className='h-[650px] w-[600px] border border-black relative flex flex-col gap-10 p-10'>
        <div className='h-[120px] w-full border border-black flex items-center justify-end p-5'>
          <h1>{result}</h1>
        </div>
        <div className='h-full w-full grid grid-cols-4 grid-rows-4 gap-5'>
          {buttons.map((btn) => (
            <button key={btn}
              className='flex items-center justify-center border border-black text-2xl font-semibold hover:bg-black hover:text-white transition-colors active:bg-gray-700'
              onClick={() => handleButton(btn)}>
              {btn}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
