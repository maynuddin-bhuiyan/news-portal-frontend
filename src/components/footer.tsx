'use client'

import Link from 'next/link'
import {
  
  PinIcon,
  ArrowUpRight
} from 'lucide-react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'

interface SocialLink {
  name: string
  href: string
  icon: React.ReactNode
  color: string
}

interface FooterLink {
  label: string
  href: string
}

const socialLinks: SocialLink[] = [
  {
    name: 'Facebook',
    href: '#',
    icon: <FaFacebook size={18} />,
    color: 'hover:bg-blue-600'
  },
  {
    name: 'YouTube',
    href: '#',
    icon: <FaYoutube size={18} />,
    color: 'hover:bg-red-500'
  },
  {
    name: 'Twitter',
    href: '#',
    icon: <BsTwitter size={18} />,
    color: 'hover:bg-sky-500'
  },
  {
    name: 'Pinterest',
    href: '#',
    icon: <PinIcon size={18} />,
    color: 'hover:bg-rose-500'
  },
  {
    name: 'Instagram',
    href: '#',
    icon: <FaInstagram size={18} />,
    color: 'hover:bg-pink-500'
  }
]

const footerLinks: FooterLink[] = [
  { label: 'About Us', href: '#' },
  { label: 'Contact Us', href: '#' },
  { label: 'Comment Policy', href: '#' },
  { label: 'Apps', href: '#' },
  { label: 'Archive', href: '#' },
  { label: 'Advertisement', href: '#' },
  { label: 'Conference Hall', href: '#' }
]

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#071633] text-white">
      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-pink-500/20 blur-3xl" />

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-12 lg:grid-cols-3">
          
          {/* Logo & Description */}
          <div>
            <h2 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-4xl font-extrabold text-transparent">
              kriams's news
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-300">
              Bringing the latest breaking news, politics, entertainment,
              business, sports, and global stories directly to readers worldwide.
            </p>

            {/* Social */}
            <div className="mt-8 flex items-center gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  title={social.name}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:text-white ${social.color}`}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:mx-auto">
            <h3 className="mb-6 text-xl font-semibold text-white">
              Quick Links
            </h3>

            <nav className="grid grid-cols-2 gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 text-sm text-gray-300 transition hover:text-cyan-400"
                >
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-6 text-xl font-semibold text-white">
              Subscribe Newsletter
            </h3>

            <p className="mb-5 text-sm leading-6 text-gray-300">
              Get daily news updates directly in your inbox.
            </p>

            <form className="flex overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-14 w-full bg-transparent px-5 text-sm text-white placeholder:text-gray-400 focus:outline-none"
              />

              <button
                type="submit"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 px-6 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-10 border-t border-white/10 bg-black/20">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 text-center md:flex-row">
          
          <p className="text-sm text-gray-400">
            © 2026 <Link target="_blank" href="https://www.maynuddin.com/" className="hover:text-cyan-400">
             maynuddin.com
            </Link>{" "}
             — Powered by korem's news. All rights reserved.
          </p>

          <p className="max-w-2xl text-xs leading-6 text-gray-500">
            Unauthorized use or reproduction of content from kriams's news
            for commercial purposes is strictly prohibited.
          </p>
        </div>
      </div>
    </footer>
  )
}