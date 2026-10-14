'use client'

import Image from "next/image";
import Menu from "./menu";
import { useState } from "react";

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
      <h1 className="navbar-title">Not Like My Nails</h1>
      <NavbarIcon 
        src="/icons/search.svg" 
        handleClick={() => { }}
      />
      <NavbarIcon 
        src="/icons/account.svg" 
        handleClick={() => { }}
      />
      <NavbarIcon 
        src="/icons/shopping.svg" 
        handleClick={() => { }}
      />
      {showMenu && <Menu />}
    </div>
  )
}