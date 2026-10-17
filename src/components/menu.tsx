'use client'
import Link from "next/link"

export default function Menu() {
  return (
    <div className="menu">
      <Link 
        href="/" 
        className="menu-link"
      >
        Home
      </Link>
    </div>
  )
}