/**
 * =============================================================================
 * KAMRAN ALI - PERSONAL PORTFOLIO WEBSITE
 * =============================================================================
 * Junior Digital Marketer Portfolio showcasing hands-on practice projects,
 * direct-response ad copywriting, video creative concepts, and research.
 * =============================================================================
 */

import React, { useState, useEffect, useRef } from 'react';
import {
  Mail,
  MessageCircle,
  MapPin,
  Download,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Sparkles,
  Layers,
  Search,
  PenTool,
  Video,
  Award,
  GraduationCap,
  Copy,
  Check,
  X,
  Menu,
  ArrowUp,
  Target,
  BarChart2,
  FileText,
  Cpu,
  ChevronLeft,
  ChevronRight,
  Play,
  Eye,
  Share2
} from 'lucide-react';

// Ad images for the Ad Copy Samples lightbox
const AD_COPY_IMAGES = [
  {
    src: '/pomelli_creative_image_9_16_1012.png',
    alt: 'Structured Urban Fit - Pomelli Ad Creative',
  }
];

// TikTok 11-second creative script raw text
const TIKTOK_AD_SCRIPT_TEXT = `Urban Thread — 11-Second High-Retention TikTok Video Creative Script

Duration: 11 Seconds | Format: 9:16 Vertical Video | Goal: 3-Second Pattern Interrupt & Conversion to COD

[0:00 – 0:04] 3-SECOND VISUAL HOOK & PATTERN INTERRUPT
• Visual: Hoodie on a hanger, a hand pulls it off
• On-Screen Text: "Stop buying thin, low-quality hoodies."
• Voiceover: "Stop buying thin, low-quality hoodies."
• SFX: Hanger slide, fabric whoosh

[0:04 – 0:06] PRODUCT SPECS & SENSORY PROOF
• Visual: Heavy fabric in hand, soft inside
• On-Screen Text: "Heavy fabric. Soft inside. Holds its shape wash after wash."
• Voiceover: "Heavy fabric, soft inside, built to hold its shape."
• Audio: Beat swells

[0:06 – 0:07] PRICING & NATIONWIDE AVAILABILITY
• Visual: Close-up of thick fabric
• On-Screen Text: "Only PKR 4,500*" and "Cash on Delivery across Pakistan"
• Audio: Beat continues

[0:07 – 0:11] CALL-TO-ACTION & CASH ON DELIVERY (COD)
• Visual: End-card: logo, price, Cash on Delivery, ORDER NOW
• On-Screen Text: "Order online in 30 seconds and pay cash at your door"
• Voiceover: "Order online in 30 seconds and pay cash at your door."
• SFX: Cash register chime

*Sample price for practice purposes.`;

// Configuration: Edit your links and contact information here
const CONTACT_CONFIG = {
  name: 'Kamran Ali',
  title: 'Junior Digital Marketer',
  oneLinePitch: 'I am a trained junior digital marketer building direct-response ads and content through hands-on practice projects, using marketing skills and AI tools.',
  whatsappNumber: '+92 328 6725816',
  whatsappUrl: 'https://wa.me/923286725816',
  email: 'kamranalisomoroo@gmail.com',
  location: 'Karachi, Pakistan',
  cvUrl: '/Kamran-Ali-CV.pdf',
};

// Practice Projects Data
const PROJECTS = [
  {
    id: 'competitor-research',
    badge: 'Practice Project',
    title: 'Competitor Research Report',
    category: 'Competitor Intelligence & Ad Auditing',
    goal: 'Analyze competitor ad creatives, content formats, and marketing angles for a local brand to identify weaknesses and opportunities.',
    whatIDid: 'Researched 3 competitors of a local brand and summarized their ads, content and weaknesses.',
    toolsUsed: ['Meta Ad Library', 'NotebookLM', 'Canva', 'Google AI Studio'],
    link: '#',
    deliverables: [
      'Summarized active competitor ad angles and hooks',
      'Identified content patterns and creative weaknesses',
      'Compiled practical takeaways for future ad testing'
    ]
  },
  {
    id: 'ad-copy-samples',
    badge: 'Practice Project',
    title: 'Ad Copy Samples',
    category: 'Direct-Response & AI Copywriting',
    goal: 'Practice writing direct-response ad copy for Facebook and Instagram feeds designed to stop the scroll and drive clicks.',
    whatIDid: 'Wrote multiple Facebook and Instagram ad copy variations using different angles.',
    toolsUsed: ['Google AI Studio', 'Pomelli', 'Opal', 'Canva'],
    link: '#',
    deliverables: [
      'Headline and primary text variations tailored for Meta feeds',
      'Practice drafts exploring pain-point and benefit-led angles',
      'Curated scroll-stopping hooks and calls-to-action'
    ]
  },
  {
    id: 'tiktok-video-creatives',
    badge: 'Practice Project',
    title: 'TikTok Video Creatives',
    category: 'Short-Form Video & Creative Strategy',
    goal: 'Practice designing short-form vertical video concepts focused on strong 3-second hooks and engaging visual pacing.',
    whatIDid: 'Created a short vertical video ad using AI-generated clips (Flow / Veo 3), edited in CapCut and Canva for TikTok and Snapchat.',
    toolsUsed: ['CapCut Desktop', 'Flow / Veo 3', 'Canva', 'TikTok Creative Center'],
    link: '#',
    deliverables: [
      'Short vertical video hook concepts tailored for mobile feeds',
      'Storyboard outlines with text overlays and audio cues',
      'Practice video edits in CapCut optimized for 9:16 viewing'
    ]
  }
];

