import React from 'react'
import Link from 'next/link';

const Footer = () => {
  return (<>
    <div className='flex justify-between z-150'>
      <div className='mb-3'>
        <a className='font-medium text-black hover:text-gray-600  dark:hover:text-gray-200 hover:underline' href='mailto:info@redress.space'>Contact Us</a>
      </div>

      <div className='flex text-sm '>
        <Link href={'/terms'}><span className='font-medium text-gray-600  hover:underline '>Terms</span></Link>
        <div className='px-3 '>|</div>
        <Link href={'/privacy'}><span className='font-medium text-gray-600  hover:underline '>Privacy</span></Link>
      </div>
    </div>
  </>);

}

export default Footer
