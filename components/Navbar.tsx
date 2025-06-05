"use client";

import Link from 'next/link';
import { useState } from 'react';
import { ModeToggle } from '@/components/ModeToggle';
import { Menu, X } from 'lucide-react';

// Import badge assets (adjust the path/filename as needed)
import Image from 'next/image';
import boltBadgeWhite from '@/assets/white_circle_360x360.png';
import boltBadgeBlack from '@/assets/black_circle_360x360.png';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Detect background (light/dark) for badge (simple example, you may want to use theme context)
  // For demonstration, we'll use the black badge (for light backgrounds)
  const badgeSrc = boltBadgeBlack;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 relative">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            LingoAI
          </span>
        </Link>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/#features" className="text-sm font-medium transition-colors hover:text-primary">
            Features
          </Link>
          <Link href="/#languages" className="text-sm font-medium transition-colors hover:text-primary">
            Languages
          </Link>
          <Link href="/#how-it-works" className="text-sm font-medium transition-colors hover:text-primary">
            How It Works
          </Link>
        </nav>
        
        <div className="flex items-center gap-2 sm:gap-4">
          <ModeToggle />
          {/* Hamburger menu for mobile */}
          <button
            className="block md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Bolt.new Badge - top right, scalable and responsive */}
        <a
          href="https://bolt.new/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute right-2 top-2 md:right-6 md:top-2 z-50"
          aria-label="Bolt.new"
          style={{ lineHeight: 0 }}
        >
          <Image
            src={badgeSrc}
            alt="Bolt.new Badge"
            width={40}
            height={40}
            className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12"
            priority
          />
        </a>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container py-4 flex flex-col space-y-4 px-4 sm:px-6">
            <Link
              href="/#features"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/#languages"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Languages
            </Link>
            <Link
              href="/#how-it-works"
              className="text-sm font-medium transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              How It Works
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}