// Practice Report Raw Text for Copying
const URBAN_THREAD_REPORT_RAW_TEXT = `Urban Thread: Competitor Analysis & Ad Strategy Report

1. Practice Disclaimer & Brand Profile
This strategic report outlines the direct-response positioning and ad creative methodology for Urban Thread as an apparel brand entering the direct-to-consumer fashion sector. Please note that this document is a practice project utilizing sample market data and assumed pricing for demonstration purposes.

Brand Attribute | Specification
Brand Name | Urban Thread
Headquarters / Market Base | Karachi, Pakistan
Target Demographic | Men aged 18 to 28
Core Offerings | Heavyweight hoodies and oversized tees
Primary Fulfillment Offer | Cash on Delivery (COD) across Pakistan

2. Core Marketing Angles & Hook-Driven Headlines
# | Angle Focus | Hook Headline (≤ 7 Words) | Direct-Response Ad Body Copy | Call to Action
1 | Pattern Interrupt | Stop buying thin, low-quality hoodies. | Most streetwear feels flimsy and sags after two wears. Urban Thread hoodies feature a weighty feel, soft inside, and heavy drape that keeps its structure for PKR 4,500*. | Shop Now
2 | Product Specs & Touch | Feel the difference of a weighty hood. | Forget light, shapeless sweatshirts that collapse on your shoulders. Feel the substantial drape and durable weave of a heavy hood built for daily wear at PKR 4,500*. | See the Hoodie
3 | Value & Combo Pack | Upgrade your streetwear with two hoodies. | Double up on essential daily streetwear before core colorways sell out. Secure two heavyweight hoodies with a relaxed cut for PKR 4,500* each, or pair them with oversized tees at PKR 2,800*. | Order Now
4 | Durability & Longevity | Built to last through every wear. | Standard streetwear stretches out and sags over time, but our durable weave holds its shape through everyday wear. Upgrade your daily rotation today for PKR 4,500*. | Get Yours
5 | Silhouette & Fit | Streetwear crafted with a relaxed cut. | Get an authentic drop-shoulder silhouette that hangs clean without clinging. Pair oversized tees at PKR 2,800* with heavyweight hoodies at PKR 4,500* for the ultimate fit. | Shop Now
6 | Everyday Value | Get oversized tees made to last. | Standard tees lose their collar shape after a single wash. Designed with a weighty feel, soft inside, and relaxed cut, our oversized tees deliver lasting style for PKR 2,800*. | Get Yours

3. Short-Form Video Ad Strategy & Scripting (11-Second Concept)
Time | Visual | Text Overlay | Voiceover | SFX
0:00 to 0:04 | Hoodie on a hanger, a hand pulls it off | "Stop buying thin, low-quality hoodies." | "Stop buying thin, low-quality hoodies." | Hanger slide, fabric whoosh
0:04 to 0:06 | Heavy fabric in hand, soft inside | "Heavy fabric. Soft inside. Holds its shape wash after wash." | "Heavy fabric, soft inside, built to hold its shape." | Beat swells
0:06 to 0:07 | Close-up of thick fabric | "Only PKR 4,500*" and "Cash on Delivery across Pakistan" | - | Beat continues
0:07 to 0:11 | End-card: logo, price, Cash on Delivery, ORDER NOW | "Order online in 30 seconds and pay cash at your door" | "Order online in 30 seconds and pay cash at your door." | Cash register chime

*Sample price for practice purposes.`;

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [activeModalProject, setActiveModalProject] = useState<typeof PROJECTS[0] | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [copiedReportText, setCopiedReportText] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [cvModalOpen, setCvModalOpen] = useState(false);
  const [videoActiveTab, setVideoActiveTab] = useState<'script' | 'strategy'>('script');
  const [copiedScript, setCopiedScript] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  const closeVideoModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setVideoModalOpen(false);
  };

  useEffect(() => {
    const isAnyModalOpen =
      reportModalOpen ||
      lightboxOpen ||
      activeModalProject !== null ||
      videoModalOpen ||
      cvModalOpen;

    if (isAnyModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [reportModalOpen, lightboxOpen, activeModalProject, videoModalOpen, cvModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (reportModalOpen) setReportModalOpen(false);
        if (lightboxOpen) setLightboxOpen(false);
        if (activeModalProject) setActiveModalProject(null);
        if (videoModalOpen) closeVideoModal();
        if (cvModalOpen) setCvModalOpen(false);
      } else if (lightboxOpen) {
        if (e.key === 'ArrowLeft' && AD_COPY_IMAGES.length > 1) {
          setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : AD_COPY_IMAGES.length - 1));
        } else if (e.key === 'ArrowRight' && AD_COPY_IMAGES.length > 1) {
          setCurrentImageIndex((prev) => (prev < AD_COPY_IMAGES.length - 1 ? prev + 1 : 0));
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, reportModalOpen, activeModalProject, videoModalOpen, cvModalOpen]);

  const handleCopyScript = () => {
    navigator.clipboard.writeText(TIKTOK_AD_SCRIPT_TEXT);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleCopyReport = () => {
    navigator.clipboard.writeText(URBAN_THREAD_REPORT_RAW_TEXT);
    setCopiedReportText(true);
    setTimeout(() => setCopiedReportText(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#070c18] text-slate-100 flex flex-col font-sans selection:bg-[#ff6b00] selection:text-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-[#070c18]/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff6b00] group-hover:scale-125 transition-transform" />
            <span className="font-heading font-bold text-xl tracking-tight text-white group-hover:text-[#ff6b00] transition-colors">
              Kamran Ali
            </span>
          </a>

          {/* Desktop Nav - switches to hamburger below 1100px */}
          <nav className="hidden min-[1100px]:flex items-center gap-3.5 xl:gap-5 text-[13px] xl:text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-[#ff6b00] transition-colors">About</a>
            <a href="#skills" className="hover:text-[#ff6b00] transition-colors">Skills</a>
            <a href="#services" className="hover:text-[#ff6b00] transition-colors">Services</a>
            <a href="#tools" className="hover:text-[#ff6b00] transition-colors">Tools</a>
            <a href="#process" className="hover:text-[#ff6b00] transition-colors">Process</a>
            <a href="#projects" className="hover:text-[#ff6b00] transition-colors">Projects</a>
            <a href="#education" className="hover:text-[#ff6b00] transition-colors">Education</a>
            <a href="#contact" className="hover:text-[#ff6b00] transition-colors">Contact</a>
            <button
              type="button"
              onClick={() => setCvModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white bg-slate-800/90 hover:bg-[#ff6b00] border border-slate-700 hover:border-[#ff6b00] rounded-lg transition-all cursor-pointer"
              title="View CV"
            >
              <Eye className="w-3.5 h-3.5 text-[#ff6b00] group-hover:text-white" />
              <span>View CV</span>
            </button>
          </nav>

          {/* Right Action */}
          <div className="hidden min-[1100px]:flex items-center gap-3">
            <a
              href={CONTACT_CONFIG.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#ff6b00] hover:bg-[#e05e00] rounded-xl transition-all shadow-md hover:shadow-[#ff6b00]/25"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile Menu Button (below 1100px) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="min-[1100px]:hidden p-2 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown (below 1100px) */}
        {mobileMenuOpen && (
          <div className="min-[1100px]:hidden bg-[#0a1124] border-b border-slate-800 px-6 py-5 space-y-4">
            <nav className="flex flex-col gap-3 text-sm font-medium text-slate-300">
              <a 
                href="#about" 
                onClick={() => setMobileMenuOpen(false)} 
                className="hover:text-[#ff6b00] transition-colors py-1"
              >
                About
              </a>
              <a 
                href="#skills" 
                onClick={() => setMobileMenuOpen(false)} 
                className="hover:text-[#ff6b00] transition-colors py-1"
              >
                Skills
              </a>
              <a 
                href="#services" 
                onClick={() => setMobileMenuOpen(false)} 
                className="hover:text-[#ff6b00] transition-colors py-1"
              >
                Services
              </a>
              <a 
                href="#tools" 
                onClick={() => setMobileMenuOpen(false)} 
                className="hover:text-[#ff6b00] transition-colors py-1"
              >
                Tools
              </a>
              <a 
                href="#process" 
                onClick={() => setMobileMenuOpen(false)} 
                className="hover:text-[#ff6b00] transition-colors py-1"
              >
                Work Process
              </a>
              <a 
                href="#projects" 
                onClick={() => setMobileMenuOpen(false)} 
                className="hover:text-[#ff6b00] transition-colors py-1"
              >
                Projects
              </a>
              <a 
                href="#education" 
                onClick={() => setMobileMenuOpen(false)} 
                className="hover:text-[#ff6b00] transition-colors py-1"
              >
                Education
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)} 
                className="hover:text-[#ff6b00] transition-colors py-1"
              >
                Contact
              </a>
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setCvModalOpen(true);
                }}
                className="flex items-center gap-2 text-left py-1 text-slate-200 hover:text-[#ff6b00] transition-colors cursor-pointer"
              >
                <Eye className="w-4 h-4 text-[#ff6b00]" />
                <span>View CV</span>
              </button>
            </nav>
            <div className="pt-2 border-t border-slate-800">
              <a
                href={CONTACT_CONFIG.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#ff6b00] hover:bg-[#e05e00] rounded-xl transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Me
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Sections */}
      <main className="flex-1">

        {/* 1. HERO SECTION */}
        <section className="relative pt-16 pb-20 md:pt-24 md:pb-28 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ff6b00]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div className="flex items-center gap-2 text-xs font-medium tracking-wide text-slate-400">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#ff6b00] animate-pulse" />
                  <span className="uppercase tracking-wider text-slate-300">Junior Digital Marketer</span>
                  <span aria-hidden="true">·</span>
                  <span>Karachi, Pakistan</span>
                </div>

                <div className="space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ff6b00]/15 border border-[#ff6b00]/30 text-xs font-semibold text-[#ff6b00]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] animate-ping" />
                    <span>Open to my first client projects</span>
                  </div>
                  <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-none">
                    Kamran Ali
                  </h1>
                  <p className="text-xl sm:text-2xl font-semibold text-[#ff6b00]">
                    Junior Digital Marketer
                  </p>
                </div>

                <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-xl">
                  &ldquo;I am a trained junior digital marketer building direct-response ads and content through hands-on practice projects, using marketing skills and AI tools.&rdquo;
                </p>

                <div className="pt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400">
                  <span className="text-slate-300">Meta Ads</span>
                  <span aria-hidden="true" className="text-slate-600">/</span>
                  <span className="text-slate-300">Google Ads</span>
                  <span aria-hidden="true" className="text-slate-600">/</span>
                  <span className="text-slate-300">TikTok & Snapchat</span>
                  <span aria-hidden="true" className="text-slate-600">/</span>
                  <span className="text-slate-300">Email Marketing</span>
                  <span aria-hidden="true" className="text-slate-600">/</span>
                  <span className="text-slate-300">AI Copywriting</span>
                  <span aria-hidden="true" className="text-slate-600">/</span>
                  <span className="text-slate-300">Competitor Research</span>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <a
                    href="#projects"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 rounded-xl transition-all shadow-sm group"
                  >
                    <span>View Projects</span>
                    <ArrowRight className="w-4 h-4 text-[#ff6b00] group-hover:translate-x-1 transition-transform" />
                  </a>

                  <a
                    href={CONTACT_CONFIG.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#ff6b00] hover:bg-[#e05e00] rounded-xl transition-all shadow-lg shadow-[#ff6b00]/20 hover:scale-[1.02]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Me</span>
                  </a>
                </div>
              </div>

              {/* Campaign summary card */}
              <div className="lg:col-span-5">
                <div className="bg-[#0b1224] border border-slate-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff6b00]/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                      <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">campaign-brief.ai</span>
                  </div>

                  <div className="mt-5 space-y-4">
                    <div className="p-3.5 bg-[#0e172e] rounded-xl border border-slate-800">
                      <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5">
                        <span className="font-semibold text-white">Focus Area</span>
                        <span className="text-[#ff6b00]">Direct-Response Ads</span>
                      </div>
                      <p className="text-xs text-slate-300">
                        Direct-response ad hooks, creative concepts, and copy variations built through course training and practice projects.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-[#0e172e] rounded-xl border border-slate-800">
                        <span className="text-slate-400 block mb-1">Ad Angles</span>
                        <span className="text-sm font-bold text-white">Pain Point + Benefit</span>
                      </div>
                      <div className="p-3 bg-[#0e172e] rounded-xl border border-slate-800">
                        <span className="text-slate-400 block mb-1">Workflow Speed</span>
                        <span className="text-sm font-bold text-[#ff6b00]">AI-Accelerated</span>
                      </div>
                    </div>

                    <div className="p-3.5 bg-[#0e172e] rounded-xl border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-300 font-medium">Digital Marketing Certification</span>
                        <span className="text-[#ff6b00] font-bold">86% Score</span>
                      </div>
                      <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-[#ff6b00] h-full rounded-full" style={{ width: '86%' }} />
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6b00]" />
                      3 hands-on practice projects completed
                    </span>
                    <span className="flex items-center gap-2 text-emerald-400 font-semibold">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                      </span>
                      Available for work
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. ABOUT SECTION */}
        <section id="about" className="py-20 bg-[#0a1020] border-y border-slate-800/80">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b00] mb-2 block">
                Profile
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                About Me
              </h2>
              <p className="mt-3 text-slate-400 text-sm sm:text-base">
                Focused on direct-response principles, modern paid advertising channels, and fast AI iteration.
              </p>
              <div className="mt-5 p-4 rounded-xl bg-[#0e172e] border border-slate-800 text-slate-300 text-xs sm:text-sm leading-relaxed text-left sm:text-center">
                I have completed formal digital marketing training and built three hands-on practice projects on a fictional brand. I have not worked with real clients or agencies yet, and I am looking for my first opportunities to apply these skills on real campaigns.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              <div className="p-6 bg-[#0e172e] border border-slate-800 rounded-2xl flex items-start gap-4 hover:border-[#ff6b00]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center shrink-0 text-[#ff6b00]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white text-base">
                    Certified in Digital Marketing (86%)
                  </h3>
                  <p className="mt-1 text-slate-300 text-sm leading-relaxed">
                    Completed comprehensive professional coursework with strong marks across paid media, campaign analytics, and conversion copywriting.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#0e172e] border border-slate-800 rounded-2xl flex items-start gap-4 hover:border-[#ff6b00]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center shrink-0 text-[#ff6b00]">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white text-base">
                    Practical training in major ad platforms
                  </h3>
                  <p className="mt-1 text-slate-300 text-sm leading-relaxed">
                    Trained in Meta Ads, TikTok Ads and Snapchat Ads fundamentals through my digital marketing course and practice projects.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#0e172e] border border-slate-800 rounded-2xl flex items-start gap-4 hover:border-[#ff6b00]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center shrink-0 text-[#ff6b00]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white text-base">
                    Uses AI tools to work faster
                  </h3>
                  <p className="mt-1 text-slate-300 text-sm leading-relaxed">
                    Leveraging Google AI Studio, NotebookLM, and Pomelli to conduct deep competitor research and generate dozens of hook variations in minutes.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-[#0e172e] border border-slate-800 rounded-2xl flex items-start gap-4 hover:border-[#ff6b00]/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center shrink-0 text-[#ff6b00]">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-white text-base">
                    Ready to work on real campaigns
                  </h3>
                  <p className="mt-1 text-slate-300 text-sm leading-relaxed">
                    Eager to support businesses, agency teams, and entrepreneurs with ad creatives, copy testing, research reports, and email newsletters.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. SKILLS SECTION */}
        <section id="skills" className="py-20 bg-[#070c18]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b00] mb-2 block">
                Capabilities
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                Core Marketing Skills
              </h2>
              <p className="mt-3 text-slate-400 text-sm sm:text-base">
                Skills I have practiced through simulation projects, ad library teardowns and copy testing.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Meta Ads */}
              <div className="p-6 bg-[#0c1326] border border-slate-800 rounded-2xl hover:border-[#ff6b00]/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#0e1933] border border-slate-800 flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform mb-5">
                  <BarChart2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">Meta Ads</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Campaign setup on Facebook & Instagram, audience targeting, creative testing structures, and pixel event fundamentals.
                </p>
              </div>

              {/* Google Ads (Search) */}
              <div className="p-6 bg-[#0c1326] border border-slate-800 rounded-2xl hover:border-[#ff6b00]/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#0e1933] border border-slate-800 flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform mb-5">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">Google Ads (Search)</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Keyword research, match types and search ad copywriting for responsive search ads.
                </p>
              </div>

              {/* TikTok Marketing */}
              <div className="p-6 bg-[#0c1326] border border-slate-800 rounded-2xl hover:border-[#ff6b00]/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#0e1933] border border-slate-800 flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform mb-5">
                  <Video className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">TikTok Marketing</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Short-form native video structures, high-retention 3-second hooks, trend adaptation, and UGC-style ad scripting.
                </p>
              </div>

              {/* Landing Page Copy */}
              <div className="p-6 bg-[#0c1326] border border-slate-800 rounded-2xl hover:border-[#ff6b00]/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#0e1933] border border-slate-800 flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform mb-5">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">Landing Page Copy</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Headline, offer section and CTA writing for conversion-focused pages.
                </p>
              </div>

              {/* Snapchat Marketing */}
              <div className="p-6 bg-[#0c1326] border border-slate-800 rounded-2xl hover:border-[#ff6b00]/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#0e1933] border border-slate-800 flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform mb-5">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">Snapchat Marketing</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Vertical format full-screen storytelling, quick hook retention, and youth demographic creative positioning.
                </p>
              </div>

              {/* Email Marketing */}
              <div className="p-6 bg-[#0c1326] border border-slate-800 rounded-2xl hover:border-[#ff6b00]/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#0e1933] border border-slate-800 flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform mb-5">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">Email Marketing</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Promotional broadcasts, welcome sequences, curiosity-driven subject lines, and click triggers.
                </p>
              </div>

              {/* Competitor Research */}
              <div className="p-6 bg-[#0c1326] border border-slate-800 rounded-2xl hover:border-[#ff6b00]/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#0e1933] border border-slate-800 flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform mb-5">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">Competitor Research</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Meta Ad Library auditing, analyzing winning formats, identifying angle saturation, and summarizing opportunities.
                </p>
              </div>

              {/* AI Ad Copywriting */}
              <div className="p-6 bg-[#0c1326] border border-slate-800 rounded-2xl hover:border-[#ff6b00]/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#0e1933] border border-slate-800 flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform mb-5">
                  <Cpu className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">AI Ad Copywriting</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Using prompt engineering with Google AI Studio to generate multi-angle direct response hooks and body copy variations.
                </p>
              </div>

              {/* Canva & Visual Layouts */}
              <div className="p-6 bg-[#0c1326] border border-slate-800 rounded-2xl hover:border-[#ff6b00]/50 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#0e1933] border border-slate-800 flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform mb-5">
                  <PenTool className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-white mb-2">Canva & Visual Layouts</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Clean feed ad creative composition, typographic hierarchy, bold callout tags, and mobile feed formatting.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 4. SERVICES SECTION */}
        <section id="services" className="py-20 bg-[#0a1020] border-y border-slate-800/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b00] mb-2 block">
                Offerings
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                Services
              </h2>
              <p className="mt-3 text-slate-400 text-sm sm:text-base">
                What I can create for you, shown through my practice projects below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Service 01: Ad Copywriting */}
              <div className="p-7 bg-[#0e172e] border border-slate-800 rounded-2xl hover:border-[#ff6b00]/40 transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00]">
                    <PenTool className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-500">Service 01</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white">Ad Copywriting</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  I can write persuasive ad copy for Facebook, Instagram, and search feeds with multiple hook angles, benefit-first body text, and clear calls-to-action formatted for testing.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-400">
                  <span className="text-slate-300">Hook Variations</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-300">A/B Testing Angles</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-300">Feed Formats</span>
                </div>
              </div>

              {/* Service 02: Video Creatives */}
              <div className="p-7 bg-[#0e172e] border border-slate-800 rounded-2xl hover:border-[#ff6b00]/40 transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00]">
                    <Video className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-500">Service 02</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white">Video Creatives</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  I can script short-form video concepts and create storyboards designed for TikTok, Reels, and Snapchat with 3-second hook retention, pacing, and on-screen text overlays.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-400">
                  <span className="text-slate-300">3-Second Hooks</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-300">CapCut Storyboards</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-300">9:16 Vertical Video</span>
                </div>
              </div>

              {/* Service 03: Email Campaigns */}
              <div className="p-7 bg-[#0e172e] border border-slate-800 rounded-2xl hover:border-[#ff6b00]/40 transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-500">Service 03</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white">Email Campaigns</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  I can draft promotional broadcasts and automated nurture email sequences with curiosity-driven subject lines, conversational flow, and clear click triggers.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-400">
                  <span className="text-slate-300">Subject Line Testing</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-300">Broadcast Copy</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-300">CTR Optimization</span>
                </div>
              </div>

              {/* Service 04: Competitor Research Reports */}
              <div className="p-7 bg-[#0e172e] border border-slate-800 rounded-2xl hover:border-[#ff6b00]/40 transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00]">
                    <Search className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-500">Service 04</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white">Competitor Research Reports</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  I can audit competitor ad libraries and assemble structured intelligence reports detailing active angles, recurring creative themes, offer mechanics, and market gaps.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-400">
                  <span className="text-slate-300">Ad Library Audits</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-300">Offer Analysis</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-300">Actionable Briefs</span>
                </div>
              </div>

              {/* Service 05: Search Ad Copy */}
              <div className="p-7 bg-[#0e172e] border border-slate-800 rounded-2xl hover:border-[#ff6b00]/40 transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00]">
                    <FileText className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-500">Service 05</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white">Search Ad Copy</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  I can write keyword-focused Google search ad copy variations, responsive headlines, and descriptions based on competitor and audience search intent.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-400">
                  <span className="text-slate-300">Keyword Research</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-300">Search Ads</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-300">Responsive Search</span>
                </div>
              </div>

              {/* Service 06: Landing Page Copywriting */}
              <div className="p-7 bg-[#0e172e] border border-slate-800 rounded-2xl hover:border-[#ff6b00]/40 transition-all space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00]">
                    <Layers className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono text-slate-500">Service 06</span>
                </div>
                <h3 className="font-heading text-xl font-bold text-white">Landing Page Copywriting</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  I can draft high-converting landing page copy structured around clear offers, core benefits, objection-handling, and focused calls-to-action.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs text-slate-400">
                  <span className="text-slate-300">Landing Pages</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-300">Offer & CTA</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-300">Conversion Copy</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. TOOLS SECTION */}
        <section id="tools" className="py-20 bg-[#070c18]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b00] mb-2 block">
                Stack
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                Tools & Technologies
              </h2>
              <p className="mt-3 text-slate-400 text-sm sm:text-base">
                Creative design, video editing, and modern AI acceleration platforms utilized in my workflow.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">

              {/* 1. Canva */}
              <div className="p-4 bg-[#0c1326] border border-slate-800 rounded-xl hover:border-[#ff6b00]/50 transition-colors flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0e1933] flex items-center justify-center text-[#ff6b00] shrink-0">
                  <PenTool className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-white text-sm">Canva</h4>
                  <p className="text-xs text-slate-400">Creative & Graphics</p>
                </div>
              </div>

              {/* 2. CapCut Desktop */}
              <div className="p-4 bg-[#0c1326] border border-slate-800 rounded-xl hover:border-[#ff6b00]/50 transition-colors flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0e1933] flex items-center justify-center text-[#ff6b00] shrink-0">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-white text-sm">CapCut Desktop</h4>
                  <p className="text-xs text-slate-400">Video Editing</p>
                </div>
              </div>

              {/* 3. NotebookLM */}
              <div className="p-4 bg-[#0c1326] border border-slate-800 rounded-xl hover:border-[#ff6b00]/50 transition-colors flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0e1933] flex items-center justify-center text-[#ff6b00] shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-white text-sm">NotebookLM</h4>
                  <p className="text-xs text-slate-400">Research Synthesis</p>
                </div>
              </div>

              {/* 4. Google AI Studio */}
              <div className="p-4 bg-[#0c1326] border border-slate-800 rounded-xl hover:border-[#ff6b00]/50 transition-colors flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0e1933] flex items-center justify-center text-[#ff6b00] shrink-0">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-white text-sm">Google AI Studio</h4>
                  <p className="text-xs text-slate-400">AI Copy Prototyping</p>
                </div>
              </div>

              {/* 5. Pomelli */}
              <div className="p-4 bg-[#0c1326] border border-slate-800 rounded-xl hover:border-[#ff6b00]/50 transition-colors flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0e1933] flex items-center justify-center text-[#ff6b00] shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-white text-sm">Pomelli</h4>
                  <p className="text-xs text-slate-400">Creative Ad Generation</p>
                </div>
              </div>

              {/* 6. Flow / Veo 3 */}
              <div className="p-4 bg-[#0c1326] border border-slate-800 rounded-xl hover:border-[#ff6b00]/50 transition-colors flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0e1933] flex items-center justify-center text-[#ff6b00] shrink-0">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-white text-sm">Flow / Veo 3</h4>
                  <p className="text-xs text-slate-400">AI Video Generation</p>
                </div>
              </div>

              {/* 7. Meta Pixel */}
              <div className="p-4 bg-[#0c1326] border border-slate-800 rounded-xl hover:border-[#ff6b00]/50 transition-colors flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0e1933] flex items-center justify-center text-[#ff6b00] shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-white text-sm">Meta Pixel</h4>
                  <p className="text-xs text-slate-400">Conversion Tracking</p>
                </div>
              </div>

              {/* 8. Google Tag Manager */}
              <div className="p-4 bg-[#0c1326] border border-slate-800 rounded-xl hover:border-[#ff6b00]/50 transition-colors flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0e1933] flex items-center justify-center text-[#ff6b00] shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-white text-sm">Google Tag Manager</h4>
                  <p className="text-xs text-slate-400">Event & Tag Tracking</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 6. WORK PROCESS SECTION */}
        <section id="process" className="py-20 bg-[#0a1020] border-y border-slate-800/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b00] mb-2 block">
                Methodology
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                Work Process
              </h2>
              <p className="mt-3 text-slate-400 text-sm sm:text-base">
                A simple 3-step structured approach to ensure marketing campaigns are informed, creative, and optimized.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
              
              {/* Step 1: Research */}
              <div className="p-7 bg-[#0e172e] border border-slate-800 rounded-2xl relative space-y-4 hover:border-[#ff6b00]/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-heading font-extrabold text-[#ff6b00]">01</span>
                  <div className="w-9 h-9 rounded-lg bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00]">
                    <Search className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold text-white">Research</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Deep dive into target customer psychology, competitor ad libraries, and current industry trends. Identify what works, what fails, and uncover distinct angles.
                </p>
                <div className="pt-2 text-xs text-slate-400">
                  <span>Output:</span> <span className="text-slate-300">Audience insights & competitor teardown</span>
                </div>
              </div>

              {/* Step 2: Create */}
              <div className="p-7 bg-[#0e172e] border border-slate-800 rounded-2xl relative space-y-4 hover:border-[#ff6b00]/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-heading font-extrabold text-[#ff6b00]">02</span>
                  <div className="w-9 h-9 rounded-lg bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00]">
                    <PenTool className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold text-white">Create</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Drafting persuasive copy variations and producing graphic or short-form video storyboards. Using AI tools to accelerate brainstorming while keeping copy human and sharp.
                </p>
                <div className="pt-2 text-xs text-slate-400">
                  <span>Output:</span> <span className="text-slate-300">Ad copy split tests & creative assets</span>
                </div>
              </div>

              {/* Step 3: Optimize */}
              <div className="p-7 bg-[#0e172e] border border-slate-800 rounded-2xl relative space-y-4 hover:border-[#ff6b00]/40 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-heading font-extrabold text-[#ff6b00]">03</span>
                  <div className="w-9 h-9 rounded-lg bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00]">
                    <BarChart2 className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-heading text-xl font-bold text-white">Optimize</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Reviewing click-through and engagement feedback, identifying fatigue in creatives, and refining headlines, hooks, or call-to-actions for continuous improvement.
                </p>
                <div className="pt-2 text-xs text-slate-400">
                  <span>Output:</span> <span className="text-slate-300">Iterated creatives & performance findings</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* WHY WORK WITH ME SECTION */}
        <section className="py-20 bg-[#070c18]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b00] mb-2 block">
                Value
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                Why Work With Me
              </h2>
              <p className="mt-3 text-slate-400 text-sm sm:text-base">
                Core advantages I bring to your growth campaigns, creative testing, and content workflows.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Card 1 */}
              <div className="p-7 bg-[#0c1326] border border-slate-800 rounded-2xl hover:border-[#ff6b00]/40 transition-all space-y-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white">
                  Fast AI-assisted workflow
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Leveraging modern AI tools to accelerate market research, generate dozens of creative angles, and iterate variations in minutes instead of days.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-7 bg-[#0c1326] border border-slate-800 rounded-2xl hover:border-[#ff6b00]/40 transition-all space-y-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white">
                  Direct-response mindset (pain point + benefit)
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Every hook, headline, and creative asset is engineered around clear customer pain points, tangible benefits, and high-converting calls to action.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-7 bg-[#0c1326] border border-slate-800 rounded-2xl hover:border-[#ff6b00]/40 transition-all space-y-4 group">
                <div className="w-12 h-12 rounded-xl bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00] group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white">
                  Clear communication and quick revisions
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Responsive feedback loops, organized campaign briefs, and transparent collaboration focused on fast turnarounds and quality execution.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 7. PROJECTS SECTION */}
        <section id="projects" className="py-20 bg-[#0a1020] border-t border-slate-800/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b00] mb-2 block">
                Portfolio
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                Featured Projects
              </h2>
              <p className="mt-3 text-slate-400 text-sm sm:text-base">
                Hands-on practice projects on a fictional brand, showing my research, copywriting and video concept process.
              </p>

              {/* Practice Disclaimer Banner */}
              <div className="mt-5 p-4 bg-[#ff6b00]/10 border border-[#ff6b00]/30 rounded-xl text-center shadow-sm">
                <p className="text-xs sm:text-sm text-slate-200 font-medium leading-relaxed">
                  All projects below are practice projects created for a fictional brand (Urban Thread) using sample data. They show my skills and process, not real client results.
                </p>
              </div>
            </div>

            {/* 3 Case-study cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {PROJECTS.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-[#0c1326] border border-slate-800 rounded-2xl flex flex-col overflow-hidden hover:border-[#ff6b00]/50 transition-all group"
                >
                  {/* Thumbnail Box */}
                  <div className="h-52 bg-[#0e172e] border-b border-slate-800 relative flex items-center justify-center p-6 overflow-hidden">
                    {proj.id === 'competitor-research' && (
                      <div className="w-full h-full flex flex-col justify-center items-center text-center space-y-2">
                        <div className="w-14 h-14 rounded-2xl bg-[#ff6b00]/15 flex items-center justify-center text-[#ff6b00] mb-1">
                          <Search className="w-7 h-7" />
                        </div>
                        <span className="text-xs font-mono text-slate-400">Ad Library Audit & Report Matrix</span>
                        <div className="flex gap-2">
                          <span className="w-8 h-1.5 bg-slate-700 rounded-full" />
                          <span className="w-14 h-1.5 bg-[#ff6b00] rounded-full" />
                          <span className="w-6 h-1.5 bg-slate-700 rounded-full" />
                        </div>
                      </div>
                    )}

                    {proj.id === 'ad-copy-samples' && (
                      <div className="w-full h-full flex flex-col justify-center items-center text-center space-y-2">
                        <div className="w-14 h-14 rounded-2xl bg-[#ff6b00]/15 flex items-center justify-center text-[#ff6b00] mb-1">
                          <PenTool className="w-7 h-7" />
                        </div>
                        <span className="text-xs font-mono text-slate-400">Hook & Body Angle Split-Tests</span>
                        <div className="flex gap-2">
                          <span className="w-12 h-1.5 bg-[#ff6b00] rounded-full" />
                          <span className="w-8 h-1.5 bg-slate-700 rounded-full" />
                          <span className="w-10 h-1.5 bg-slate-700 rounded-full" />
                        </div>
                      </div>
                    )}

                    {proj.id === 'tiktok-video-creatives' && (
                      <div
                        onClick={() => setVideoModalOpen(true)}
                        className="w-full h-full relative cursor-pointer group/vid overflow-hidden flex items-center justify-center bg-black"
                        title="Click to watch 11s video creative"
                      >
                        <img
                          src="/Urban-Thread-poster.jpg"
                          alt="TikTok Video Creative Thumbnail"
                          className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover/vid:scale-105 group-hover/vid:opacity-90 transition-all duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60" />
                        <div className="relative z-10 flex flex-col items-center text-center p-3">
                          <div className="w-12 h-12 rounded-full bg-[#ff6b00] text-white flex items-center justify-center shadow-lg shadow-[#ff6b00]/40 group-hover/vid:scale-110 transition-transform mb-1.5">
                            <Play className="w-5 h-5 fill-current ml-0.5" />
                          </div>
                          <span className="text-xs font-bold text-white tracking-wide">Watch 11s Video Ad</span>
                          <span className="text-[10px] font-mono text-[#ff6b00] mt-0.5">9:16 Vertical Video · CapCut</span>
                        </div>
                      </div>
                    )}

                    {/* Badge: "Practice Project" */}
                    <div className="absolute top-3 left-3 bg-[#070c18]/90 border border-slate-700/80 px-2.5 py-1 rounded-md text-[11px] font-medium text-[#ff6b00]">
                      {proj.badge}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white group-hover:text-[#ff6b00] transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 mb-4">
                        {proj.category}
                      </p>

                      {/* Goal */}
                      <div className="space-y-1 mb-3.5">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Goal:</span>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {proj.goal}
                        </p>
                      </div>

                      {/* What I did */}
                      <div className="space-y-1 mb-3.5">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">What I did:</span>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {proj.whatIDid}
                        </p>
                      </div>

                      {/* Tools used */}
                      <div className="space-y-1">
                        <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">Tools used:</span>
                        <div className="flex flex-wrap gap-1.5 pt-0.5">
                          {proj.toolsUsed.map((tool, idx) => (
                            <span
                              key={idx}
                              className="text-[11px] px-2 py-0.5 bg-[#0e172e] border border-slate-800 text-slate-300 rounded"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Button - Matches style across all 3 cards with VIEW label & ExternalLink icon */}
                    <div className="pt-4 border-t border-slate-800">
                      {proj.id === 'competitor-research' ? (
                        <button
                          type="button"
                          onClick={() => setReportModalOpen(true)}
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-800 hover:bg-[#ff6b00] rounded-xl transition-all cursor-pointer"
                        >
                          <span>View</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      ) : proj.id === 'ad-copy-samples' ? (
                        <button
                          type="button"
                          onClick={() => {
                            setCurrentImageIndex(0);
                            setLightboxOpen(true);
                          }}
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-800 hover:bg-[#ff6b00] rounded-xl transition-all cursor-pointer"
                        >
                          <span>View</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={() => setVideoModalOpen(true)}
                          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-slate-800 hover:bg-[#ff6b00] rounded-xl transition-all cursor-pointer"
                        >
                          <span>View</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. TRAINING & EDUCATION SECTION */}
        <section id="education" className="py-20 bg-[#0a1020] border-y border-slate-800/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b00] mb-2 block">
                Credentials
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                Training & Education
              </h2>
              <p className="mt-3 text-slate-400 text-sm sm:text-base">
                Formal coursework and academic foundation.
              </p>
            </div>

            <div className="space-y-5">
              
              {/* Item 1 - PRIMARY CARD */}
              <div className="p-8 bg-[#0e172e] border-2 border-[#ff6b00]/70 rounded-2xl shadow-xl shadow-[#ff6b00]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 relative overflow-hidden group hover:border-[#ff6b00] transition-all">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#ff6b00]/10 rounded-full blur-2xl pointer-events-none" />
                <div className="flex items-start sm:items-center gap-5 relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#ff6b00]/15 border border-[#ff6b00]/30 flex items-center justify-center text-[#ff6b00] shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                        Digital Marketing Course
                      </h3>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#ff6b00] text-white shadow-md shadow-[#ff6b00]/25">
                        86% Score
                      </span>
                    </div>
                    <p className="text-slate-300 text-sm sm:text-base mt-2 leading-relaxed max-w-2xl">
                      Comprehensive certification focusing on Meta & TikTok Ads, direct-response copywriting, competitor benchmarking, email architectures, and AI tool integration.
                    </p>
                  </div>
                </div>
                <div className="shrink-0 text-xs font-mono font-semibold px-3 py-1.5 rounded-lg bg-[#ff6b00]/10 text-[#ff6b00] border border-[#ff6b00]/25 relative z-10 sm:text-right">
                  Certified Credential
                </div>
              </div>

              {/* Item 2 - SECONDARY CARD */}
              <div className="p-5 bg-[#090f1f]/80 border border-slate-800/80 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-slate-400 hover:border-slate-700 transition-colors">
                <div className="flex items-start sm:items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-slate-800/80 flex items-center justify-center text-slate-400 shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="font-heading font-semibold text-base text-slate-200">
                        Intermediate (Pre-Medical)
                      </h3>
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#ff6b00] text-white shadow-md shadow-[#ff6b00]/20">
                        Grade A
                      </span>
                    </div>
                    <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">
                      Analytical and scientific background providing disciplined research, systematic hypothesis testing, and quantitative problem-solving.
                    </p>
                  </div>
                </div>
                <div className="shrink-0 text-xs font-mono text-slate-400 sm:text-right">
                  Sukkur, Sindh
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 9. CONTACT SECTION */}
        <section id="contact" className="py-20 bg-[#070c18] relative">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-[#ff6b00] mb-2 block">
                Connect
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white">
                Contact
              </h2>
              <p className="mt-3 text-slate-400 text-sm sm:text-base">
                Looking for a motivated junior marketer for ad copy, research or campaign support? Let's talk.
              </p>
            </div>

            <div className="bg-[#0b1224] border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-xl space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Email Contact Card - Fixed cleanly for 375px & desktop */}
                <div className="p-5 bg-[#0e172e] border border-slate-800 rounded-xl flex flex-col justify-between space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00]">
                      <Mail className="w-5 h-5" />
                    </div>
                    <button
                      onClick={() => copyToClipboard(CONTACT_CONFIG.email, 'email')}
                      className="text-slate-400 hover:text-white p-1 text-xs flex items-center gap-1 transition-colors cursor-pointer"
                      title="Copy email"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block mb-1">Email Address</span>
                    <a
                      href={`mailto:${CONTACT_CONFIG.email}`}
                      className="text-xs sm:text-[13px] font-semibold text-white hover:text-[#ff6b00] transition-colors block break-words [overflow-wrap:anywhere]"
                    >
                      {CONTACT_CONFIG.email}
                    </a>
                  </div>
                </div>

                {/* WhatsApp Contact Card */}
                <div className="p-5 bg-[#0e172e] border border-slate-800 rounded-xl flex flex-col justify-between space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00]">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <button
                      onClick={() => copyToClipboard(CONTACT_CONFIG.whatsappNumber, 'phone')}
                      className="text-slate-400 hover:text-white p-1 text-xs flex items-center gap-1 transition-colors cursor-pointer"
                      title="Copy phone"
                    >
                      {copiedPhone ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block mb-1">WhatsApp</span>
                    <a
                      href={CONTACT_CONFIG.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white hover:text-[#ff6b00] transition-colors"
                    >
                      {CONTACT_CONFIG.whatsappNumber}
                    </a>
                  </div>
                </div>

                {/* Location Card */}
                <div className="p-5 bg-[#0e172e] border border-slate-800 rounded-xl flex flex-col justify-between space-y-4">
                  <div className="w-10 h-10 rounded-lg bg-[#ff6b00]/10 flex items-center justify-center text-[#ff6b00]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block mb-1">Location</span>
                    <p className="text-sm font-semibold text-white">
                      {CONTACT_CONFIG.location}
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Buttons: WhatsApp Me, View CV & Download CV */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-center gap-3.5">
                <a
                  href={CONTACT_CONFIG.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#ff6b00] hover:bg-[#e05e00] rounded-xl transition-all shadow-lg shadow-[#ff6b00]/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Chat</span>
                </a>

                <button
                  type="button"
                  onClick={() => setCvModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-slate-800 hover:bg-[#ff6b00] border border-slate-700 hover:border-[#ff6b00] rounded-xl transition-all cursor-pointer"
                >
                  <Eye className="w-4 h-4 text-[#ff6b00]" />
                  <span>View CV</span>
                </button>

                <a
                  href="/Kamran-Ali-CV.pdf"
                  download="Kamran-Ali-CV.pdf"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-slate-300 hover:text-white bg-[#0e172e] hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all cursor-pointer"
                >
                  <Download className="w-4 h-4 text-slate-400" />
                  <span>Download CV</span>
                </a>
              </div>

              {/* Small note under contact buttons */}
              <p className="text-center text-xs text-slate-400 pt-1">
                Open to internships, trial projects and entry-level roles.
              </p>

            </div>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#050811] border-t border-slate-800/80 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>© {new Date().getFullYear()} Kamran Ali. All rights reserved.</p>
            <p className="text-slate-500 text-[11px] mt-1">
              Practice projects use a fictional brand and sample data.
            </p>
          </div>
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center">
            <span className="text-slate-300">Junior Digital Marketer</span>
            <span aria-hidden="true">·</span>
            <span>Karachi, Pakistan</span>
            <a
              href="#"
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-[#ff6b00] transition-colors ml-2"
              title="Back to top"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div 
            className="bg-[#0b1224] border border-slate-800 rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-[#ff6b00]/15 text-[#ff6b00] border border-[#ff6b00]/30 inline-block mb-2">
                {activeModalProject.badge}
              </span>
              <h3 className="font-heading text-2xl font-bold text-white">
                {activeModalProject.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                {activeModalProject.category}
              </p>
            </div>

            <div className="space-y-4 text-sm text-slate-300">
              <div className="p-4 bg-[#0e172e] rounded-xl border border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#ff6b00] mb-1">Project Goal</h4>
                <p className="text-xs text-slate-200">{activeModalProject.goal}</p>
              </div>

              <div className="p-4 bg-[#0e172e] rounded-xl border border-slate-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#ff6b00] mb-1">What I Did & Execution</h4>
                <p className="text-xs text-slate-200">{activeModalProject.whatIDid}</p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Deliverables & Highlights</h4>
                <ul className="space-y-2">
                  {activeModalProject.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#ff6b00] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">Tools Used</h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.toolsUsed.map((tool, idx) => (
                    <span key={idx} className="text-xs px-2.5 py-1 bg-slate-800 text-slate-200 rounded-md">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-end">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-xl transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Ad Copy Samples Image Lightbox */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Ad creative image preview"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setLightboxOpen(false)}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-slate-900/90 hover:bg-[#ff6b00] text-slate-300 hover:text-white border border-slate-700/80 transition-colors cursor-pointer shadow-lg"
            aria-label="Close popup"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div
            className="relative max-w-lg w-full flex flex-col items-center justify-center max-h-[96vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {AD_COPY_IMAGES.length > 1 && (
              <div className="flex items-center justify-between w-full mb-3 px-2">
                <button
                  type="button"
                  onClick={() =>
                    setCurrentImageIndex((prev) =>
                      prev > 0 ? prev - 1 : AD_COPY_IMAGES.length - 1
                    )
                  }
                  className="p-2 rounded-full bg-slate-900/80 hover:bg-[#ff6b00] text-white border border-slate-700 transition-colors cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <span className="text-xs font-mono font-medium text-slate-300 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-800">
                  {currentImageIndex + 1} / {AD_COPY_IMAGES.length}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setCurrentImageIndex((prev) =>
                      prev < AD_COPY_IMAGES.length - 1 ? prev + 1 : 0
                    )
                  }
                  className="p-2 rounded-full bg-slate-900/80 hover:bg-[#ff6b00] text-white border border-slate-700 transition-colors cursor-pointer"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

            <div className="relative flex items-center justify-center max-h-[76vh] sm:max-h-[80vh] overflow-hidden">
              <img
                src={AD_COPY_IMAGES[currentImageIndex].src}
                alt={AD_COPY_IMAGES[currentImageIndex].alt}
                className="max-h-[74vh] sm:max-h-[78vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-slate-800 select-none"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="mt-3 text-center text-xs sm:text-sm text-slate-300 font-medium px-2 leading-relaxed max-w-md">
              Ad creative generated with Pomelli (AI) and edited by me. Practice project for a fictional brand.
            </p>
          </div>
        </div>
      )}

      {/* Competitor Research Report Modal */}
      {reportModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Urban Thread Competitor Analysis & Ad Strategy Report"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in"
          onClick={() => setReportModalOpen(false)}
        >
          <div
            className="bg-[#0b1224] border border-slate-800 rounded-2xl max-w-4xl w-full flex flex-col max-h-[92vh] shadow-2xl relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-[#0c1428] border-b border-slate-800 flex items-start justify-between gap-4 sticky top-0 z-10">
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#ff6b00]/20 text-[#ff6b00] border border-[#ff6b00]/30 uppercase tracking-wider">
                    Practice Project Report
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    Urban Thread · DTC Streetwear
                  </span>
                </div>
                <h2 className="text-lg sm:text-2xl font-bold font-heading text-white">
                  Urban Thread: Competitor Analysis & Ad Strategy Report
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Direct-Response Positioning, Ad Creative Angles & Short-Form Video Strategy
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={handleCopyReport}
                  className="p-2 sm:px-3 sm:py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/80 transition-colors text-xs font-semibold flex items-center gap-1.5 cursor-pointer"
                  title="Copy full report text"
                >
                  {copiedReportText ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="hidden sm:inline text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span className="hidden sm:inline">Copy Report</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setReportModalOpen(false)}
                  className="p-2 sm:p-2.5 rounded-xl bg-slate-800 hover:bg-[#ff6b00] text-slate-300 hover:text-white border border-slate-700/80 transition-colors cursor-pointer"
                  aria-label="Close report"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-8 overflow-y-auto space-y-8 text-sm text-slate-300 leading-relaxed bg-[#070c18]">
              {/* Disclaimer Notice Box */}
              <div className="p-4 bg-[#ff6b00]/10 border border-[#ff6b00]/30 rounded-xl space-y-1">
                <span className="text-xs font-bold text-[#ff6b00] uppercase tracking-wider block">
                  Practice Project Notice
                </span>
                <p className="text-xs text-slate-300">
                  This report is a practice project prepared for a fictional direct-to-consumer apparel brand (Urban Thread) utilizing mock market dynamics and sample pricing. It demonstrates research frameworks, ad teardowns, and copy systems.
                </p>
              </div>

              {/* Section 1: Brand Profile */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
                  <span className="w-7 h-7 rounded-lg bg-[#ff6b00]/15 flex items-center justify-center text-[#ff6b00] font-heading font-bold text-xs">
                    01
                  </span>
                  <h3 className="text-base sm:text-lg font-heading font-bold text-white">
                    Brand Profile & Audience Hypothesis
                  </h3>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#0e172e]">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[480px]">
                    <thead>
                      <tr className="bg-[#121c38] text-white border-b border-slate-800">
                        <th className="py-2.5 px-4 font-heading font-semibold w-1/3">Brand Attribute</th>
                        <th className="py-2.5 px-4 font-heading font-semibold">Strategic Hypothesis</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80">
                      <tr>
                        <td className="py-3 px-4 font-medium text-slate-200">Brand Name</td>
                        <td className="py-3 px-4 text-slate-300">Urban Thread (Practice DTC Brand)</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-slate-200">Market Base</td>
                        <td className="py-3 px-4 text-slate-300">Karachi, Pakistan</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-slate-200">Target Demographic</td>
                        <td className="py-3 px-4 text-slate-300">Men aged 18 to 28 in urban metropolitan hubs</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-slate-200">Hero Products</td>
                        <td className="py-3 px-4 text-slate-300">Heavyweight drop-shoulder hoodies & 240+ GSM oversized tees</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium text-slate-200">Fulfillment Strategy</td>
                        <td className="py-3 px-4 text-slate-300">Nationwide Cash on Delivery (COD) across Pakistan</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 2: Ad Creative Angles */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
                  <span className="w-7 h-7 rounded-lg bg-[#ff6b00]/15 flex items-center justify-center text-[#ff6b00] font-heading font-bold text-xs">
                    02
                  </span>
                  <h3 className="text-base sm:text-lg font-heading font-bold text-white">
                    Core Marketing Angles & Copywriting Frameworks
                  </h3>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#0e172e]">
                  <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[550px]">
                    <thead>
                      <tr className="bg-[#121c38] text-white border-b border-slate-800">
                        <th className="py-2.5 px-3 font-heading font-semibold w-24">Angle</th>
                        <th className="py-2.5 px-3 font-heading font-semibold">Hook Headline (≤ 7 Words)</th>
                        <th className="py-2.5 px-3 font-heading font-semibold">Direct-Response Body Copy</th>
                        <th className="py-2.5 px-3 font-heading font-semibold w-20">CTA</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80 text-xs">
                      <tr>
                        <td className="py-2.5 px-3 font-medium text-[#ff6b00]">Pattern Interrupt</td>
                        <td className="py-2.5 px-3 font-semibold text-white">Stop buying thin, low-quality hoodies.</td>
                        <td className="py-2.5 px-3 text-slate-300">Most streetwear feels flimsy and sags after two wears. Urban Thread hoodies feature a weighty feel, soft inside, and heavy drape that keeps its structure for PKR 4,500*.</td>
                        <td className="py-2.5 px-3 text-slate-400">Shop Now</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-medium text-[#ff6b00]">Product Touch</td>
                        <td className="py-2.5 px-3 font-semibold text-white">Feel the difference of a weighty hood.</td>
                        <td className="py-2.5 px-3 text-slate-300">Forget light, shapeless sweatshirts that collapse on your shoulders. Feel the substantial drape and durable weave of a heavy hood built for daily wear at PKR 4,500*.</td>
                        <td className="py-2.5 px-3 text-slate-400">See Hoodie</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-medium text-[#ff6b00]">Value / Bundle</td>
                        <td className="py-2.5 px-3 font-semibold text-white">Upgrade your streetwear with two hoodies.</td>
                        <td className="py-2.5 px-3 text-slate-300">Double up on essential daily streetwear before core colorways sell out. Secure two heavyweight hoodies with a relaxed cut for PKR 4,500* each.</td>
                        <td className="py-2.5 px-3 text-slate-400">Order Now</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Section 3: 11-Second Video Concept */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5 pb-2 border-b border-slate-800">
                  <span className="w-7 h-7 rounded-lg bg-[#ff6b00]/15 flex items-center justify-center text-[#ff6b00] font-heading font-bold text-xs">
                    03
                  </span>
                  <h3 className="text-base sm:text-lg font-heading font-bold text-white">
                    11-Second Short-Form Video Strategy & Script
                  </h3>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#0e172e]">
                  <table className="w-full text-left text-xs border-collapse min-w-[550px]">
                    <thead>
                      <tr className="bg-[#121c38] text-white border-b border-slate-800">
                        <th className="py-2.5 px-3 font-heading font-semibold w-24">Time</th>
                        <th className="py-2.5 px-3 font-heading font-semibold">Visual</th>
                        <th className="py-2.5 px-3 font-heading font-semibold">Text Overlay</th>
                        <th className="py-2.5 px-3 font-heading font-semibold">Voiceover</th>
                        <th className="py-2.5 px-3 font-heading font-semibold">SFX</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/80 text-slate-300">
                      <tr>
                        <td className="py-2.5 px-3 font-mono text-[11px] font-bold text-[#ff6b00]">0:00 to 0:04</td>
                        <td className="py-2.5 px-3">Hoodie on a hanger, a hand pulls it off</td>
                        <td className="py-2.5 px-3 text-amber-300">&ldquo;Stop buying thin, low-quality hoodies.&rdquo;</td>
                        <td className="py-2.5 px-3">&ldquo;Stop buying thin, low-quality hoodies.&rdquo;</td>
                        <td className="py-2.5 px-3 text-slate-400 italic">Hanger slide, fabric whoosh</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-mono text-[11px] font-bold text-[#ff6b00]">0:04 to 0:06</td>
                        <td className="py-2.5 px-3">Heavy fabric in hand, soft inside</td>
                        <td className="py-2.5 px-3 text-amber-300">&ldquo;Heavy fabric. Soft inside. Holds its shape wash after wash.&rdquo;</td>
                        <td className="py-2.5 px-3">&ldquo;Heavy fabric, soft inside, built to hold its shape.&rdquo;</td>
                        <td className="py-2.5 px-3 text-slate-400 italic">Beat swells</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-mono text-[11px] font-bold text-[#ff6b00]">0:06 to 0:07</td>
                        <td className="py-2.5 px-3">Close-up of thick fabric</td>
                        <td className="py-2.5 px-3 text-amber-300">&ldquo;Only PKR 4,500*&rdquo; and &ldquo;Cash on Delivery across Pakistan&rdquo;</td>
                        <td className="py-2.5 px-3 text-slate-500">-</td>
                        <td className="py-2.5 px-3 text-slate-400 italic">Beat continues</td>
                      </tr>
                      <tr>
                        <td className="py-2.5 px-3 font-mono text-[11px] font-bold text-[#ff6b00]">0:07 to 0:11</td>
                        <td className="py-2.5 px-3">End-card: logo, price, Cash on Delivery, ORDER NOW</td>
                        <td className="py-2.5 px-3 text-amber-300">&ldquo;Order online in 30 seconds and pay cash at your door&rdquo;</td>
                        <td className="py-2.5 px-3">&ldquo;Order online in 30 seconds and pay cash at your door.&rdquo;</td>
                        <td className="py-2.5 px-3 text-slate-400 italic">Cash register chime</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-[11px] text-slate-400 italic">
                  *Sample price for practice purposes.
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-[#0c1428] border-t border-slate-800 flex items-center justify-between gap-3">
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                Urban Thread Competitor Analysis & Ad Strategy Report · Practice Project
              </span>
              <button
                type="button"
                onClick={() => setReportModalOpen(false)}
                className="px-5 py-2 rounded-xl bg-[#ff6b00] hover:bg-[#e05e00] text-white text-xs font-semibold transition-colors cursor-pointer ml-auto"
              >
                Close Report
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TikTok Video Creative Modal (11s Video Ad) */}
      {videoModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={closeVideoModal}
        >
          <div 
            className="bg-[#0a1122] border border-slate-800 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[92vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 bg-[#0c1428] border-b border-slate-800 flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#ff6b00] px-2.5 py-0.5 rounded-full bg-[#ff6b00]/15 border border-[#ff6b00]/30">
                    Practice Project · Short-Form Video Strategy
                  </span>
                  <span className="text-xs font-mono text-slate-400">11s Vertical Ad (9:16)</span>
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                  Urban Thread — TikTok Video Creative & Storyboard
                </h3>
              </div>
              <button
                onClick={closeVideoModal}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
                aria-label="Close video modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Grid */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#070c18]">
              {/* Left Column: 9:16 Video Player with Controls (NO autoplay with sound) */}
              <div className="md:col-span-5 flex flex-col items-center justify-center">
                <div className="w-[280px] sm:w-[310px] aspect-[9/16] bg-black rounded-3xl border-2 border-slate-700/80 shadow-2xl relative overflow-hidden flex flex-col group/player">
                  <video
                    ref={videoRef}
                    src="/Urban-Thread-TikTok.mp4"
                    poster="/Urban-Thread-poster.jpg"
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle caption overlay */}
                  <div className="absolute bottom-14 left-3 right-12 pointer-events-none text-left drop-shadow">
                    <p className="text-xs font-bold text-white flex items-center gap-1">
                      @kamranali.marketing <CheckCircle2 className="w-3 h-3 text-[#ff6b00]" />
                    </p>
                    <p className="text-[11px] text-slate-200 line-clamp-2 mt-0.5">
                      Stop buying thin hoodies. Weighty feel, heavy drape & drop-shoulder cut for PKR 4,500*. Cash on Delivery across Pakistan! 📦
                    </p>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400 mt-2 text-center">
                  Rendered in CapCut Desktop · 11s Direct-Response Vertical Ad
                </p>
              </div>

              {/* Right Column: Tabbed Script & Strategy Breakdown */}
              <div className="md:col-span-7 flex flex-col space-y-4">
                {/* Tabs */}
                <div className="flex border-b border-slate-800">
                  <button
                    type="button"
                    onClick={() => setVideoActiveTab('script')}
                    className={`pb-2.5 px-4 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 cursor-pointer ${
                      videoActiveTab === 'script'
                        ? 'border-[#ff6b00] text-[#ff6b00]'
                        : 'border-transparent text-slate-400 hover:text-white'
                    }`}
                  >
                    11-Second Video Script
                  </button>
                  <button
                    type="button"
                    onClick={() => setVideoActiveTab('strategy')}
                    className={`pb-2.5 px-4 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 cursor-pointer ${
                      videoActiveTab === 'strategy'
                        ? 'border-[#ff6b00] text-[#ff6b00]'
                        : 'border-transparent text-slate-400 hover:text-white'
                    }`}
                  >
                    Strategy & Creative Angles
                  </button>
                </div>

                {/* Modal Disclaimer */}
                <div className="p-3 bg-[#ff6b00]/10 border border-[#ff6b00]/30 rounded-xl">
                  <p className="text-xs text-slate-300 leading-relaxed">
                    This is a practice project for a fictional brand using sample pricing. Video clips were generated with Flow / Veo 3 (AI) and edited by me in CapCut and Canva. It is not a real client campaign.
                  </p>
                </div>

                {videoActiveTab === 'script' ? (
                  <div className="space-y-3 flex-1 overflow-y-auto pr-1">
                    {/* Real Video Storyboard Table */}
                    <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#0e172e]">
                      <table className="w-full text-left text-xs border-collapse min-w-[550px]">
                        <thead>
                          <tr className="bg-[#121c38] text-white border-b border-slate-800">
                            <th className="py-2.5 px-3 font-heading font-semibold w-24">Time</th>
                            <th className="py-2.5 px-3 font-heading font-semibold">Visual</th>
                            <th className="py-2.5 px-3 font-heading font-semibold">Text Overlay</th>
                            <th className="py-2.5 px-3 font-heading font-semibold">Voiceover</th>
                            <th className="py-2.5 px-3 font-heading font-semibold">SFX</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/80 text-slate-300">
                          <tr className="hover:bg-[#111c38]/50">
                            <td className="py-2.5 px-3 font-mono text-[11px] font-bold text-[#ff6b00] align-top whitespace-nowrap">0:00 to 0:04</td>
                            <td className="py-2.5 px-3 align-top">Hoodie on a hanger, a hand pulls it off</td>
                            <td className="py-2.5 px-3 align-top text-amber-300 font-medium">&ldquo;Stop buying thin, low-quality hoodies.&rdquo;</td>
                            <td className="py-2.5 px-3 align-top">&ldquo;Stop buying thin, low-quality hoodies.&rdquo;</td>
                            <td className="py-2.5 px-3 align-top text-slate-400 italic">Hanger slide, fabric whoosh</td>
                          </tr>
                          <tr className="hover:bg-[#111c38]/50">
                            <td className="py-2.5 px-3 font-mono text-[11px] font-bold text-[#ff6b00] align-top whitespace-nowrap">0:04 to 0:06</td>
                            <td className="py-2.5 px-3 align-top">Heavy fabric in hand, soft inside</td>
                            <td className="py-2.5 px-3 align-top text-amber-300 font-medium">&ldquo;Heavy fabric. Soft inside. Holds its shape wash after wash.&rdquo;</td>
                            <td className="py-2.5 px-3 align-top">&ldquo;Heavy fabric, soft inside, built to hold its shape.&rdquo;</td>
                            <td className="py-2.5 px-3 align-top text-slate-400 italic">Beat swells</td>
                          </tr>
                          <tr className="hover:bg-[#111c38]/50">
                            <td className="py-2.5 px-3 font-mono text-[11px] font-bold text-[#ff6b00] align-top whitespace-nowrap">0:06 to 0:07</td>
                            <td className="py-2.5 px-3 align-top">Close-up of thick fabric</td>
                            <td className="py-2.5 px-3 align-top text-amber-300 font-medium">&ldquo;Only PKR 4,500*&rdquo; and &ldquo;Cash on Delivery across Pakistan&rdquo;</td>
                            <td className="py-2.5 px-3 align-top text-slate-500">-</td>
                            <td className="py-2.5 px-3 align-top text-slate-400 italic">Beat continues</td>
                          </tr>
                          <tr className="hover:bg-[#111c38]/50">
                            <td className="py-2.5 px-3 font-mono text-[11px] font-bold text-[#ff6b00] align-top whitespace-nowrap">0:07 to 0:11</td>
                            <td className="py-2.5 px-3 align-top">End-card: logo, price, Cash on Delivery, ORDER NOW</td>
                            <td className="py-2.5 px-3 align-top text-amber-300 font-medium">&ldquo;Order online in 30 seconds and pay cash at your door&rdquo;</td>
                            <td className="py-2.5 px-3 align-top">&ldquo;Order online in 30 seconds and pay cash at your door.&rdquo;</td>
                            <td className="py-2.5 px-3 align-top text-slate-400 italic">Cash register chime</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <p className="text-[11px] text-slate-400 italic">
                      *Sample price for practice purposes.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3 flex-1 overflow-y-auto pr-1">
                    <div className="p-4 bg-[#0e172e] border border-slate-800 rounded-xl space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#ff6b00]">
                        3-Second Visual Hook Philosophy
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        In short-form mobile feeds (TikTok, Instagram Reels, and Snapchat), users swipe away in under 2 seconds if the video opens like a corporate ad. This concept utilizes a sharp pattern interrupt: pulling the hoodie off the hanger and immediately challenging the viewer with &ldquo;Stop buying thin, low-quality hoodies.&rdquo;
                      </p>
                    </div>

                    <div className="p-4 bg-[#0e172e] border border-slate-800 rounded-xl space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                        Objection Handling in Feed
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Pakistani streetwear buyers are frequently disappointed by thin fabrics that lose shape after one wash, and fear paying upfront for unknown brands. The ad directly tackles both by explicitly showcasing the heavy drape, clear pricing (PKR 4,500*), and 100% Cash on Delivery across Pakistan.
                      </p>
                    </div>

                    <div className="p-4 bg-[#0e172e] border border-slate-800 rounded-xl space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                        Production & Tooling
                      </h4>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {['CapCut Desktop', 'Flow / Veo 3', 'Canva', 'TikTok Creative Center'].map((t) => (
                          <span key={t} className="text-xs px-2.5 py-1 bg-[#090f1f] border border-slate-700 text-slate-300 rounded-lg">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Modal Footer - NO MP4 download button */}
            <div className="p-4 sm:p-5 bg-[#0c1428] border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                Urban Thread TikTok Ad Creative · Practice Project
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <button
                  type="button"
                  onClick={handleCopyScript}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {copiedScript ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedScript ? 'Script Copied' : 'Copy Script'}</span>
                </button>
                <button
                  type="button"
                  onClick={closeVideoModal}
                  className="px-5 py-2 rounded-xl bg-[#ff6b00] hover:bg-[#e05e00] text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Complete CV Modal - Single Source Only: Embedded PDF Viewer */}
      {cvModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/90 backdrop-blur-md animate-fade-in"
          onClick={() => setCvModalOpen(false)}
        >
          <div 
            className="bg-[#0b1224] border border-slate-800 rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col h-[90vh] max-h-[850px] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CV Modal Top Bar */}
            <div className="p-3.5 sm:p-4 bg-[#0c1428] border-b border-slate-800 flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#ff6b00] px-2.5 py-0.5 rounded-full bg-[#ff6b00]/15 border border-[#ff6b00]/30 hidden xs:inline-block">
                  Curriculum Vitae
                </span>
                <h3 className="font-heading text-sm sm:text-base font-bold text-white truncate">
                  Kamran Ali — CV
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="/Kamran-Ali-CV.pdf"
                  download="Kamran-Ali-CV.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#ff6b00] hover:bg-[#e05e00] rounded-xl transition-colors cursor-pointer shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </a>
                <button
                  type="button"
                  onClick={() => setCvModalOpen(false)}
                  className="p-1.5 sm:p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
                  aria-label="Close CV modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Mobile Prominent Download Notice */}
            <div className="sm:hidden px-3.5 py-2.5 bg-[#0e172e] border-b border-slate-800 flex items-center justify-between gap-2 shrink-0">
              <span className="text-[11px] text-slate-300">Tap below to download or view file:</span>
              <a
                href="/Kamran-Ali-CV.pdf"
                download="Kamran-Ali-CV.pdf"
                className="px-2.5 py-1 rounded-lg bg-[#ff6b00] text-white text-[11px] font-semibold flex items-center gap-1 shrink-0"
              >
                <Download className="w-3 h-3" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Embedded PDF Viewer */}
            <div className="flex-1 w-full h-full relative bg-[#070c18] overflow-hidden">
              <object
                data="/Kamran-Ali-CV.pdf#toolbar=1&navpanes=0"
                type="application/pdf"
                className="w-full h-full"
              >
                <iframe
                  src="/Kamran-Ali-CV.pdf"
                  title="Kamran Ali CV"
                  className="w-full h-full border-0"
                >
                  {/* Fallback if PDF fails to load */}
                  <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4">
                    <p className="text-slate-300 text-sm font-medium">
                      CV is not available right now, please contact me on WhatsApp.
                    </p>
                    <div className="flex flex-wrap gap-3 justify-center">
                      <a
                        href={CONTACT_CONFIG.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-[#ff6b00] hover:bg-[#e05e00] text-white rounded-xl text-xs font-semibold flex items-center gap-2"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>WhatsApp Me</span>
                      </a>
                      <a
                        href="/Kamran-Ali-CV.pdf"
                        download="Kamran-Ali-CV.pdf"
                        className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download CV</span>
                      </a>
                    </div>
                  </div>
                </iframe>
              </object>
            </div>

            {/* CV Modal Bottom Bar */}
            <div className="p-3 sm:p-4 bg-[#0c1428] border-t border-slate-800 flex items-center justify-between gap-3 shrink-0">
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">
                Kamran-Ali-CV.pdf · Original Document
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                <a
                  href="/Kamran-Ali-CV.pdf"
                  download="Kamran-Ali-CV.pdf"
                  className="px-4 py-2 rounded-xl bg-[#ff6b00] hover:bg-[#e05e00] text-white text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CV</span>
                </a>
                <button
                  type="button"
                  onClick={() => setCvModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
