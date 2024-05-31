import React from 'react'
import Image from 'next/image';
import Process_Decor from '../../public/assets/process-decorative-icon.svg'
import Process1 from '../../public/assets/process-icon-01.svg'
import Process1_Step from '../../public/assets/process-step-01.svg'
import Process2 from '../../public/assets/process-icon-02.svg'
import Process2_Step from '../../public/assets/process-step-02.svg'
import Process3 from '../../public/assets/process-icon-03.svg'
import Process3_Step from '../../public/assets/process-step-03.svg'
import Process4 from '../../public/assets/process-icon-04.svg'
import Process4_Step from '../../public/assets/process-step-04.svg'

const Customer = () => {
  return (
    <div className='flex-col items-center justify-center py-[100px] lg:pb-0  mx-auto'>
      <div className='flex items-center justify-center'>
      <h2 className='text-[#0b1433] lg:w-[550px] text-center lg:text-[50px] text-[30px] font-medium lg:leading-[60px]  pb-[50px]'>HOW DOES IT WORK?</h2>
      </div>
      
      <div className='lg:w-[1200px] w-[90%] mx-auto lg:flex  items-center gap-5 lg:pb-[100px] pb-[50px] '>
        <div className='flex items-center justify-between pb-5'>
          <div className='lg:mt-[-300px] w-[45%] lg:w-full relative '>
            <Image src={Process1} width={200} height={200} alt='' />
            <Image src={Process1_Step} width={70} height={70} alt='' className='absolute top-0 right-0'/>
            <h2 className='text-[#0b1433] text-center text-[25px] font-medium leading-8 pb-2 '>Download The VisaWone App</h2>
            <p className='text-[14px] text-[#4d505b] text-center'>Available on Google Play and Apple Store. FREE download.</p>
          </div>
          <Image src={Process_Decor} width={80} height={40} alt='' className='mt-[-290px] lg:flex hidden rotate-[30deg]'/>
          <div className=' w-[45%] lg:w-full relative'>
            <Image src={Process2} width={200} height={200} alt='' className='w-[80%]'/>
            <Image src={Process2_Step} width={70} height={70} alt='' className='absolute top-0 right-3'/>
            <h2 className='text-[#0b1433] text-center text-[25px] font-medium  pb-2 '>Sign Up</h2>
            <p className='text-[14px] text-[#4d505b] text-center '>After successful visa application, you will be notified about the status of your application.</p>
          </div>
          <Image src={Process_Decor} width={80} height={40} alt='' className=' mt-[-150px] lg:flex hidden'/>
        </div>
        <div className='flex items-center justify-between'>
          <div className='w-[45%] lg:w-full relative'>
            <Image src={Process3} width={200} height={200} alt='' />
            <Image src={Process3_Step} width={70} height={70} alt='' className='absolute top-0 right-[8px]'/>
            <h2 className='text-[#0b1433] text-center text-[25px] font-medium leading-10 pb-2 '>Check Visa Eligibility And Apply</h2>
            <p className='text-[14px] text-[#4d505b] text-center'>Avoid getting visa disapproved, check eligibility and depending on the results you will be be advised accordingly.</p>
          </div>
          <Image src={Process_Decor} width={80} height={40} alt='' className=' mt-[-250px] rotate-[-30deg] lg:flex hidden'/>
          
          <div className='lg:mt-[-300px] w-[45%] lg:w-full relative'>
            <Image src={Process4} width={200} height={200} alt='' />
            <Image src={Process4_Step} width={70} height={70} alt='' className='absolute top-0 right-[8px]'/>
            <h2 className='text-[#0b1433] text-center text-[25px] font-medium leading-8 pb-2 '>Embark on Your Trip</h2>
            <p className='text-[14px] text-[#4d505b] text-center'>Get your visa and flight ticket to your Destination. Happy Travels</p>
          </div>
        </div>
        
        
        
        
      </div>
      
    </div>
  )
}

export default Customer