import Link from 'next/link';
import { Headphones, Mail, Globe, MessageCircle, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/" className="inline-block mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                LingoAI
              </span>
            </Link>
            <p className="text-muted-foreground mb-4">
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
            <h3 className="font-semibold text-lg mb-4">Languages</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">English</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Spanish</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">French</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">German</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Chinese</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">View All</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Blog</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Learning Tips</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Success Stories</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Help Center</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Careers</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Terms of Service</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} LingoAI. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary flex items-center">
              <Globe className="mr-2 h-4 w-4" />
              English
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary flex items-center">
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary flex items-center">
              <Headphones className="mr-2 h-4 w-4" />
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}