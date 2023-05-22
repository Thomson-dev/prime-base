import React, { useState } from 'react'

const Tab = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
  

  return (
    <div className='flex space-x-10'>
        <button className='py-5 px-6 bg-[#f8f6f3] font-semibold text-xl text-green-800 shadow-sm rounded-t-xl'>Stablecoins</button>
        <button>Crypto</button>
    </div>
  )
}

export default Tab