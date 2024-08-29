import React from 'react';

import styles from './Main.module.css';

import Typewriter from './Typewriting';
import CardGrid from './CardGrid';
import FadeInGrid from './FadeInGrid';
import Link from 'next/link';

const MainSection = () => {

  const names = [
    { src: 'https://cdn.redress.space/farfetch/e42076c7c0c9486d23783fdcbec07c7ffc07ef7b.jpg', alt: 'Era "Pride" sneakers', sub: '85$' },
    { src: 'https://cdn.redress.space/farfetch/9a157518312b39ce3868d715462badfa2f42a7b7.jpg', alt: 'Classic Basketball sneakers', sub: '260$' },
    { src: 'https://cdn.redress.space/farfetch/6aad6f6ead398e17411201264f4af9c1f917a04a.jpg', alt: 'Super Vintage low-top sneakers', sub: '200$' },
    { src: 'https://cdn.redress.space/farfetch/f06dff54600ca187775e6732d814a9aec9deec53.jpg', alt: 'Low-top sneakers', sub: '840$' },
  ]


  return (
    <>
      <div className='flex-grow flex justify-items-stretch	font-alexandria'>
        <div className='w-full h-full flex flex-col justify-between	 md:w-2/5 min-h-screen py-44 pb-64'>
          
          <div className='mt-22'>
            <div className='text-5xl mb-12	'>
              <h1>REDRESS</h1>
            </div>

            <div >
              <h2 className='text-3xl	font-light'>
                <Typewriter text={"Bright colored sneakers that feel old school and classic"} />
              </h2>
            </div>
          </div>

          <div className='flex'>
            <Link href={'/terms'}><span className='font-medium text-gray-800 hover:underline'>Terms</span></Link>
            <div className='px-6'>|</div>
            <Link href={'/terms'}><span className='font-medium text-gray-800 hover:underline'>Privacy</span></Link>
          </div>
        </div>

        <div className='f-wull md:w-3/5'>
          <FadeInGrid images={names} />
        </div>

      </div>
    </>

  )
}

export default MainSection

