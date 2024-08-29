import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 80, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }

  }, [currentIndex, text, speed]);

  return <span>{displayedText}</span>;
};

export default Typewriter;
