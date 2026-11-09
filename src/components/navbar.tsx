// TODO: Make modal more clean for better UX.
// specifics: weird cuts between pages, probably caused
//  by order of events 
// menu icons are too small now because of an update, as is,
//  users must be very precise to acheive desired effects. 

'use client'

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";



export default function Navbar() {
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  const MenuLink = ({ path, title }: { 
    path: string,
    title: string
  }) => {
    return (
      <Link 
        href={path}
        className="menu-link"
        onClick={() => setShowMenu(false) }
      >
        {title}
      </Link>
    )
  }

  const Menu = () => {
    return (
    <div className="menu" ref={menuRef}>
      <MenuLink path="/" title="Home" />
      <MenuLink path="/nails" title="All Nails" />
      <MenuLink path="/appointments" title="Book Appointment" />
      <MenuLink path="/shopping-cart" title="Your Cart" />
      <MenuLink path="/account" title="Account" />
    </div>
    )
  }

  const NavbarIcon = ({ path }: { path: string }) => {
    return (
      <Link href={path}>
        <Image 
          src={`/icons${path}.svg`}
          alt=""
          width={40}
          height={40}
          className="navbar-icon"
        />
      </Link>
    )
  }

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as Node;
    if(!menuRef.current?.contains(target) && !menuButtonRef.current?.contains(target)) {
      setShowMenu(false);
    }
  }

  useEffect(() => {
    document.addEventListener('pointerdown', handleClickOutside);
    return () => {
      document.removeEventListener('pointerdown', handleClickOutside);
    }
  }, [menuRef])

  return (
    <div className="navbar">

      <div ref={menuButtonRef}>
        <Image 
          src='/icons/menu.svg'
          alt=""
          height={40}
          width={40}
          onClick={toggleMenu}
          className="navbar-icon"
        />
      </div>
      
      <Link href='/'>
        <img 
          src='/navbar-title.png' 
          alt="" 
          className="navbar-title"
        />
      </Link>

      <Image 
        src='/icons/search.svg'
        alt=""
        height={40}
        width={40}
        className="navbar-icon"
      />

      <NavbarIcon path="/account" />
      <NavbarIcon path="/shopping-cart" />

      {showMenu && <Menu />}
    </div>
  )
}