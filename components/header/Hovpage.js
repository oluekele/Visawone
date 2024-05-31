import React from 'react'
import './Header.css';
const Hovpage = () => {
  return (
    <div >
      <ul className='flex flex-col items-center text-[18px] font-[Inter]  font-medium z-[9999]  text-[#0B1433] lg:rounded-2xl lg:border-[1px] lg:absolute lg:top-[30px] lg:left-[-20px] w-[150px] cursor-pointer ' id='trans' >
        <li className='pt-4 hover:text-[#5E53FA]'>Pricing</li>
        <li className='pt-4 hover:text-[#5E53FA]'>Careers</li>
        <li className='pt-4 hover:text-[#5E53FA]'>Team</li>
        <li className='pt-4 hover:text-[#5E53FA] pb-4'>Blog</li>
      </ul>
    </div>
  )
}

export default Hovpage