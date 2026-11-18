import React from 'react';
import { Users, Video, ArrowUpRight, CheckCircle2, Music, Camera, Calendar, Award } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { leadershipExperiences } from '../data/portfolioData';

export default function ShuffleCrew() {
  const crew = leadershipExperiences.find(exp => exp.id === 'shuffle-crew');

  return (
    <section id="leadership" className="py-24 sm:py-32 bg-ivory-100 border-b border-charcoal-800/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-luxury text-champagne-700 font-semibold">
              Leadership &amp; Creative Direction 01
            </span>
            <span className="w-8 h-[1px] bg-champagne-400"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-charcoal-900 tracking-tight leading-tight">
            Shuffle Crew: <br />
            <span className="italic font-light text-champagne-700">Directing a 25-Member Creative Team</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-charcoal-600 font-light leading-relaxed">
            Content leadership at scale requires both artistic intuition and operational discipline. 
            As Club Head &amp; Content Lead for IIT Hyderabad’s premier dance crew, I orchestrated team choreography, 
            cinematic camera blocking, audio syncing, and multi-format social distribution.
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Team & Role Overview Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-ivory-50 border border-charcoal-200 p-6 sm:p-8 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-charcoal-200">
                <span className="text-[11px] uppercase tracking-luxury text-champagne-700 font-semibold">
                  Organizational Mandate
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-champagne-100 text-champagne-800 text-[10px] font-medium uppercase tracking-wider">
                  IIT Hyderabad
                </span>
              </div>

              <div className="my-6">
                <span className="text-xs uppercase tracking-wider text-charcoal-500 font-medium">
                  Official Designation
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900 mt-1">
                  {crew.role}
                </h3>
                <div className="flex items-center gap-2 mt-2 text-xs font-mono text-champagne-700 font-medium">
                  <Users className="w-4 h-4" />
                  <span>25-Member Collegiate Dance Collective</span>
                </div>
              </div>

              {/* Direct Links Container */}
              <div className="space-y-3 pt-4 border-t border-charcoal-200">
                <a
                  href="https://www.instagram.com/reel/DfKil5jBUwA/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3.5 bg-charcoal-900 hover:bg-champagne-700 text-ivory-100 text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-champagne-300" />
                    <span>Watch Featured Reel (DfKil5jBUwA)</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <a
                  href="https://www.instagram.com/shuffle_crew_iith/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3.5 bg-ivory-100 border border-charcoal-300 hover:border-champagne-500 text-charcoal-800 text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <InstagramIcon className="w-4 h-4 text-champagne-600" />
                    <span>Official Instagram Profile (@shuffle_crew_iith)</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <div className="mt-6 pt-4 border-t border-charcoal-200 flex items-center justify-between text-xs text-charcoal-500">
                <span>Tenure</span>
                <span className="font-medium text-charcoal-800">{crew.period}</span>
              </div>
            </div>

            {/* Strategic Pillars Pill Matrix */}
            <div className="bg-champagne-50/70 border border-champagne-200 p-6">
              <span className="text-[11px] uppercase tracking-luxury text-champagne-800 font-semibold block mb-3">
                Key Production Pillars
              </span>
              <div className="flex flex-wrap gap-2">
                {crew.contentPillars.map((pillar) => (
                  <span
                    key={pillar}
                    className="text-xs px-3 py-1 bg-ivory-50 border border-champagne-300 text-charcoal-800 font-medium"
                  >
                    {pillar}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Execution Highlights & Workflow */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-ivory-50 border border-charcoal-200 p-6 sm:p-8">
              <h4 className="font-serif text-2xl text-charcoal-900 mb-6">
                Real Coordination &amp; Content Operations
              </h4>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-ivory-100 border border-charcoal-200/80">
                  <div className="p-2.5 bg-champagne-100 text-champagne-800 shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs uppercase tracking-wider text-charcoal-900 font-semibold mb-1">
                      25-Member Stakeholder Management
                    </h5>
                    <p className="text-sm text-charcoal-600 leading-relaxed font-light">
                      Aligning 25 individual dancers across rigorous engineering academic schedules, 
                      establishing call times, rehearsal blocks, and ensuring uniform energy across complex formations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-ivory-100 border border-charcoal-200/80">
                  <div className="p-2.5 bg-champagne-100 text-champagne-800 shrink-0">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs uppercase tracking-wider text-charcoal-900 font-semibold mb-1">
                      Camera Direction &amp; Kinetic Motion Framing
                    </h5>
                    <p className="text-sm text-charcoal-600 leading-relaxed font-light">
                      Directing moving camera angles that complement physical choreography—moving in sync with 
                      beats, dynamic zoom pulls, and staging performers in golden hour and theatrical stage lighting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-ivory-100 border border-charcoal-200/80">
                  <div className="p-2.5 bg-champagne-100 text-champagne-800 shrink-0">
                    <Music className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs uppercase tracking-wider text-charcoal-900 font-semibold mb-1">
                      Audio Curation &amp; Frame-by-Frame Pacing
                    </h5>
                    <p className="text-sm text-charcoal-600 leading-relaxed font-light">
                      Curating trending audio that resonates with collegiate and youth demographics; 
                      executing frame-level cut alignment in editing suites to maximize viewer retention.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-ivory-100 border border-charcoal-200/80">
                  <div className="p-2.5 bg-champagne-100 text-champagne-800 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs uppercase tracking-wider text-charcoal-900 font-semibold mb-1">
                      Brand Consistency for the Collective
                    </h5>
                    <p className="text-sm text-charcoal-600 leading-relaxed font-light">
                      Overseeing official social visual identity, cover photo art direction, and 
                      collaborative showcases with inter-college dance circuits.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* BlueStone Translation Callout */}
            <div className="p-6 bg-ivory-50 border border-charcoal-200 border-l-4 border-l-champagne-600">
              <span className="text-xs uppercase tracking-luxury text-champagne-800 font-semibold block mb-1">
                Value to BlueStone’s Content Team
              </span>
              <p className="text-sm text-charcoal-700 leading-relaxed font-light">
                Managing a 25-person shoot mirrors commercial production: aligning models, cinematographers, 
                merchandise stylists, and brand guidelines to produce social video on tight turnarounds without compromising aesthetic precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
