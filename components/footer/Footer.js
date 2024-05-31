import React from 'react';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/assets/visawone log.png'


const Footer = () => {
  return (
    <div className='flex flex-col lg:w-[80%] lg:mx-auto w-full px-6 font-[Inter] text-[14px]'>
      <div className='border-b-2 pb-6 lg:flex items-center justify-between lg:text-[20px]'>
        <div className='flex flex-col  lg:w-[40%]'>
          <div >
          <Link href='/' ><Image src={Logo} width={180} height={50} alt='Company logo' className='w-[180px] z-[999]'/></Link>
            
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
            <li className='  pt-2 ' ><Link href='/'>Home</Link></li>
            <li className=' pt-2 '><Link href='/'>About</Link></li>
            <li className=' pt-2 '><Link href='/'>Feature</Link></li>
            <li className=' pt-2 '><Link href='/'>Team</Link></li>
            </ul>
          </div>
          <div >
            <h2 className='font-medium lg:text-[30px] text-[18px] '>Quick Link</h2>
            <ul className='flex-col items-center  font-[Inter]  font-medium '>
            <li className='' id='fontActive'><Link href="https://visawone.com/visa-interviews/">Visa Interviews</Link></li>
          <li className=' '><Link href="https://visawone.com/evisa/">eVisa</Link></li>
          <li className=' '><Link href="https://visawone.com/passport/">Passport</Link></li>
          <li className=' '><Link href="https://visawone.com/about/">About</Link></li>
          <li className=' '><Link href="https://visawone.com/contact/">Contact</Link></li>
            </ul>
          </div>
          <div className=' lg:w-[250px]'>
            <h2 className='font-medium lg:text-[30px] text-[18px] '>Utility Pages</h2>
            <ul className='flex-col items-center  font-[Inter]  font-medium '>
            <li className=' pt-2' ><Link href='/'>Style Guide</Link></li>
            <li className=' pt-2'><Link href='/'>Protected</Link></li>
            <li className=' pt-2'><Link href='/'>Not Found</Link></li>
            
            <li className=' pt-2'><Link href='/'>Licences</Link></li>
            <li className=' pt-2'><Link href='/'>Changelog</Link></li>
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