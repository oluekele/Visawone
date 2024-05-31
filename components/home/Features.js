import React from 'react'
import Image from 'next/image';
import Feature1 from '../../public/assets/feature-image-01.svg'
import Feature2 from '../../public/assets/feature-image-02.svg'
import Feature3 from '../../public/assets/feature-image-03.svg'
import Feature4 from '../../public/assets/feature-image-04.svg'
import Feature5 from '../../public/assets/feature-image-05.png'

const Features = () => {
  return (
    <div className=' bg-[#eef3f8] py-10 overflow-hidden' >
      <div className='flex-col items-center mb-10'>
        <h2 className='font-bold text-center text-[40px] pb-3'>WHAT YOU CAN DO ON <span className='text-[#5e53fa]'>VISAWONE APP</span></h2>
        <p className='text-center w-[90%] lg:w-[55%] lg:text-[24px] text-[20px] mx-auto text-[#4d505b] pb-5'>Explore endless solutions offered by VisaWone App</p>
      </div>
      <div className='lg:flex gap-10 items-center lg:w-[80%] mx-auto lg:h-[700px]'>
        <div className='flex-col mt-[50px] lg:w-[60%]'>
          <div className='flex  justify-center flex-wrap lg:w-full gap-6'>
            <div className='w-[320px] lg:w-[46%]  rounded-[16px] bg-white border-[1] relative mx-auto pb-10 mb-6'>
              <div className='w-[95%] mx-auto mb-5'>
              <Image src={Feature1} width={230} height={350} alt='' />
              <Image src={Feature2} width={150} height={200} alt='' className='absolute left-[40%] top-[20%]' />
              </div>
              <h3 className='w-[90%] mx-auto text-[22px] text-[#4d505b] font-bold'>Get Visa </h3>
              <p className='w-[90%] mx-auto text-[18px] text-[#4d505bd5]'>Know the visa requires to visit any destination.</p>
            </div>
            <div className='w-[320px] lg:w-[47%] rounded-[16px] bg-white border-[1] relative mx-auto pb-10 mb-6'>
              <div className='w-[95%] mx-auto mb-5'>
              <Image src={Feature3} width={230} height={350} alt='' className='w-[80%] mx-auto'/>
              
              </div>
              <h3 className='w-[80%] mx-auto text-[22px] text-[#4d505b] font-bold mt-[-65px]'>Visa Eligibility Checker</h3>
              <p className='w-[80%] mx-auto text-[18px] text-[#4d505bd5]'>Check if you are eligible to apply for a visa to any destination based on your visa type.</p>
            </div>
          </div>
          <div className='w-[80%] lg:w-full lg:flex rounded-[16px] bg-white border-[1] relative mx-auto pt-10 mb-10'>
            <div>
              <h3 className='w-[80%] mx-auto text-[24px] text-[#4d505b] font-bold '>Find Jobs</h3>
              <p className='w-[80%] mx-auto text-[20px] text-[#4d505bd5]'>Explore jobs opportunities in different locations that is suitable for you. </p>
            </div>
              <Image src={Feature4} width={230} height={350} alt='' className='w-[95%] mx-auto  h-[440px] lg:h-[240px]'/>
          </div>
        </div>
          <div className='w-[360px]  rounded-[16px] bg-white border-[1] relative mx-auto py-10 '>
            <div className='w-[95%] mx-auto mb-5'>
            <Image src={Feature5} width={230} height={350} alt='' className='w-[90%] mx-auto h-[410px]'/>
            
            </div>
            <h3 className='w-[85%] mx-auto text-[24px] text-[#4d505b] font-bold mt-[-30px]'>Apply For Visa</h3>
            <p className='w-[85%] mx-auto text-[20px] text-[#4d505bd5]'>Easily apply for visa to your dream destinations across the world.</p>
            <button className='flex items-center gap-2 py-4 px-6 text-white rounded-[8px] ml-8 text-[20px] mt-5 bg-[#25262b] hover:bg-[#f5b221]'>Get Started</button>
          </div>
      </div>
       
    </div>
  )
}

export default Features