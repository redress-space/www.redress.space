import React from 'react'
// import logo from '../../assets/nav-logo.svg'
// import logoWhite from '../../assets/nav-logo.svg'
// import logoBlack from '../../assets/nav-logo_black.svg'

const ForBusiness = () => {
  return (
    <div id='for-business'  className=' pt-16 pb-3'>
      <div className='container'>
          <div className='w-9/12  md:w-full mx-auto flex justify-center items-center flex-col gap-3 md:gap-x-10  md:flex-row '>

        <img src='/assets/new-logo-gallary.svg' alt="" className='md:mr-3 md:mb-4 md:w-[200px] md:h-[54px] xl:w-[264px] xl:h-[70px]'/> <p className='highlight font-alexandria text-5xl md:text-6xl lg:text-6xl xl:text-[70px] business'> for Business</p>
          </div>
          <div className=' md:mt-4 mt-2 font-alexandria w-9/12  md:w-full mx-auto'>
            <p className='font-extralight text-lg md:text-xl lg:text-2xl xl:text-[26px] lg:leading-[31px] tracking-wide my-0'>We developed a recommendation engine that understands your customers— who they are and what they look for — enabling them to make confident purchases by enhanced discovery feature.  </p>
            <p className='my-0 font-extralight text-lg md:text-xl lg:text-2xl xl:text-[26px] lg:leading-[31px] tracking-wide'>CRM back office integration allows to understand customer further facilitating advanced brand communication.</p>
          </div>
      </div>
    </div>
  )
}

export default ForBusiness
