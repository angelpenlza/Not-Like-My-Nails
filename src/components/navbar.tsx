'use client'

import Image from "next/image";

const NavbarIcon = ({ src }: { src: string }) => {
  return (
      <Image 
        src={src}
        alt=""
        width={40}
        height={40}
        className="navbar-icon"
      />
  )
}

export default function Navbar() {
  return (
    <div className="navbar">
      <NavbarIcon src="/icons/menu.svg" /> 
      <h1 className="navbar-title">Not Like My Nails</h1>
      <NavbarIcon src="/icons/search.svg" />
      <NavbarIcon src="/icons/account.svg" />
      <NavbarIcon src="/icons/shopping.svg" />
    </div>
  )
}