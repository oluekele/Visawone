
import './Home.css';
import { LuArrowDownToLine } from "react-icons/lu";
import { CiLocationOn } from "react-icons/ci";
import dest from './Destimage';
import ViswoneDemo from '../../public/assets/visawone demo.png'
import Image from 'next/image';


const Destination = () => {
  const place = dest;
  

  return (
    <div className='overflow-hidden'>
      
      <div className='w-full absolute top-[-100px] left-[-50px] z-[-1]' >
        <img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/64e344d88e117e23bb4ea916_home-banner-map.png' alt='background' />
      </div>
      <div className='w-full relative overflow-hidden lg:ml-[8%] pl-10 lg:flex items-center justify-between gap-10 pb-[100px]  ' >
        <div className='flex-col items-center justify-center lg:w-[45%]'>
          <div className='dream w-[250px] text-[#fff] py-2 text-[18px] lg:text-[20px] rounded-[50px] mb-5 '>
            <h3 className='text-center'>Organize your travel</h3>
          </div>
          <div className='mb-5'>
            <h3 className='font-bold text-[36px] lg:text-[60px] text-[#25262b] lg:leading-[65px] leading-[40px] lg:mb-[20px] mb-5 '>Explore visa, jobs, adventures, schools with  <span className='text-[#0C0459]'>VisaWone</span></h3>
            <p className='lg:text-[20px] text-[16px] text-[#4d505b] w-[80%]'>You can now apply, explore, and learn earning skills for success in any environment! VisaWone App is a trusted companion in explore the world.</p>
          </div>
          <div className='flex items-center relative text-2xl'>
            <button className=' text-white rounded-full bg-[#25262b] hover:bg-[#0C0459]'><a href='/' className='flex items-center gap-2 py-3 px-6'><LuArrowDownToLine size={20}/><span>Get Started</span></a></button>
            
          </div>
        </div>
        <div className='flex item-center mt-[50px] relative w-full lg:w-[55%] '>
          
          <Image src={ViswoneDemo} alt='phone' className='h-[600px]' width={300} height={600}/>

          <img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/64e340ad442ecdd8668014e3_home-banner-pattern-bg.svg' alt='flow' className=' h-[400px]  object-cover mt-[150px] ml-[-100px] z-[-1]' />
          
          
        </div>
        <div className=' w-full mt-[-320px] lg:left-[50%] overflow-hidden z-[999] absolute lg:top-[88%] left-[70px]' >
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
            <img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/65642fee16d0ec6bd3ec155a_client-logo-1.svg' alt='' className='w-[150px] lg:full'/>
            <img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/6564300bb06eaebaf49808bb_client-logo-2.svg' alt='' className='w-[150px] lg:full'/>
            <img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/6564300b85583d4c15aeea94_client-logo-3.svg' alt='' className='w-[150px] lg:full'/>
            <img src='https://assets-global.website-files.com/64da0495a0c05cbac93130da/6564302045db91a91b21ac3e_client-logo-4.svg' alt='' className='w-[150px] lg:full'/>
          </div>
          
      </div>
      
      
     
    </div>
  )
}

export default Destination