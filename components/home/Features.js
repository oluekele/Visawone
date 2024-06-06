import React from 'react'
import { FcGlobe } from "react-icons/fc";
import { GiCommercialAirplane } from "react-icons/gi";
import { PiBriefcaseLight } from "react-icons/pi";
import { FaBookOpenReader } from "react-icons/fa6";
import { IoMdGlobe } from "react-icons/io";


const Features = () => {
  return (
    <div className=' bg-[#eef3f8] py-10 lg:py-[100px] overflow-hidden' >
      <div className='flex-col items-center lg:mb-5 mb-0 lg:px-0 px-4'>
        <h2 className='font-bold text-center lg:text-[40px] text-[24px] pb-3'>What You Can Do On <span className='text-[#0d0459]'>Visawone App</span></h2>
        <p className='text-center w-[90%] lg:w-[55%] lg:text-[18px] text-[16px] mx-auto text-[#4d505b] pb-5'>Explore endless travel solutions offered by VisaWone App</p>
      </div>
      <div className='lg:flex gap-4 items-center '>
        <div className='flex lg:mt-[50px] lg:w-[100%]'>
          <div className='flex flex-wrap mx-auto lg:w-[80%]'>
            <div className='w-[360px] lg:w-[300px] rounded-[16px] bg-white hover:bg-[#0d0459] group border-[1] relative mx-auto p-10 mb-6 '>
              <div className='group-hover:text-[#fff] text-[#0d0459] mx-auto mb-5'>
                <IoMdGlobe size={80}/>
              </div>
              <h3 className=' group-hover:text-[#fff] mx-auto text-[24px] text-[#4d505b] font-bold '>Get Visa </h3>
              <p className=' group-hover:text-[#fff] mx-auto text-[16px] text-[#4d505bd5]'>Know the visa requirements of your next travel destination.</p>
            </div>
            <div className='w-[360px] lg:w-[300px] rounded-[16px] bg-white border-[1] relative mx-auto  hover:bg-[#0d0459] group p-10 mb-6'>
              <div className='group-hover:text-[#fff] mx-auto mb-5 text-[#0d0459]'>
              <FaBookOpenReader size={80}/>
              </div>
              <h3 className='group-hover:text-[#fff] mx-auto text-[24px] text-[#4d505b] font-bold '>Visa Eligibility</h3>
              <p className='group-hover:text-[#fff] mx-auto text-[16px] text-[#4d505bd5]'>Check if you are eligible to apply for a visa even before starting.</p>
            </div>
            
            <div className='w-[360px] lg:w-[300px] rounded-[16px] bg-white border-[1] relative mx-auto  hover:bg-[#0d0459] group p-10 mb-5'>
              <PiBriefcaseLight  size={80} className='group-hover:text-[#fff] mb-5 text-[#0d0459]'/>
            <div>
              <h3 className=' mx-auto text-[24px] text-[#4d505b] font-bold group-hover:text-[#fff]'>Find Jobs</h3>
              <p className='group-hover:text-[#fff] mx-auto text-[16px] text-[#4d505bd5]'>Explore jobs opportunities in different locations that is suitable for you. </p>
            </div>
            
          </div>
          <div className='w-[360px] lg:w-[300px] rounded-[16px] bg-white border-[1] relative mx-auto  hover:bg-[#0d0459] group p-10 mb-5'>
            <GiCommercialAirplane size={80} className='group-hover:text-[#fff] mb-5 text-[#0d0459]'/>
            <div>
              <h3 className=' mx-auto text-[24px] text-[#4d505b] font-bold group-hover:text-[#fff]'>Apply For Visa</h3>
              <p className='mx-auto text-[16px] text-[#4d505bd5] group-hover:text-[#fff]'>Easily apply for visa to your dream destinations across the world.</p>
            </div>
            
          </div>
          
          </div>
          
        </div>
          
      </div>
       
    </div>
  )
}

export default Features