export default function App() {
  return (
    <>
      <div className="flex flex-col  ">
        <div className="flex flex-col items-center border border-black items-center">
          <h1 className="m-10 text-6xl font-bitcount">Zibaldone on the Web</h1>
        </div>
        <div className="flex flex-col items-center items-center">
          <p className="m-10 text-2xl font-serif text-center">a portfolio, not a journal. something in between my interests. zibaldone. a place to know me about me. this is a throwaway project meant to waste space. welcome and pls dont enjoy</p>
          <h1 className="text-4xl pt-15 font-serif font-[1000]">anyways, things that i like that will kinda give you an idea of who i am:</h1>
        </div>
        <div className="flex flex-row items-center justify-center gap-50 m-5 py-13 border border-black">
          <div className="h-100 w-100 bg-blue-900 flex items-center justify-center">MUSIC</div>
          <div className="h-100 w-100 bg-violet-900 flex items-center justify-center">SHOWS n MOVIES</div>
          <div className="h-100 w-100 bg-red-900 flex items-center justify-center">MY GF</div>
        </div>
      </div>
    </>
  )
}