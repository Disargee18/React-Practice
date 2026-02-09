import { use, useState } from 'react'
import './App.css'
import rizz from './assets/shrek-shrek-rizz.gif'
import MainpageContent from './components/MainpageContent.jsx'

function App() {
  const [show, setShow] = useState(false);

  const handleYes=()=>{
    setShow(true);
  }

  return (
    <>
      <div className="bg-[#FADADD] min-h-screen flex justify-center p-15">
        <MainpageContent
          item={{
            image: rizz,
            text: "Hey what’s up baby girl, are you free this saturday? 😉"
          }}
        />
        

      </div>
    </>
  )
}

export default App
