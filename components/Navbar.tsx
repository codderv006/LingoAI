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
      <div className="container flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8 relative">
        <Link href="/" className="flex items-center gap-3">
          <span
            className="leading-none text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent tracking-tight pt-1"
            // Added leading-none and pt-1 to prevent text cutoff
          >
            LingoAI
          </span>
        </Link>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-10">
          <Link href="/#features" className="text-lg lg:text-xl font-semibold transition-colors hover:text-primary">
            Features
          </Link>
          <Link href="/#languages" className="text-lg lg:text-xl font-semibold transition-colors hover:text-primary">
            Languages
          </Link>
          <Link href="/#how-it-works" className="text-lg lg:text-xl font-semibold transition-colors hover:text-primary">
            How It Works
          </Link>
        </nav>
        
        <div className="flex items-center gap-3 sm:gap-5">
          <ModeToggle />
          {/* Hamburger menu for mobile */}
          <button
            className="block md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary/50"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
            width={64}
            height={64}
            className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
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
              className="text-lg font-semibold transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/#languages"
              className="text-lg font-semibold transition-colors hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Languages
            </Link>
            <Link
              href="/#how-it-works"
              className="text-lg font-semibold transition-colors hover:text-primary"
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