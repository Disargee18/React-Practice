import './App.css'

export default function App() {
  return (
    <>
      <div className='flex items-center justify-center h-screen w-screen'>
        <div className="carousel rounded-box w-1/2">
          <div className="carousel-item w-full bg-blue-950 h-100 flex items-center justify-center text-white text-5xl font-bold tracking-wider">
            <h1>this is arji, an inspiring web developer</h1>
          </div>
          <div className="carousel-item w-full bg-blue-900 h-100 flex items-center text-white text-2xl leading-15 tracking-wider">
            <ol className='list-disc pl-10'>
              <li>studying BSIT in UCLM</li>
              <li>react enthusiast</li>
              <li>java amateur</li>
              <li>love for unique UI/UX</li>
              <li>love n hate relationship with vibe-coding</li>
              <li>pls hire me</li>
            </ol>
          </div>
          <div className="carousel-item w-full bg-blue-800 h-100 flex items-center text-white text-2xl leading-20 tracking-wider">
            <ol className='list-disc pl-10'>
              <li>i want to create a startup that could help people.</li>
              <li>coding lets me believe that anything could be possible </li>
              <li>i want to help companies improve their product through my service.</li>
              <li>i have a deep love for abstract things. </li>
            </ol>
          </div>
          <div className="carousel-item w-full bg-blue-700 h-100 flex items-center justify-center">
            <h1>Hello World</h1>
          </div>
        </div>
      </div>
    </>
  )
}