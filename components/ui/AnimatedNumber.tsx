'use client';

import { useEffect, useState } from 'react';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  reverse?: boolean; // Si es true, anima desde el año actual hacia el value
}

export default function AnimatedNumber({
  value,
  duration = 2000,
  suffix = '',
  prefix = '',
  className = '',
  reverse = false,
}: AnimatedNumberProps) {
  const currentYear = new Date().getFullYear();
  const startValue = reverse ? currentYear : 0;
  const endValue = value;
  
  const [count, setCount] = useState(startValue);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById(`animated-number-${value}`);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [value, isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      
      // Calcular el valor actual basado en el progreso
      const range = endValue - startValue;
      const currentValue = startValue + range * easeOut;
      
      setCount(Math.floor(currentValue));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, startValue, endValue, duration]);

  return (
    <span id={`animated-number-${value}`} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

