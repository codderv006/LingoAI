import Link from 'next/link';
import { Headphones, Mail, Globe, MessageCircle, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t py-8 sm:py-10 md:py-16">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                LingoAI
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 text-sm sm:text-base">
              Master any language by talking to an intelligent AI that teaches, corrects, and tracks your fluency.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Youtube size={20} />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4">Languages</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm sm:text-base">English</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm sm:text-base">Spanish</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm sm:text-base">French</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm sm:text-base">German</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm sm:text-base">Chinese</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm sm:text-base">View All</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm sm:text-base">Blog</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm sm:text-base">Learning Tips</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm sm:text-base">Success Stories</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm sm:text-base">FAQ</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm sm:text-base">Help Center</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-base sm:text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm sm:text-base">About Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm sm:text-base">Careers</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm sm:text-base">Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm sm:text-base">Terms of Service</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary text-sm sm:text-base">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} LingoAI. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 mt-2 sm:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary flex items-center justify-center">
              <Globe className="mr-2 h-4 w-4" />
              English
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary flex items-center justify-center">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary flex items-center justify-center">
              <Headphones className="mr-2 h-4 w-4" />
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}