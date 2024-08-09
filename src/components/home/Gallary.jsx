import React from 'react'

const Gallary = () => {
  return (
    <div className=' py-2 md:py-16'>
      <div className='md:grid-cols-2'>
           <div className='md:flex justify-between w-full mb-5 mb-md-0'>
              <div className='md:w-1/2' >
                <img src='/assets/file-gallary.png' alt="Re-dress gallery" className='w-100' />
                {/* <object type="image/svg+xml" data={img3} className='w-100 overflow-hidden'></object> */}
              </div>
              <div className='my-2 mt-4  flex justify-center items-center md:w-1/2'>
                <p className=' font-extralight text-left w-9/12 mx-auto md:mx-auto text-[26px] py-3 leading-8 md:text-xl lg:text-2xl xl:text-[26px] font-alexandria widthp'>Our <span className='highlight font-semibold'> AI model </span> curates outfits just for you, making discovery and decisions easier.</p>
              </div>
           </div>
           <div className=' md:flex justify-between flex-row-reverse w-full'>
              <div className='md:w-1/2'>
                {/* <img src={img2} alt="Re-dress gallery" className='w-100' /> */}
                <object type="image/svg+xml" data='/assets/new-gallary-2.svg' className='w-100'></object>
              </div>
              <div className='my-2 mt-4 flex justify-center items-center md:w-1/2'>
                <p className=' font-extralight text-left w-9/12 mx-auto md:mx-auto text-[26px] py-3 leading-8 md:text-xl lg:text-2xl xl:text-[26px] font-alexandria widthp'>Upgrade your wardrobe seamlessly with a <span className='highlight font-semibold'>personal styling assistant. </span></p>
              </div>
           </div>
           
      </div>
    </div>
  )
}

export default Gallary
