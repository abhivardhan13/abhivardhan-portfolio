import React, { useState } from 'react';
import { ArrowUpRight, Play, Eye, Sparkles, Music, Film, Scissors, Maximize } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { viralReelsData } from '../data/portfolioData';

export default function ContentConnects() {
  const [activeReelIndex, setActiveReelIndex] = useState(0);
  const activeReel = viralReelsData[activeReelIndex];

  return (
    <section id="reels" className="py-24 sm:py-32 bg-forest-900 text-cream-100 border-b border-forest-950 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-magazine text-terracotta-300 font-semibold">
              Selected Short-Form Work
            </span>
            <span className="w-8 h-[1px] bg-terracotta-400"></span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-normal tracking-tight text-cream-50 leading-tight">
            Made to catch the eye.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-cream-200/80 font-light leading-relaxed">
            In short-form video, people decide in less than two seconds whether to stay or scroll. 
            Here is a breakdown of the creative choices behind two of my most viewed reels — focusing on opening hooks, editing rhythm, music, and framing.
          </p>
        </div>

        {/* Tab Selector: Switch Between Both Reels */}
        <div className="flex flex-wrap gap-4 mb-12 border-b border-forest-800 pb-6">
          {viralReelsData.map((reel, idx) => (
            <button
              key={reel.id}
              onClick={() => setActiveReelIndex(idx)}
              className={`text-left px-5 py-4 transition-all border ${
                activeReelIndex === idx
                  ? 'bg-cream-100 text-charcoal-900 border-cream-100 shadow-md'
                  : 'bg-forest-950/70 text-cream-200 border-forest-800 hover:border-terracotta-400'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider mb-1 opacity-70">
                <span>Reel 0{idx + 1}</span>
                <span>&bull;</span>
                <span className="font-semibold text-terracotta-600">{reel.views}</span>
              </div>
              <div className="font-serif text-lg sm:text-xl font-medium">
                {reel.title}
              </div>
            </button>
          ))}
        </div>

        {/* Active Reel Editorial Breakdown Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Large Visual Video Thumbnail & Watch CTA */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative group overflow-hidden bg-forest-950 border border-forest-800 shadow-xl">
              {/* Actual Image Thumbnail */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={activeReel.thumbnail}
                  alt={activeReel.title}
                  className="w-full h-full object-cover filter contrast-[1.05] brightness-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/30 to-transparent"></div>

                {/* Center Play Button Graphic */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full bg-cream-100/90 text-forest-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <Play className="w-7 h-7 fill-forest-900 ml-1" />
                  </div>
                </div>

                {/* Overlaid Views Badge */}
                <div className="absolute top-4 left-4 bg-forest-950/80 backdrop-blur-md border border-forest-700/60 px-3.5 py-1 text-xs font-mono text-cream-50 flex items-center gap-2">
                  <Eye className="w-3.5 h-3.5 text-terracotta-400" />
                  <span>{activeReel.exactMetric}</span>
                </div>

                {/* Bottom Overlay Title & Focus */}
                <div className="absolute bottom-4 inset-x-4 text-cream-50">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta-300 block mb-1">
                    Creative Focus
                  </span>
                  <div className="font-serif text-base sm:text-lg text-cream-50 leading-snug">
                    {activeReel.creativeFocus}
                  </div>
                </div>
              </div>

              {/* Direct Watch Link Button */}
              <a
                href={activeReel.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-4 bg-terracotta-500 hover:bg-terracotta-600 text-cream-50 font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Watch Original Reel on Instagram</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-xs text-cream-200/60 font-mono text-center">
              Tap above to view the actual video on Instagram
            </p>
          </div>

          {/* Right Column: Genuine Creative Elements Breakdown */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-forest-950/80 border border-forest-800 p-6 sm:p-8 space-y-6">
              <div className="border-b border-forest-800 pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-terracotta-300 block mb-1">
                  Creative Thinking
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-cream-50">
                  What makes this video work
                </h3>
              </div>

              <div className="space-y-5">
                {/* 1. Opening Hook */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-forest-800 text-terracotta-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-cream-100 font-semibold mb-1">
                      01. The Opening Hook
                    </h4>
                    <p className="text-sm text-cream-200/80 leading-relaxed font-light">
                      {activeReel.creativeElements.hook}
                    </p>
                  </div>
                </div>

                {/* 2. Visual Storytelling */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-forest-800 text-terracotta-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Film className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-cream-100 font-semibold mb-1">
                      02. Visual Storytelling
                    </h4>
                    <p className="text-sm text-cream-200/80 leading-relaxed font-light">
                      {activeReel.creativeElements.storytelling}
                    </p>
                  </div>
                </div>

                {/* 3. Editing Rhythm */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-forest-800 text-terracotta-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Scissors className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-cream-100 font-semibold mb-1">
                      03. Editing Rhythm
                    </h4>
                    <p className="text-sm text-cream-200/80 leading-relaxed font-light">
                      {activeReel.creativeElements.editingRhythm}
                    </p>
                  </div>
                </div>

                {/* 4. Music Selection */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-forest-800 text-terracotta-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Music className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-cream-100 font-semibold mb-1">
                      04. Music Selection
                    </h4>
                    <p className="text-sm text-cream-200/80 leading-relaxed font-light">
                      {activeReel.creativeElements.musicSelection}
                    </p>
                  </div>
                </div>

                {/* 5. Framing & Composition */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded bg-forest-800 text-terracotta-300 flex items-center justify-center shrink-0 mt-0.5">
                    <Maximize className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-wider text-cream-100 font-semibold mb-1">
                      05. Framing &amp; Composition
                    </h4>
                    <p className="text-sm text-cream-200/80 leading-relaxed font-light">
                      {activeReel.creativeElements.framing}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Relevance Note for Fine Jewellery Content */}
            <div className="p-6 bg-forest-950/60 border border-terracotta-500/40 border-l-4 border-l-terracotta-500 text-cream-100">
              <span className="text-[11px] font-mono uppercase tracking-widest text-terracotta-300 block mb-1">
                How this informs brand content at BlueStone
              </span>
              <p className="text-sm text-cream-200/90 leading-relaxed font-light">
                Jewellery thrives on tactile observation: catching natural light mid-stride, macro close-ups of delicate settings, and human context. 
                Applying sharp hook construction and natural pacing turns jewellery from a static display item into a dynamic lifestyle desire.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
