import React from 'react'

const ClientExpriance = () => {
  return (
    <div className=' py-10'>
      <div className='container'>
        <div className='md:flex md:justify-between items-center gap-x-3 md:gax-x-24 lg:gap-x-36'>
            <div className='w-9/12  mx-auto md:w-2/5 lg:w-2/6'> 
                <h3 className='text:xl md:text-2xl lg:text-[26px] leading-[31px]  font-alexandria font-normal tracking-wide text-left'>Features to supercharge your client experience:</h3>
            </div>
            <div className='mt-12 md:w-3/4 md:mx-auto'>
                <div className='flex justify-start gap-3'>
                <p className='py-2 bg-[#F0F0F0] flex justify-center items-center  font-extralight font-alexandria  text-center exprince-box  xl:w-64  rounded-xl text-base md:text-xl   md:px-8'>Improved  <br className='md:hidden'/>Product Discovery</p>
                <p className='py-2  flex justify-center items-center text-black font-extralight font-alexandria bg-primaryText  text-center exprince-box  xl:w-64 rounded-xl text-base md:text-xl  md:px-8'>AI Enhanced <br /> Search </p>
                </div>
                <div className='mt-2 flex justify-end md:justify-center  gap-3 md:ml-70'>
                <p className='py-2 bg-[#F0F0F0] flex justify-center items-center  font-extralight font-alexandria  text-center exprince-box  xl:w-64 rounded-xl text-base md:text-xl  md:px-8'>Targeted Offers</p>
                <p className='py-2 bg-[#F0F0F0] flex justify-center items-center  font-extralight font-alexandria  text-center exprince-box   xl:w-64 rounded-xl text-base md:text-xl  md:px-8'>Increased <br /> Conversion  Ratio</p>
                </div>
             
               
            </div>
           
        </div>
      </div>
    </div>
  )
}

export default ClientExpriance
