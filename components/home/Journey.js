import React from 'react';
import { IoTimeOutline } from "react-icons/io5";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { DiApple } from "react-icons/di";

const Journey = () => {
  return (
    <div className='bg-[#4d505b17] mb-[300px] pb-[300px]'>
      <div className='w-[80%] mx-auto lg:flex items-center justify-between py-10 '>
        <h2 className='font-medium text-[40px] text-[#0C0459]'>LATEST TRAVEL NEWS</h2>
        <button className='text-white bg-[#091027] text-[18px] px-[30px] py-4 transition-[5s] rounded-full cursor-pointer hover:bg-[#75602b] '>View All Articles</button>
      </div>
      <div className='lg:w-[80%] mx-auto flex flex-wrap items-center gap-6 '>
        <div className='bg-[#fff] rounded-[36px] pt-10 px-2 py-5 lg:w-[48%] w-[90%] mb-10 relative mx-auto'>
          <img src='https://assets-global.website-files.com/64dd9bc6b83c59b66ca71531/64e306fc2a103489dd324468_blog-post-01.jpg ' alt=''  className='w-[90%] mx-auto rounded-[20px] h-[500px]'/>
          {/* <div className='w-[90%] mx-auto mt-[20px] border-[1px] rounded-[20px] bg-[#4d505b17] p-3 flex items-center justify-between'>
            <div className='flex items-center gap-4  w-[80%]'>
              <img src='https://assets-global.website-files.com/64dd9bc6b83c59b66ca71531/64ddb151d41b22285a5545c3_blog-auhtor-01.jpg' alt='' className='w-[40px] h-[40px] rounded-full'/>
              <button className='text-white bg-[#091027] text-[18px] px-[20px] py-4  rounded-[8px] font-medium absolute top-[8%] right-[8%]'>September 22, 2023</button>
              <h2 className='text-[18px]'>ALex James</h2>
            </div>
            <p className='flex items-center w-[130px] text-[#0b1433] gap-3'><IoTimeOutline size={20}/>$ min read</p>
          </div> */}
          <h2 className='font-medium text-[32px] text-[#0b1433] lg:w-[90%] py-6 pb-2 pl-6 hover:text-[#5e53fa]' >Travelers Tapestry: Weaving Stories of Wanderlust</h2>
          <p className='w-[90%] text-[18px] text-[#0b1433] mx-auto'>Traveler's Tapestry: Where every journey unfolds as a vibrant thread in the fabric of wanderlust, weaving captivating stories of adventure.</p>
          {/* <h2 className='font-medium text-[20px] pl-6 pt-3 text-[#5e53fa] cursor-pointer hover:text-[#0b1433]'>View More</h2> */}
        </div>
        <div className='  lg:w-[48%] w-[90%] mb-10 mx-auto'>
          <div className='bg-[#fff] rounded-[20px] lg:py-4 lg:px-8 px-4 flex items-center mx-auto'>
            <img src='https://assets-global.website-files.com/64dd9bc6b83c59b66ca71531/64e30724afe3bbe1856bcc1e_blog-post-03.jpg' alt='' className='rounded-[16px] w-[40%]'/>
            <div>
              <h2 className='font-medium lg:text-[18px] text-[16px] pb-4 pl-6 pt-5 text-[#5e53fa]'>September 25, 2023</h2>
              <h2 className='font-medium lg:text-[26px] text-[#0b1433] text-[18px] pb-4 pl-6 cursor-pointer hover:text-[#5e53fa]' >Embark on Global Journeys: Travigo's Modern Travelers</h2>
            </div>
          </div>
          <div className='bg-[#fff] rounded-[20px] lg:py-4 lg:px-8 px-4 flex items-center mt-10'>
            <img src='https://assets-global.website-files.com/64dd9bc6b83c59b66ca71531/64e3070bd2653e49f24f2eb2_blog-post-02.jpg' alt='' className='rounded-[16px] w-[40%]'/>
            <div>
              <h2 className='font-medium lg:text-[18px] text-[16px] pb-4 pl-6 pt-5 text-[#5e53fa]'>September 25, 2023</h2>
              <h2 className='font-medium text-[18px] lg:text-[26px] text-[#0b1433] pb-4 pl-6 cursor-pointer hover:text-[#5e53fa]' >Exploring New Edge: Our Unique Expeditions App.</h2>
            </div>
          </div>
          <div className='bg-[#fff] rounded-[20px] lg:py-4 lg:px-8 px-4 flex items-center mt-10'>
            <img src='https://assets-global.website-files.com/64dd9bc6b83c59b66ca71531/64e3073182f1243aba85cc05_blog-post-04.jpg' alt='' className='rounded-[16px] w-[40%]'/>
            <div>
              <h2 className='font-medium lg:text-[18px] pl-6 pt-5 text-[16px] pb-4 text-[#5e53fa]'>September 25, 2023</h2>
              <h2 className='font-medium lg:text-[26px] text-[#0b1433] pb-4 pl-6 cursor-pointer hover:text-[#5e53fa] text-[16px]' >Journey Journals: Enthralling Tales of Travel Adventures</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='lg:w-[80%] w-[90%] lg:mt-[100px] mx-auto bg-[#0d0459d5] rounded-[30px] overflow-hidden absolute lg:left-[10%] left-6  flex-col items-center justify-center lg:pt-[80px] pt-[50px] pb-[50px]' id='bgimage'>
        
        <div className='text-white flex-col items-center justify-center  top-[15%]'>
          <h2 className='text-[30px] font-medium pb-2 text-center w-[80%] mx-auto z-10'>Ready To Travel? Get Started</h2>
          <p className='text-[20px] text-center pb-6 lg:w-[70%] w-[90%] mx-auto z-10'>You have seen the process now. It's simple, fast and seamless to explore the world with VisaWone App. Just download the app to get started.</p>
        </div>
        <div className='lg:flex gap-4 items-center justify-center mx-auto w-[80%]'>
        <a href='/' className='rounded-[16px] py-4 px-6 z-10  lg:top-[50%] top-[60%] lg:left-[53%] left-[40%] my-6 border-[0.1px] border-[#fff] flex items-center gap-2 bg-[#0b081d] hover:bg-[#e44f68] transition-[5s] text-[#fff]'><span><IoLogoGooglePlaystore /></span>Get on Android</a>
        <a href='/' className='rounded-[16px] py-4 px-6 z-10  lg:top-[50%] top-[60%] lg:left-[53%] left-[40%]  my-6 border-[0.1px] border-[#fff] flex items-center gap-2 bg-[#0b081d] hover:bg-[#e44f68] transition-[5s] text-[#fff]'><span><DiApple /></span> Get on iPhone</a>
        </div>
      </div>
    </div>
  )
}

export default Journey