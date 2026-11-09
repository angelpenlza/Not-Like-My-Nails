'use client'

import { useEffect, useRef, useState } from "react"

export default function SwipeableArea({ children, styles, width }: {
  children: React.ReactNode,
  styles: string,
  width: number,
}) {
  const areaRef = useRef<HTMLDivElement>(null);
  const refX = useRef<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const handleScroll = (e: Event) => {
    console.log('scrolling')
    const scrollLeft = areaRef.current?.scrollLeft || 0;
    if(scrollLeft - refX.current < 0) {
      setDirection('left');
    }
    if(scrollLeft - refX.current > 0) {
      setDirection('right');
    }
    refX.current = scrollLeft;
    setCurrentSlide(refX.current / 10);
  }
  
  useEffect(() => {
    areaRef.current?.addEventListener('scrollend', handleScroll)
    return () => { 
      areaRef.current?.removeEventListener('scrollend', handleScroll)
    }
  }, [])

  useEffect(() => {
    let snapTo = 0;
    if(direction === 'left') {
      snapTo = Math.floor(refX.current / width) * width;
    }
    if(direction === 'right') {
      snapTo = Math.ceil(refX.current / width) * width;
    }
    areaRef.current?.scrollTo({ left: snapTo, behavior: 'smooth' });
  }, [currentSlide])

  return (
    <div className={`swipeable-area ${styles}`} ref={areaRef}>
      { children }
    </div>
  )
}