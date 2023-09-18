'use client'
import Image from 'next/image'
import styles from './PortfolioCard.module.scss'
import anime from 'animejs/lib/anime.es'
import React, { useRef, useEffect } from "react";
import { useInView } from 'react-intersection-observer';

const PortfolioCard = ({ children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animateElements = (elements) => {
    elements.forEach((element, index) => {
      const fromLeft = index % 2 === 0;
      anime({
        targets: element,
        translateX: inView ? 0 : fromLeft ? -200 : 200,
        opacity: inView ? 1 : 0,
        duration: 1000,
        easing: 'easeOutQuad',
        delay: anime.stagger(100),
      });
    });
  };

  useEffect(() => {
    const elementsToAnimate = document.querySelectorAll('.animate-element');
    animateElements(elementsToAnimate);
  }, [inView]);

  return (
    <>
      {children.map((el, idx) => (
        <div
          className={`${styles.PortfolioCard} animate-element`}
          key={el.id}
          ref={ref}
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
