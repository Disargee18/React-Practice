import { useState } from 'react'


function App() {
  const [note, setNote] = useState("");
  const [newNotes, setNewNotes] = useState([]);
  const deleteNote = (id) => {
    setNewNotes((updatedNotes) => {
      return updatedNotes.filter((noteObj) => noteObj.id !== id);
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(note);

    setNewNotes((CurrentNotes) => 
      [
        ...CurrentNotes,
        {
          id: crypto.randomUUID(),
          note: note
        }
      ]
    );
  }

  return (
    <>
      <div className='flex items-center flex-col'>
        <h1 className='text-2xl font-bold m-8'>Notes App</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='m-10 flex flex-col gap-4 justify-center items-center'>
          <p>Enter Notes Here: </p>
          <textarea value={note} onChange={e => setNote(e.target.value)} name="note" id="id" className='h-[20rem] w-[40rem] border border-black resize p-3'></textarea>
          <button>Submit</button>
        </div>
      </form>

      <br /><br /><br /><hr />
      <div className='flex items-center flex-col'>
        <h1 className='text-2xl font-bold m-8'>Your Notes</h1>
      </div>
      <div className='m-10 flex  gap-4'>
        <div className='flex flex-wrap gap-2'>
          {newNotes.map(noteObj => {
            return (
              <div className='flex flex-col gap-2'>
                <div className='h-[10rem] w-[10rem] border border-black p-3 overflow-auto' key={noteObj.id}>
                  {noteObj.note}
                </div>
                <button onClick={()=> deleteNote(noteObj.id)}>Delete</button>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
