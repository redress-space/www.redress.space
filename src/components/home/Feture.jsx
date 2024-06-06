
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useTheme } from 'next-themes'


import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


const Compatibility_Test = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const { theme } = useTheme();
  
  return (
    <div className='overflow-hidden' id='#section02'>
      <div className="container " >
        <div className='md:hidden swiper-box row align-items-center overflow-hidden'>   
             <div className='bg-primaryText'> 
                <h1 className='text-3xl font-normal font-alexandria text-center w-2/3 mx-auto py-4'>
                * Features That Set Us Apart
                </h1>
                </div>      
          <div  className='bg-[#E8E8E8]  col-lg-6 col-md-12 pb-14 mb-lg-0 '>

            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              onAutoplayTimeLeft={onAutoplayTimeLeft}
              className="mySwiper bg_img_welcome"
            >
            
                 <SwiperSlide>
                 <div className='md:mt-1 '>
                <img src="/assets/Rectangle.svg" alt="Re-Dress img icon" className='my-3 w-10 md:h-[42px] md:w-[42px] xl:h-[52px] xl:w-[52px]'/>
                <h3 className=' highlight re-dress-box-head font-alexandria font-extralight my-2 text-3xl md:text-3xl lg:text-[32px] px-16 text-left'>AI-Powered Styling </h3>
                <p className='px-16 text-left font-light font-alexandria  mt-3.5 text-lg md:text-xl'>Our AI combines the latest trends with deep learning algorithms to understand your personal style better.</p>
            </div>
                </SwiperSlide>
                 <SwiperSlide>
                 <div className=' md:mt-1'>
                <img src="/assets/Rectangle.svg" alt="Re-Dress img icon" className='my-3 w-10 md:h-[42px] md:w-[42px] xl:h-[52px] xl:w-[52px]'/>
                <h3 className=' highlight re-dress-box-head font-alexandria font-extralight my-2 text-3xl md:text-3xl lg:text-[32px] px-16 text-left'>Virtual Wardrobe </h3>
                <p className='px-16 text-left font-light font-alexandria  mt-3.5 text-lg md:text-xl'>Digitize your wardrobe to mix, match, and visualize new outfits with items you already own.</p>
            </div>
                </SwiperSlide>
                 <SwiperSlide>
                 <div className=' md:mt-1'>
                <img src="/assets/Rectangle.svg" alt="Re-Dress img icon" className='my-3 w-10 md:h-[42px] md:w-[42px] xl:h-[52px] xl:w-[52px]'/>
                <h3 className=' highlight re-dress-box-head font-alexandria font-extralight my-2 text-2xl md:text-3xl lg:text-[32px] px-16 text-left'>Sustainable Shopping </h3>
                <p className='px-16 text-left font-light font-alexandria  mt-3.5 text-lg md:text-xl'>Get insights on how to maximize your wardrobe and shop sustainably by choosing pieces that are suitable to your needs.</p>
            </div>
                </SwiperSlide>
                 <SwiperSlide>
                 <div className=' md:mt-1 '>
                <img src="/assets/Rectangle.svg" alt="Re-Dress img icon" className='my-3 w-10 md:h-[42px] md:w-[42px] xl:h-[52px] xl:w-[52px]'/>
                <h3 className=' highlight re-dress-box-head font-alexandria font-extralight my-2 text-3xl md:text-3xl lg:text-[32px] px-16 text-left'>Mobile Access</h3>
                <p className=' px-16 text-left font-light font-alexandria  mt-3.5 text-lg md:text-xl'>Access Re:Dress anytime, anywhere, right from your smartphone. Get style advice at your fingertips!</p>
            </div>
                </SwiperSlide>

              <div className="autoplay-progress d-none" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
              </div>
            </Swiper>
          </div>
          
        </div>
        <div className='hidden md:block py-12'>
        <div className=' md:flex justify-between'> 
        <div className='md:w-2/5'>
            <h3 className=' font-normal tracking-wider font-alexandria text-3xl md:text-5xl lg:text-6xl xl:text-[70px]'> <span className='highlight'>* </span>Features That Set Us Apart</h3>
        </div>
        <div className='flex justify-start md:justify-end md:mt-24 lg:mt-28 xl:mt-32'>
            <img src={ theme ==="dark"? '/assets/nav-logo.svg' : '/assets/nav-logo_black.svg' } alt="Re:dress logo image" className='w-1/2  md:w-[314px] md:h-[80px]  lg:w-[414px] lg:h-[90px]  xl:w-[514px] xl:h-[108px]' />
        </div>
        </div>
        <div className=' mt-1 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-12 lg:gap-x-10'>
               
       
            <div className=' md:mt-1'>
                <img src="/assets/Rectangle.svg" alt="Re-Dress img icon" className='my-3 w-10 md:h-[42px] md:w-[42px] xl:h-[52px] xl:w-[52px]'/>
                <h3 className=' highlight re-dress-box-head font-alexandria font-extralight my-2 text-2xl md:text-3xl lg:text-[32px]'>AI-Powered Styling</h3>
                <p className=' font-light font-alexandria  mt-3.5 text-lg md:text-xl'>Our AI combines the latest trends with deep learning algorithms to understand your personal style better.</p>
            </div>
            <div className=' md:mt-1'>
                <img src="/assets/Rectangle.svg" alt="Re-Dress img icon" className='my-3 w-10 md:h-[42px] md:w-[42px] xl:h-[52px] xl:w-[52px]'/>
                <h3 className=' highlight re-dress-box-head font-alexandria font-extralight my-2 text-2xl md:text-3xl lg:text-[32px]'>Virtual Wardrobe  </h3>
                <p className='font-light font-alexandria  mt-3.5 text-lg md:text-xl'>Digitize your wardrobe to mix, match, and visualize new outfits with items you already own.</p>
            </div>
            <div className=' md:mt-1'>
                <img src="/assets/Rectangle.svg" alt="Re-Dress img icon" className='my-3 w-10 md:h-[42px] md:w-[42px] xl:h-[52px] xl:w-[52px]'/>
                <h3 className=' highlight re-dress-box-head font-alexandria font-extralight my-2 text-2xl md:text-3xl lg:text-[32px]'>Sustainable Shopping </h3>
                <p className='font-light font-alexandria  mt-3.5 text-lg md:text-xl'>Get insights on how to maximize your wardrobe and shop sustainably by choosing pieces that are suitable to your needs.</p>
            </div>
            <div className=' md:mt-1'>
                <img src="/assets/Rectangle.svg" alt="Re-Dress img icon" className='my-3 w-10 md:h-[42px] md:w-[42px] xl:h-[52px] xl:w-[52px]'/>
                <h3 className=' highlight re-dress-box-head font-alexandria font-extralight my-2 text-2xl md:text-3xl lg:text-[32px]'>Mobile Access </h3>
                <p className='font-light font-alexandria  mt-3.5 text-lg md:text-xl'>Access Re:Dress anytime, anywhere, right from your smartphone. Get style advice at your fingertips!</p>
            </div>
        </div>
        </div>
      </div>

    </div>

  )
}

export default Compatibility_Test