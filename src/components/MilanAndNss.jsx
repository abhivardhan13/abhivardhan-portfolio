import React from 'react';
import { BookOpen, Megaphone, ArrowUpRight, ExternalLink, FileText, Shirt, Trophy, Radio, CheckCircle, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { leadershipExperiences } from '../data/portfolioData';

export default function MilanAndNss() {
  const milan = leadershipExperiences.find(exp => exp.id === 'milan-pr');
  const nss = leadershipExperiences.find(exp => exp.id === 'nss-iith');

  return (
    <section id="milana-nss" className="py-24 sm:py-32 bg-ivory-100 border-b border-charcoal-800/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-xs uppercase tracking-luxury text-champagne-700 font-semibold">
              Leadership &amp; Publications 02 &amp; 03
            </span>
            <span className="w-8 h-[1px] bg-champagne-400"></span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-charcoal-900 tracking-tight leading-tight">
            Campus PR, Live Media &amp; <br />
            <span className="italic font-light text-champagne-700">84-Page Editorial Publishing</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-charcoal-600 font-light leading-relaxed">
            From the high-tempo live digital publicity of IIT Hyderabad's premier championship (Milan) 
            to the structured editorial design of an 84-page official publication and varsity merchandise for NSS.
          </p>
        </div>

        {/* Two-Column Showcase: Milan PR & NSS Publishing */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* MILAN INTER-HOSTEL CHAMPIONSHIP */}
          <div className="bg-ivory-50 border border-charcoal-200 p-6 sm:p-10 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-charcoal-200">
                <span className="text-[11px] uppercase tracking-luxury text-champagne-700 font-semibold flex items-center gap-1.5">
                  <Trophy className="w-4 h-4 text-champagne-600" />
                  Milan Championship
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-champagne-100 text-champagne-800 text-[10px] font-medium uppercase tracking-wider">
                  Live Event Media &amp; PR
                </span>
              </div>

              <div className="my-6">
                <span className="text-xs uppercase tracking-wider text-charcoal-500 font-medium">
                  {milan.role}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900 mt-1">
                  Inter-Hostel Championship Media
                </h3>
                <p className="text-sm text-charcoal-600 leading-relaxed font-light mt-3">
                  {milan.overview}
                </p>
              </div>

              {/* Responsibilities list */}
              <div className="space-y-3 mb-8">
                <div className="text-xs uppercase tracking-wider text-charcoal-700 font-semibold mb-2">
                  Key Deliverables &amp; PR Impact:
                </div>
                {milan.achievements.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-champagne-600 mt-2 shrink-0"></span>
                    <span className="leading-relaxed font-light">{item}</span>
                  </div>
                ))}
              </div>

              {/* Verified Instagram Coverage Links */}
              <div className="pt-4 border-t border-charcoal-200">
                <span className="text-xs uppercase tracking-wider text-charcoal-500 font-medium block mb-3">
                  Verified Social Coverage Highlights:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {milan.links.map((link, idx) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-ivory-100 hover:bg-champagne-50 border border-charcoal-200 hover:border-champagne-400 text-charcoal-800 transition-colors flex items-center justify-between text-xs"
                    >
                      <div className="flex items-center gap-1.5 font-medium">
                        <InstagramIcon className="w-3.5 h-3.5 text-champagne-600" />
                        <span>Post 0{idx + 1}</span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-charcoal-200 flex items-center justify-between text-xs text-charcoal-500">
              <span>Domain: High-Volume Sports &amp; Cultural PR</span>
              <span className="font-mono text-champagne-800">Campus-Wide Coverage</span>
            </div>
          </div>

          {/* NSS: NATIONAL SERVICE SCHEME */}
          <div className="bg-ivory-50 border border-charcoal-200 p-6 sm:p-10 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-charcoal-200">
                <span className="text-[11px] uppercase tracking-luxury text-champagne-700 font-semibold flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-champagne-600" />
                  National Service Scheme (NSS)
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-champagne-100 text-champagne-800 text-[10px] font-medium uppercase tracking-wider">
                  Editorial &amp; Branding
                </span>
              </div>

              <div className="my-6">
                <span className="text-xs uppercase tracking-wider text-charcoal-500 font-medium">
                  {nss.role}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-medium text-charcoal-900 mt-1">
                  84-Page Magazine &amp; Public Outreach
                </h3>
                <p className="text-sm text-charcoal-600 leading-relaxed font-light mt-3">
                  {nss.overview}
                </p>
              </div>

              {/* Distinct creative deliverables */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                <div className="p-3.5 bg-ivory-100 border border-charcoal-200">
                  <FileText className="w-4 h-4 text-champagne-700 mb-1.5" />
                  <div className="font-serif text-base text-charcoal-900 font-medium">
                    84-Page Magazine
                  </div>
                  <p className="text-xs text-charcoal-600 mt-1 font-light">
                    Complete grid layout, typography hierarchy, imagery curation, and print pre-press.
                  </p>
                </div>

                <div className="p-3.5 bg-ivory-100 border border-charcoal-200">
                  <Shirt className="w-4 h-4 text-champagne-700 mb-1.5" />
                  <div className="font-serif text-base text-charcoal-900 font-medium">
                    Varsity Jacket Design
                  </div>
                  <p className="text-xs text-charcoal-600 mt-1 font-light">
                    Custom apparel identity, typographic embroidery design, and production specs.
                  </p>
                </div>

                <div className="p-3.5 bg-ivory-100 border border-charcoal-200">
                  <Radio className="w-4 h-4 text-champagne-700 mb-1.5" />
                  <div className="font-serif text-base text-charcoal-900 font-medium">
                    Guest Talk Publicity
                  </div>
                  <p className="text-xs text-charcoal-600 mt-1 font-light">
                    Promotional design for high-profile speakers and campus social impact summits.
                  </p>
                </div>

                <div className="p-3.5 bg-ivory-100 border border-charcoal-200">
                  <Megaphone className="w-4 h-4 text-champagne-700 mb-1.5" />
                  <div className="font-serif text-base text-charcoal-900 font-medium">
                    Community Campaigns
                  </div>
                  <p className="text-xs text-charcoal-600 mt-1 font-light">
                    Visual documentation of rural education, health drives, and cleanliness campaigns.
                  </p>
                </div>
              </div>

              {/* Direct Verification Drive Link */}
              <div className="pt-4 border-t border-charcoal-200">
                <a
                  href="https://drive.google.com/drive/folders/1FjEiz2K-B-CVsGS0WOxlTbEBSrFA8_fD?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-3.5 bg-charcoal-900 hover:bg-champagne-700 text-ivory-100 text-xs uppercase tracking-wider font-semibold transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4 text-champagne-300" />
                    <span>View Verified NSS Work (Google Drive Folder)</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-charcoal-200 flex items-center justify-between text-xs text-charcoal-500">
              <span>Domain: Long-Form Editorial &amp; Apparel Branding</span>
              <span className="font-mono text-champagne-800">Verified Drive Archive</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
