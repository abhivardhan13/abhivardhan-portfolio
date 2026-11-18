import React from 'react';
import { Video, Layout, Camera, FileSpreadsheet, Database, BarChart3, Scissors, Sparkles, CheckCircle2 } from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function SkillsTools() {
  const toolIcons = {
    "CapCut Editing": <Video className="w-4 h-4 text-terracotta-600" />,
    "Video Pacing & Rhythm": <Scissors className="w-4 h-4 text-terracotta-600" />,
    "Figma Layouts": <Layout className="w-4 h-4 text-terracotta-600" />,
    "Natural Light Framing": <Camera className="w-4 h-4 text-terracotta-600" />,
    "Microsoft Excel": <FileSpreadsheet className="w-4 h-4 text-terracotta-600" />,
    "SQL (Basic Querying)": <Database className="w-4 h-4 text-terracotta-600" />,
    "Power BI (Visualizations)": <BarChart3 className="w-4 h-4 text-terracotta-600" />
  };

  return (
    <section id="skills" className="py-24 sm:py-32 bg-stone-100 border-b border-stone-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-magazine text-terracotta-600 font-semibold">
              Practical Capabilities
            </span>
            <span className="w-8 h-[1px] bg-terracotta-500"></span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-normal text-charcoal-900 tracking-tight leading-tight">
            Creative craft &amp; practical tools.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-charcoal-600 font-light leading-relaxed">
            Content creation is strongest when creative eye meets operational rigor. 
            Here is an honest representation of the tools and creative methods I use day to day.
          </p>
        </div>

        {/* Visual Magazine Layout for Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Video & Visual Storytelling */}
          <div className="bg-cream-100 p-8 border border-stone-300 flex flex-col justify-between shadow-sm">
            <div>
              <div className="pb-4 border-b border-stone-300 mb-6">
                <span className="text-xs font-mono text-terracotta-600 font-semibold uppercase block mb-1">
                  Core Craft 01
                </span>
                <h3 className="font-serif text-2xl text-charcoal-900">
                  Video &amp; Motion Direction
                </h3>
              </div>

              <div className="space-y-4">
                <div className="p-3.5 bg-stone-100 border border-stone-300">
                  <div className="font-mono text-xs font-semibold text-charcoal-800 uppercase flex items-center justify-between mb-1">
                    <span>CapCut</span>
                    <span className="text-terracotta-600 font-normal">Primary Editor</span>
                  </div>
                  <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                    Short-form video cutting, match-cuts, micro-transitions, text choreography, and audio-beat sync.
                  </p>
                </div>

                <div className="p-3.5 bg-stone-100 border border-stone-300">
                  <div className="font-mono text-xs font-semibold text-charcoal-800 uppercase flex items-center justify-between mb-1">
                    <span>Pacing &amp; Audio Curation</span>
                    <span className="text-terracotta-600 font-normal">Method</span>
                  </div>
                  <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                    Selecting tracks that elevate the visual mood, creating tension-and-release, and designing hooks.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-300 text-xs font-mono text-charcoal-500">
              Tested on reels with 240K+ combined views
            </div>
          </div>

          {/* Card 2: Design & Framing */}
          <div className="bg-cream-100 p-8 border border-stone-300 flex flex-col justify-between shadow-sm">
            <div>
              <div className="pb-4 border-b border-stone-300 mb-6">
                <span className="text-xs font-mono text-terracotta-600 font-semibold uppercase block mb-1">
                  Core Craft 02
                </span>
                <h3 className="font-serif text-2xl text-charcoal-900">
                  Framing &amp; Editorial Design
                </h3>
              </div>

              <div className="space-y-4">
                <div className="p-3.5 bg-stone-100 border border-stone-300">
                  <div className="font-mono text-xs font-semibold text-charcoal-800 uppercase flex items-center justify-between mb-1">
                    <span>Photography &amp; Framing</span>
                    <span className="text-terracotta-600 font-normal">Eye</span>
                  </div>
                  <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                    Working with natural golden-hour daylight, directional lines, rule of thirds, and close macro framing.
                  </p>
                </div>

                <div className="p-3.5 bg-stone-100 border border-stone-300">
                  <div className="font-mono text-xs font-semibold text-charcoal-800 uppercase flex items-center justify-between mb-1">
                    <span>Figma &amp; Publishing</span>
                    <span className="text-terracotta-600 font-normal">Design</span>
                  </div>
                  <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                    Creating clean editorial layouts, visual moodboards, social carousels, and print publication grids.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-300 text-xs font-mono text-charcoal-500">
              Applied in an 84-page NSS print magazine
            </div>
          </div>

          {/* Card 3: Strategy & Analytics */}
          <div className="bg-cream-100 p-8 border border-stone-300 flex flex-col justify-between shadow-sm">
            <div>
              <div className="pb-4 border-b border-stone-300 mb-6">
                <span className="text-xs font-mono text-terracotta-600 font-semibold uppercase block mb-1">
                  Core Craft 03
                </span>
                <h3 className="font-serif text-2xl text-charcoal-900">
                  Data &amp; Operations Fluency
                </h3>
              </div>

              <div className="space-y-4">
                <div className="p-3.5 bg-stone-100 border border-stone-300">
                  <div className="font-mono text-xs font-semibold text-charcoal-800 uppercase flex items-center justify-between mb-1">
                    <span>Microsoft Excel</span>
                    <span className="text-terracotta-600 font-normal">Planning</span>
                  </div>
                  <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                    Content calendar tracking, campaign timelines, production schedules, and performance tables.
                  </p>
                </div>

                <div className="p-3.5 bg-stone-100 border border-stone-300">
                  <div className="font-mono text-xs font-semibold text-charcoal-800 uppercase flex items-center justify-between mb-1">
                    <span>SQL &amp; Power BI</span>
                    <span className="text-terracotta-600 font-normal">Working Knowledge</span>
                  </div>
                  <p className="text-xs text-charcoal-600 font-light leading-relaxed">
                    Academic grounding from IIT Hyderabad in database querying, user cohorts, and KPI dashboarding.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-stone-300 text-xs font-mono text-charcoal-500">
              Calibrated, honest proficiency without exaggeration
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
