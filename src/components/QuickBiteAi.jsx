import React from 'react';
import { Cpu, Search, ArrowUpRight, Sparkles, Layers, Sliders, CheckCircle2 } from 'lucide-react';
import { GitHubIcon } from './Icons';
import { additionalProject } from '../data/portfolioData';

export default function QuickBiteAi() {
  return (
    <section id="quickbite" className="py-24 sm:py-32 bg-ivory-100 border-b border-charcoal-800/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-luxury text-champagne-700 font-semibold">
              Additional Technical &amp; Product Work
            </span>
            <span className="w-8 h-[1px] bg-champagne-400"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-charcoal-900 tracking-tight leading-tight">
            QuickBite AI: <br />
            <span className="italic font-light text-champagne-700">Product Thinking &amp; UX Problem-Solving</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-charcoal-600 font-light leading-relaxed">
            Great content strategy doesn't exist in a vacuum—it is rooted in consumer search behavior and digital experience design. 
            QuickBite AI was conceptualized to rethink how users discover food through natural language intent rather than rigid categorical filters.
          </p>
        </div>

        {/* Product Case Breakdown */}
        <div className="bg-ivory-50 border border-charcoal-200 p-6 sm:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Project Architecture & Rationale */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 bg-champagne-100 text-champagne-800 text-xs font-medium uppercase tracking-wider">
                  Open Source Project
                </span>
                <span className="text-xs font-mono text-charcoal-500">
                  Zomato AI Discovery Concept
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900">
                  {additionalProject.name} — {additionalProject.subtitle}
                </h3>
                <p className="text-sm text-charcoal-600 leading-relaxed font-light mt-3">
                  {additionalProject.summary}
                </p>
              </div>

              {/* Core Features / Product Architecture */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-ivory-100 border border-charcoal-200">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-charcoal-800 font-semibold mb-1">
                    <Search className="w-3.5 h-3.5 text-champagne-600" />
                    Intent-Based Search
                  </div>
                  <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                    Understands compound contextual queries ("guilt-free late night dessert under ₹300") instead of isolated keyword matching.
                  </p>
                </div>

                <div className="p-4 bg-ivory-100 border border-charcoal-200">
                  <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-charcoal-800 font-semibold mb-1">
                    <Sliders className="w-3.5 h-3.5 text-champagne-600" />
                    Frictionless Discovery UX
                  </div>
                  <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                    Minimizes user decision fatigue by ranking results by contextual relevance rather than sponsored placement alone.
                  </p>
                </div>
              </div>

              {/* Direct GitHub Link */}
              <div className="pt-2">
                <a
                  href={additionalProject.repository}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-charcoal-900 hover:bg-champagne-700 text-ivory-100 text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  <GitHubIcon className="w-4 h-4" />
                  <span>Inspect GitHub Repository (zomato-ai-search)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right: How This Informs Content Strategy at BlueStone */}
            <div className="lg:col-span-5 bg-champagne-50 border border-champagne-200 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-champagne-700" />
                  <span className="text-[11px] uppercase tracking-luxury text-champagne-800 font-semibold">
                    Strategic Relevance to BlueStone
                  </span>
                </div>

                <h4 className="font-serif text-xl text-charcoal-900 mb-3 font-medium">
                  Why Product Thinking Elevates Content
                </h4>

                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed font-light mb-4">
                  {additionalProject.strategicRelevance}
                </p>

                <div className="p-3 bg-ivory-50 border border-champagne-300 text-xs text-charcoal-800 space-y-2">
                  <div className="font-medium text-champagne-900">
                    Modern E-Commerce Behavior:
                  </div>
                  <div className="text-charcoal-600 font-light">
                    Shoppers don't browse jewelry by karat weight first; they browse by aesthetic vibe ("stackable rings for Monday", "minimalist office gold"). Product-grounded content creators bridge that translation gap effortlessly.
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-champagne-200/80 text-[11px] text-champagne-800 font-mono">
                Systemic Problem Solving &times; Audience Intent
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
