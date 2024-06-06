import React from 'react'

// import logoWhite from '../../assets/nav-logo.svg'
// import logoWhite from '../../assets/new-logo-gallary.svg'
// import logoBlack from '../../assets/nav-logo_black.svg'
const WeBelive = () => {
  return (
    <div className=' pt-8 md:pt-20 pb-14'>
     <div className='container '>
        <div className='we-belive-box  md:flex justify-between gap-x-16 lg:gap-x-44'>
        <div className='md:w-1/2'>
            <h3 className='  mx-auto  font-light  mb-3 md:text-left font-alexandria leading-10 text-[40px] md:text-4xl lg:text-5xl xl:text-6xl  belive-head'>We believe</h3>
            <p className='mx-auto md:mt-6  font-alexandria font-extralight text-lg md:text-xl lg:text-[22px] tracking-wider'>that fashion is personal, and finding your unique style should be a delightful and effortless experience. Re:Dress offers personalised styling solutions that cater to your tastes, preferences, and lifestyle needs. Whether you are dressing up for a special occasion, updating your everyday wardrobe, or exploring new trends.</p>
        </div>
        <div className='  mx-auto  mt-9 md:mt-12 md:w-1/2 md:flex justify-center  flex-col'>
            <img src='/assets/new-logo-gallary.svg' alt="Re-dress logo" className='re-dress-webelive mb-2h-11 md:h-[46px] w-[217px] md:flex justify-start' />
            <p className='webelive-text mt-3 md:mt-1 font-alexandria font-extralight text-2xl md:text-2xl lg:text-[22px] tracking-wider md:w-9/12 xl:w-1/2'>is here to guide you every step of the way.</p>
        </div>
        </div>
       
     </div>
    </div>
  )
}

export default WeBelive
