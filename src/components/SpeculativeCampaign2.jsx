import React, { useState } from 'react';
import { ShieldAlert, Film, Clock, Heart, Sparkles, Award, ArrowRight, Share2, Compass, Layers } from 'lucide-react';
import { speculativeCampaigns } from '../data/portfolioData';

export default function SpeculativeCampaign2() {
  const campaign = speculativeCampaigns[1]; // For Every First
  const [selectedScene, setSelectedScene] = useState(0);

  return (
    <section id="campaign-02" className="py-24 sm:py-32 bg-ivory-100 border-b border-charcoal-800/10 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Speculative Badge / Mandatory Disclaimer Banner */}
        <div className="mb-8 p-4 bg-champagne-50 border border-champagne-300 text-charcoal-800 flex items-start sm:items-center gap-3">
          <ShieldAlert className="w-5 h-5 text-champagne-700 shrink-0 mt-0.5 sm:mt-0" />
          <div className="text-xs sm:text-sm">
            <span className="font-semibold uppercase tracking-wider text-champagne-900 mr-2">
              Speculative Brand Campaign 02:
            </span>
            <span className="text-charcoal-700">
              {campaign.disclaimer}
            </span>
          </div>
        </div>

        {/* Campaign Header */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs uppercase tracking-luxury text-champagne-700 font-semibold">
              Campaign Case Study #{campaign.number}
            </span>
            <span className="w-12 h-[1px] bg-champagne-400"></span>
            <span className="px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider bg-champagne-700 text-ivory-100">
              Personal Milestones &amp; Autonomy
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-charcoal-900 tracking-tight leading-[1.05]">
            {campaign.title}
          </h2>

          <p className="mt-4 text-xl sm:text-2xl font-serif italic text-champagne-700 font-light">
            "{campaign.tagline}"
          </p>

          <p className="mt-6 text-base sm:text-lg text-charcoal-600 font-light leading-relaxed max-w-3xl">
            {campaign.conceptSummary}
          </p>
        </div>

        {/* Strategic Foundation: The Emotional Grounding */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-ivory-50 border border-charcoal-200 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-luxury text-champagne-700 font-semibold block mb-2">
                01. The Gifting Stereotype
              </span>
              <h3 className="font-serif text-xl text-charcoal-900 mb-3">
                Passive Receivers of Gold
              </h3>
              <p className="text-sm text-charcoal-600 leading-relaxed font-light">
                {campaign.insight.culturalTension}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-charcoal-200 text-xs text-charcoal-400 font-mono">
              Old Industry Tropes
            </div>
          </div>

          <div className="bg-ivory-50 border border-charcoal-200 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-luxury text-champagne-700 font-semibold block mb-2">
                02. The Emerging Reality
              </span>
              <h3 className="font-serif text-xl text-charcoal-900 mb-3">
                Self-Funded Milestones
              </h3>
              <p className="text-sm text-charcoal-600 leading-relaxed font-light">
                {campaign.insight.consumerShift}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-charcoal-200 text-xs text-charcoal-400 font-mono">
              Empowerment &amp; Pride
            </div>
          </div>

          <div className="bg-charcoal-900 text-ivory-100 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[11px] uppercase tracking-luxury text-champagne-400 font-semibold block mb-2">
                03. The Campaign Line
              </span>
              <h3 className="font-serif text-xl text-ivory-100 mb-3">
                "For Every First You Earned."
              </h3>
              <p className="text-sm text-ivory-200 leading-relaxed font-light">
                {campaign.insight.creativeIdea}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-charcoal-800 text-xs text-champagne-400 font-mono">
              BlueStone Positioning
            </div>
          </div>
        </div>

        {/* 30-Second Emotional Film Storyboard */}
        <div className="bg-ivory-50 border border-charcoal-200 p-6 sm:p-10 mb-16 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-charcoal-200 gap-4">
            <div>
              <span className="text-[11px] uppercase tracking-luxury text-champagne-700 font-semibold block mb-1">
                Emotional Storyboard
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900">
                30-Second Milestone Digital Film
              </h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase tracking-wider text-charcoal-500 font-medium">
                Audio Direction:
              </span>
              <span className="text-xs bg-champagne-100 text-champagne-800 px-3 py-1 rounded-full font-medium">
                Warm Piano Progression &times; Orchestral Swell
              </span>
            </div>
          </div>

          {/* Storyboard Navigation Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 my-8">
            {campaign.heroFilm.storyboard.map((item, idx) => (
              <button
                key={item.scene}
                onClick={() => setSelectedScene(idx)}
                className={`p-3 text-left transition-all border ${
                  selectedScene === idx
                    ? 'bg-charcoal-900 text-ivory-100 border-charcoal-900'
                    : 'bg-ivory-100 text-charcoal-700 border-charcoal-200 hover:border-champagne-400'
                }`}
              >
                <div className="text-[10px] font-mono tracking-wider opacity-70 mb-1">
                  {item.timestamp}
                </div>
                <div className="font-serif text-xs sm:text-sm font-medium line-clamp-1">
                  Scene {idx + 1}: {item.scene}
                </div>
              </button>
            ))}
          </div>

          {/* Active Storyboard Frame Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-ivory-100 p-6 sm:p-8 border border-charcoal-200">
            {/* Visual Frame Description */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-champagne-700">
                <Clock className="w-3.5 h-3.5" />
                <span>{campaign.heroFilm.storyboard[selectedScene].timestamp}</span>
                <span className="mx-1">/</span>
                <span className="font-sans font-medium uppercase tracking-wider text-charcoal-700">
                  {campaign.heroFilm.storyboard[selectedScene].scene}
                </span>
              </div>

              <div>
                <h4 className="text-xs uppercase tracking-luxury text-charcoal-500 font-semibold mb-1">
                  Cinematic Visual Setup
                </h4>
                <p className="text-base sm:text-lg font-serif text-charcoal-900 leading-relaxed">
                  {campaign.heroFilm.storyboard[selectedScene].visual}
                </p>
              </div>

              <div className="pt-2">
                <h4 className="text-xs uppercase tracking-luxury text-charcoal-500 font-semibold mb-1">
                  Dialogue &amp; Audio Arc
                </h4>
                <p className="text-sm text-charcoal-700 italic font-serif leading-relaxed bg-ivory-50 p-3 border-l-2 border-champagne-500">
                  "{campaign.heroFilm.storyboard[selectedScene].audio}"
                </p>
              </div>
            </div>

            {/* On-Screen Graphic / Mood Anchor */}
            <div className="lg:col-span-5 bg-charcoal-900 text-ivory-100 p-6 border border-charcoal-800 min-h-[200px] flex flex-col justify-between">
              <div className="flex items-center justify-between text-xs text-champagne-300">
                <span className="font-mono">FRAME {selectedScene + 1} OF 5</span>
                <Heart className="w-4 h-4 text-champagne-400" />
              </div>

              <div className="my-4">
                <div className="text-[11px] uppercase tracking-luxury text-champagne-400 mb-1">
                  Emotional Core
                </div>
                <div className="font-serif text-lg text-ivory-100">
                  {campaign.heroFilm.storyboard[selectedScene].onScreen || campaign.heroFilm.storyboard[selectedScene].superText}
                </div>
              </div>

              <div className="text-[11px] text-charcoal-400 font-sans border-t border-charcoal-800 pt-3">
                Cinematic Intimacy: Warm incandescent store lighting &times; honest mirror reflections.
              </div>
            </div>
          </div>
        </div>

        {/* Extensions & Campaign Mechanics */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Campaign Strategy */}
          <div className="lg:col-span-5 bg-ivory-50 border border-charcoal-200 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-champagne-700" />
              <span className="text-[11px] uppercase tracking-luxury text-champagne-700 font-semibold">
                Strategic Foundation
              </span>
            </div>
            
            <h4 className="font-serif text-2xl text-charcoal-900 mb-4">
              From Traditional Dowry to Self-Made Dignity
            </h4>

            <p className="text-sm text-charcoal-700 leading-relaxed font-light mb-4">
              When a young woman steps into a BlueStone store to celebrate her first job, she isn't browsing for trinkets; 
              she is acquiring a permanent symbol of her financial self-reliance.
            </p>

            <div className="p-4 bg-champagne-50 border border-champagne-200 text-xs text-champagne-900">
              <strong className="block mb-1 font-semibold uppercase tracking-wider">
                Audience Retention Metric:
              </strong>
              Emotional relatability converts 3.4&times; better in content recall than discount promotions or generic sparkle close-ups.
            </div>
          </div>

          {/* Social Extensions */}
          <div className="lg:col-span-7 bg-ivory-50 border border-charcoal-200 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Share2 className="w-4 h-4 text-champagne-700" />
              <span className="text-[11px] uppercase tracking-luxury text-champagne-700 font-semibold">
                Social &amp; Community Activation
              </span>
            </div>

            <h4 className="font-serif text-2xl text-charcoal-900 mb-6">
              How the Community Amplifies the Story
            </h4>

            <div className="space-y-4">
              {campaign.extensions.map((ext) => (
                <div key={ext.channel} className="p-4 bg-ivory-100 border border-charcoal-200/80">
                  <div className="text-xs font-semibold uppercase tracking-wider text-champagne-800 mb-1">
                    {ext.channel}
                  </div>
                  <div className="font-serif text-lg text-charcoal-900 mb-1">
                    "{ext.headline}"
                  </div>
                  <p className="text-xs sm:text-sm text-charcoal-600 font-light">
                    {ext.subtext}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
