
import './Home.css';
import { CiLocationOn } from "react-icons/ci";
import dest from './Destimage';
import ViswoneDemo from '../../public/assets/hero image.png'
import Image from 'next/image';
import Bana from '../../public/assets/home-banner-map.png'
import Pattern from '../../public/assets/pattern-bg.svg'
import Link from 'next/link';


const Destination = () => {
  const place = dest;
  

  return (
    <div className='overflow-hidden'>
      
      <div className='w-full absolute top-[-100px] left-[-50px] z-[-1]' >
        <Image src={Bana} width={600} height={500} alt='bg' />
      </div>
      <div className='w-full  pl-4 md:pl-0 relative overflow-hidden lg:pl-[150px] lg:flex items-center justify-between gap-10 huge pb-10' >
        <div className=' flex-col items-center justify-center lg:w-[45%] w-[90%] mx-auto pt-10'>
          
          <div className='mb-5 '>
            <h3 className='font-bold text-[32px] lg:text-[55px] text-[#fff] lg:leading-[65px] leading-[40px] lg:mb-[20px] mb-5 '>Check Visa Eligibility and Apply for Visa to any Country.</h3>
            <p className='lg:text-[18px] text-[16px] text-[#fff]  w-[90%]'>Find out if you are eligible, explore visa options for any country, and streamline your journey with our easy online application process.</p>
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
       
      </div>
      
    </div>
  )
}

export default Destination