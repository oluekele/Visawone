import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import stories from './ClientData';

const Client = () => {
  const client = stories;

  
  const [result, setResult] = useState(0);
  
  
  const myFunction = (input, offset) => {
    setResult(result + input)

    const container = document.getElementById("container")
    if(Math.abs(result) === container.children.length-1){
        setResult(0)
    }
    console.log(result)
    container.style.translate = `${result * offset}px`
    
  };
 

  return (
    <div className='bg-[#25262b] w-full overflow-hidden relative'>
      <div className='lg:w-[80%] w-[90%] my-10 pt-[100px] pb-[50px] mx-auto'>
        <div className='flex items-center justify-between'>
          <h2 className='text-white w-[40%] text-[50px] leading-[60px]'>Client Satisfaction Stories</h2>
          
        </div>
        <div className='flex items-center gap-6' id="container">
          {
            client.map((item) =>(
              
              <div className='bg-white rounded-[30px] lg:px-8 px-4 mt-10 py-6 ' key={item.id} id='trans' result>
                
                <div className='flex items-center gap-4 pb-5 w-[300px]'>
                  <img src={item.img} alt={item.name} className='w-[40%] rounded-full'/>
                  <div>
                  <h2 className='font-bold text-[21px] text-[#0b1433]'>{item.name}</h2>
                  <span className='text-[#5e53fa] text-[20px]'>{item.position}</span>
                  </div>
                </div>
                <p className='pb-4 text-[20px]'>{item.description}
                </p>
                <p className='flex items-center gap-3'>
                  <img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/64db67d0c5b3933345106dc1_testimonial-star-icon.svg' alt='' />
                  <img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/64db67d0c5b3933345106dc1_testimonial-star-icon.svg' alt='' />
                  <img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/64db67d0c5b3933345106dc1_testimonial-star-icon.svg' alt='' />
                  <img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/64db67d0c5b3933345106dc1_testimonial-star-icon.svg' alt='' />
                  <img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/64db67d0c5b3933345106dc1_testimonial-star-icon.svg' alt='' />
                </p>
              </div>
            ))
          }
        </div>
        <div className='flex items-center justify-center pt-10 gap-4 lg:absolute top-[20%] right-[10%]'>
            <div className='bg-[#fff] rounded-full p-4 hover:bg-[#ffce50] cursor-pointer' onClick={()=> myFunction(-1, 350)}>
             <FaArrowLeft size={20} />
            </div>
            <div className='bg-white rounded-full p-4 hover:bg-[#ffce50] cursor-pointer' onClick={()=>myFunction(1, 150)}>
              <FaArrowRight size={20} />
            </div>
            
          </div>
      </div>

    </div>
  )
}

export default Client