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

      <Link 
        href='/nails'
        className="menu-link"
      >
        All Nails
      </Link>

      <Link 
        href="/appointments" 
        className="menu-link"
      >
        Book Appointment
      </Link>

      <Link 
        href="/shopping-cart" 
        className="menu-link"
      >
        Your Cart
      </Link>

      <Link 
        href="/account" 
        className="menu-link"
      >
        Account
      </Link>
    </div>
  )
}