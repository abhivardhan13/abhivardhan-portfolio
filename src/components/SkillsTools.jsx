import React from 'react';
import { Video, Layout, Camera, FileSpreadsheet, Database, BarChart3, Check, Sparkles } from 'lucide-react';
import { skillsAndTools } from '../data/portfolioData';

export default function SkillsTools() {
  const getToolIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'capcut':
        return <Video className="w-4 h-4 text-champagne-600" />;
      case 'figma':
        return <Layout className="w-4 h-4 text-champagne-600" />;
      case 'photography & framing':
        return <Camera className="w-4 h-4 text-champagne-600" />;
      case 'microsoft excel':
        return <FileSpreadsheet className="w-4 h-4 text-champagne-600" />;
      case 'sql':
        return <Database className="w-4 h-4 text-champagne-600" />;
      case 'power bi':
        return <BarChart3 className="w-4 h-4 text-champagne-600" />;
      default:
        return <Sparkles className="w-4 h-4 text-champagne-600" />;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 bg-ivory-100 border-b border-charcoal-800/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-luxury text-champagne-700 font-semibold">
              Section 05 / Calibrated Competencies
            </span>
            <span className="w-8 h-[1px] bg-champagne-400"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-charcoal-900 tracking-tight leading-tight">
            Skills &amp; Toolkit: <br />
            <span className="italic font-light text-champagne-700">Calibrated, Practical &amp; Unexaggerated</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-charcoal-600 font-light leading-relaxed">
            Content strategy succeeds when creative intuition is supported by data fluency. 
            Below is an honest, calibrated representation of my production toolkit and analytical skills.
          </p>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsAndTools.map((cat, i) => (
            <div
              key={cat.category}
              className="bg-ivory-50 border border-charcoal-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm"
            >
              <div>
                <div className="pb-4 border-b border-charcoal-200 mb-6">
                  <span className="text-[10px] font-mono tracking-wider text-champagne-700 block mb-1">
                    STREAM 0{i + 1}
                  </span>
                  <h3 className="font-serif text-xl text-charcoal-900 font-medium">
                    {cat.category}
                  </h3>
                </div>

                <div className="space-y-5">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {getToolIcon(skill.name)}
                          <span className="text-xs sm:text-sm font-semibold text-charcoal-900">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono px-2 py-0.5 bg-champagne-100/70 border border-champagne-300/50 text-champagne-800 rounded">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-charcoal-600 font-light leading-relaxed pl-6">
                        {skill.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-charcoal-200/60 text-[11px] text-charcoal-400 font-mono">
                Applied in real production workflows
              </div>
            </div>
          ))}
        </div>

        {/* Candid Proficiency Pledge */}
        <div className="mt-12 p-6 bg-champagne-50 border border-champagne-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-xs uppercase tracking-luxury text-champagne-800 font-semibold">
              Commitment to Transparency
            </h4>
            <p className="text-xs sm:text-sm text-charcoal-700 font-light">
              Proficiencies in SQL and Power BI reflect working academic and project knowledge, not 5+ years of enterprise database administration. 
              My primary edge is bridging this analytical foundation with high-taste visual storytelling.
            </p>
          </div>
          <span className="shrink-0 text-xs font-mono text-champagne-800 bg-ivory-50 px-3 py-1.5 border border-champagne-300">
            IIT Hyderabad Trained
          </span>
        </div>
      </div>
    </section>
  );
}
