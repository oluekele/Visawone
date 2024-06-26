import React from 'react'
import Image from 'next/image';
import Process1_Step from '../../public/assets/process-step-01.svg'
import Process2_Step from '../../public/assets/process-step-02.svg'
import Process3_Step from '../../public/assets/process-step-03.svg'
import Process4_Step from '../../public/assets/process-step-04.svg'
import Download from '../../public/svg/download.svg'
import CheckList from '../../public/svg/Checklist.svg'
import SignUp from '../../public/svg/Sign up.svg'
import Trip from '../../public/svg/Trip.svg'

const Customer = () => {
  return (
    <div className='flex-col items-center justify-center lg:pt-[100px] pt-[50px] lg:pb-0  mx-auto'>
      <div className='flex items-center justify-center'>
      <h2 className='text-[#0b1433] lg:w-[550px] text-center lg:text-[40px] text-[24px] font-medium  pb-[50px]'>How Does It Work?</h2>
      </div>
      
      <div className='lg:w-[80%] w-[90%] mx-auto lg:flex  items-center gap-5 lg:pb-[100px] pb-[50px] '>
        <div className='flex items-center justify-between lg:w-[50%] pb-5'>
          <div className=' w-[45%] lg:w-[250px] relative mx-auto '>
            <Image src={Download} width={200} height={200} alt='' className='lg:w-[250px]'/>
            <Image src={Process1_Step} width={70} height={70} alt='' className='absolute top-0 lg:left-[70%] left-[50%]'/>
            <h2 className='text-[#0b1433] text-center text-[24px] font-medium leading-8 pb-2 '>Download App</h2>
            <p className='text-[16px] text-[#4d505b] text-center'>Available on Google Play and Apple Store.</p>
          </div>
          
          <div className=' w-[45%] lg:w-[220px] relative mx-auto'>
            <Image src={SignUp} width={200} height={200} alt='' className=' lg:w-[220px]'/>
            <Image src={Process2_Step} width={70} height={70} alt='' className='absolute top-0 lg:left-[70%] left-[50%]'/>
            <h2 className='text-[#0b1433] text-center text-[24px] font-medium  pb-2 '>Sign Up</h2>
            <p className='text-[16px] text-[#4d505b] text-center '>Get notified about the status of your visa application.</p>
          </div>
          
        </div>
        <div className='flex items-center justify-between lg:w-[45%] pb-5 mx-auto'>
          <div className='w-[45%] lg:w-[250px] relative'>
            <Image src={CheckList} width={200} height={200} alt='' className='lg:w-[250px]'/>
            <Image src={Process3_Step} width={70} height={70} alt='' className='absolute top-0 lg:left-[70%] left-[50%]'/>
            <h2 className='text-[#0b1433] text-center text-[24px] font-medium leading-10 pb-2 '>Check Visa Eligibility</h2>
            <p className='text-[16px] text-[#4d505b] text-center'>Check your eligibility before applying for Visa</p>
          </div>
         
          <div className='w-[45%] lg:w-[250px] relative'>
            <Image src={Trip} width={200} height={200} alt='' className='lg:w-[250px]'/>
            <Image src={Process4_Step} width={70} height={70} alt='' className='absolute top-0 lg:left-[70%] left-[50%]'/>
            <h2 className='text-[#0b1433] text-center text-[24px] font-medium leading-8 pb-2 '>Embark on Your Trip</h2>
            <p className='text-[16px] text-[#4d505b] text-center'>Get your visa and flight ticket to your Destination. Happy Travels</p>
          </div>
        </div>
       
      </div>
      
    </div>
  )
}

export default Customer