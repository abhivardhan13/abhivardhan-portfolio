import React, { useState } from 'react';
import { Film, Clock, Heart, AlertCircle, Share2, Award } from 'lucide-react';
import { speculativeCampaigns } from '../data/portfolioData';

export default function SpeculativeCampaign2() {
  const campaign = speculativeCampaigns[1]; // For Every First
  const [activeFrame, setActiveFrame] = useState(0);

  return (
    <section id="campaign-02" className="py-24 sm:py-32 bg-stone-100 border-b border-stone-300 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Prominent Speculative Disclaimer Banner */}
        <div className="mb-10 p-4 bg-stone-200 border border-stone-400/80 text-charcoal-800 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-terracotta-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <span className="font-semibold uppercase tracking-wider text-charcoal-900 mr-2">
              Speculative Creative Concept:
            </span>
            <span className="text-charcoal-700">
              {campaign.disclaimer}
            </span>
          </div>
        </div>

        {/* Campaign Header & Hero Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-magazine text-terracotta-600 font-semibold">
                Campaign Case Study 02
              </span>
              <span className="w-8 h-[1px] bg-terracotta-500"></span>
              <span className="text-xs font-mono text-charcoal-500 uppercase">
                {campaign.theme}
              </span>
            </div>

            <h2 className="font-serif text-5xl sm:text-7xl lg:text-8xl font-normal text-charcoal-900 tracking-tight leading-[0.98]">
              {campaign.title}
            </h2>

            <p className="text-xl sm:text-2xl font-serif italic text-forest-900 pt-1">
              "{campaign.tagline}"
            </p>
          </div>

          <div className="lg:col-span-4 text-sm text-charcoal-600 font-light leading-relaxed">
            {campaign.conceptOverview}
          </div>
        </div>

        {/* Full-Width Visual Moodboard Spread (3 Images Asymmetric Magazine Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 mb-16">
          {/* Main Large Emotional Portrait Shot */}
          <div className="md:col-span-7 relative overflow-hidden bg-stone-200 border border-stone-300">
            <img
              src={campaign.heroImage}
              alt="Young professional woman in contemporary office, quiet confidence, wearing delicate pendant"
              className="w-full h-[400px] sm:h-[480px] object-cover filter contrast-[1.03] transition-transform duration-700 hover:scale-[1.02]"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-charcoal-950/80 to-transparent p-5 text-cream-50">
              <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta-300 block mb-0.5">
                Campaign Mood
              </span>
              <div className="font-serif text-lg">
                Self-earned pride &bull; First salary milestones &bull; Quiet independence
              </div>
            </div>
          </div>

          {/* Right Stack: Detail & Modern Workplace */}
          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 sm:gap-6">
            <div className="relative overflow-hidden bg-stone-200 border border-stone-300">
              <img
                src={campaign.detailImage}
                alt="Close-up of minimalist diamond solitaire pendant with warm skin tones"
                className="w-full h-[200px] sm:h-[228px] object-cover filter contrast-[1.02]"
              />
              <div className="absolute bottom-2 left-3 bg-cream-50/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono text-charcoal-800">
                Detail: Dainty solitaire pendant &amp; subtle shine
              </div>
            </div>

            <div className="relative overflow-hidden bg-stone-200 border border-stone-300">
              <img
                src={campaign.lifestyleImage}
                alt="Modern collaborative workplace and first achievement setting"
                className="w-full h-[200px] sm:h-[228px] object-cover filter contrast-[1.02]"
              />
              <div className="absolute bottom-2 left-3 bg-cream-50/90 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono text-charcoal-800">
                Setting: Career breakthrough &amp; personal ambition
              </div>
            </div>
          </div>
        </div>

        {/* 3 Creative Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {campaign.creativePillars.map((pillar, idx) => (
            <div key={pillar.title} className="p-6 sm:p-8 bg-cream-100 border border-stone-300 flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono text-terracotta-600 font-semibold block mb-2">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl text-charcoal-900 mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-charcoal-600 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 30-Second Emotional Film Storyboard */}
        <div className="bg-cream-100 border border-stone-300 p-6 sm:p-10 mb-16 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-stone-300 gap-3">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-terracotta-600 block mb-1">
                Visual Script
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900">
                30-Second Milestone Brand Film Storyboard
              </h3>
            </div>
            <span className="text-xs font-mono bg-stone-200 border border-stone-300 px-3 py-1.5 text-forest-900">
              Pacing: Warm piano score &bull; Intimate cinematic realism
            </span>
          </div>

          {/* Storyboard Navigation Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-6">
            {campaign.filmStoryboard.map((scene, idx) => (
              <button
                key={scene.scene}
                onClick={() => setActiveFrame(idx)}
                className={`p-3 text-left transition-all border ${
                  activeFrame === idx
                    ? 'bg-forest-900 text-cream-50 border-forest-900'
                    : 'bg-stone-200/70 text-charcoal-700 border-stone-300 hover:border-terracotta-400'
                }`}
              >
                <div className="text-[10px] font-mono opacity-70 mb-1">
                  {scene.time}
                </div>
                <div className="font-serif text-xs sm:text-sm font-medium truncate">
                  {scene.scene}
                </div>
              </button>
            ))}
          </div>

          {/* Active Frame Presentation */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-stone-200/70 p-6 sm:p-8 border border-stone-300">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-terracotta-600">
                <Clock className="w-3.5 h-3.5" />
                <span>{campaign.filmStoryboard[activeFrame].time}</span>
                <span>/</span>
                <span className="font-sans font-semibold text-charcoal-800 uppercase">
                  {campaign.filmStoryboard[activeFrame].scene}
                </span>
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-charcoal-500 block mb-1">
                  Cinematic Framing
                </span>
                <p className="font-serif text-lg sm:text-xl text-charcoal-900 leading-relaxed">
                  {campaign.filmStoryboard[activeFrame].visual}
                </p>
              </div>

              <div className="p-3.5 bg-cream-100 border-l-2 border-terracotta-500 text-sm text-charcoal-700 font-light italic">
                {campaign.filmStoryboard[activeFrame].audio}
              </div>
            </div>

            <div className="lg:col-span-4 bg-forest-900 text-cream-50 p-6 border border-forest-950 min-h-[180px] flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-terracotta-300 font-mono">
                <span>SCENE {activeFrame + 1} OF 5</span>
                <Heart className="w-4 h-4 text-terracotta-400" />
              </div>
              <div className="my-3">
                <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta-300 block mb-1">
                  Emotional Core
                </span>
                <div className="font-serif text-base text-cream-100">
                  {campaign.filmStoryboard[activeFrame].superText || "Genuine self-earned accomplishment."}
                </div>
              </div>
              <div className="text-[10px] font-mono text-cream-200/60 pt-2 border-t border-forest-800">
                Atmosphere: Warm interior glow &bull; Mirror reflections
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Community Activation Ideas */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Share2 className="w-4 h-4 text-terracotta-600" />
            <h3 className="font-serif text-2xl text-charcoal-900">
              Community Storytelling &amp; Social Activations
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {campaign.socialExecutions.map((item) => (
              <div key={item.title} className="p-6 bg-cream-100 border border-stone-300">
                <span className="text-xs font-mono uppercase tracking-wider text-terracotta-600 font-semibold block mb-2">
                  {item.title}
                </span>
                <p className="font-serif text-lg text-charcoal-900 mb-2 leading-snug">
                  {item.copy}
                </p>
                <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                  {item.context}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
