import { use, useState } from 'react'


function MainpageContent({ item, ifYes, ifNo, ifSuccess, ifSee }) {
    return (
        <div className="flex flex-col items-center z-50 relative w-full max-w-sm md:max-w-2xl px-4">
            {/* Responsive Image Height */}
            <img src={item.image} alt="" className='h-48 md:h-72 object-contain m-5' />

            <p className='text-xl md:text-3xl font-medium text-center m-5'>{item.text}</p>

            {/* Buttons: Column on mobile, Row on desktop */}
            <div className='flex flex-col md:flex-row justify-center items-center mt-6 gap-4 md:gap-20 w-full'>
                {!ifSuccess ? (
                    <>
                        <button className='bg-green-600 w-full md:w-40 h-16 md:h-20 flex items-center justify-center rounded-xl text-white font-bold shadow-lg' onClick={ifYes}>
                            YES
                        </button>
                        <button className='bg-red-600 w-full md:w-40 h-16 md:h-20 flex items-center justify-center rounded-xl text-white font-bold shadow-lg' onClick={ifNo}>
                            NO
                        </button>
                    </>
                ) : (
                    <button className='bg-pink-600 w-full md:w-64 h-20 flex items-center justify-center rounded-xl text-white shadow-xl animate-bounce' onClick={ifSee}>
                        <h1 className='text-xl'><b>itinerary?</b></h1>
                    </button>
                )}
            </div>
        </div>
    );
}
export default MainpageContent;