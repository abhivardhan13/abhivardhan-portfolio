import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles, Diamond } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { candidateInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#hero' },
    { label: 'Viral Content', href: '#content-strategy' },
    { label: 'BlueStone 01: Not For The Locker', href: '#campaign-01' },
    { label: 'BlueStone 02: For Every First', href: '#campaign-02' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'NSS & Milan', href: '#milana-nss' },
    { label: 'QuickBite AI', href: '#quickbite' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-ivory-100/95 backdrop-blur-md py-3 shadow-sm border-b border-charcoal-800/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand / Name */}
        <a href="#hero" className="group flex flex-col">
          <span className="font-serif text-lg sm:text-xl font-semibold tracking-wide text-charcoal-900 group-hover:text-champagne-600 transition-colors">
            {candidateInfo.name}
          </span>
          <span className="text-[10px] sm:text-xs uppercase tracking-luxury text-charcoal-500 font-medium">
            Creative Generalist & Storyteller
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center space-x-7">
          <a
            href="#content-strategy"
            className="text-xs uppercase tracking-wider text-charcoal-700 hover:text-champagne-600 font-medium transition-colors"
          >
            Viral Content (240K+)
          </a>
          
          <div className="relative group">
            <a
              href="#campaign-01"
              className="text-xs uppercase tracking-wider text-charcoal-700 hover:text-champagne-600 font-medium transition-colors flex items-center gap-1"
            >
              <Diamond className="w-3 h-3 text-champagne-500" />
              BlueStone Campaigns
            </a>
          </div>

          <a
            href="#leadership"
            className="text-xs uppercase tracking-wider text-charcoal-700 hover:text-champagne-600 font-medium transition-colors"
          >
            Leadership
          </a>

          <a
            href="#skills"
            className="text-xs uppercase tracking-wider text-charcoal-700 hover:text-champagne-600 font-medium transition-colors"
          >
            Skills
          </a>

          <a
            href="#contact"
            className="text-xs uppercase tracking-wider text-charcoal-700 hover:text-champagne-600 font-medium transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* BlueStone Candidate Target Badge & Social CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="px-3 py-1 rounded-full bg-champagne-100 border border-champagne-300 text-[11px] font-medium tracking-wide text-champagne-800 flex items-center gap-1.5 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-champagne-600 animate-pulse"></span>
            BlueStone Portfolio Application
          </div>

          <a
            href={candidateInfo.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-charcoal-800 hover:text-champagne-600 transition-colors font-medium border border-charcoal-300/60 px-3 py-1.5 rounded-full hover:border-champagne-500"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>Instagram</span>
            <ArrowUpRight className="w-3 h-3 opacity-60" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-charcoal-800 hover:text-champagne-600 focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-ivory-100/98 backdrop-blur-xl border-b border-charcoal-200 px-6 pt-4 pb-8 shadow-xl animate-fadeIn">
          <div className="flex flex-col space-y-4">
            <div className="pb-3 border-b border-charcoal-200">
              <span className="text-[10px] uppercase tracking-luxury text-champagne-700 font-semibold block mb-1">
                Role Application
              </span>
              <p className="text-xs text-charcoal-600 font-medium">
                Content Generalist – Brand & Content, Marketing
              </p>
            </div>
            
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-serif tracking-wide text-charcoal-800 hover:text-champagne-600 py-1 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-charcoal-200 flex flex-col space-y-2">
              <a
                href={candidateInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-xs bg-charcoal-800 text-ivory-100 py-2.5 rounded-md hover:bg-champagne-600 transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Visit Instagram (@abhivardhan_official)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
