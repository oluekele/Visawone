import React from 'react';
import { IoTimeOutline } from "react-icons/io5";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { DiApple } from "react-icons/di";
import Image from 'next/image';
import Blog1 from '../../public/assets/blog-post-01.jpg'
import Blog2 from '../../public/assets/blog-post-02.jpg'
import Blog3 from '../../public/assets/blog-post-03.jpg'
import Blog4 from '../../public/assets/blog-post-04.jpg'

const Journey = () => {
  return (
    <div className='bg-[#4d505b17] lg:mb-[300px] mb-[150px] pb-[300px]'>
      {/* <div className='w-[80%] mx-auto lg:flex items-center justify-between py-10 '>
        <h2 className='font-medium text-[24px] text-[#0C0459]'>LATEST TRAVEL NEWS</h2>
        <button className='text-white bg-[#091027] text-[18px] px-[30px] py-4 transition-[5s] rounded-full cursor-pointer hover:bg-[#75602b] '>View All Articles</button>
      </div>
      <div className='lg:w-[80%] mx-auto flex flex-wrap items-center gap-6 '>
        <div className='bg-[#fff] rounded-[36px] pt-10 px-2 py-5 lg:w-[48%] w-[90%] mb-10 relative mx-auto'>
          <Image src={Blog1} width={350} height={500} alt=''  className='w-[90%] mx-auto rounded-[20px] h-[500px]'/>
          
          <h2 className='font-medium text-[24px] text-[#0b1433] lg:w-[90%] py-6 pb-2 pl-6 hover:text-[#5e53fa]' >Travelers Tapestry: Weaving Stories of Wanderlust</h2>
          <p className='w-[90%] text-[18px] text-[#0b1433] mx-auto'>Traveler&rsquo;s Tapestry: Where every journey unfolds as a vibrant thread in the fabric of wanderlust, weaving captivating stories of adventure.</p>
          
        </div>
        <div className='  lg:w-[48%] w-[90%] mb-10 mx-auto'>
          <div className='bg-[#fff] rounded-[20px] lg:py-4 lg:px-8 px-4 flex items-center mx-auto'>
            <Image src={Blog3} width={200} height={200} alt='' className='rounded-[16px] w-[40%]'/>
            <div>
              <h2 className='font-medium lg:text-[18px] text-[16px] pb-4 pl-6 pt-5 text-[#5e53fa]'>September 25, 2023</h2>
              <h2 className='font-medium lg:text-[24px] text-[#0b1433] text-[18px] pb-4 pl-6 cursor-pointer hover:text-[#5e53fa]' >Embark on Global Journeys: Travigo&rsquo;s Modern Travelers</h2>
            </div>
          </div>
          <div className='bg-[#fff] rounded-[20px] lg:py-4 lg:px-8 px-4 flex items-center mt-10'>
            <Image src={Blog2} width={200} height={200} alt='' className='rounded-[16px] w-[40%]'/>
            <div>
              <h2 className='font-medium lg:text-[18px] text-[16px] pb-4 pl-6 pt-5 text-[#5e53fa]'>September 25, 2023</h2>
              <h2 className='font-medium text-[18px] lg:text-[24px] text-[#0b1433] pb-4 pl-6 cursor-pointer hover:text-[#5e53fa]' >Exploring New Edge: Our Unique Expeditions App.</h2>
            </div>
          </div>
          <div className='bg-[#fff] rounded-[20px] lg:py-4 lg:px-8 px-4 flex items-center mt-10'>
            <Image src={Blog4} width={200} height={200} alt='' className='rounded-[16px] w-[40%]'/>
            <div>
              <h2 className='font-medium lg:text-[18px] pl-6 pt-5 text-[18px] pb-4 text-[#5e53fa]'>September 25, 2023</h2>
              <h2 className='font-medium lg:text-[24px] text-[#0b1433] pb-4 pl-6 cursor-pointer hover:text-[#5e53fa] text-[16px]' >Journey Journals: Enthralling Tales of Travel Adventures</h2>
            </div>
          </div>
        </div>
      </div> */}

      <div className='lg:w-[80%] w-[90%] lg:mt-[100px] mx-auto bg-[#0d0459] rounded-[30px] overflow-hidden absolute lg:left-[10%] left-6  flex-col items-center justify-center lg:pt-[80px] pt-[50px] pb-[50px] z-10' id='bgimage'>
        
        <div className='text-white flex-col items-center justify-center  top-[15%]'>
          <h2 className='text-[24px] font-medium pb-2 text-center w-[80%] mx-auto z-10'>Ready To Travel? Get Started</h2>
          <p className='text-[16px] text-center pb-6 lg:w-[70%] w-[90%] mx-auto z-10'>You have seen the process now. It&rsquo;s simple, fast and seamless to explore the world with VisaWone App. Just download the app to get started.</p>
        </div>
        <div className='flex flex-wrap gap-4 items-center justify-center mx-auto w-[80%] '>
        <a href='/' className='rounded-[16px] py-4 px-6 z-10  lg:top-[50%] top-[60%] lg:left-[53%] left-[40%] lg:my-6 border-[0.1px] border-[#fff] flex items-center gap-2 bg-[#0b081d] hover:bg-[#e44f68] transition-[5s] text-[16px] text-[#fff]'><span><IoLogoGooglePlaystore /></span>Get on Android</a>
        <a href='/' className='rounded-[16px] py-4 px-6 z-10  lg:top-[50%] top-[60%] lg:left-[53%] left-[40%]  lg:my-6 border-[0.1px] border-[#fff] flex items-center gap-2 bg-[#0b081d] text-[16px] hover:bg-[#e44f68] transition-[5s] text-[#fff]'><span><DiApple /></span> Get on iPhone</a>
        </div>
      </div>
    </div>
  )
}

export default Journey