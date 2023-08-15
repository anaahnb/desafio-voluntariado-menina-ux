import React, { useEffect, useState } from 'react';
import styles from './TypingAnimation.module.css';


function TypingEffect() {
  const textArray = ["ajudar a criar interfaces web interativas e atraentes.", "explicar as músicas da Taylor Swift.", "fazer playlists.", "acompanhar e torcer junto assistindo qualquer esporte."];
  const typingDelay = 100;
  const erasingDelay = 3000;
  const newTextDelay = 200;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isTyping) {
        if (currentText.length < textArray[currentIndex].length) {
          setCurrentText(textArray[currentIndex].substring(0, currentText.length + 1));
        } else {
          setIsTyping(false);
          setTimeout(() => {
            setIsTyping(true);
            setCurrentText('');
            setCurrentIndex((currentIndex + 1) % textArray.length);
          }, newTextDelay);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(textArray[currentIndex].substring(0, currentText.length - 1));
        } else {
          setIsTyping(true);
          setCurrentIndex((currentIndex + 1) % textArray.length);
        }
      }
    }, isTyping ? typingDelay : erasingDelay);

    return () => clearTimeout(timer);
  }, [currentIndex, currentText, isTyping]);

  return (
    <h2 className={styles.typingText}>
      Posso te <span>{currentText}</span>
      <span>{isTyping ? '|' : ''}</span>
    </h2>
  );
}

export default TypingEffect;
