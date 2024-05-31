import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='flex flex-col lg:w-[80%] lg:mx-auto w-full px-6 font-[Inter] text-[14px]'>
      <div className='border-b-2 pb-6 lg:flex items-center justify-between lg:text-[20px]'>
        <div className='flex flex-col  lg:w-[40%]'>
          <div >
            <a href='/' ><img src='https://visawone.com/wp-content/uploads/2024/03/VISAWONE-LOGO-TRANSPARENT-e1710764845883-300x61.png' alt='Company logo' className='w-[180px] z-[999] pb-4'/></a>
            
          </div>
          <p className='w-[90%] lg:w-[60%] lg:pb-10 pb-6 text-[#0C0459] text-[19px] '>Apply For Visa, Find Jobs & Schools Abroad. Learn Earning Skills.</p>
          
          <div className='flex gap-10 transition-all'>
            <FaInstagram size={20} className='cursor-pointer hover:-translate-y-0.5 hover:ease-in-out'/>
            <FaFacebook size={20} className='cursor-pointer hover:-translate-y-0.5 hover:ease-in-out'/>
            <FaXTwitter size={20} className='cursor-pointer hover:-translate-y-0.5 hover:ease-in-out'/>
            <FaPinterest  size={20} className='cursor-pointer hover:-translate-y-0.5 hover:ease-in-out'/>
          </div>
        </div>
        <div className='flex justify-between mt-[30px] lg:w-[60%]'>
          <div >
            <h2 className='font-medium  lg:text-[30px] text-[18px]'>Company</h2>
            <ul className='flex-col items-center  font-[Inter]  font-medium '>
            <li className='  pt-2 ' ><a href='/'>Home</a></li>
            <li className=' pt-2 '><a href='/'>About</a></li>
            <li className=' pt-2 '><a href='/'>Feature</a></li>
            <li className=' pt-2 '><a href='/'>Team</a></li>
            </ul>
          </div>
          <div >
            <h2 className='font-medium lg:text-[30px] text-[18px] '>Quick Link</h2>
            <ul className='flex-col items-center  font-[Inter]  font-medium '>
            <li className='' id='fontActive'><a href="https://visawone.com/visa-interviews/">Visa Interviews</a></li>
          <li className=' '><a href="https://visawone.com/evisa/">eVisa</a></li>
          <li className=' '><a href="https://visawone.com/passport/">Passport</a></li>
          <li className=' '><a href="https://visawone.com/about/">About</a></li>
          <li className=' '><a href="https://visawone.com/contact/">Contact</a></li>
            </ul>
          </div>
          <div className=' lg:w-[250px]'>
            <h2 className='font-medium lg:text-[30px] text-[18px] '>Utility Pages</h2>
            <ul className='flex-col items-center  font-[Inter]  font-medium '>
            <li className=' pt-2' ><a href='/'>Style Guide</a></li>
            <li className=' pt-2'><a href='/'>Protected</a></li>
            <li className=' pt-2'><a href='/'>Not Found</a></li>
            
            <li className=' pt-2'><a href='/'>Licences</a></li>
            <li className=' pt-2'><a href='/'>Changelog</a></li>
            </ul>
          </div>
          
        </div >
      </div>
      
      <div className='mt-[30px] flex items-center text-[20px] justify-center text-[#4d505b] pb-4'>
        <p>All Rights Reserved. @ {new Date().getFullYear()} Visawone International Ltd</p>
        
      </div>
      
    </div>
  )
}

export default Footer