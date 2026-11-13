'use client'

import { login } from "@/lib/login-functions";
import Link from "next/link";

export default function Login() {
  return (
    <form className="form-page" action={login}>
      <h1>Login</h1>
      <label>Name</label>
      <input />
      <label>Phone Number</label>
      <input />
      <p>Don't have an account? <Link href='/signup'>Sign up here!</Link></p>
      <button type="submit">Login</button>
    </form>
  )
}