'use client'

import Image from "next/image";
import Menu from "./menu";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);

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

  return (
    <div className="navbar">
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