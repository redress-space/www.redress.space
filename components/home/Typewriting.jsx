import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Typewriting.module.css";


const Typewriter = ({
  text,
  alt = '',
  onComplete,
  speed = 80,
  backwardSpeed = 40,
  delayAfterComplete = 100,
  delayedIsTypingForward = 3750,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTypingForward, setIsTypingForward] = useState(true);
  const [isComplete, setIsComplete] = useState(false);
  const [showImage, setShowImage] = useState(false);

  // Reset the component's state when the text prop changes
  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
    setIsTypingForward(true);
    setIsComplete(false);
    setShowImage(false);
  }, [text]);

  useEffect(() => {
    if (isComplete) {
      const delayTimeout = setTimeout(() => {
        onComplete();
      }, delayAfterComplete);
      return () => clearTimeout(delayTimeout);
    }

    const timeout = setTimeout(() => {
      if (isTypingForward) {
        if (currentIndex < text.length) {
          setDisplayedText((prev) => prev + text[currentIndex]);
          setCurrentIndex(currentIndex + 1);
        } else if (!showImage) {
          setShowImage(true);
        } else {
          const delayIsTypingForward = setTimeout(() => {
            setIsTypingForward(false);
          }, delayedIsTypingForward);
          return () => clearTimeout(delayIsTypingForward);
        }
      } else {
        if (showImage) {
          setShowImage(false);
        } else if (currentIndex > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsComplete(true);
        }
      }
    }, isTypingForward ? speed : backwardSpeed);

    return () => clearTimeout(timeout);
  }, [
    currentIndex,
    text,
    speed,
    backwardSpeed,
    isTypingForward,
    isComplete,
    onComplete,
    delayAfterComplete,
    showImage,
  ]);


  return (
    <p className="min-h-[2.5rem]">
      <span className="font-light	">{displayedText}</span>
      <span>&#8203;</span>
      <span
        className={`font-primary font-semibold relative animate-blink inline-block translate-y-[-2px] ${styles.BlinkingCursor}`}
      >
        |
      </span>
    </p>
  );
};

export default Typewriter;
