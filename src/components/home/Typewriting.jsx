import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 60, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  // Reset the component's state when the text prop changes
  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
  }, [text]);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete && displayedText) {
      onComplete();

      // return () => clearTimeout(timeout);
    }

  }, [currentIndex, text, speed]);

  return <span>{displayedText}</span>;
};

export default Typewriter;
