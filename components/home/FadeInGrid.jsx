import React, { useState, useEffect, useRef } from 'react';

import styles from './FadeInGrid.module.css';


// Utility function to deep compare two arrays of objects
const areArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  return arr1.every((item, index) => {
    const src1 = item.src;
    const src2 = arr2[index].src;
    return src1 === src2;
  });
};

const FadeInGrid = ({ images, onFadeInComplete, onFadeOutComplete }) => {

  const [imagesList, setImagesList] = useState([]);
  const [fadingOut, setFadingOut] = useState(false);
  const [countFadingOut, setCountFadingOut] = useState(0);
  const [countFadingIn, setCountFadingIn] = useState(0);

  // Detect changes in the images prop and trigger fade out
  useEffect(() => {
    if (imagesList.length == 0) {
      setImagesList([...images]);
    } else if (!areArraysEqual(images, imagesList)) {
      // console.log('RESET');
      setFadingOut(true);
      setCountFadingOut(0);
      setCountFadingIn(0);
    }
  }, [images, imagesList]);

  useEffect(() => {
    if (imagesList.length > 0 && imagesList.length === countFadingOut) {
      // console.log('Fading out completed.');
      setImagesList([...images]);
      setFadingOut(false);
      if (onFadeOutComplete) onFadeOutComplete();
    }
  }, [countFadingOut]);

  useEffect(() => {
    if (imagesList.length > 0 && imagesList.length === countFadingIn) {
      // console.log('Fading in completed.');
      if (onFadeInComplete) onFadeInComplete();
    }
  }, [countFadingIn]);

  // Handle animation end events
  const handleAnimationEnd = (e) => {
    const animationName = String(e.animationName) || '';
    const needChangeContent = animationName.indexOf('fadeOut') >= 0 && fadingOut;
    const changeContentFinished = animationName.indexOf('fadeIn') >= 0 && !fadingOut;

    if (needChangeContent) {
      setCountFadingOut((prev) => prev + 1);
    } else if (changeContentFinished) {
      setCountFadingIn((prev) => prev + 1);
    }
  };


  return (
    <div className={`grid grid-cols-2 gap-2 md:gap-4 py-4 md:px-4 grow overflow-hidden  ${styles.cards}`} >
      {imagesList.map((image, index) => (
        <div  key={index} 
              onAnimationEnd={handleAnimationEnd} 
              className={`${fadingOut ? styles.fadeOut : styles.fadeIn} ${styles.card} relative mx-auto md:px--4 py-4 font-alexandria`}>
          <div className={`${styles.overaly} relative p-4`}>
            <img src={image.src} alt={`Grid item ${index}`} className={`object-fit  ${styles.image}`} />
            {image.camera && <>
              <div className={`${styles.overlayElement} ${styles.topLeft} `}></div>
              <div className={`${styles.overlayElement} ${styles.topRight} `}></div>
              <div className={`${styles.overlayElement} ${styles.bottomLeft} `}></div>
              <div className={`${styles.overlayElement} ${styles.bottomRight} `}></div>
            </>}
          </div>
          {!image.camera && <div className='uppercase font-light '>{image.alt}</div>}
          {!image.camera && <div className='uppercase font-light'>{image.sub}</div>}
        </div>
      ))}
    </div>
  );
};

export default FadeInGrid;
