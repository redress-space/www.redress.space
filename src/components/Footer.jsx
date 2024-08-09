import React from 'react'

const Footer = () => {
  return (
    <div className=' py-2 mt-0'>
        <div className='container'>
      <div className='w-9/12 md:w-full mx-auto md:flex justify-between py-10 md:py-24'>
        <div className='md:w-2/5'>
            <p className=' font-alexandria font-extralight text-[14px] leading-[17.07px] '>The Leadenhall Building, <br />
            122 Leadenhall Street, City Of London, London,<br />United Kingdom, EC3V 4AB <br />info@redress.space</p>
        </div>
        <div className='flex justify-center md:justify-end items-center gap-4 md:w-2/6 py-6'>
            <img src='/assets/facebook.svg' alt="Facebook"  className='cursor-pointer h-[37px] w-[37px]' />
            <img src='/assets/instagram.svg' alt="Facebook" className='cursor-pointer h-[41px] w-[41px]' />
            <img src='/assets/linkedin.svg' alt="Facebook"  className='cursor-pointer h-[41px] w-[41px]'/>
        </div>
      </div>
          <p className='text-center mt-4 text-[10px] md:text-[14px] md:leading-[17px] leading-3  font-alexandria font-normal md:pb-5'>Copyrighted © 2024 Design and upload by ReDress</p>
      </div>
    </div>
    
  )
}

export default Footer
