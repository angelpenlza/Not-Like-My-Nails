// TODO: Make modal more clean for better UX.

'use client'

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";



export default function Navbar() {
  const menuRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);

  }

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

  const NavbarIcon = ({ src, handleClick }: { 
    src: string,
    handleClick: Function,
  }) => {
    return (
        <Image 
          src={src}
          alt=""
          width={40}
          height={40}
          className="navbar-icon"
          onClick={() => {
            handleClick();
          }}
        />
    )
  }

  const handleClickOutside = (e: MouseEvent) => {
    console.log('handling...')
    const target = e.target as Node;
    if(!menuRef.current?.contains(target) && !navbarRef.current?.contains(target)) {
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
    <div className="navbar" ref={navbarRef}>
      <NavbarIcon 
        src="/icons/menu.svg" 
        handleClick={() => { 
          toggleMenu();
        }}
      /> 
      
      <Link href='/'>
        <img 
          src='/navbar-title.png' 
          alt="" 
          className="navbar-title"
        />
      </Link>

      <NavbarIcon 
        src="/icons/search.svg" 
        handleClick={() => { }}
      />
      <Link href='/account'>
        <NavbarIcon 
          src="/icons/account.svg" 
          handleClick={() => { }}
        />
      </Link>

      <Link href='/shopping-cart'>
        <NavbarIcon 
          src="/icons/shopping.svg" 
          handleClick={() => { }}
        />
      </Link>

      {showMenu && <Menu />}
    </div>
  )
}