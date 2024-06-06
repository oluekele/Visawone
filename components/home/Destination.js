
import './Home.css';
import { CiLocationOn } from "react-icons/ci";
import dest from './Destimage';
import ViswoneDemo from '../../public/assets/visawone demo.png'
import Image from 'next/image';
import Bana from '../../public/assets/home-banner-map.png'
import Pattern from '../../public/assets/pattern-bg.svg'

import Link from 'next/link';


const Destination = () => {
  const place = dest;
  

  return (
    <div className='overflow-hidden '>
      
      <div className='w-full absolute top-[-100px] left-[-50px] z-[-1]' >
        <Image src={Bana} width={600} height={500} alt='bg' />
      </div>
      <div className='w-full  pl-4 md:pl-0 relative overflow-hidden lg:pl-[150px] lg:flex items-center justify-between gap-10 huge pb-10' >
        <div className=' flex-col items-center justify-center lg:w-[45%] w-[90%] mx-auto pt-10'>
          
          <div className='mb-5 '>
            <h3 className='font-bold text-[32px] lg:text-[55px] text-[#fff] lg:leading-[65px] leading-[40px] lg:mb-[20px] mb-5 '>Check Visa Eligibility and Apply for Visa to any Country.</h3>
            <p className='lg:text-[18px] text-[16px] text-[#fff]  w-[90%]'>You can now apply, explore, and learn earning skills for success in any environment! VisaWone App is a trusted companion in exploring the world.</p>
          </div>
          <div className='flex flex-wrap gap-4 items-center '>
            <Link href='/' ><Image src="https://www.muna.app/assets/images/google.svg" alt='...'  width={200} height={80}/></Link>
            <Link href='/' ><Image src="https://www.muna.app/assets/images/apple.svg" alt='...'  width={200} height={80}/></Link>
          </div>
          
        </div>
        <div className='flex item-center mt-[50px] relative w-[300px] mx-auto lg:w-[41.5%] '>
          
          <Image src={ViswoneDemo} alt='phone' className='h-[600px]' width={300} height={600}/>

          <Image src={Pattern} width={600} height={500} alt='flow' className=' h-[400px]  object-cover mt-[150px] ml-[-100px] z-[-1]' />
          
        </div>
        <div className=' w-full mt-[-320px] lg:left-[62%] overflow-hidden z-[999] absolute top-[98%] md:left-[35%] left-[80px]' >
          <div className='flex items-center gap-4  w-[60%]'   id='imageleft'>
            {
              place.map((item)=>(
                <div key={item.id}>
                <div className='w-[150px] h-[190px] bg-[#fff] rounded-[20px] p-2 text-[14px]'>      
                <div>
                  <Image src={require('../../public/assets/' + item.imgs + '.png')} alt={item.name} className='rounded-[16px]'/>
                  <h3 className='font-medium opacity-[80%]'>{item.name}</h3>
                  <div className='flex items-center justify-between opacity-[80%]'>
                    <p className='flex items-center'><CiLocationOn />{item.location}</p>
                    <span className='bg-[#ffae00] px-2 mr-1 rounded-md'>{item.price}</span>
                  </div>     
                </div>
              </div>
            </div>
              ))
            }
            {
              place.map((item)=>(
                <div key={item.id} className='hidden lg:flex'>
                <div className='w-[150px] h-[190px] bg-[#fff] rounded-[20px] p-2 text-[14px]'>      
                <div>
                  <Image src={require('../../public/assets/' + item.imgs + '.png')} alt={item.name} className='rounded-[16px]'/>
                  <h3 className='font-medium opacity-[80%]'>{item.name}</h3>
                  <div className='flex items-center justify-between opacity-[80%]'>
                    <p className='flex items-center'><CiLocationOn />{item.location}</p>
                    <span className='bg-[#ffae00] px-2 mr-1 rounded-md'>{item.price}</span>
                  </div>     
                </div>
              </div>
            </div>
              ))
            }
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Destination