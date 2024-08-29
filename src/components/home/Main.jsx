import React, { useEffect, useState } from 'react';

import styles from './Main.module.css';

import Typewriter from './Typewriting';
import FadeInGrid from './FadeInGrid';

const MainSection = () => {
  const sneakers = [
    { src: 'https://cdn.redress.space/farfetch/e42076c7c0c9486d23783fdcbec07c7ffc07ef7b.jpg', alt: 'Era "Pride" sneakers', sub: '85$' },
    { src: 'https://cdn.redress.space/farfetch/9a157518312b39ce3868d715462badfa2f42a7b7.jpg', alt: 'Classic Basketball sneakers', sub: '260$' },
    { src: 'https://cdn.redress.space/farfetch/6aad6f6ead398e17411201264f4af9c1f917a04a.jpg', alt: 'Super Vintage low-top sneakers', sub: '200$' },
    { src: 'https://cdn.redress.space/farfetch/f06dff54600ca187775e6732d814a9aec9deec53.jpg', alt: 'Low-top sneakers', sub: '840$' },
  ];

  const jeans = [
  ];

  const [names, setNames] = useState([]);  
  const [title, setTitle] = useState('');  

  useEffect(() => {
    setNames(sneakers);
    setTitle('Bright colored sneakers that feel old school and classic');
  });

  const onEvent = () => {
    setNames(sneakers);
  };

  return (
    <>
      <div className={` flex-grow flex justify-items-stretch	font-alexandria  h-full `}>
        <div className={`${styles.container} w-full h-full flex flex-col justify-evenly	 md:w-2/5`}>
          <div className='mt-22'>

            <div className='text-5xl mb-6	'>
              <h1>REDRESS</h1>
            </div>

            <div className='mb-24'>
              <h2 className={`text-3xl font-light ${styles.line}`}>
                <Typewriter 
                  text={title} 
                  onComplete={() => {}} />
              </h2>
            </div>

            <div>
              <button className="submit-btn w-fit font-light border-2 border-black px-7 py-1 transition-all hover:bg-primaryText hover:text-black  md:py-3 md:px-12 lg:px-14 text-lg md:text-xl lg:text-2xl  ">
                Waitlist
              </button>
            </div>
          </div>


        </div>

        <div className='w-full md:w-3/5'>
          <FadeInGrid images={names} />
        </div>

      </div>
    </>

  )
}

export default MainSection

