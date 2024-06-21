import React from 'react';

import styles from './Main.module.css';

const MainSection = () => {
  return (
    <>
    <div className='bg-[#E8E8E8]  text-black pt-6 md:py-12 my-0 relativew-full '>

        <div className='container md:flex items-center justify-start gap-x-7 '>
            <div className='md:w-3/5 w-9/12 main-sections'>
                <h3 className='main-heading-home  md:mt-28 font-alexandria  leading-10 md:pb-8 tracking-wide  md:text-left text-[32px] md:text-4xl lg:text-5xl xl:text-[56px] 2xl:text-6xl'>Discover future of personalised fashion.</h3>

                <div className='flex md:hidden justify-start gap-x-9 my-4'>
               <a href='/re-dress' className='font-alexandria font-normal text-bas cursor-pointer'>AI App</a>
               <a href='#for-business' className='font-alexandria font-normal text-bas cursor-pointer'>Business solution</a>
            
                </div>
                <div className='md:flex my-4 mb-10 gap-x-3 justify-evenly md:justify-start hidden'>
                    <img src='/assets/apple.png' alt="Apple app douwnload for re-dress" className=' lg:mt-14 w-2/5 md:w-1/4 gap-x-3 border-gray-800  rounded-sm cursor-pointer' />
                    <img src='/assets/google.png' alt="Android app douwnload for re-dress" className=' lg:mt-14 w-2/5 md:w-1/4 gap-x-3 border-gray-800  rounded-sm cursor-pointer' />
                </div>
            </div>
            <div className='flex justify-center'>
                <object type="image/svg+xml" data='/assets/new-home-mobile-2.svg' className={`${styles.mainSecImg} z-50 mb-[-60px] md:mb-[-125px] lg:mb-[-150px] md:w-52 md:h-[70px]`}></object>
                
            </div>
        </div> 
       
        <div className='hidden md:block relative'>

               <div className='md:block home-box absolute sidebox w-28 h-28 md:h-32 md:w-32 right-0 bottom-40 md:bottom-[1rem]  rounded-s-lg flex justify-center items-center'>
                <div className='h-20 w-20 md:h-24 md:w-24 bg-white flex justify-center mx-auto mt-3 items-center   rounded-md'></div>
               </div>  
        </div>
    </div>
            <div className='flex mt-24 justify-center gap-x-2 md:justify-start md:hidden '>
                    <img src='/assets/apple.png' alt="Apple app douwnload for re-dress" className='  rounded-sm cursor-pointer h-[38px] w-[129px]' />
                    <img src='/assets/google.png' alt="Android app douwnload for re-dress" className=' rounded-sm cursor-pointer  h-[38px] w-[129px]' />
                </div>
    </>
    
  )
}

export default MainSection

