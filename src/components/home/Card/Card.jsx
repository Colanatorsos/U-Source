'use client'
import styles from './Card.module.scss'
import anime from 'animejs/lib/anime.es'
import { useState, useRef, useEffect } from "react";
import { useInView } from 'react-intersection-observer';


const Card = ({ children }) => {
  const cardRefs = useRef([]);

  useEffect(() => {
    const animateCards = () => {
      cardRefs.current.forEach((card, idx) => {
        let animationProps = {};
        let delay = idx * 200;

        if (idx === 0 || idx === 3) {

          animationProps = {
            translateX: ['100%', '0'],
            opacity: [0, 1],
          };
        } else if (idx === 1 || idx === 4) {

          animationProps = {
            translateY: ['-100%', '0'],
            opacity: [0, 1],
          };
        } else {

          animationProps = {
            translateX: ['-100%', '0'],
            opacity: [0, 1],
          };


          delay += 150;
        }

        anime({
          targets: card,
          ...animationProps,
          duration: 1000,
          easing: 'easeOutQuad',
          delay,
        });
      });
    };

    animateCards();
  }, []);

  return (
    <>
      {children.map((el, idx) => (
        <div
          key={idx}
          className={`${styles.card} animated-card`}
          ref={(ref) => (cardRefs.current[idx] = ref)}
        >
          <h4 className={children.length === 3 ? styles.OurServicesBlockH : ''}>{el.title}</h4>
          <p className={children.length === 3 ? styles.OurServicesBlockP : ''}>{el.desc}</p>
        </div>
      ))}
    </>
  )
}

export default Card;
