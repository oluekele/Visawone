import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import New from '../../public/assets/new.jpeg'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io';

const Journey = () => {
  return (
    <div className='bg-[#4d505b17] lg:mb-[300px] mb-[180px] pb-[300px] '>
      <div className='lg:flex items-center mx-auto lg:w-[80%] w-[90%] justify-between lg:pt-[100px] py-[50px] lg:py-0'>
        <div className='lg:w-[45%] overflow-hidden border-2 rounded-2xl h-[400px] mb-10 lg:pb-0'>
          <Image src={New} alt=".." width={400} height={400} className='object-cover w-full h-full'/>
        </div>
        <div className='flex flex-col lg:w-[45%]'>
          <h2 className='lg:text-[40px] text-[24px] text-[#0b1433] font-medium pb-5 '>Organize Your Trip, On Your Time</h2>
          <p className='text-[18px] pb-5 z-10'>Our app allows you to get the full travel services from the comfort of your home. VisaWone App. Download the app to get started.</p>
          <div className='flex justify-start pt-5 w-full'>
            <div className='flex flex-col  justify-start  w-full'>
              <h2 className='flex items-center gap-4 text-[18px]  pb-5 '><span><IoIosCheckmarkCircleOutline size={20} className='text-[#0d0459]' /></span>Fast Application</h2>
              <h2 className='flex items-center gap-4 text-[18px]  pb-5 '><span><IoIosCheckmarkCircleOutline size={20} className='text-[#0d0459]' /></span>Live Chat. Available 24/7</h2>
            </div>
            <div className='flex flex-col justify-start  w-full'>
              <h2 className='flex items-center gap-4 text-[18px]  pb-5 '><span><IoIosCheckmarkCircleOutline size={20} className='text-[#0d0459]' /></span>High Approval Rate</h2>
              <h2 className='flex items-center gap-4 text-[18px]  pb-5 '><span><IoIosCheckmarkCircleOutline size={20} className='text-[#0d0459]' /></span>Explore Travel</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:w-[80%] md:w-[90%] w-full lg:mt-[100px] mx-auto bg-[#0d0459] md:rounded-[30px] overflow-hidden absolute lg:left-[10%] md:left-6 flex-col items-center justify-center lg:pt-[80px] pt-[50px] pb-[50px] z-10' id='bgimage'>
        
        <div className='text-white flex-col items-center justify-center  top-[15%]'>
          <h2 className='text-[26px] font-medium pb-2 text-center w-[80%] mx-auto z-10'>Ready To Travel? Get Started</h2>
          <p className='text-[18px] text-center pb-6 lg:w-[70%] w-[90%] mx-auto z-10'>You have seen the process now. It&rsquo;s simple, fast and seamless to explore the world with VisaWone App. Download the app to get started.</p>
          
        </div>
        <div className='flex flex-wrap gap-4 items-center justify-center mx-auto w-[80%] '>
            <Link href='/' ><Image src="https://www.muna.app/assets/images/google.svg" alt='...'  width={200} height={80}/></Link>
            <Link href='/' ><Image src="https://www.muna.app/assets/images/apple.svg" alt='...'  width={200} height={80}/></Link>
        </div>
        
      </div>
    </div>
  )
}

export default Journey