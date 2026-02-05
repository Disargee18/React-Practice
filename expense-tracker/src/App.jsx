import { useState } from 'react'
import './App.css'

function App() {
  const [expenseForm, setExpenseForm] = useState({
    name: "",
    amount: "",
    category: "",
    date: "",
    id: crypto.randomUUID()
  });

  const
  return (
    <>
      <div className="flex flex-col items-center m-10">
        <h1 className='font-bold text-2xl mb-10'>Expense Tracker</h1>

        <div className='flex justify-center items-center'>
          <form action="" className='flex flex-row gap-2'>
            <input type="text" name="expenseName" id="id" value={expenseForm.name} onChange={handleChange} className='border border-black' placeholder='Expense Name' />
            <input type="text" name="amount" id="id" value={expenseForm.amount} className='border border-black' placeholder='Amount' />
            <select type="text" name="category" id="id" value={expenseForm.category} className='border border-black'>
              <option value="" disabled selected>Select Category</option>
              <option value="transpo">Transportation</option>
              <option value="food">Food</option>
              <option value="date">Date</option>
              <option value="savings">Savings</option>
              <option value="orders">Orders</option>
              <option value="other">Others</option>
            </select>
            <input type="date" name="date" id="id" value={expenseForm.date} className='border border-black' />
            <button className='border border-black p-2' type="submit">Submit</button>
          </form>
        </div>

        <div>
          <table className='table-auto border-seperate mt-10 w-[50rem]'>
            <thead>
              <tr>
                <th>Expense Name</th>
                <th>Amount</th>
                <th>Category</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sample Expense</td>
                <td>100 PHP</td>
                <td>Food</td>
                <td>2024-01-01</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
