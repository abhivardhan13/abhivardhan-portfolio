import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { InstagramIcon, LinkedInIcon } from './Icons';
import { candidateInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Reels', href: '#reels' },
    { label: 'Campaign 01', href: '#campaign-01' },
    { label: 'Campaign 02', href: '#campaign-02' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream-100/95 backdrop-blur-md py-3.5 shadow-sm border-b border-stone-300/80'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#top" className="group flex flex-col">
          <span className="font-serif text-lg sm:text-xl font-medium tracking-wide text-charcoal-900 group-hover:text-forest-900 transition-colors">
            {candidateInfo.name}
          </span>
          <span className="text-[10px] uppercase tracking-magazine text-terracotta-600 font-medium">
            Content &bull; Culture &bull; Campaigns
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-wide text-charcoal-700 hover:text-terracotta-600 font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social / Direct Email Link */}
        <div className="hidden lg:flex items-center space-x-3">
          <a
            href={candidateInfo.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="p-2 text-charcoal-700 hover:text-forest-900 hover:bg-stone-200/70 transition-all rounded-full"
          >
            <InstagramIcon className="w-4 h-4" />
          </a>

          <a
            href={candidateInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 text-charcoal-700 hover:text-forest-900 hover:bg-stone-200/70 transition-all rounded-full"
          >
            <LinkedInIcon className="w-4 h-4" />
          </a>

          <a
            href={candidateInfo.socials.emailLink}
            className="text-xs uppercase tracking-wider font-semibold text-cream-50 bg-forest-900 hover:bg-forest-800 px-4 py-2 transition-colors flex items-center gap-1.5"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-charcoal-800 hover:text-forest-900 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-charcoal-900" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream-100 border-b border-stone-300 px-6 pt-4 pb-8 shadow-xl">
          <div className="flex flex-col space-y-4">
            <div className="pb-3 border-b border-stone-300">
              <span className="text-[10px] uppercase tracking-magazine text-terracotta-600 font-semibold block mb-0.5">
                Creative Portfolio
              </span>
              <p className="text-xs text-charcoal-600">
                Bhukya Abhivardhan Nayak &bull; IIT Hyderabad
              </p>
            </div>
            
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-serif tracking-wide text-charcoal-800 hover:text-terracotta-600 py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-stone-300 flex flex-col space-y-2">
              <a
                href={candidateInfo.socials.emailLink}
                className="text-center text-xs uppercase tracking-wider font-semibold text-cream-50 bg-forest-900 py-2.5 hover:bg-forest-800 transition-colors"
              >
                bm23btech11005@iith.ac.in
              </a>
              <div className="flex items-center justify-center gap-4 pt-2">
                <a
                  href={candidateInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-charcoal-700 hover:text-forest-900 flex items-center gap-1.5"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>Instagram</span>
                </a>
                <span className="text-stone-400">&bull;</span>
                <a
                  href={candidateInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-charcoal-700 hover:text-forest-900 flex items-center gap-1.5"
                >
                  <LinkedInIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
