
import './Home.css';
import { LuArrowDownToLine } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import dest from './Destimage';
import ViswoneDemo from '../../public/assets/visawone demo.png'
import Image from 'next/image';
import Bana from '../../public/assets/home-banner-map.png'
import Pattern from '../../public/assets/pattern-bg.svg'
import Client1 from '../../public/assets/client-logo-1.svg'
import Client2 from '../../public/assets/client-logo-2.svg'
import Client3 from '../../public/assets/client-logo-3.svg'
import Client4 from '../../public/assets/client-logo-4.svg'


const Destination = () => {
  const place = dest;
  

  return (
    <div className='overflow-hidden'>
      
      <div className='w-full absolute top-[-100px] left-[-50px] z-[-1]' >
        <Image src={Bana} width={600} height={500} alt='background' />
      </div>
      <div className='w-full pl-4 md:pl-0 relative overflow-hidden lg:pl-[150px] lg:flex items-center justify-between gap-10 huge ' >
        <div className=' flex-col items-center justify-center lg:w-[45%]  '>
          {/* <div className='dream w-[250px] text-[#fff] py-2 text-[18px] lg:text-[20px] rounded-[50px] mb-5 '>
            <h3 className='text-center'>Organize your travel</h3>
          </div> */}
          <div className='mb-5 '>
            <h3 className='font-bold text-[32px] lg:text-[55px] text-[#fff] lg:leading-[65px] leading-[40px] lg:mb-[20px] mb-5 '>Explore visa, jobs, adventures, schools with  <span className='text-[#0C0459]'>VisaWone</span></h3>
            <p className='lg:text-[18px] text-[16px] text-[#fff] w-[80%]'>You can now apply, explore, and learn earning skills for success in any environment! VisaWone App is a trusted companion in explore the world.</p>
          </div>
          <div className='flex items-center relative text-[18px]'>
            <button className=' text-white rounded-full bg-[#25262b] hover:bg-[#0C0459]'><a href='/' className='flex items-center gap-2 py-3 px-6'><LuArrowDownToLine size={20}/><span>Get Started</span></a></button>
            
          </div>
        </div>
        <div className='flex item-center mt-[50px] relative w-full lg:w-[55%] '>
          
          <Image src={ViswoneDemo} alt='phone' className='h-[600px]' width={300} height={600}/>

          <Image src={Pattern} width={600} height={500} alt='flow' className=' h-[400px]  object-cover mt-[150px] ml-[-100px] z-[-1]' />
          
          
        </div>
        <div className=' w-full mt-[-320px] lg:left-[54%] overflow-hidden z-[999] absolute lg:top-[103%] md:left-[70px] left-[55px]' >
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
          </div>
        </div>
      </div>
      
      <div className='border-t-[1px] lg:w-[80%] w-[95%] mx-auto py-[50px] lg:flex items-center justify-between'>
          <div>
            <p className='text-[35px] lg:w-[300px] text-[#0C0459]'>Visa Partners</p>
          </div>
          <div className='flex items-center lg:gap-10 gap-4 flex-wrap'>
            <Image src={Client1} width={150} height={50} alt='' className='w-[150px] lg:full'/>
            <Image src={Client2} width={150} height={50} alt='' className='w-[150px] lg:full'/>
            <Image src={Client3} width={150} height={50} alt='' className='w-[150px] lg:full'/>
            <Image src={Client4} width={150} height={50} alt='' className='w-[150px] lg:full'/>
          </div>
          
      </div>
      
      
     
    </div>
  )
}

export default Destination