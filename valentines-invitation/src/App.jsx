import { use, useState } from 'react'
import './App.css'
import rizz from './assets/shrek-shrek-rizz.gif'
import rizz2 from './assets/rizz-emoji.jpg'
import rizz3 from './assets/rizz3.jpg'
import beg from './assets/beg.webp'
import MainpageContent from './components/MainpageContent.jsx'

function App() {
  const counter = 0;

  const [content, setContent] = useState({
    image: rizz,
    text: "Hey what’s up baby girl, are you free this saturday? 😉"
  });

  const handleYes = () => {
    setContent({
      image: rizz2,
      text: "Will you be my valentine? 🫦"
    });
    counter++;
  }

  const handleNo = () => {
    setContent({
      image: beg,
      text: "PWEASE SAY YES 😩"
    });
  }

  const handleNew = () => {
    if(counter>2){
      setContent({
        image: rizz3,
        text: "I guess you don't want to be my valentine 😔"
      });
    }
  }

  return (
    <>
      <div className="bg-[#FADADD] min-h-screen flex justify-center p-15">
        <MainpageContent
          item={content}
          ifYes={handleYes}
          ifNo={handleNo}
        />
        

      </div>
    </>
  )
}

export default App
