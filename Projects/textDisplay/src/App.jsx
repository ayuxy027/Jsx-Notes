import React, { useState } from 'react';

const App = () => {
  const [display, setDisplay] = useState(true);
  
  function show() {
    setDisplay(true);
  }
  
  function hide() {
    setDisplay(false);
  }

  return (
    <>
      <div className='w-full h-screen bg-black'>
        <div className='text-[80px] text-center text-white font-mono'>Text Display</div>
        <div className='w-full bg-slate-500 h-[100px] mb-[100px]'>
          <h1 id='text' className={`absolute text-[30px] text-white left-[400px] top-[150px] font-thin ${display ? '' : 'hidden'}`}>Let's learn React</h1>
        </div>
        <button onClick={show} className='bg-white px-2 py-3 ml-[500px] p-[20px] w-[100px] rounded-3xl text-xl'>Show</button>
        <button onClick={hide} className='px-2 py-3 ml-[250px] p-[20px] bg-white w-[100px] rounded-3xl text-xl'>Hide</button>
      </div>
    </>
  );
};

export default App;
