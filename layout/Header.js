import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="w-full py-6 px-6 bg-white">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left side - Navigation items */}
        <div className="flex items-center space-x-8">
        
          <div className="hidden md:flex space-x-6">
            <Link href="/solutions" className="text-gray-600 hover:text-gray-900">
              Solutions
            </Link>
            <Link href="/resources" className="text-gray-600 hover:text-gray-900">
              Resources
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
          </div>
        </div>

        <Link href="/" className="text-teal-600 text-2xl font-bold">
            Logo
          </Link>

        {/* Right side - CTA buttons */}
        <div className="flex items-center space-x-4">
          <Link href="/contact" className="hidden md:flex items-center text-gray-600 hover:text-gray-900">
            <Image src="/Header/headphones.svg" alt="Phone" width={20} height={20} className='mr-2'/>
            Talk to Sales
          </Link>
          <Link href="/?auth=login" className="text-gray-600 hover:text-gray-900">
            Log In
          </Link>
          <Link href="/?auth=login" className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700">
            Sign Up
          </Link>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-gray-600 hover:text-gray-900">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  )
}
