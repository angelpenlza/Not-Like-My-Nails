'use client'

import Link from "next/link"
import { useState } from "react"
import SwipeableArea from "./swipe";

export default function Explore() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const styles: string[][] = [
    ['cartoon', 'cutie'], 
    ['daring', 'diva'],
    ['basic', 'beauties'],
  ]

  const exploreProducts = styles.map((style) => {
    return (
        <Link 
        className={`
          explore-product 
          ${style[0]}-${style[1]} 
        `} 
        href={`/nails`}
        key={`${style[0]}-${style[1]}`}
      >
        <h3 className="explore-product-name">
          {`${style[0].charAt(0).toUpperCase() + style[0].slice(1)}
            ${style[1].charAt(0).toUpperCase() + style[1].slice(1)}`}
        </h3>
        <img 
          src={`/icons/${style[0]}-${style[1]}.svg`} 
          alt="" 
          className="explore-product-icon" 
        />
      </Link>
    )
  })

  const leftSlide = () => {
    if(currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  }

  const rightSlide = () => {
    if(currentSlide < 2) setCurrentSlide(currentSlide + 1);
  }

  return (
    <div className="explore-segment">
      <div className="explore-header">
        <h2 className="explore-title">Explore</h2>
        <Link href="/nails" className="explore-nails-link">
          View all
        </Link>
      </div>
      <SwipeableArea 
        styles="explore-products" 
        width={400} // TODO: make this dynamic based on the width of the explore product
      >
        {exploreProducts}
      </SwipeableArea>
      <div className="arrows">
        <img 
          src='/icons/general/left-caret.svg' 
          alt=""
          className="arrow"
          onClick={leftSlide}
        />
        { currentSlide + 1 } / 3
        <img 
          src='/icons/general/right-caret.svg' 
          alt=""
          className="arrow"
          onClick={rightSlide}
        />
      </div>
    </div>
  )
}