import React, { useEffect, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useScrollReveal = (targets: string | Element | Element[], vars?: gsap.TweenVars) => {
  useGSAP(() => {
const tls: HTMLElement[] = gsap.utils.toArray(targets) as HTMLElement[];
    tls.forEach((tl) => {
      gsap.from(tl, {
        scrollTrigger: {
          trigger: tl,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        ease: 'back.out(1.7)',
        ...vars,
      });
    });
  });
};

export const useStaggerReveal = (targetRef: React.MutableRefObject<HTMLDivElement | null>, vars?: gsap.TimelineVars) => {
  useGSAP(() => {
    ScrollTrigger.batch(targetRef.current?.querySelectorAll('[class*=\"reveal\"]') ?? [], {
  onEnter: (batch) =>
        gsap.from(batch, {
          opacity: 0,
          y: 40,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power3.out',
          ...vars,
        }),
    onLeave: (batch) =>
        gsap.to(batch, {
          opacity: 0,
          y: -40,
          stagger: 0.1,
          duration: 0.4,
          ease: 'power2.in',
        }),
    onEnterBack: (batch) => gsap.fromTo(batch, { opacity: 0, y: 40 }, { opacity: 1, y: 0 }),
    onLeaveBack: (batch) => gsap.to(batch, { opacity: 0, y: -40 })
    });
  });
};

export const useHeroTimeline = (headline: Element | null, vars?: gsap.TimelineVars) => {
  useGSAP(() => {
    if (!headline) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: headline.parentElement,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      ...vars,
    });

    tl.from(headline, { scale: 1.2, opacity: 0, duration: 1 })
      .to(headline, { scale: 0.95, y: -20, duration: 1 }, 0.5);
  });
};

export default gsap;

