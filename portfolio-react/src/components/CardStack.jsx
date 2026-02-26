function CardStack() {

    // const [count, setCount] = ('z-0');

    const [activeID, setActiveID] = useState(0);

    const handleActiveID = (id) => {
      setActiveID(id);
      console.log('This is ' + id);
    }

    // const handleButton = (id) => {
    //   console.log('hello world '+id);
    // }

    const buttons = ['btn1', 'btn2', 'btn3', 'btn4'];
    const colorblocks = [
      'bg-blue-700',
      'bg-red-700',
      'bg-green-700',
      'bg-purple-700'
    ]

    const text = ['this is arji an aspiring software dev', 'a student of BSIT in UCLM', 'react enthusiast', 'i want to create a unique app that can help people'];

    // const arrayText = [
    //   texts1{t1: 'sdsdg', t2: 'adsf', t3: 'kjh'},
    //   texts2{t1: 'w54er', t2: '43sga', t3: '23sd', t4: 'asdfljk'}
    // ]
    return (
      <>
          <div className='h-70 w-200 rounded-4xl relative'>
          {colorblocks.map((colors, index) => {
            const isActive = index === activeID;

            return (
              <motion.div
                key={index}
                animate={{
                  zIndex: isActive ? 40 : 10 - index,
                  y: isActive ? -10 : index * 8,
                  scale: isActive ? 1 : 0.95,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                }}
                className={`h-full w-full rounded-4xl flex items-center justify-center absolute top-0 shadow-xl ${colors}`}
              >
                <h1 className="text-white text-2xl font-bold">
                  {text[index]}
                </h1>
              </motion.div>
            );
          })}
        </div>
        <Buttons buttons={colorblocks} activeID={setActiveID}/>
      </>
    )
  }

  export default CardStack