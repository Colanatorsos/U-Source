'use client'
import Image from 'next/image'
import styles from './PortfolioCard.module.scss'
import anime from 'animejs/lib/anime.es'
import React, { useRef, useEffect } from "react";
import { useInView } from 'react-intersection-observer';

const PortfolioCard = ({ children }) => {
  //const [ref, inView] = useInView({
  //  triggerOnce: true,
  //  threshold: 0.2,
  //});

  //const animateElements = (elements) => {
  //  elements.forEach((element, index) => {
  //    const fromLeft = index % 2 === 0;
  //    anime({
  //      targets: element,
  //      translateX: inView ? 0 : fromLeft ? -200 : 200,
  //      opacity: inView ? 1 : 0,
  //      duration: 1000,
  //      easing: 'easeOutQuad',
  //      delay: anime.stagger(100),
  //    });
  //  });
  //};

  //useEffect(() => {
  //  const elementsToAnimate = document.querySelectorAll('.animate-element');
  //  animateElements(elementsToAnimate);
  //}, [inView]);

  const cardRefs = useRef([]);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      animateCards();
    }
  }, [inView]);

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



  return (
    <>
      {children.map((el, idx) => (
        <div
          className={`${styles.PortfolioCard} animate-element`}
          key={el.id}
          //ref={ref}
          ref={(ref) => {
            cardRefs.current[idx] = ref;
            inViewRef(ref);
          }}
        >
          <Image src={el.images} width={120} height={120} alt='logo' />
          <h6>{el.title}</h6>
          <span></span>
          <p>{el.description}</p>
        </div>
      ))}
    </>
  )
}

export default PortfolioCard
