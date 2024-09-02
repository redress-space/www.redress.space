import React from 'react';

import styles from './FadeInGrid.module.css';

const FadeInGrid = ({ images, onFade, fadeOut }) => {
  return (
    <div className={`grid grid-cols-2 gap-4 py-4 md:px-4 ${styles.card}`} onAnimationEnd={onFade}>
      {images.map((image, index) => (
        <div key={index}  className={`${ fadeOut ? styles.fadeOut : styles.fadeIn}  relative  md:px-4 py-4 font-alexandria`}>
          <div className={`${styles.overaly} relative p-4`}>
            <img src={image.src} alt={`Grid item ${index}`} className={`object-fit  ${styles.image}`} />
            { image.camera && <>
                <div className={`${styles.overlayElement} ${styles.topLeft} `}></div>
                <div className={`${styles.overlayElement} ${styles.topRight} `}></div>
                <div className={`${styles.overlayElement} ${styles.bottomLeft} `}></div>
                <div className={`${styles.overlayElement} ${styles.bottomRight} `}></div>
            </> }
          </div>
          { !image.camera && <div className='uppercase font-light '>{image.alt}</div>}
          { !image.camera && <div className='uppercase font-light'>{image.sub}</div> }
        </div>
      ))}
    </div>
  );
};

export default FadeInGrid;
