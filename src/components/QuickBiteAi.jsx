import React from 'react';
import { Search, ArrowUpRight, Cpu } from 'lucide-react';
import { GitHubIcon } from './Icons';
import { quickBiteProject } from '../data/portfolioData';

export default function QuickBiteAi() {
  return (
    <section id="quickbite" className="py-20 bg-cream-100 border-b border-stone-300">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        
        {/* Supporting Project Banner */}
        <div className="p-8 sm:p-10 bg-stone-200/80 border border-stone-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-stone-300">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[11px] font-mono uppercase tracking-widest text-terracotta-600 font-semibold">
                  Supporting Technical Project &bull; Product Thinking
                </span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900">
                {quickBiteProject.title} &mdash; <span className="font-light italic text-forest-900">{quickBiteProject.subtitle}</span>
              </h3>
            </div>

            <a
              href={quickBiteProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest-900 hover:bg-forest-800 text-cream-50 text-xs uppercase tracking-wider font-semibold transition-colors shrink-0"
            >
              <GitHubIcon className="w-4 h-4" />
              <span>GitHub Repo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 items-start">
            <div className="md:col-span-7">
              <span className="text-xs font-mono uppercase tracking-wider text-charcoal-500 block mb-1">
                Concept &amp; Intent Discovery
              </span>
              <p className="text-sm text-charcoal-700 font-light leading-relaxed">
                {quickBiteProject.summary}
              </p>
            </div>

            <div className="md:col-span-5 p-4 bg-cream-100 border border-stone-300">
              <span className="text-xs font-mono uppercase tracking-wider text-forest-900 font-semibold block mb-1">
                Relevance to Brand Content:
              </span>
              <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                {quickBiteProject.takeaway}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
