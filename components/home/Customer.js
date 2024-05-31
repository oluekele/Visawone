import React from 'react'

const Customer = () => {
  return (
    <div className='flex-col items-center justify-center py-[100px] lg:pb-0  mx-auto'>
      <div className='flex items-center justify-center'>
      <h2 className='text-[#0b1433] lg:w-[550px] text-center lg:text-[50px] text-[30px] font-medium lg:leading-[60px]  pb-[50px]'>HOW DOES IT WORK?</h2>
      </div>
      
      <div className='lg:w-[1200px] w-[90%] mx-auto lg:flex  items-center gap-5 lg:pb-[100px] pb-[50px] '>
        <div className='flex items-center justify-between pb-5'>
          <div className='lg:mt-[-300px] w-[45%] lg:w-full relative '>
            <img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/64db7118ba599b65be3f204c_process-icon-01.svg' alt='' />
            <img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/64db7143ba599b65be3f4f21_process-step-01.svg' alt='' className='absolute top-0 right-0'/>
            <h2 className='text-[#0b1433] text-center text-[25px] font-medium leading-8 pb-2 '>Download The VisaWone App</h2>
            <p className='text-[14px] text-[#4d505b] text-center'>Available on Google Play and Apple Store. FREE download.</p>
          </div>
          <img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/64dc4c0f10991839faab3af7_process-decorative-icon.svg' alt='' className='mt-[-290px] lg:flex hidden rotate-[30deg]'/>
          <div className=' w-[45%] lg:w-full relative'>
            <img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/64dc47175995512c6d397fc2_process-icon-02.svg' alt='' className='w-[80%]'/>
            <img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/64dc473effef202bc73166da_process-step-02.svg' alt='' className='absolute top-0 right-3'/>
            <h2 className='text-[#0b1433] text-center text-[25px] font-medium  pb-2 '>Sign Up</h2>
            <p className='text-[14px] text-[#4d505b] text-center '>After successful visa application, you will be notified about the status of your application.</p>
          </div>
          <img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/64dc4c0f10991839faab3af7_process-decorative-icon.svg' alt='' className=' mt-[-150px] lg:flex hidden'/>
        </div>
        <div className='flex items-center justify-between'>
          <div className='w-[45%] lg:w-full relative'>
            <img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/64dc4749a926ddaf9d9ff7d1_process-icon-03.svg' alt='' />
            <img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/64dc4753e3175bfdb75e7dd9_process-step-03.svg' alt='' className='absolute top-0 right-[8px]'/>
            <h2 className='text-[#0b1433] text-center text-[25px] font-medium leading-10 pb-2 '>Check Visa Eligibility And Apply</h2>
            <p className='text-[14px] text-[#4d505b] text-center'>Avoid getting visa disapproved, check eligibility and depending on the results you will be be advised accordingly.</p>
          </div>
          <img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/64dc4c0f10991839faab3af7_process-decorative-icon.svg' alt='' className=' mt-[-250px] rotate-[-30deg] lg:flex hidden'/>
          
          <div className='lg:mt-[-300px] w-[45%] lg:w-full relative'>
            <img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/64dc475dbaa006e0f352737a_process-icon-04.svg' alt='' />
            <img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/64dc477a6eeab31cf4de41ba_process-step-04.svg' alt='' className='absolute top-0 right-[8px]'/>
            <h2 className='text-[#0b1433] text-center text-[25px] font-medium leading-8 pb-2 '>Embark on Your Trip</h2>
            <p className='text-[14px] text-[#4d505b] text-center'>Get your visa and flight ticket to your Destination. Happy Travels</p>
          </div>
        </div>
        
        
        
        
      </div>
      
    </div>
  )
}

export default Customer