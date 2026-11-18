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
    <div className="min-h-screen bg-cream-100 text-charcoal-800 font-sans selection:bg-stone-200 selection:text-forest-900">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        {/* 1. HERO — Personal Creative Portfolio Intro */}
        <Hero />

        {/* 2. REELS — Made to Catch the Eye */}
        <ContentConnects />

        {/* 3. SPECULATIVE CAMPAIGN 01 — Not For The Locker */}
        <SpeculativeCampaign1 />

        {/* 4. SPECULATIVE CAMPAIGN 02 — For Every First */}
        <SpeculativeCampaign2 />

        {/* 5. SHUFFLE CREW — 25-Member Team Leadership */}
        <ShuffleCrew />

        {/* 6. MILAN & NSS — PR, Coverage & 84-Page Publication */}
        <MilanAndNss />

        {/* 7. QUICKBITE AI — Product Thinking & Intent Discovery */}
        <QuickBiteAi />

        {/* 8. SKILLS & TOOLS — Visual Magazine Layout */}
        <SkillsTools />
      </main>

      {/* 9. CONTACT — Distinctive Editorial Footer */}
      <ContactFooter />
    </div>
  );
}
