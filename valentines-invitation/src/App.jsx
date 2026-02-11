  import { use, useState } from 'react'
  import './App.css'
  import rizz from './assets/shrek-shrek-rizz.gif'
  import rizz2 from './assets/rizz-emoji.jpg'
  import rizz3 from './assets/rizz3.jpg'
  import rizz4 from './assets/rizz4.png'
  import beg from './assets/beg.webp'
  import soundOn from './assets/speaker-filled-audio-tool.png'
  import soundOff from './assets/mute.png'
  import music from './assets/ouiloop.mp3'
  import MainpageContent from './components/MainpageContent.jsx'
  import ItineraryContent from './components/ItineraryContent.jsx'


  function App() {
    const [counter, setCounter] = useState(0);

    const [isSuccess, setIsSuccess] = useState(false);

   const handleSee = () => {
    setIsSuccess(true);
   }



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
      } else {
        setSound(soundOff);
        audio.pause();
      }
    }

    

    const handleYes = () => {
      if (counter >= 2) {
        console.log(counter);
      }
      
      else if (counter >= 1) {
        setContent({  
          image: rizz3,
          text: "Yey!"
        });
        console.log(counter);
      } else if(counter === 0) {
        setContent({
          image: rizz2,
          text: "Will you be my valentine? 🫦"
        });
        console.log(counter);
      }
      setCounter(counter + 1);
    }

    const handleNo = () => {

      if (counter >= 2) {
        setContent(content);
        setIsSuccess(true);
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
            <p className='h-10 absolute top-5 right-19'>want some more rizz? </p>
            <button onClick={handleSound}>
              <img src={sound} alt="" className='h-10 absolute top-5 right-5' />
            </button>
          </div>
          {isSuccess ? <ItineraryContent /> :

            <MainpageContent
              item={content}
              ifYes={handleYes}
              ifNo={handleNo}
              ifSuccess={counter >= 2}
              ifSee={handleSee}
            />
          }




        </div>
      </>
    )
  }

  export default App
