import { useState } from 'react'

function App() {

  return (
    <>
      <div className="flex flex-col items-center m-10">
        <h1 className='font-bold text-2xl mb-10'>Expense Tracker</h1>
        <div className='flex flex-row justify-center items-center gap-5'>
        <input type="text" name="expense-name" id="" className='border border-black' placeholder='Expense Name'/>
        <input type="text" name="expense-name" id="" className='border border-black' placeholder='Amount'/>
        <select type="text" name="expense-name" id="" className='border border-black'>
          <option value="" disabled selected>Select Category</option>
          <option value="transpo">Transportation</option>
          <option value="food">Food</option>
          <option value="date">Date</option>
          <option value="savings">Savings</option>
          <option value="orders">Orders</option>
          <option value="other">Others</option>
        </select>
        <input type="date" name="expense-name" id="" className='border border-black'/>
        <button className='border border-black p-2' type="submit">Submit</button>
        </div>
      </div>
    </>
  )
}

export default App
