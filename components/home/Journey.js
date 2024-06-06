import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Journey = () => {
  return (
    <div className='bg-[#4d505b17] lg:mb-[300px] mb-[180px] pb-[300px]'>

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