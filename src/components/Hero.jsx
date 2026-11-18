import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { candidateInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-32 bg-cream-100 overflow-hidden border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        {/* Magazine Masthead & Asymmetric Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left / Editorial Copy Column */}
          <div className="lg:col-span-7 space-y-7">
            {/* Small Editorial Eyebrow */}
            <div className="inline-flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-terracotta-500"></span>
              <span className="text-xs font-semibold uppercase tracking-magazine text-terracotta-600">
                {candidateInfo.editorialEyebrow}
              </span>
            </div>

            {/* Main Statement Heading */}
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal text-charcoal-900 tracking-tight leading-[1.02]">
              Stories <br />
              <span className="italic font-light text-forest-900">worth stopping</span> <br />
              for.
            </h1>

            {/* Supporting Bio */}
            <p className="text-base sm:text-lg text-charcoal-700 font-light leading-relaxed max-w-xl">
              {candidateInfo.bio}
            </p>

            {/* Sub-meta tag: IIT Hyderabad, clean & unobtrusive */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-charcoal-500 pt-1 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-700"></span>
                IIT Hyderabad (Class of 2027)
              </span>
              <span>&bull;</span>
              <span>240K+ Combined Reel Views</span>
              <span>&bull;</span>
              <span>Portfolio Application &bull; BlueStone Brand &amp; Content</span>
            </div>

            {/* Navigation & Action Links */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <a
                href="#campaign-01"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-forest-900 hover:bg-forest-800 text-cream-50 text-xs uppercase tracking-wider font-semibold transition-all shadow-sm"
              >
                <span>View Creative Campaigns</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#reels"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent border border-charcoal-800 text-charcoal-800 hover:bg-charcoal-800 hover:text-cream-50 text-xs uppercase tracking-wider font-semibold transition-all"
              >
                <span>Made to Catch the Eye</span>
              </a>

              <a
                href={candidateInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-charcoal-700 hover:text-terracotta-600 uppercase tracking-wider font-semibold py-3 transition-colors ml-1"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Right / Magazine Image Feature Spread */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Back offset decorative stone frame */}
              <div className="absolute -top-3 -right-3 w-full h-full bg-stone-300 pointer-events-none hidden sm:block"></div>
              
              {/* Main Editorial Image Frame */}
              <div className="relative bg-stone-200 overflow-hidden border border-stone-400/80 shadow-md">
                <img
                  src="/images/hero-editorial.jpg"
                  alt="Editorial photograph of fine jewellery displayed on warm linen and stone texture in natural light"
                  className="w-full h-[460px] sm:h-[520px] object-cover filter contrast-[1.03] brightness-[0.98] transition-transform duration-700 hover:scale-[1.02]"
                />

                {/* Editorial Framing Caption */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-950/30 to-transparent p-6 text-cream-50">
                  <div className="text-[10px] font-mono tracking-widest uppercase text-terracotta-300 mb-1">
                    Editorial Still &bull; Tactile Aesthetics
                  </div>
                  <div className="font-serif text-base sm:text-lg text-cream-50 font-normal">
                    Everyday fine jewellery &bull; Natural light &bull; Modern simplicity
                  </div>
                </div>
              </div>

              {/* Editorial Pill Note */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 bg-cream-50 border border-stone-300 px-4 py-2.5 shadow-sm text-xs text-charcoal-800 hidden sm:flex items-center gap-2 font-mono">
                <span className="w-2 h-2 rounded-full bg-terracotta-500 animate-pulse"></span>
                <span>BlueStone Speculative Work Below</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Section Navigator Strip */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-stone-300 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-medium text-charcoal-600">
          <a href="#reels" className="hover:text-forest-900 transition-colors flex items-center gap-2 group">
            <span className="font-mono text-terracotta-600 font-semibold">01</span>
            <span className="group-hover:translate-x-0.5 transition-transform">Made to Catch the Eye (Reels)</span>
          </a>
          <a href="#campaign-01" className="hover:text-forest-900 transition-colors flex items-center gap-2 group">
            <span className="font-mono text-terracotta-600 font-semibold">02</span>
            <span className="group-hover:translate-x-0.5 transition-transform">Campaign: Not For The Locker</span>
          </a>
          <a href="#campaign-02" className="hover:text-forest-900 transition-colors flex items-center gap-2 group">
            <span className="font-mono text-terracotta-600 font-semibold">03</span>
            <span className="group-hover:translate-x-0.5 transition-transform">Campaign: For Every First</span>
          </a>
          <a href="#experience" className="hover:text-forest-900 transition-colors flex items-center gap-2 group">
            <span className="font-mono text-terracotta-600 font-semibold">04</span>
            <span className="group-hover:translate-x-0.5 transition-transform">Campus Leadership &amp; Media</span>
          </a>
        </div>
      </div>
    </section>
  );
}
