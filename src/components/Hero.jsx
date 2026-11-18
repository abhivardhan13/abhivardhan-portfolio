import React from 'react';
import { ArrowDown, ArrowUpRight, Mail, Sparkles, BookOpen, Layers, Award } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { candidateInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 lg:pt-44 lg:pb-36 bg-ivory-100 overflow-hidden border-b border-charcoal-800/10">
      {/* Subtle editorial backdrop accent line */}
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-charcoal-800/5 pointer-events-none hidden md:block" />
      <div className="absolute top-0 left-1/3 w-[1px] h-full bg-charcoal-800/5 pointer-events-none hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        {/* Top Eyebrow / Application Banner */}
        <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-champagne-50 border border-champagne-300 text-xs font-medium text-champagne-800 tracking-wide">
            <span className="w-2 h-2 rounded-full bg-champagne-500"></span>
            Application Portfolio for BlueStone Jewellery &amp; Lifestyle Limited
          </span>
          <span className="text-xs uppercase tracking-luxury text-charcoal-500 font-medium">
            Role: Content Generalist – Brand &amp; Content
          </span>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-8 space-y-6 md:space-y-8">
            <div className="space-y-3">
              <p className="text-xs sm:text-sm uppercase tracking-luxury font-medium text-champagne-700">
                Candidate Dossier &amp; Creative Showcase
              </p>
              
              <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-charcoal-900 leading-[1.08]">
                Bhukya Abhivardhan <br />
                <span className="italic font-light text-champagne-600">Nayak</span>
              </h1>
            </div>

            {/* Positioning Statement */}
            <div className="py-2 border-l-2 border-champagne-500 pl-4 sm:pl-6">
              <h2 className="text-lg sm:text-xl md:text-2xl font-serif text-charcoal-800 font-medium tracking-wide">
                {candidateInfo.role}
              </h2>
              <p className="text-sm text-charcoal-500 font-sans mt-1">
                {candidateInfo.education.degree} — <span className="font-medium text-charcoal-700">{candidateInfo.education.institution}</span> (Class of {candidateInfo.education.graduationYear})
              </p>
            </div>

            {/* Editorial Manifesto */}
            <p className="text-base sm:text-lg text-charcoal-700 leading-relaxed max-w-2xl font-light">
              Fine jewellery is rarely just precious metal and certified cut. It is a daily assertion of personal identity, an emotional milestone, and a visual rhythm. 
              Applying an engineering mindset from <span className="font-medium text-charcoal-900">IIT Hyderabad</span> with a director’s sense of pacing, 
              I design short-form content that captures attention organically and translate strategic brand tensions into contemporary lifestyle campaigns.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#campaign-01"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-charcoal-800 text-ivory-100 hover:bg-champagne-600 font-sans text-xs uppercase tracking-wider font-semibold rounded-none transition-all duration-200 shadow-sm"
              >
                <span>Explore Speculative Campaigns</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href="#content-strategy"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-charcoal-800 text-charcoal-800 hover:bg-charcoal-800 hover:text-ivory-100 font-sans text-xs uppercase tracking-wider font-semibold rounded-none transition-all duration-200"
              >
                <span>View Viral Content (240K+)</span>
              </a>

              <a
                href={candidateInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-charcoal-700 hover:text-champagne-600 font-sans text-xs uppercase tracking-wider font-medium transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Instagram Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>
            </div>
          </div>

          {/* Right Column: Key Proof Points / Editorial Stat Card */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-ivory-50 p-6 sm:p-8 border border-charcoal-200 shadow-sm relative">
              <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
                <div className="w-24 h-24 bg-champagne-200/40 rotate-45 transform translate-x-12 -translate-y-12"></div>
              </div>

              <span className="text-[11px] uppercase tracking-luxury text-champagne-700 font-semibold block mb-4">
                Core Strengths &amp; Evidence
              </span>

              <div className="space-y-5 divide-y divide-charcoal-200/60">
                <div className="pt-1">
                  <div className="font-serif text-3xl font-semibold text-charcoal-900">
                    240,000+
                  </div>
                  <div className="text-xs uppercase tracking-wider text-charcoal-600 font-medium mt-0.5">
                    Organic Instagram Reach
                  </div>
                  <p className="text-xs text-charcoal-500 mt-1 leading-normal">
                    Driven by precise hook timing, retention sequencing, and audio curation across key reels (170K+ &amp; 71K+).
                  </p>
                </div>

                <div className="pt-4">
                  <div className="font-serif text-2xl font-semibold text-charcoal-900">
                    2 Speculative Campaigns
                  </div>
                  <div className="text-xs uppercase tracking-wider text-charcoal-600 font-medium mt-0.5">
                    BlueStone Brand Strategy
                  </div>
                  <p className="text-xs text-charcoal-500 mt-1 leading-normal">
                    Full 30s hero storyboards, cultural insights, and omni-channel extensions for "Not For The Locker" and "For Every First".
                  </p>
                </div>

                <div className="pt-4">
                  <div className="font-serif text-2xl font-semibold text-charcoal-900">
                    25-Member Team Lead
                  </div>
                  <div className="text-xs uppercase tracking-wider text-charcoal-600 font-medium mt-0.5">
                    Shuffle Crew &amp; Campus Media
                  </div>
                  <p className="text-xs text-charcoal-500 mt-1 leading-normal">
                    Directing rehearsal cadences, performance cinematography, Inter-hostel PR coverage, and an 84-page NSS magazine.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-charcoal-200 flex items-center justify-between text-xs">
                <span className="text-charcoal-500">Academic Hub</span>
                <span className="font-medium text-charcoal-800">IIT Hyderabad ('27)</span>
              </div>
            </div>

            {/* Quick Contact Box */}
            <div className="p-4 bg-champagne-50/70 border border-champagne-200/70 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-champagne-200 flex items-center justify-center text-champagne-800">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-champagne-800 font-semibold">
                    Open for Discussion
                  </div>
                  <div className="text-xs text-charcoal-700 font-mono">
                    {candidateInfo.socials.email}
                  </div>
                </div>
              </div>
              <a
                href="#contact"
                className="text-xs font-semibold text-champagne-700 hover:text-champagne-900 underline underline-offset-4"
              >
                Inquire
              </a>
            </div>
          </div>
        </div>

        {/* Section Index Ribbon */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-charcoal-800/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-medium text-charcoal-600">
          <a href="#content-strategy" className="hover:text-champagne-700 transition-colors flex items-center gap-2 group">
            <span className="font-mono text-champagne-600 font-semibold">01</span>
            <span className="group-hover:translate-x-0.5 transition-transform">Content That Connects</span>
          </a>
          <a href="#campaign-01" className="hover:text-champagne-700 transition-colors flex items-center gap-2 group">
            <span className="font-mono text-champagne-600 font-semibold">02</span>
            <span className="group-hover:translate-x-0.5 transition-transform">Campaign: Not For The Locker</span>
          </a>
          <a href="#campaign-02" className="hover:text-champagne-700 transition-colors flex items-center gap-2 group">
            <span className="font-mono text-champagne-600 font-semibold">03</span>
            <span className="group-hover:translate-x-0.5 transition-transform">Campaign: For Every First</span>
          </a>
          <a href="#leadership" className="hover:text-champagne-700 transition-colors flex items-center gap-2 group">
            <span className="font-mono text-champagne-600 font-semibold">04</span>
            <span className="group-hover:translate-x-0.5 transition-transform">Leadership &amp; PR Portfolio</span>
          </a>
        </div>
      </div>
    </section>
  );
}
