import React from 'react';
import { Video, ArrowUpRight, Users, Music, Camera, Layers } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { experienceData } from '../data/portfolioData';

export default function ShuffleCrew() {
  const crew = experienceData.find(exp => exp.id === 'shuffle-crew');

  return (
    <section id="experience" className="py-24 sm:py-32 bg-cream-100 border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Eyebrow */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-mono text-xs uppercase tracking-magazine text-terracotta-600 font-semibold">
            Creative Leadership 01
          </span>
          <span className="w-8 h-[1px] bg-terracotta-500"></span>
        </div>

        {/* Magazine Asymmetrical Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Real Photographic Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden bg-stone-300 border border-stone-400/80 shadow-md">
              <img
                src={crew.image}
                alt="Dance crew in synchronized movement and stage energy"
                className="w-full h-[420px] sm:h-[480px] object-cover filter contrast-[1.05] brightness-95"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-charcoal-950/90 to-transparent p-6 text-cream-50">
                <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta-300 block mb-1">
                  Team Operations &bull; 25 Members
                </span>
                <div className="font-serif text-xl sm:text-2xl text-cream-50">
                  {crew.title}
                </div>
                <div className="text-xs text-stone-300 mt-1">
                  Choreography coordination &bull; Video direction &bull; Social media
                </div>
              </div>
            </div>

            {/* Quick Badge */}
            <div className="absolute -top-3 -left-3 bg-forest-900 text-cream-50 px-3.5 py-1.5 text-xs font-mono hidden sm:block">
              {crew.role}
            </div>
          </div>

          {/* Right Column: Grounded Editorial Narrative & Verified Links */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-charcoal-500 block mb-1">
                Student Leadership &bull; IIT Hyderabad
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-normal text-charcoal-900 tracking-tight leading-tight">
                Coordinating movement, pacing, and community.
              </h2>
            </div>

            <p className="text-base text-charcoal-700 font-light leading-relaxed">
              {crew.summary} Leading a 25-member crew taught me the discipline of aligning diverse schedules, 
              directing moving cameras that follow choreography naturally, and cutting short-form dance reels where every visual beat matches the audio.
            </p>

            {/* Core Responsibilities List */}
            <div className="space-y-3 pt-2">
              <span className="text-xs uppercase font-mono tracking-wider text-terracotta-600 font-semibold block mb-2">
                Actual Coordination &amp; Creative Work:
              </span>
              {crew.responsibilities.map((resp, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-charcoal-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-forest-800 mt-2 shrink-0"></span>
                  <span className="font-light leading-relaxed">{resp}</span>
                </div>
              ))}
            </div>

            {/* Action Links */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href={crew.links[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-forest-900 hover:bg-forest-800 text-cream-50 text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                <Video className="w-4 h-4 text-terracotta-300" />
                <span>Watch Featured Reel (DfKil5jBUwA)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={crew.links[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-stone-200 border border-stone-400/80 hover:bg-stone-300 text-charcoal-800 text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-forest-900" />
                <span>Crew Instagram (@shuffle_crew_iith)</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
