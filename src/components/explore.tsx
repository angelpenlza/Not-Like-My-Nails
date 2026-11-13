// TODO: swiping does not affect currentSelection, 
//  making use between that and arrows buggy

'use client'

import { useEffect, useRef, useState } from "react"
import Link from "next/link";

const sections: string[] = [
  'cartoon-cutie',
  'daring-diva',
  'basic-beauties',
]

export default function Explore() {
  const areaRef = useRef<HTMLDivElement>(null);
  const prevPos = useRef(0);
  const [currentSection, setCurrentSection] = useState(0);
  const sectionRefs = [
    useRef<HTMLAnchorElement>(null),
    useRef<HTMLAnchorElement>(null),
    useRef<HTMLAnchorElement>(null),
  ]

  const handleLeftArrow = () => {
    if(currentSection > 0) setCurrentSection(currentSection - 1);
  }

  const handleRightArrow = () => {
    if(currentSection < 2) setCurrentSection(currentSection + 1);
  }

  useEffect(() => {
    sectionRefs[currentSection].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    });
  }, [currentSection])  

  return (
    <div className="explore-segment">
      <h1 className="explore-title">Explore</h1>
      <div className="explore-products swipeable-area" ref={areaRef}>
        {
          sections.map((section, index) => {
            return (
              <Link
                className={`explore-product ${section}`}
                key={index}
                ref={sectionRefs[index]}
                href='/nails'
              >
                {section}
              </Link>
            );
          })
        }
      </div>
      <div className="arrows">
        <img 
          src='icons/general/left-caret.svg' 
          className="arrow"
          onClick={handleLeftArrow}
        />
          {currentSection + 1}/3
        <img 
          src='icons/general/right-caret.svg' 
          className="arrow"
          onClick={handleRightArrow}
        />
      </div>
    </div>
  );
}