import React from 'react'

const Experience = () => {
  return (
    <div className='overflow-hidden '>
      <div className='flex items-center flex-wrap justify-between w-[90%] lg:w-[75%] lg:h-[800px] mx-auto mt-[50px]'>
        <div className='relative lg:w-[50%] h-full' >
          <img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/64db4909fae15d8237a1c45b_story-mobile-wireframe.png' alt='peace' className='w-full lg:w-[80%] h-full'/>
          <div id='peace'></div>
        </div>
        <div className='lg:w-[40%]'>
          <h2 className='font-medium text-[30px] lg:text-[50px] text-[#0b1433] lg:leading-[55px] leading-9 pb-4 font-[Display]'>Seamless Travel Experiences with TripyFlow</h2>
          <p className='mx-auto text-[18px] lg:text-[20px] text-[#4d505bd5]'>Effortless and unforgettable travel adventures We understand that travel should be about experiencing beauty and wonder. That's why we've crafted a platform that puts seamless travel experiences at the forefront of your journey.</p>
          <button className='flex items-center gap-2 py-4 px-6 text-white rounded-[8px] lg:ml-0 text-[20px] mt-10 bg-[#25262b] hover:bg-[#f5b221]'>Start Free Trial</button>
        </div>
      </div>
      <div className='flex items-center flex-wrap justify-between w-[90%] lg:w-[75%] mx-auto my-5 lg:mb-10'>
        <h2 className='font-medium text-[30px] lg:text-[50px] lg:w-[35%] text-[#0b1433] lg:leading-[55px] leading-9 pb-4'>Numbers make a powerful statement.</h2>
        <p className='mx-auto text-[20px] text-[#4d505b] lg:w-[60%]'>Partner that anticipates your needs, streamlines your preparation, and guarantees that every moment of your vacation is full with delight and discovery. Travigo delivers exactly that, providing you with a full array of tools and services to make your travels easier, more fun, and worry-free.</p>
      </div>
      <div className='w-[90%] relative mb-6'>
        <div className=' flex items-center justify-center mx-auto'>
          <img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/64db5ce4c9987712d2688dd7_count-title-image-p-800.jpg' alt='count' className='w-[90%] lg:w-[730px] lg:h-[350px] rounded-[16px] h-[300px]'/>
        </div>
        <div className='lg:w-[90%]   '>
          <div className='flex flex-wrap items-center lg:justify-end lg:absolute md:absolute lg:top-[40%] lg:left-[40%] gap-4 left-[19%] top-[20%] ml-[20%] mt-[-100px]'>
            <div className='bg-white rounded-[16px] flex items-center gap-4 py-4 pl-6 w-[250px] border-[1px] '>
              <button className='bg-[#5e53fa] p-2 rounded-[4px]'><img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/64db573ba7b183503bc49a8f_count-icon-01.svg' alt='App' /></button>
              <div >
                <h2 className='font-bold text-[30px] leading-9 font-[Display]'>4.7<span className='text-[#ffce50]'>+</span></h2>
                <p className='mx-auto text-[18px] text-[#4d505bd5]'>App Rating</p>
              </div>
            </div>
            <div className='bg-white rounded-[16px] flex items-center gap-4 py-4 pl-6 w-[250px] border-[1px]'>
              <button className='bg-[#5e53fa] p-2 rounded-[4px]'><img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/64db573ba7b183503bc49a8f_count-icon-01.svg' alt='App' /></button>
              <div >
                <h2 className='font-bold text-[30px] leading-9 font-[Display]'>1.5<span className='text-[#5e53fa]'>+</span></h2>
                <p className='mx-auto text-[18px] text-[#4d505bd5]'>Design Elements</p>
              </div>
            </div>
            
          </div>
          <div className='flex flex-wrap items-center lg:justify-end lg:absolute md:absolute lg:top-[40%] lg:left-[40%] gap-4 mt-4 left-[19%] top-[55%] ml-[20%]'>
            <div className='bg-white rounded-[16px] flex items-center gap-4 py-4 pl-6 w-[250px] border-[1px]'>
              <button className='bg-[#5e53fa] p-2 rounded-[4px]'><img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/64db573ba7b183503bc49a8f_count-icon-01.svg' alt='App' /></button>
              <div >
                <h2 className='font-bold text-[30px] leading-9 font-[Display]'>5M<span className='text-[#ffce50]'>+</span></h2>
                <p className='mx-auto text-[18px] text-[#4d505bd5]'>App Rating</p>
              </div>
            </div>
            <div className='bg-white rounded-[16px] flex items-center gap-4 py-4 pl-6 w-[250px] border-[1px]'>
              <button className='bg-[#5e53fa] p-2 rounded-[4px]'><img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/64db573ba7b183503bc49a8f_count-icon-01.svg' alt='App' /></button>
              <div >
                <h2 className='font-bold text-[30px] leading-9 font-[Display]'>2K<span className='text-[#ffce50]'>+</span></h2>
                <p className='mx-auto text-[18px] text-[#4d505bd5]'>App Rating</p>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Experience