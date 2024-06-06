'use client'
import React, { useState } from 'react';
import './Header.css';
import { LuArrowDownToLine } from "react-icons/lu";
import { MdOutlineMenu } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import Image from 'next/image';
import Logo from '../../public/assets/visawone log.png'
import Link from 'next/link';



const Header = () => {
  


  const [sideNav, setSideNav] = useState(false);
  return (
    <div className='lg:w-[80%] w-[90%] mx-auto flex items-center justify-between lg:pt-[40px] pt-[30px] lg:pb-[40px] pb-[20px]' >
      <div >
        <Link href='/' ><Image src={Logo} width={180} height={50} alt='Company logo' className='w-[180px] z-50'/></Link>
        
      </div>
      <div className='lg:flex items-center hidden gap-10 '>
        <ul className='flex items-center gap-6 text-[18px]  font-[600] '>
          <li><Link href="https://visawone.com/visa-interviews/">Visa Interviews</Link></li>
          <li><Link href="https://visawone.com/evisa/">eVisa</Link></li>
          <li><Link href="https://visawone.com/passport/">Passport</Link></li>
          <li><Link href="https://visawone.com/about/">About</Link></li>
          <li><Link href="https://visawone.com/contact/">Contact</Link></li>
          
        </ul>
        <button className='flex items-center text-[16px] gap-2 py-3 px-6 text-white rounded-full bg-[#25262b] hover:bg-[#0C0459]'><LuArrowDownToLine size={20}/><span>Download App</span></button>
      </div>
      <div className='text-white cursor-pointer bg-[#25262b] p-5 relative rounded-[8px] lg:hidden z-[999]' onClick={() => setSideNav(!sideNav)}>
      <MdOutlineMenu size={20} />
      </div>
      <div className={sideNav 
        ? 'fixed left-0 top-[100px] py-4 px-6 bg-[#fff] z-[999] pb-10  duration-200 w-[300px]'  
        : 'fixed top-[-100%] bg-[#fff]  duration-200 z-[999] w-[300px]'}>
        <div className='flex-col items-center gap-10 w-[150px]'>
          <ul className='flex-col items-center text-[18px]   font-medium  w-[70px]'>
            
            <li className=' pb-2 w-[150px]' ><a href="https://visawone.com/visa-interviews/">Visa Interviews</a></li>
          <li className=' pb-2'><Link href="https://visawone.com/evisa/">eVisa</Link></li>
          <li className=' pb-2'><Link href="https://visawone.com/passport/">Passport</Link></li>
          <li className=' pb-2'><Link href="https://visawone.com/about/">About</Link></li>
          <li className=' pb-2'><Link href="https://visawone.com/contact/">Contact</Link></li>
          </ul>
          <button className='flex text-[16px] items-center gap-2 py-4 mt-10 px-6 text-white rounded-full w-[200px] bg-[#25262b] hover:bg-[#0C0459]'><LuArrowDownToLine size={20}/><span>Download App</span></button>
        </div>
        <IoClose className='absolute top-[10%] left-[250px] cursor-pointer' onClick={() => setSideNav(false)}/>
      </div>
    </div>
  )
}

export default Header