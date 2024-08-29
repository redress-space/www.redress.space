import React, { useEffect, useState } from 'react';
import styles from '../home/CardGrid.module.css';

const ImageGrid = ({ images }) => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    let bigCount = 0;
    const gridSize = Math.ceil(Math.sqrt(images.length)); // Calculate grid size
    const newPositions = images.map((_, index) => {
      let isBig = false;

      // Ensure no more than 2 elements are big
      if (bigCount < 2 && Math.random() > 0.5) {
        isBig = true;
        bigCount++;
      }

      // Calculate grid position
      const row = Math.floor(index / gridSize);
      const col = index % gridSize;
      const top = `${(row * (100 / gridSize)) + Math.random() * 10 - 5}%`; // Randomize within the grid cell
      const left = `${(col * (100 / gridSize)) + Math.random() * 10 - 5}%`;

      return {
        top,
        left,
        size: isBig ? 'big' : 'small',
        zIndex: isBig ? 10 + index : index, // Higher z-index for big cards
        direction: Math.random() > 0.5 ? 'horizontal' : 'vertical',
      };
    });

    // If less than 2 big elements, randomly convert small ones to big
    if (bigCount < 2) {
      for (let i = 0; i < newPositions.length && bigCount < 2; i++) {
        if (!newPositions[i].isBig) {
          newPositions[i].size = 'big';
          newPositions[i].zIndex = 10 + i;
          bigCount++;
        }
      }
    }

    setPositions(newPositions);
  }, [images]);

  return (
    <div className={styles.imageGrid}>
      {positions.map((position, index) => (
        <div
          key={index}
          className={`${styles.imageCard} ${styles[position.size]} ${styles[position.direction]}`}
          style={{
            top: position.top,
            left: position.left,
            zIndex: position.zIndex,
          }}
        >
          <img src={images[index]} alt={`Image ${index}`} className={styles.image} />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
