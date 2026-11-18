import React, { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';
import { InstagramIcon, LinkedInIcon } from './Icons';
import { candidateInfo } from '../data/portfolioData';

export default function ContactFooter() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(candidateInfo.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="bg-forest-950 text-cream-100 pt-24 pb-14 border-t border-forest-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Main Editorial Contact Spread */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-20 border-b border-forest-900/80 items-start">
          
          {/* Left Column: Heading & Candidacy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-terracotta-400"></span>
              <span className="text-xs uppercase tracking-magazine text-terracotta-300 font-semibold">
                Start a Conversation
              </span>
            </div>

            <h2 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight text-cream-50 leading-[1.05]">
              Let’s create something <br />
              <span className="italic font-light text-terracotta-300">people remember.</span>
            </h2>

            <p className="text-base sm:text-lg text-cream-200/80 font-light leading-relaxed max-w-xl">
              I’m excited about the <span className="text-cream-50 font-medium">Content Generalist – Brand &amp; Content</span> role at BlueStone. 
              If you’re looking for a creator who combines visual taste, pacing, and campaign thinking, I’d love to connect.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={candidateInfo.socials.emailLink}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-terracotta-500 hover:bg-terracotta-600 text-cream-50 text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Send Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-forest-900 hover:bg-forest-800 text-cream-100 text-xs uppercase tracking-wider font-semibold border border-forest-700/80 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-terracotta-300" />
                    <span>Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-terracotta-300" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Direct Contact Card with Verified Information */}
          <div className="lg:col-span-5 bg-forest-900/60 p-8 border border-forest-800/80 space-y-6">
            <div className="border-b border-forest-800 pb-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-terracotta-300 block mb-1">
                Direct Channels
              </span>
              <div className="font-serif text-xl text-cream-50 font-medium">
                {candidateInfo.name}
              </div>
              <div className="text-xs text-cream-200/70 font-mono mt-0.5">
                IIT Hyderabad &bull; Class of 2027
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-cream-200/60 block mb-1">
                  Primary Email
                </span>
                <a
                  href={candidateInfo.socials.emailLink}
                  className="font-mono text-sm text-cream-100 hover:text-terracotta-300 transition-colors flex items-center gap-2 underline underline-offset-4"
                >
                  <Mail className="w-4 h-4 text-terracotta-400" />
                  <span>{candidateInfo.socials.email}</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-cream-200/60 block mb-1">
                  LinkedIn Profile
                </span>
                <a
                  href={candidateInfo.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-cream-100 hover:text-terracotta-300 transition-colors flex items-center gap-2 underline underline-offset-4"
                >
                  <LinkedInIcon className="w-4 h-4 text-terracotta-400" />
                  <span>linkedin.com/in/bhukya-abhivardhan/</span>
                </a>
              </div>

              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-cream-200/60 block mb-1">
                  Instagram Profile
                </span>
                <a
                  href={candidateInfo.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm text-cream-100 hover:text-terracotta-300 transition-colors flex items-center gap-2 underline underline-offset-4"
                >
                  <InstagramIcon className="w-4 h-4 text-terracotta-400" />
                  <span>instagram.com/abhivardhan_official/</span>
                </a>
              </div>
            </div>

            <div className="pt-2 text-xs text-cream-200/60 font-mono border-t border-forest-800">
              Location: Kandi, Sangareddy, Telangana &bull; IIT Hyderabad
            </div>
          </div>

        </div>

        {/* Speculative Concept Notice */}
        <div className="py-8 border-b border-forest-900/80 text-xs text-cream-200/60 leading-relaxed font-light">
          <strong className="text-terracotta-300 font-semibold uppercase tracking-wider block sm:inline mr-2">
            Speculative Work Notice:
          </strong>
          The campaign concepts featured on this website ("NOT FOR THE LOCKER." and "FOR EVERY FIRST.") are independent speculative proposals designed specifically as part of an application for the Content Generalist – Brand &amp; Content role at BlueStone Jewellery &amp; Lifestyle Limited. They were not commissioned, approved, or executed by BlueStone.
        </div>

        {/* Bottom Copyright & Navigation */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-cream-200/60 gap-4 font-mono">
          <div>
            &copy; {new Date().getFullYear()} {candidateInfo.name}. All rights reserved.
          </div>

          <div className="flex items-center space-x-6 text-xs uppercase tracking-wider">
            <a href="#top" className="hover:text-cream-50 transition-colors">Back to Top</a>
            <a href="#reels" className="hover:text-cream-50 transition-colors">Reels</a>
            <a href="#campaign-01" className="hover:text-cream-50 transition-colors">Campaign 01</a>
            <a href="#campaign-02" className="hover:text-cream-50 transition-colors">Campaign 02</a>
            <a href="#experience" className="hover:text-cream-50 transition-colors">Experience</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
