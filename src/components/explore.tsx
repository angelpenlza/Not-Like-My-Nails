'use client'

import Link from "next/link"
import { useState } from "react"

export default function Explore() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // takes an array of two strings ['one', 'two']
  const ExploreProduct = ({ style }: { style: string[] }) => {
    return (
      <Link 
        className={`explore-product ${style[0]}-${style[1]}`} 
        href={`/nails`}
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
  }

  const styles: string[][] = [
    ['cartoon', 'cutie'], 
    ['daring', 'diva'],
    ['basic', 'beauties'],
  ]

  const exploreProducts = styles.map((style) => {
    return (
      <ExploreProduct
        style={style}
      />
    )
  })

  const leftSlide = () => {
    if(currentSlide - 1 < 0) setCurrentSlide(2);
    else setCurrentSlide(currentSlide - 1);
  }

  const rightSlide = () => {
    if(currentSlide + 1 > 2) setCurrentSlide(0); 
    else setCurrentSlide(currentSlide + 1);
  }

  return (
    <div className="explore-segment">
      <div className="explore-header">
        <h2 className="explore-title">Explore</h2>
        <Link href="/nails" className="explore-nails-link">
          View all
        </Link>
      </div>
      { exploreProducts[currentSlide] }
      <div className="arrows">
        <div onClick={leftSlide}>{`<`}</div>
        {currentSlide + 1}/3
        <div onClick={rightSlide}>{`>`}</div>
      </div>
    </div>
  )
}