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

  const party = [
    { src: 'https://cdn.redress.space/farfetch/fc47749f4fe70f6bd3789f8b758d9ec357a7a3bb.jpg', alt: 'Borsalino', sub: '220$' },
    { src: 'https://cdn.redress.space/farfetch/0c8b64a6919af7ca02a16cc7ea12b4ac5c402961.jpg', alt: 'Strappy pumps', sub: '680$' },
    { src: 'https://cdn.redress.space/farfetch/34a616e0bac3de5318585039aafd42d8f280d41d.jpg', alt: 'Emanuele Bicocchi', sub: '380$' },
    { src: 'https://cdn.redress.space/farfetch/894653ffbb8e80bae77dbfe00aa94ad04efb05ff.jpg', alt: 'Rachel Gilbert', sub: '1800$' },    
  ];

  const somethigLikeThis = [
    { src: 'https://cdn.redress.space/public/anon/37a03a54d013db8b9a695e8d2b7814f4.jpg', camera: true },
    { src: 'https://cdn.redress.space/farfetch/07d2c768996c0aa9c3937cf80f296fb83c9e3d58.jpg', alt: 'Circolo 1901', sub: '500$' },
    { src: 'https://cdn.redress.space/farfetch/d54f39a3f2a140eed5180b0d68577a96456fe351.jpg', alt: 'Vince', sub: '170$' },
    { src: 'https://cdn.redress.space/farfetch/bc51dc242d8d0d5ed7030d5ecd0c5534c47a41af.jpg', alt: 'Versace', sub: '430$' },    
  ];  

  const sets = [
    // {data: sneakers, alt: 'Bright colored sneakers that feel old school and classic'}, 
    // {data: party, alt: 'I need a look for Gatsby Party'},
    {data: somethigLikeThis, alt: 'Get me similar look'}
  ];

  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [index, setIndex] = useState(0);

  const [textDone, setTextDone] = useState(false);
  const [imagesDone, setImagesDone] = useState(false);

  useEffect(() => {
    setImages(sets[index].data);
    setTitle(sets[index].alt);
  }, [index]);

  useEffect(() => {
    const move = () => {
      let idx = index + 1;
      if (idx >= sets.length) {
        idx = 0;
      } 
      setTextDone(false);
      setImagesDone(false);
      setIndex(idx);
    };

    if (textDone && imagesDone) {
      // const  timeout = setTimeout(() => move(), 2000);
      return () => clearTimeout(timeout);
    }
  }, [textDone, imagesDone]);



  const onTextCompletion = () => {
    setTextDone(true);
  }

  const onFadeInCompletion = () => {
    console.log(`onFadeInCompletion {completedAnimations}`);
    setImagesDone(true);
  }

  const onFadeOutCompletion = () => {
    // setImagesDone(true);
  }

  return (
    <>
      <div className={`flex-grow flex flex-col md:flex-row justify-items-stretch	font-alexandria  h-full `}>
        <div className={`${styles.container} w-full h-full flex flex-col justify-evenly	 md:w-2/5 z-10`}>
          <div className='mt-22'>

            <div className='text-5xl mb-6	'>
              <h1>REDRESS</h1>
            </div>

            <div className='mb-4 md:mb-24'>
              <h2 className={`text-xl md:text-3xl font-light ${styles.line}`}>
                <Typewriter
                  text={title}
                  onComplete={onTextCompletion} />
              </h2>
            </div>

            <div>
              <button className="submit-btn w-fit font-light border-2 border-black px-7 py-1 transition-all hover:bg-primaryText hover:text-black  md:py-3 md:px-12 lg:px-14 text-lg md:text-xl lg:text-2xl  ">
                Join the waitlist
              </button>
            </div>
          </div>
        </div>

        <div className='md:relative w-full md:w-4/5 lg:w-3/5 xl:w-3/6'>
          <FadeInGrid 
            images={images} 
            onFadeInComplete={onFadeInCompletion}
            onFadeOutComplete={onFadeOutCompletion}
          />
        </div>
      </div>
    </>

  )
}

export default MainSection

