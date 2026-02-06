import { useState } from 'react'
import './App.css'
import ExpenseItem from './components/ExpenseItem.jsx';

function App() {
  const [expenseForm, setExpenseForm] = useState({
    expenseName: "",
    amount: "",
    category: "",
    date: "",
    id: crypto.randomUUID()
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setExpenseForm((currentExpenseForm) =>
    ({
      ...currentExpenseForm,
      [name]: value
    })
    );
  };

  const [submitExpense, setSubmitExpense] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(expenseForm);

    const newEntry = {
      ...expenseForm,
      id: crypto.randomUUID()
    };

    setSubmitExpense((currentAllExpenses) =>
      [...currentAllExpenses, newEntry]);

    setExpenseForm({
      expenseName: "",
      amount: "",
      category: "",
      date: "",
    });
  };


  return (
    <>
      <div className="flex flex-col items-center m-10 text-white w-full h-full">
        <h1 className='font-bold text-2xl mb-10'>Expense Tracker</h1>

        <div className='flex justify-center items-center'>
          <form action="" className='flex flex-row gap-2' onSubmit={handleSubmit}>
            <input type="text" name="expenseName" id="id" value={expenseForm.expenseName} onChange={handleChange} className='border border-white bg-black-200' placeholder='Expense Name' />
            <input type="text" name="amount" id="id" value={expenseForm.amount} onChange={handleChange} className='border border-white bg-black-200' placeholder='Amount' />
            <select type="text" name="category" id="id" value={expenseForm.category} onChange={handleChange} className='border border-white bg-black-200'>
              <option value="" disabled selected>Select Category</option>
              <option value="Transportation">Transportation</option>
              <option value="Food">Food</option>
              <option value="Date">Date</option>
              <option value="Savings">Savings</option>
              <option value="Orders">Orders</option>
              <option value="Others">Others</option>
            </select>
            <input type="date" name="date" id="id" value={expenseForm.date} onChange={handleChange} className='border border-black bg-black-200' />
            <button className='border border-black p-2 bg-blue-700' type="submit"><b>Submit</b></button>
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

              {submitExpense.map(expenseObj =>
                <ExpenseItem
                  key={expenseObj.id}
                  item={expenseObj}
                />
              )}

            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
