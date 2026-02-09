
function MainpageContent({item, ifYes, ifNo}) {
    return (
        <div className="mainpage-content flex flex-col items-center">
            <img src={item.image} alt="" className='h-60 m-5' />
            <p className='text-2xl m-5'>{item.text}</p>
            <div className='flex flex-row justify-between mt-10 gap-80'>
                <div className='bg-green-600 w-13 h-20 w-35 flex items-center justify-center' onClick={ifYes}>
                    <h1 className=''>YES</h1>
                </div>
                <div className='bg-red-600 w-13 h-20 w-35 flex items-center justify-center' onClick={ifNo}>
                    <h1>NO</h1>
                </div>
            </div>
        </div>
    );
}

export default MainpageContent;