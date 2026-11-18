import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ContentConnects from './components/ContentConnects';
import SpeculativeCampaign1 from './components/SpeculativeCampaign1';
import SpeculativeCampaign2 from './components/SpeculativeCampaign2';
import ShuffleCrew from './components/ShuffleCrew';
import MilanAndNss from './components/MilanAndNss';
import QuickBiteAi from './components/QuickBiteAi';
import SkillsTools from './components/SkillsTools';
import ContactFooter from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-ivory-100 text-charcoal-800 font-sans selection:bg-champagne-200 selection:text-charcoal-900">
      {/* Editorial Top Status Ribbon */}
      <div className="bg-charcoal-900 text-ivory-200 text-[11px] py-1.5 px-4 text-center border-b border-charcoal-800 font-sans tracking-wide">
        <span className="text-champagne-400 font-semibold uppercase tracking-luxury mr-2">Candidate Dossier:</span>
        Bhukya Abhivardhan Nayak (IIT Hyderabad '27) &mdash; Applying for <span className="text-ivory-100 font-medium">Content Generalist – Brand &amp; Content, Marketing</span> at BlueStone Jewellery
      </div>

      {/* Main Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. HERO */}
        <Hero />

        {/* 2. CONTENT THAT CONNECTS (170K+ & 71K+ Reels Analysis) */}
        <ContentConnects />

        {/* 3. SPECULATIVE BRAND CAMPAIGN 01: NOT FOR THE LOCKER */}
        <SpeculativeCampaign1 />

        {/* 4. SPECULATIVE BRAND CAMPAIGN 02: FOR EVERY FIRST */}
        <SpeculativeCampaign2 />

        {/* 5. SHUFFLE CREW (Club Head & Content Lead, 25-member dance team) */}
        <ShuffleCrew />

        {/* 6 & 7. MILAN (Media & PR Coordinator) & NSS (84p Magazine, Merchandise, Guest Talks) */}
        <MilanAndNss />

        {/* 8. ADDITIONAL PROJECT: QUICKBITE AI */}
        <QuickBiteAi />

        {/* 9. SKILLS AND TOOLS (CapCut, Figma, Framing, Excel, SQL, Power BI) */}
        <SkillsTools />
      </main>

      {/* 10. CONTACT & EDITORIAL FOOTER */}
      <ContactFooter />
    </div>
  );
}
