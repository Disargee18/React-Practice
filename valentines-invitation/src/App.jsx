import { use, useState } from 'react'
import './App.css'
import rizz from './assets/shrek-shrek-rizz.gif'
import rizz2 from './assets/rizz-emoji.jpg'
import rizz3 from './assets/rizz3.jpg'
import beg from './assets/beg.webp'
import soundOn from './assets/speaker-filled-audio-tool.png'
import soundOff from './assets/mute.png'
import music from './assets/oui.mp3'
import MainpageContent from './components/MainpageContent.jsx'


function App() {
  const [counter, setCounter] = useState(0);

  const [content, setContent] = useState({
    image: rizz,
    text: "Hey what’s up baby girl, are you free this saturday? 😉"
  });

  const [sound, setSound] = useState(soundOff);


  const [audio] = useState(new Audio(music));

  const handleSound = () => {
    if (sound === soundOff) {
      setSound(soundOn);
      audio.play();
    }else{
      setSound(soundOff);
      audio.pause();
    }
  }


  const handleYes = () => {
    if (counter >= 1) {
      setContent({
        image: rizz3,
        text: "Yey!"
      });
    } else {
      setContent({
        image: rizz2,
        text: "Will you be my valentine? 🫦"
      });
      setCounter(counter + 1);
    }
  }

  const handleNo = () => {

    if (counter >= 1) {
      setContent(content);
    } else {
      setContent({
        image: beg,
        text: "PWEASE SAY YES 😩"
      });
    }

  }

  return (
    <>
      <div className="bg-[#FADADD] min-h-screen flex justify-center p-15">
        <div>
          <button onClick={handleSound}>
            <img src={sound} alt="" className='h-10 absolute top-5 right-5' />
          </button>
        </div>
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
