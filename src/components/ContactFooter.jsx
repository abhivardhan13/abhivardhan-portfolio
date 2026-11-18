import React, { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check, Sparkles, Send, Diamond, Heart } from 'lucide-react';
import { InstagramIcon, LinkedInIcon } from './Icons';
import { candidateInfo } from '../data/portfolioData';

export default function ContactFooter() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [userEmail, setUserEmail] = useState(candidateInfo.socials.email);
  const [userLinkedIn, setUserLinkedIn] = useState(candidateInfo.socials.linkedin);
  const [isEditing, setIsEditing] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(userEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <footer id="contact" className="bg-charcoal-900 text-ivory-100 pt-24 pb-16 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Call to Action / Candidacy Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-charcoal-800">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-champagne-400 animate-pulse"></span>
              <span className="text-xs uppercase tracking-luxury text-champagne-400 font-medium">
                Candidate for BlueStone Jewellery &amp; Lifestyle
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-ivory-100 leading-tight">
              Ready to craft jewellery <br />
              <span className="italic font-light text-champagne-300">narratives that belong in culture.</span>
            </h2>

            <p className="text-base sm:text-lg text-charcoal-300 font-light leading-relaxed max-w-xl">
              I am eager to bring this blend of editorial visual pacing, short-form audience retention, 
              and structured campaign thinking to the <span className="text-ivory-100 font-medium">Brand &amp; Content Marketing team</span> at BlueStone.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={candidateInfo.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-champagne-500 hover:bg-champagne-400 text-charcoal-900 text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Follow on Instagram (@abhivardhan_official)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-charcoal-800 hover:bg-charcoal-700 text-ivory-100 text-xs uppercase tracking-wider font-semibold border border-charcoal-700 transition-colors"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-4 h-4 text-champagne-400" />
                    <span>Email Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-champagne-400" />
                    <span>Copy Primary Email</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Editable Contact Dossier Card */}
          <div className="lg:col-span-5 bg-charcoal-800/80 p-6 sm:p-8 border border-charcoal-700">
            <div className="flex items-center justify-between pb-4 border-b border-charcoal-700">
              <span className="text-[11px] uppercase tracking-luxury text-champagne-400 font-semibold">
                Direct Contact Dossier
              </span>
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="text-[11px] uppercase tracking-wider text-charcoal-400 hover:text-champagne-300 transition-colors underline"
              >
                {isEditing ? 'Done Editing' : 'Customize Placeholders'}
              </button>
            </div>

            <div className="my-6 space-y-5">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-charcoal-400 block mb-1">
                  Full Name
                </span>
                <div className="font-serif text-xl text-ivory-100 font-medium">
                  {candidateInfo.name}
                </div>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-charcoal-400 block mb-1">
                  Verified Instagram
                </span>
                <a
                  href={candidateInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-mono text-champagne-300 hover:underline flex items-center gap-1.5"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>https://www.instagram.com/abhivardhan_official/</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-charcoal-400 block mb-1">
                  Email Address (Editable Placeholder)
                </span>
                {isEditing ? (
                  <input
                    type="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                    className="w-full bg-charcoal-900 border border-champagne-400/60 px-3 py-1.5 text-xs text-ivory-100 font-mono focus:outline-none"
                    placeholder="Enter candidate email..."
                  />
                ) : (
                  <div className="flex items-center justify-between text-sm font-mono text-ivory-200 bg-charcoal-900/60 p-2.5 border border-charcoal-700">
                    <span className="truncate">{userEmail}</span>
                    <button
                      onClick={handleCopyEmail}
                      title="Copy email"
                      className="text-champagne-400 hover:text-champagne-300 ml-2"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                )}
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-charcoal-400 block mb-1">
                  LinkedIn Profile (Editable Placeholder)
                </span>
                {isEditing ? (
                  <input
                    type="text"
                    value={userLinkedIn}
                    onChange={(e) => setUserLinkedIn(e.target.value)}
                    className="w-full bg-charcoal-900 border border-champagne-400/60 px-3 py-1.5 text-xs text-ivory-100 font-mono focus:outline-none"
                    placeholder="Enter LinkedIn profile..."
                  />
                ) : (
                  <div className="text-sm font-mono text-ivory-300 bg-charcoal-900/60 p-2.5 border border-charcoal-700 truncate">
                    {userLinkedIn}
                  </div>
                )}
              </div>

              <div className="pt-2 text-xs text-charcoal-400">
                <span>Location: </span>
                <span className="text-ivory-200">IIT Hyderabad, Kandi, Sangareddy, Telangana</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Speculative Work Notice */}
        <div className="py-8 border-b border-charcoal-800 text-xs text-charcoal-400 leading-relaxed font-light">
          <strong className="text-champagne-400 font-semibold uppercase tracking-wider block sm:inline mr-2">
            Independent Speculative Work Statement:
          </strong>
          The campaign concepts presented on this website ("NOT FOR THE LOCKER." and "FOR EVERY FIRST.") are independent speculative creative proposals conceived specifically as part of an application for the Content Generalist – Brand &amp; Content role at BlueStone Jewellery &amp; Lifestyle Limited. They were not commissioned, produced, approved, or executed by BlueStone, and all trademarks and brand references belong to their respective holders.
        </div>

        {/* Bottom Bar: Copyright & Quick Links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-400 gap-4">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} {candidateInfo.name}.</span>
            <span className="opacity-40">|</span>
            <span>IIT Hyderabad ('27)</span>
          </div>

          <div className="flex items-center space-x-6 text-xs uppercase tracking-wider">
            <a href="#hero" className="hover:text-champagne-300 transition-colors">Top</a>
            <a href="#content-strategy" className="hover:text-champagne-300 transition-colors">Reels Analysis</a>
            <a href="#campaign-01" className="hover:text-champagne-300 transition-colors">Campaign 01</a>
            <a href="#campaign-02" className="hover:text-champagne-300 transition-colors">Campaign 02</a>
            <a href="#skills" className="hover:text-champagne-300 transition-colors">Skills</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
