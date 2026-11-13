'use client'

import { signup } from "@/lib/login-functions";
import Link from "next/link";

export default function Signup() {
  return (
    <div className="form-page" onSubmit={signup}>
      <h1>Signup</h1>
      <label>Name</label>
      <input />
      <label>Phone Number</label>
      <input />
      <p>Already have an account? <Link href='/login'>Login here!</Link></p>
      <button type="submit">Sign-up</button>
    </div>
  )
}