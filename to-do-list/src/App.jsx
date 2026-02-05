import { useState } from 'react'

import './App.css'

function App() {

  const [newItem, setNewItem] = useState("");
  const [newtodo, setNewTodo] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setNewTodo((CurrentTodos) => {
    return [
      ...CurrentTodos,
      {
        id: crypto.randomUUID(),
        title: newItem,
        completed: false
      },]});


  }

  return (
    <>
      <h1 className='title'>To Do List</h1>
      <ul>
        {newtodo.map(todo => {
          return (
            <li key={todo.id}>
              <label>
                <input type="checkbox" checked={todo.completed}/>
                {todo.title}
              </label>
            </li>
          )
        })}
      </ul>

      <br /><br />
      <form className='new-item-form' onSubmit={handleSubmit}>
        <div>
          <label htmlFor="item">New Item</label><br />
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id='item' /> <br /> <br />
          <button className='add-btn' >Add</button>
        </div>
      </form>
    </>
  )

}

export default App
