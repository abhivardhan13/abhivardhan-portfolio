import React, { useState } from 'react';
import { Eye, ArrowUpRight, Zap, Music, Film, Layers, CheckCircle, TrendingUp, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { viralReelsData } from '../data/portfolioData';

export default function ContentConnects() {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const activeReel = viralReelsData[activeReelIndex];

  return (
    <section id="content-strategy" className="py-24 sm:py-32 bg-ivory-100 border-b border-charcoal-800/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-luxury text-champagne-700 font-semibold">
              Section 01 / Organic Reach Analysis
            </span>
            <span className="w-8 h-[1px] bg-champagne-400"></span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-charcoal-900 tracking-tight leading-tight">
            Content That Connects: <br />
            <span className="italic font-light text-champagne-700">Deconstructing 240K+ Organic Views</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-charcoal-600 font-light leading-relaxed">
            Viral distribution is not algorithmic luck; it is an exact science of sensory arrest, narrative pacing, and emotional timing. 
            Here is the breakdown of two real Instagram reels—explaining the creative rationale behind every second without unsupported claims.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap gap-3 mb-10 border-b border-charcoal-200 pb-4">
          {viralReelsData.map((reel, idx) => (
            <button
              key={reel.id}
              onClick={() => setActiveReelIndex(idx)}
              className={`px-5 py-3 text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 flex items-center gap-3 border ${
                activeReelIndex === idx
                  ? 'bg-charcoal-900 text-ivory-100 border-charcoal-900 shadow-sm'
                  : 'bg-ivory-50 text-charcoal-700 border-charcoal-200 hover:border-champagne-400'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${activeReelIndex === idx ? 'bg-champagne-400' : 'bg-charcoal-400'}`} />
                <span className="font-serif text-base">{reel.reach}</span>
              </div>
              <span className="opacity-70 hidden sm:inline">|</span>
              <span className="text-xs uppercase tracking-wider opacity-80 truncate max-w-[200px]">
                {reel.tag}
              </span>
            </button>
          ))}
        </div>

        {/* Main Content Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Reel Preview Card & Core Specs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-ivory-50 border border-charcoal-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-charcoal-200">
                <span className="text-[11px] uppercase tracking-luxury text-champagne-700 font-semibold">
                  Verified Performance Metric
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-champagne-100 text-champagne-800 text-[10px] font-medium uppercase tracking-wider">
                  Instagram Organic
                </span>
              </div>

              <div className="mt-6 mb-6">
                <div className="font-serif text-4xl sm:text-5xl font-medium text-charcoal-900">
                  {activeReel.reach}
                </div>
                <div className="text-xs uppercase tracking-wide text-charcoal-500 font-medium mt-1">
                  Organic Audience Impressions
                </div>
                <h3 className="font-serif text-xl text-charcoal-800 mt-4 leading-snug">
                  {activeReel.title}
                </h3>
              </div>

              {/* Visual Mock / Reel Representation */}
              <div className="relative aspect-[4/5] bg-charcoal-900 text-ivory-100 p-6 flex flex-col justify-between overflow-hidden group border border-charcoal-800">
                {/* Background artistic pattern */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/70 to-charcoal-900/40 z-10" />
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#B49A68_1px,transparent_1px)] [background-size:16px_16px]" />

                <div className="relative z-20 flex justify-between items-start">
                  <div className="bg-charcoal-800/80 backdrop-blur-sm border border-champagne-400/30 px-3 py-1 rounded text-[11px] tracking-wide text-champagne-300">
                    Hook Type: {activeReel.coreHook}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-ivory-100/10 backdrop-blur-md flex items-center justify-center">
                    <InstagramIcon className="w-4 h-4 text-champagne-300" />
                  </div>
                </div>

                <div className="relative z-20 space-y-3">
                  <div className="p-3 bg-charcoal-800/80 border border-charcoal-700 text-xs text-ivory-200">
                    <p className="font-medium text-champagne-300 mb-1 text-[11px] uppercase tracking-wider">
                      Executive Creative Rationale
                    </p>
                    <p className="line-clamp-3 text-xs leading-relaxed opacity-90">
                      {activeReel.creativeBreakdown.hookStrategy}
                    </p>
                  </div>

                  <a
                    href={activeReel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-3 bg-champagne-500 hover:bg-champagne-600 text-charcoal-900 font-semibold text-xs uppercase tracking-wider transition-colors"
                  >
                    <span>Inspect Live Reel on Instagram</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-charcoal-200/60 flex items-center justify-between text-xs text-charcoal-500">
                <span>Direct Verification Link</span>
                <a
                  href={activeReel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-champagne-700 hover:underline font-mono truncate max-w-[220px]"
                >
                  {activeReel.url}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: In-Depth Strategic Dissection */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-ivory-50 border border-charcoal-200 p-6 sm:p-8">
              <h4 className="font-serif text-2xl text-charcoal-900 mb-6">
                Creative Architecture Breakdown
              </h4>

              <div className="space-y-6">
                {/* 1. Hook Strategy */}
                <div className="flex items-start gap-4 p-4 bg-ivory-100 border border-charcoal-200/70">
                  <div className="p-2.5 bg-champagne-100 text-champagne-800 shrink-0 mt-0.5">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs uppercase tracking-wider text-charcoal-900 font-semibold mb-1">
                      01. The Hook (0.0s – 2.0s Attention Arrest)
                    </h5>
                    <p className="text-sm text-charcoal-600 leading-relaxed">
                      {activeReel.creativeBreakdown.hookStrategy}
                    </p>
                  </div>
                </div>

                {/* 2. Pacing & Editing */}
                <div className="flex items-start gap-4 p-4 bg-ivory-100 border border-charcoal-200/70">
                  <div className="p-2.5 bg-champagne-100 text-champagne-800 shrink-0 mt-0.5">
                    <Film className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs uppercase tracking-wider text-charcoal-900 font-semibold mb-1">
                      02. Narrative Pacing &amp; Retention Sequencing
                    </h5>
                    <p className="text-sm text-charcoal-600 leading-relaxed">
                      {activeReel.creativeBreakdown.pacingAndEdits}
                    </p>
                  </div>
                </div>

                {/* 3. Audio Selection */}
                <div className="flex items-start gap-4 p-4 bg-ivory-100 border border-charcoal-200/70">
                  <div className="p-2.5 bg-champagne-100 text-champagne-800 shrink-0 mt-0.5">
                    <Music className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs uppercase tracking-wider text-charcoal-900 font-semibold mb-1">
                      03. Audio Architecture &amp; Cadence
                    </h5>
                    <p className="text-sm text-charcoal-600 leading-relaxed">
                      {activeReel.creativeBreakdown.audioSelection}
                    </p>
                  </div>
                </div>

                {/* 4. Visual Framing */}
                <div className="flex items-start gap-4 p-4 bg-ivory-100 border border-charcoal-200/70">
                  <div className="p-2.5 bg-champagne-100 text-champagne-800 shrink-0 mt-0.5">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs uppercase tracking-wider text-charcoal-900 font-semibold mb-1">
                      04. Composition, Lighting &amp; Framing
                    </h5>
                    <p className="text-sm text-charcoal-600 leading-relaxed">
                      {activeReel.creativeBreakdown.visualFraming}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Translation for BlueStone */}
            <div className="bg-champagne-50 border-l-4 border-champagne-500 p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-champagne-700" />
                <span className="text-xs uppercase tracking-luxury text-champagne-800 font-semibold">
                  Direct Translation to BlueStone Jewellery
                </span>
              </div>
              <h5 className="font-serif text-lg text-charcoal-900 mb-2 font-medium">
                How this transforms jewellery marketing on social feeds:
              </h5>
              <p className="text-sm text-charcoal-700 leading-relaxed">
                {activeReel.creativeBreakdown.blueStoneApplication}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
