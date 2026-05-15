'use client'

import { useState } from 'react'
import { Menu, X, ShoppingBag, User, Search, Moon, Sun } from 'lucide-react'
import ContactUsButton from './ContactUsButton'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex hidden items-center justify-between h-16">
          {/* Left Section: Menu & Live Badge */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Live Badge */}
            <div className="lg:flex items-center gap-2 px-3 py-1 border border-gray-300 rounded-full hidden">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium text-gray-700">Live</span>
            </div>
          </div>

          {/* Center: Logo */}
          <div className="flex-1 hidden lg:flex justify-center">
            <div className="text-3xl font-black lg:tracking-tight text-black" style={{ fontFamily: 'Georgia, serif' }}>
              korem's news
            </div>
          </div>

          {/* Right Section: Action Icons */}
          <div className="hidden lg:flex items-center gap-4 ">

            <button
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="User account"
            >
              <User className="h-6 w-6" />
            </button>

            <button
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Search"
            >
              <Search className="h-6 w-6" />
            </button>

            <ContactUsButton />
          </div>
        </div>

        <div className="lg:hidden flex items-center justify-between py-2">
          <div className="items-center gap-2 px-3 py-1 border border-gray-300 rounded-full flex">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700">Live</span>
          </div>
          <div className="text-lg font-black lg:tracking-tight text-black" style={{ fontFamily: 'Georgia, serif' }}>
            korem's news
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="pb-2 lg:pb-4 lg:space-y-2">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Categories
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              Breaking News
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
            >
              About
            </a>
            <ContactUsButton />
          </div>
        )}
      </div>
    </nav>
  )
}
