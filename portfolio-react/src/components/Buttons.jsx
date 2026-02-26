import React from 'react'

function Buttons({buttons, activeID}){
  return (
      <div className='flex flex-row gap-10 m-10'>
            {buttons.map((id, index) => (
              <button
                key={id}
                className='btn btn-white'
                onClick={() => activeID(index)}
              >{index + 1}</button>
            ))}

        </div>
  )
}

export default Buttons
