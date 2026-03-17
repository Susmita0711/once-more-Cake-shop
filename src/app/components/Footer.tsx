import { Link } from 'react-router-dom';
import { Cake, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-luxury text-white pt-20 pb-10 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Cake className="w-6 h-6 text-accent" />
                </div>
              <span className="font-serif text-2xl tracking-tight">Once More</span>
            </div>
            <p className="text-white/60 leading-relaxed mb-6">
              Crafting unforgettable moments with exceptional cakes, premium chocolates, and curated party essentials since the beginning.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 transition-transform duration-300" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 transition-transform duration-300" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 transition-transform duration-300" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-6 text-white font-medium relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-gold" />
            </h3>
            <ul className="space-y-4">
              {[
                { path: '/', label: 'Home' },
                { path: '/cakes', label: 'Custom Cakes' },
                { path: '/products', label: 'Products' },
                { path: '/gallery', label: 'Gallery' },
                { path: '/blog', label: 'Blog' },
                { path: '/about', label: 'About Us' },
                { path: '/contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-white/60 hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent/0 group-hover:bg-accent rounded-full transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg mb-6 text-white font-medium relative inline-block">
              Our Products
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-gold" />
            </h3>
            <ul className="space-y-4">
              {[
                'Custom Cakes',
                'Chocolate Collections',
                'Premium Candies',
                'Party Supplies',
                'Gift Boxes'
              ].map((item) => (
                <li key={item}>
                  <span className="text-white/60 hover:text-accent cursor-pointer transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-accent/0 group-hover:bg-accent rounded-full transition-all duration-300" />
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg mb-6 text-white font-medium relative inline-block">
              Legal
              <span className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-gold" />
            </h3>
            <ul className="space-y-4">
              {[
                { label: 'Privacy Policy', href: '#' },
                { label: 'Terms of Service', href: '#' },
                { label: 'Refund Policy', href: '#' },
                { label: 'Shipping Info', href: '#' },
                { label: 'FAQ', href: '#' }
              ].map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    className="text-white/60 hover:text-accent transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-accent/0 group-hover:bg-accent rounded-full transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 pt-12 pb-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-serif text-white mb-2">Stay Updated</h4>
              <p className="text-white/50">Subscribe to our newsletter for exclusive offers and updates</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-white/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-gold text-foreground font-medium rounded-lg hover:shadow-gold transition-all duration-300 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            © {currentYear} Once More. All rights reserved. Crafted with ❤️
          </p>
          <div className="flex items-center gap-2 text-white/50 text-sm">
            Made with passion and premium ingredients
          </div>
        </div>
      </div>
    </footer>
  );
}
