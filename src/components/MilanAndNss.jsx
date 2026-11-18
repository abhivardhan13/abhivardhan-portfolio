import React from 'react';
import { BookOpen, Trophy, ArrowUpRight, ExternalLink, FileText, Shirt, Radio, Megaphone } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { experienceData } from '../data/portfolioData';

export default function MilanAndNss() {
  const milan = experienceData.find(exp => exp.id === 'milan');
  const nss = experienceData.find(exp => exp.id === 'nss');

  return (
    <section className="py-24 sm:py-32 bg-stone-100 border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-28">
        
        {/* SPREAD 1: MILAN INTER-HOSTEL CHAMPIONSHIP */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 order-2 lg:order-1">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs uppercase tracking-magazine text-terracotta-600 font-semibold">
                  Campus PR &amp; Media 02
                </span>
                <span className="w-8 h-[1px] bg-terracotta-500"></span>
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-charcoal-500 block mb-1">
                {milan.role} &bull; IIT Hyderabad
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-normal text-charcoal-900 tracking-tight leading-tight">
                Live tournament coverage and campus buzz.
              </h2>
            </div>

            <p className="text-base text-charcoal-700 font-light leading-relaxed">
              {milan.summary} As Media &amp; PR Coordinator, I managed rapid-turnaround digital publicity across athletic and cultural matches, designed match schedules, and drove external outreach.
            </p>

            {/* Responsibilities */}
            <div className="space-y-2.5 pt-1">
              {milan.responsibilities.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-charcoal-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500 mt-2 shrink-0"></span>
                  <span className="font-light leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            {/* Three Real Social Post Links */}
            <div className="pt-4 border-t border-stone-300">
              <span className="text-xs font-mono uppercase tracking-wider text-charcoal-600 font-semibold block mb-3">
                Verified Social Coverage Posts:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {milan.links.map((link, idx) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-cream-100 hover:bg-stone-200 border border-stone-300 text-charcoal-800 transition-colors flex items-center justify-between text-xs font-mono"
                  >
                    <div className="flex items-center gap-1.5 font-medium">
                      <InstagramIcon className="w-3.5 h-3.5 text-terracotta-600" />
                      <span>{link.label}</span>
                    </div>
                    <ArrowUpRight className="w-3 h-3 opacity-60" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Image Feature */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <div className="relative overflow-hidden bg-stone-300 border border-stone-400/80 shadow-md">
              <img
                src={milan.image}
                alt="Championship stadium atmosphere and campus sports festival"
                className="w-full h-[380px] sm:h-[460px] object-cover filter contrast-[1.05]"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-charcoal-950/90 to-transparent p-6 text-cream-50">
                <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta-300 block mb-1">
                  Milan Championship
                </span>
                <div className="font-serif text-xl sm:text-2xl text-cream-50">
                  Real-Time Event Coverage
                </div>
                <div className="text-xs text-stone-300 mt-1">
                  Match countdowns &bull; Score updates &bull; Campus excitement
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* SPREAD 2: NSS 84-PAGE MAGAZINE & BRAND IDENTITY */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pt-8 border-t border-stone-300">
          
          {/* Left Image Feature */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden bg-stone-300 border border-stone-400/80 shadow-md">
              <img
                src={nss.image}
                alt="Editorial publication design and magazine layout spread"
                className="w-full h-[380px] sm:h-[460px] object-cover filter contrast-[1.05]"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-charcoal-950/90 to-transparent p-6 text-cream-50">
                <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta-300 block mb-1">
                  Editorial Publication &bull; NSS
                </span>
                <div className="font-serif text-xl sm:text-2xl text-cream-50">
                  84-Page Annual Magazine
                </div>
                <div className="text-xs text-stone-300 mt-1">
                  Complete editorial grid layout, typography &amp; varsity apparel design
                </div>
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs uppercase tracking-magazine text-terracotta-600 font-semibold">
                  Publishing &amp; Identity 03
                </span>
                <span className="w-8 h-[1px] bg-terracotta-500"></span>
              </div>
              <span className="text-xs font-mono uppercase tracking-wider text-charcoal-500 block mb-1">
                {nss.role} &bull; National Service Scheme
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-normal text-charcoal-900 tracking-tight leading-tight">
                Editorial design, typography, and varsity branding.
              </h2>
            </div>

            <p className="text-base text-charcoal-700 font-light leading-relaxed">
              {nss.summary} My work spanned comprehensive long-form publication design—typesetting an 84-page magazine, creating publicity for guest speakers, and designing official varsity jackets.
            </p>

            {/* Deliverable Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="p-3.5 bg-cream-100 border border-stone-300">
                <FileText className="w-4 h-4 text-terracotta-600 mb-1" />
                <div className="font-serif text-base text-charcoal-900 font-medium">
                  84-Page Magazine
                </div>
                <p className="text-xs text-charcoal-600 font-light mt-0.5">
                  Editorial structure, grid hierarchy, and print-ready typography.
                </p>
              </div>

              <div className="p-3.5 bg-cream-100 border border-stone-300">
                <Shirt className="w-4 h-4 text-terracotta-600 mb-1" />
                <div className="font-serif text-base text-charcoal-900 font-medium">
                  Varsity Jacket Design
                </div>
                <p className="text-xs text-charcoal-600 font-light mt-0.5">
                  Custom typographic embroidery and apparel production specs.
                </p>
              </div>
            </div>

            {/* Verified Work Google Drive Link */}
            <div className="pt-3">
              <a
                href={nss.links[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-forest-900 hover:bg-forest-800 text-cream-50 text-xs uppercase tracking-wider font-semibold transition-colors shadow-sm"
              >
                <ExternalLink className="w-4 h-4 text-terracotta-300" />
                <span>View Verified NSS Work (Google Drive Folder)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
