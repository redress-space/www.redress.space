import React from 'react';

import styles from './FadeInGrid.module.css';

const FadeInGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 ">
      {images.map((image, index) => (
        <div key={index} className={`${styles.card} relative opacity-0  p-4 font-alexandria`}>
          <div className={`${styles.imageWrapp} relative p-4`}>
            <img src={image.src} alt={`Grid item ${index}`} className={`object-fit  ${styles.image}`} />
          </div>
          <div className='uppercase font-light '>{image.alt}</div>
          <div className='uppercase font-light'>{image.sub}</div>
        </div>
      ))}
    </div>
  );
};

export default FadeInGrid;
