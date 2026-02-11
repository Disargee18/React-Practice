import rizz4 from '../assets/rizz4.png';


function ItineraryContent() {
    return (
        <>
            <div className='flex flex-row'>
                <div className='w-full h-screen '>
                    <div className='flex p-10 flex-col justify-center'>
                        <h1 className='text-5xl text-red-800'><b>VALENTINES DATE</b> </h1>
                        <p className='my-5 text-2xl mt-10 text-red-800'>1:00pm - Meet at Parkmall</p>
                        <p className='my-5 text-2xl text-red-800'>1:30pm - Go to SM to eaat and buy snacks</p>
                        <p className='my-5 text-2xl text-red-800'>2:30pm - Travel to IT Park</p>
                        <p className='my-5 text-2xl text-red-800'>3:00pm - Wait until dle na init</p>
                        <p className='my-5 text-2xl text-red-800'>4:00pm - Go to TOPS!!!!!</p>
                        <p className='my-5 text-2xl text-red-800'>4:30pm onwards - enjoy the view!</p>
                        <p className='my-5 text-2xl text-red-800'>7:00pm - go home and have dinner</p>

                    </div>

                </div>
                <div className='w-150 h-screen  '>
                    <div className='flex justify-center p-10 flex-col'>
                        <img src={rizz4} alt="" className='h-50 relative top--1' />
                        <h1 className='text-3xl text-blue-800'><b>Things to bring:</b> </h1>
                        <p className='m-3 text-2xl pl-20 text-blue-800'>*yourself</p>
                        <p className='m-3 text-2xl pl-20 text-blue-800'>*ur cute outfit</p>
                        <p className='m-3 text-2xl pl-20 text-blue-800'>*ur cute face</p>
                        <p className='m-3 text-2xl pl-20 text-blue-800'>*fan</p>
                        <p className='m-3 text-2xl pl-20 text-blue-800'>*extra shirt</p>
                        <p className='m-3 text-2xl pl-20 text-blue-800'>*ur cute & weird personality</p>
                    </div>


                </div>
            </div>
        </>
    )
}

export default ItineraryContent