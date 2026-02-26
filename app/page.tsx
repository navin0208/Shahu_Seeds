'use client'

import { useState } from 'react'
import Link from 'next/link'
import {  Leaf, TrendingUp, Users, Award, Zap,  CheckCircle, Star } from 'lucide-react'
import { Carousel } from '@/components/carousel'
import { Item } from '@radix-ui/react-accordion'
import { useMemo, } from "react";

import { ArrowRight,
  CheckCircle2,
  XCircle,
  Sparkles,
  ShieldCheck,
  Headphones,
  Sprout,
  BarChart3,
  FlaskConical,
  ChevronDown, } from "lucide-react";
import { useLanguage } from '@/context/language-context'


export default function Home() {
  const { lang } = useLanguage()
  const tr = (en: string, mr: string) => (lang === 'mr' ? mr : en)

  const reels = [
  {
    id: 1,
    title: tr("Onion Crop Walkthrough", "कांदा पिक फील्ड भेट"),
    caption: tr("Real field update: plant health, spacing, and expected yield.", "प्रत्यक्ष शेतातील अपडेट: पिकाची स्थिती, अंतर आणि अपेक्षित उत्पादन."),
    url: "https://www.instagram.com/reel/DU9yi5ciPwi/",
    embed: "https://www.instagram.com/reel/DU9yi5ciPwi/embed",
  },
  {
    id: 2,
    title: tr("Seed Selection Tips", "बियाणे निवडीच्या टिप्स"),
    caption: tr("How to pick the right batch for your soil and season.", "तुमच्या माती आणि हंगामासाठी योग्य बॅच कशी निवडावी."),
    url: "https://www.instagram.com/reel/DU2q793jJWy",
    embed: "https://www.instagram.com/reel/DU2q793jJWy/embed",
  },
  {
    id: 3,
    title: tr("Before vs After Yield", "पूर्वी विरुद्ध नंतरचे उत्पादन"),
    caption: tr("Side-by-side comparison from partner farms.", "भागीदार शेतांमधील तुलनात्मक निकाल."),
    url: "https://www.instagram.com/reel/DU7NITziH2t/",
    embed: "https://www.instagram.com/reel/DU7NITziH2t/embed",
  },
];

const [activeReel, setActiveReel] = useState(0);
const nextReel = () => setActiveReel((p) => (p + 1) % reels.length);
const prevReel = () => setActiveReel((p) => (p - 1 + reels.length) % reels.length);

  const products = [
  {
    variety: tr("Shahu Dark Red", "शाहू डार्क रेड"),
    code: "SDR-01",
    yield: tr("45-50 tons/ha", "45-50 टन/हे"),
    badge: tr("Popular", "लोकप्रिय"),
    image: "/product.png",
  },
  {
    variety: tr("Shahu Golden", "शाहू गोल्डन"),
    code: "SG-02",
    yield: tr("42-47 tons/ha", "42-47 टन/हे"),
    badge: tr("New", "नवीन"),
    image: "/product-2.png",
  },
];
 const whyItems = [
  {
    icon: TrendingUp,
    title: tr('Precision in Every Seed', 'प्रत्येक बियाण्यात अचूकता'),
    desc: tr('Advanced genetic selection and strict quality control ensure superior germination and dependable yields.', 'प्रगत आनुवंशिक निवड आणि कडक गुणवत्ता नियंत्रणामुळे उत्कृष्ट उगवण आणि विश्वासार्ह उत्पादन मिळते.'),
  },
  {
    icon: Users,
    title: tr('Trusted Nationwide', 'देशभरातील विश्वास'),
    desc: tr('50,000+ farmers across 100+ regions rely on Shahu Seeds for consistent, high-performance harvests.', '100+ भागांतील 50,000+ शेतकरी सातत्यपूर्ण आणि उच्च कामगिरीच्या उत्पादनासाठी Shahu Seeds वर विश्वास ठेवतात.'),
  },
  {
    icon: Leaf,
    title: tr('Sustainable Innovation', 'शाश्वत नवकल्पना'),
    desc: tr('Environmentally responsible seed development designed for long-term agricultural success.', 'दीर्घकालीन कृषी यशासाठी पर्यावरणपूरक बियाणे विकास.'),
  },
]

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen md:min-h-screen overflow-hidden pt-20 md:pt-16">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(seed.png)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 md:from-foreground/70 via-foreground/70 md:via-foreground/60 to-foreground/50 md:to-foreground/40"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-20 pb-16 md:pb-20 h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-h-96">
            {/* Left Content */}
            <div className="space-y-6 md:space-y-8 animate-slide-in-left">
              <div className="space-y-4 md:space-y-6">
                <div className="inline-block bg-secondary text-foreground px-4 md:px-6 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold animate-fade-in animation-delay-100 shadow-lg">
                  {tr('Next Generation Agriculture', 'नव्या पिढीची शेती')}
                </div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight text-balance animate-fade-in animation-delay-200 drop-shadow-lg">
                  {tr('Redefining Seed', 'बियाण्यांच्या कामगिरीची')}
                  <span className="block text-secondary">{tr('Performance', 'नवी व्याख्या')}</span>
                </h1>
                <p className="text-base md:text-lg lg:text-xl text-white/90 text-balance animate-fade-in animation-delay-300 leading-relaxed drop-shadow">
                  {tr(
                    'Research-driven innovation powering modern agriculture. Premium seeds crafted for farmers who demand excellence.',
                    'संशोधनाधारित नवकल्पना आधुनिक शेतीला नवी ताकद देत आहे. उत्कृष्टतेची अपेक्षा असलेल्या शेतकऱ्यांसाठी प्रीमियम बियाणे.',
                  )}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in animation-delay-400">
                <Link
                  href="/contact"
                  className="bg-secondary hover:bg-secondary/90 text-foreground px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg shadow-lg hover:shadow-2xl hover:shadow-secondary/50 transition-all duration-300 inline-flex items-center justify-center gap-2 group"
                >
                  {tr('Get Started', 'सुरुवात करा')}
                  <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/about"
                  className="border-2 md:border-3 border-white text-white hover:bg-white hover:text-foreground px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-sm md:text-lg transition-all duration-300 backdrop-blur-sm text-center"
                >
                  {tr('Learn More', 'अधिक जाणून घ्या')}
                </Link>
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-3 gap-3 md:gap-6 pt-6 md:pt-8 animate-fade-in animation-delay-500">
                {[
                  { value: '95%', label: tr('Germination', 'उगवण') },
                  { value: '10K+', label: tr('Farmers', 'शेतकरी') },
                  { value: '2+', label: tr('Years', 'वर्षे') },
                ].map((stat, i) => (
                  <div key={i} className="text-center bg-white/10 backdrop-blur-sm p-3 md:p-4 rounded-lg border border-white/20">
                    <div className="text-2xl md:text-3xl font-black text-secondary">{stat.value}</div>
                    <p className="text-xs md:text-sm text-white/80 font-semibold">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual - Image Showcase - Hidden on Mobile, Visible on MD+ */}
            <div className="hidden md:flex relative h-96 items-center justify-center animate-slide-in-right animation-delay-200">
              <div className="relative w-full h-full max-w-md">
                {/* Main Image Card */}
                <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm animate-float">
                  <img 
                    src="/onion.png" 
                    alt="Premium onion seeds"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent"></div>
                </div>

                {/* Floating Info Cards */}
                <div className="absolute -bottom-8 -left-8 w-56 bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-start gap-3 animate-float-delayed border-4 border-secondary">
                  <div className="flex items-center gap-2">
                    <Sprout className="w-6 h-6 text-primary" />
                    <span className="font-bold text-foreground">{tr('Premium Quality', 'प्रीमियम गुणवत्ता')}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{tr('Certified seeds with highest germination rates', 'सर्वोच्च उगवण दर असलेली प्रमाणित बियाणे')}</p>
                </div>

                <div className="absolute -top-4 -right-8 w-56 bg-white rounded-2xl shadow-2xl p-6 flex flex-col items-start gap-3 animate-float border-4 border-secondary">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-6 h-6 text-primary" />
                    <span className="font-bold text-foreground">{tr('Higher Yields', 'जास्त उत्पादन')}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{tr('Proven results with 45-52 tons/hectare output', '45-52 टन/हेक्टरी सिद्ध झालेले परिणाम')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center gap-2">
            <p className="text-xs md:text-sm text-white font-semibold drop-shadow">{tr('Explore More', 'अजून पाहा')}</p>
            <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why SHAHU SEEDS Section */}
      {/* Why SHAHU SEEDS */}
<section className="relative py-36 bg-[#f6f5f2] overflow-hidden">

  {/* Soft Background Accent */}
  <div className="absolute bottom-0 right-0 pointer-events-none">

  <img
    src="/oni.png"
    alt="Decorative onion"
    className="
      w-[260px] md:w-[420px]
    md:opacity-65
      translate-x-10 md:translate-x-16
      translate-y-6 md:translate-y-10
      select-none
    "
  />

  {/* Soft Fade Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#f6f5f2] via-transparent to-transparent"></div>

</div>
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl"></div>
  </div>

  <div className="relative max-w-6xl mx-auto px-6">

    {/* Heading */}
    <div className="text-center max-w-3xl mx-auto animate-fade-in">
      <h2 className="text-6xl font-semibold tracking-tight text-foreground relative inline-block">
        {tr('The Shahu Seeds Advantage', 'Shahu Seeds चे फायदे')}
        
        {/* Animated Underline */}
        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-primary/60 animate-expand"></span>
      </h2>

      <p className="mt-8 text-lg text-muted-foreground leading-relaxed animate-fade-in animation-delay-200">
        {tr(
          'Science-driven seed innovation engineered to deliver consistency, resilience, and measurable performance.',
          'सातत्य, टिकाव आणि मोजता येणारी कामगिरी देण्यासाठी विकसित केलेली विज्ञानाधारित बियाणे नवकल्पना.',
        )}
      </p>
    </div>

    {/* Features */}
    <div className="grid md:grid-cols-3 gap-20 mt-28">
      {whyItems.map((item, i) => (
        <div
          key={i}
          className="group space-y-6 transition-all duration-500 hover:-translate-y-2 p-6 animate-fade-up"
          style={{ animationDelay: `${i * 200}ms`,border:"solid black 1px",borderRadius:"40px"}}
          
        >
          {/* Icon */}
          <div className="relative w-12 h-12">
            <item.icon className="w-10 h-10 text-primary/70 transition-all duration-500 group-hover:text-primary group-hover:scale-110" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-medium tracking-tight text-foreground">
            {item.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed">
            {item.desc}
          </p>

          {/* Minimal Divider Line */}
          <div className="w-12 h-[1px] bg-primary/30 transition-all duration-500 group-hover:w-20"></div>
        </div>
      ))}
    </div>

  </div>
</section>
<section className="bg-background py-16">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mb-8">
      <h2 className="text-3xl font-black text-foreground sm:text-4xl">{tr('From Instagram Reels', 'Instagram Reels मधून')}</h2>
      <p className="mt-2 text-muted-foreground">{tr('Real farm content, directly from our Instagram.', 'प्रत्यक्ष शेतातील सामग्री, थेट आमच्या Instagram वरून.')}</p>
    </div>

    {/* Desktop grid */}
    <div className="hidden gap-6 md:grid md:grid-cols-2 lg:grid-cols-3">
      {reels.map((reel) => (
        <div key={reel.id} className="overflow-hidden rounded-2xl border border-border bg-card">
          <div className="aspect-[9/16] w-full">
            <iframe
              src={reel.embed}
              className="h-full w-full"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold text-foreground">{reel.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{reel.caption}</p>
            <a href={reel.url} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm font-semibold text-primary">
              {tr('Open on Instagram', 'Instagram वर उघडा')}
            </a>
          </div>
        </div>
      ))}
    </div>

    {/* Mobile carousel */}
    <div className="md:hidden">
      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${activeReel * 100}%)` }}
        >
          {reels.map((reel) => (
            <div key={reel.id} className="min-w-full">
              <div className="aspect-[9/16] w-full">
                <iframe
                  src={reel.embed}
                  className="h-full w-full"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-foreground">{reel.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{reel.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <button onClick={prevReel} className="rounded-lg border border-border px-4 py-2 text-sm font-semibold">
          {tr('Prev', 'मागील')}
        </button>
        <div className="flex gap-2">
          {reels.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveReel(i)}
              className={`h-2.5 rounded-full ${i === activeReel ? "w-6 bg-primary" : "w-2.5 bg-border"}`}
            />
          ))}
        </div>
        <button onClick={nextReel} className="rounded-lg border border-border px-4 py-2 text-sm font-semibold">
          {tr('Next', 'पुढील')}
        </button>
      </div>
    </div>
  </div>
</section>



      {/* Infrastructure Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">{tr('Our Infrastructure', 'आमची पायाभूत सुविधा')}</h2>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto animate-fade-in animation-delay-100">
              {tr('A decade of excellence backing every seed we produce', 'आम्ही तयार करत असलेल्या प्रत्येक बियाण्यामागे दशकभराची उत्कृष्टता')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                value: '2+',
                label: tr('Years of Excellence', 'उत्कृष्टतेची वर्षे'),
                desc: tr('Continuous innovation in seed technology', 'बियाणे तंत्रज्ञानात सातत्यपूर्ण नवकल्पना'),
              },
              {
                value: '10K+',
                label: tr('Farmers Served', 'सेवा घेतलेले शेतकरी'),
                desc: tr('Growing network of trusted partners', 'विश्वासू भागीदारांचे वाढते जाळे'),
              },
              {
                value: '20+',
                label: tr('Distribution Areas', 'वितरण क्षेत्रे'),
                desc: tr('Nationwide reach and support', 'देशव्यापी पोहोच आणि सहाय्य'),
              },
            ].map((stat, i) => (
              <div key={i} className="text-center group animate-fade-in" style={{ animationDelay: `${(i + 1) * 200}ms` }}>
                <div className="inline-block relative">
                  <div className="absolute inset-0 bg-white/10 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <div className="relative text-6xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                </div>
                <p className="text-xl opacity-95 font-semibold">{stat.label}</p>
                <p className="text-sm opacity-75 mt-2">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-b from-white via-emerald-50/30 to-white relative overflow-hidden">
  {/* Ambient background */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-float" />
    <div className="absolute -bottom-28 -right-24 w-[28rem] h-[28rem] bg-secondary/15 rounded-full blur-3xl animate-float-delayed" />
    <div className="absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,hsl(var(--foreground))_1px,transparent_0)] [background-size:24px_24px]" />
  </div>

  {(() => {
    const processSteps = [
      {
        step: "01",
        title: tr("Genetic Selection", "आनुवंशिक निवड"),
        desc: tr("Elite parent-line screening for vigor, stability, and disease resistance.", "जोम, स्थिरता आणि रोगप्रतिकारासाठी उच्च दर्जाच्या लाईनची तपासणी."),
        icon: Leaf,
        details: [
          tr("Trait mapping for uniform growth", "एकसमान वाढीसाठी गुणधर्म नकाशांकन"),
          tr("Pathogen tolerance profiling", "रोगकारक सहनशक्ती प्रोफाइलिंग"),
          tr("Hybrid performance benchmarking", "हायब्रिड कामगिरीचे मानांकन"),
        ],
        stat: tr("300+ lines screened", "300+ लाईन्स तपासल्या"),
      },
      {
        step: "02",
        title: tr("Lab Testing", "प्रयोगशाळा चाचणी"),
        desc: tr("Multi-stage seed analytics for purity, viability, and physiological health.", "शुद्धता, सक्षमता आणि जैविक स्वास्थ्यासाठी बहु-स्तरीय बियाणे विश्लेषण."),
        icon: CheckCircle,
        details: [
          tr("Purity & moisture analysis", "शुद्धता आणि आर्द्रता विश्लेषण"),
          tr("Germination and vigor indexing", "उगवण आणि जोम निर्देशांक"),
          tr("Batch-level health certification", "बॅच पातळीवरील स्वास्थ्य प्रमाणन"),
        ],
        stat: tr("ISO-aligned protocols", "ISO-सुसंगत प्रोटोकॉल"),
      },
      {
        step: "03",
        title: tr("Field Trials", "शेत चाचण्या"),
        desc: tr("Region-specific validation across weather patterns and soil conditions.", "वेगवेगळ्या हवामान आणि माती स्थितींमध्ये प्रदेशनिहाय पडताळणी."),
        icon: TrendingUp,
        details: [
          tr("Multi-climate test plots", "बहु-हवामान चाचणी प्लॉट्स"),
          tr("Yield consistency validation", "उत्पादन सातत्य पडताळणी"),
          tr("Stress adaptability evaluation", "तणाव अनुकूलता मूल्यांकन"),
        ],
        stat: tr("12 agro-climatic zones", "12 कृषी-हवामान पट्टे"),
      },
      {
        step: "04",
        title: tr("Distribution", "वितरण"),
        desc: tr("Temperature-aware storage and traceable fulfillment for seed integrity.", "बियाण्यांची गुणवत्ता टिकवण्यासाठी नियंत्रित तापमान साठवण आणि मागोवा घेता येणारे वितरण."),
        icon: Award,
        details: [
          tr("Controlled environment warehousing", "नियंत्रित वातावरणातील साठवण"),
          tr("Tamper-safe protective packing", "छेडछाड-प्रतिरोधक सुरक्षित पॅकिंग"),
          tr("Time-bound dispatch monitoring", "वेळबद्ध डिस्पॅच निरीक्षण"),
        ],
        stat: tr("100% batch traceability", "100% बॅच ट्रेसिबिलिटी"),
      },
    ];

    return (
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 animate-fade-in">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold tracking-[0.12em] uppercase text-primary">
            {tr('Quality Framework', 'गुणवत्ता चौकट')}
          </span>
          <h2 className="mt-5 text-4xl md:text-5xl font-extrabold text-foreground leading-tight">
            {tr('Our Quality Assurance Journey', 'आमचा गुणवत्ता आश्वासन प्रवास')}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            {tr(
              'From genetic design to last-mile delivery, every batch passes a transparent, science-led quality pipeline built for high germination, stable yield, and farmer confidence.',
              'आनुवंशिक डिझाइनपासून शेवटच्या टप्प्याच्या वितरणापर्यंत, प्रत्येक बॅच पारदर्शक आणि विज्ञानाधारित गुणवत्ता प्रक्रियेतून जाते, जी उच्च उगवण, स्थिर उत्पादन आणि शेतकऱ्यांचा विश्वास सुनिश्चित करते.',
            )}
          </p>

          {/* Trust stats */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            {[
              ["95%", tr("Avg. Germination", "सरासरी उगवण")],
              ["12", tr("Tested Zones", "चाचणी पट्टे")],
              ["100%", tr("Traceable Batches", "मागोवा घेता येणाऱ्या बॅच")],
              ["24/7", tr("Storage Monitoring", "साठवण निरीक्षण")],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-xl border border-border/40 bg-white/80 backdrop-blur-sm px-4 py-3 shadow-sm"
              >
                <p className="text-xl md:text-2xl font-bold text-foreground">{value}</p>
                <p className="text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Desktop connector line */}
          <div className="hidden md:block absolute top-28 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

          {/* Mobile Carousel */}
          <div className="md:hidden mb-10">
            <Carousel autoPlay autoPlayInterval={5000}>
              {processSteps.map((item, index) => (
                <div key={index} className="p-2">
                  <div className="rounded-2xl border border-primary/20 bg-white/90 backdrop-blur-sm p-7 text-center shadow-lg">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-bold mx-auto mb-4 text-xl shadow-lg">
                      {item.step}
                    </div>
                    <item.icon className="w-11 h-11 text-primary mx-auto mb-3" />
                    <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{item.desc}</p>
                    <span className="inline-flex rounded-full bg-secondary/10 text-secondary text-xs font-semibold px-3 py-1 mb-4">
                      {item.stat}
                    </span>
                    <div className="space-y-2 border-t border-border/30 pt-4 text-left">
                      {item.details.map((detail, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-4 gap-6 lg:gap-8">
            {processSteps.map((item, index) => (
              <div key={index} className="relative animate-fade-in" style={{ animationDelay: `${(index + 1) * 120}ms` }}>
                <div className="group rounded-2xl border-2 border-primary/15 bg-white p-7 text-center shadow-sm hover:shadow-2xl hover:-translate-y-2 hover:border-primary/40 transition-all duration-300">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center font-bold mx-auto mb-4 text-xl shadow-lg group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>

                  <item.icon className="w-11 h-11 text-primary mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 min-h-[60px]">{item.desc}</p>

                  <span className="inline-flex rounded-full bg-secondary/10 text-secondary text-xs font-semibold px-3 py-1 mb-4">
                    {item.stat}
                  </span>

                  <div className="space-y-2 border-t border-border/30 pt-4 text-left">
                    {item.details.map((detail, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {index < processSteps.length - 1 && (
                  <div className="absolute top-1/2 -right-4 lg:-right-5 -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-primary/70 animate-pulse" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer panel */}
        <div className="mt-14 md:mt-16 rounded-2xl border border-primary/15 bg-gradient-to-r from-primary/10 via-white to-secondary/10 p-8 text-center shadow-sm animate-fade-in" style={{ animationDelay: "500ms" }}>
          <p className="text-foreground font-bold text-xl mb-2">{tr('Outcome: Consistent, Certified, High-Performance Seeds', 'परिणाम: सातत्यपूर्ण, प्रमाणित, उच्च-कार्यक्षम बियाणे')}</p>
          <p className="text-muted-foreground max-w-3xl mx-auto mb-5">
            {tr(
              'Our layered QA process delivers reliable field performance with documented consistency, international compliance checks, and repeatable farmer success.',
              'आमची बहु-स्तरीय QA प्रक्रिया दस्तऐवजीत सातत्य, आंतरराष्ट्रीय अनुरूपता तपासणी आणि पुनरावृत्ती होणारे शेतकरी यश यांसह विश्वासार्ह शेतकामगिरी देते.',
            )}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[tr("International Certifications", "आंतरराष्ट्रीय प्रमाणपत्रे"), tr("Batch Traceability", "बॅच ट्रेसिबिलिटी"), tr("Farm-Tested Reliability", "शेत-परीक्षित विश्वासार्हता")].map((tag) => (
              <span key={tag} className="rounded-full border border-primary/20 bg-white px-3 py-1.5 text-xs font-medium text-foreground">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  })()}
</section>


      {/* Seed Varieties Section */}



<section className="py-20 bg-white relative overflow-hidden">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-24 -right-24 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
  </div>

  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
        {tr('Premium Seed Varieties', 'प्रीमियम बियाणे प्रकार')}
      </h2>
      <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
        {tr('Two trusted selections, curated for consistent performance across climates.', 'वेगवेगळ्या हवामानात सातत्यपूर्ण कामगिरीसाठी निवडलेले दोन विश्वासार्ह पर्याय.')}
      </p>
      <div className="w-14 h-1 bg-secondary/70 rounded-full mx-auto mt-5" />
    </div>

    {/* One layout for all sizes; scales cleanly as products grow */}
    <div
      className={`grid gap-6 ${
        products.length === 1
          ? "grid-cols-1 max-w-sm mx-auto"
          : "grid-cols-1 sm:grid-cols-2"
      }`}
    >
      {products.map((item) => (
        <article
          key={item.code}
          className="group bg-white border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
        >
          <div className="relative h-52 bg-muted">
            <img
              src={item.image}
              alt={item.variety}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
            />
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center rounded-full bg-white/90 text-foreground text-xs font-semibold px-3 py-1 border border-border">
                {item.badge}
              </span>
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-foreground leading-tight">
                {item.variety}
              </h3>
              <span className="text-xs text-muted-foreground font-medium">
                {item.code}
              </span>
            </div>

            <div className="mt-4 flex items-center gap-2 text-primary font-semibold">
              <BarChart3 className="w-4 h-4" />
              <span>{item.yield}</span>
            </div>
          </div>
        </article>
      ))}
    </div>
  </div>
</section>


      {/* Key Features Section */}
   <section className="py-24 bg-[#f7f6f2]">
  {(() => {
    const features = [
      {
        icon: Award,
        title: tr('Award-Winning Quality', 'पुरस्कारप्राप्त गुणवत्ता'),
        desc: tr('Certified quality systems with strict lot-level checks.', 'कडक लॉट-स्तरीय तपासणीसह प्रमाणित गुणवत्ता प्रणाली.'),
      },
      {
        icon: Zap,
        title: tr('Fast Germination', 'जलद उगवण'),
        desc: tr('Seed prep methods tuned for quicker, more uniform emergence.', 'जलद आणि अधिक एकसमान उगवणीसाठी सुधारित बियाणे तयारी पद्धती.'),
      },
      {
        icon: TrendingUp,
        title: tr('Consistent Yields', 'सातत्यपूर्ण उत्पादन'),
        desc: tr('Stable field performance across seasons and regions.', 'हंगाम आणि प्रदेशानुसार स्थिर शेतकामगिरी.'),
      },
      {
        icon: Leaf,
        title: tr('Disease Resistant', 'रोगप्रतिरोधक'),
        desc: tr('Stronger tolerance to common onion disease pressure.', 'सामान्य कांदा रोगांच्या ताणाला अधिक सहनशक्ती.'),
      },
      {
        icon: Users,
        title: tr('Farmer Support', 'शेतकरी सहाय्य'),
        desc: tr('Direct expert support for planning, sowing, and recovery.', 'नियोजन, पेरणी आणि समस्या निराकरणासाठी तज्ञांचे थेट मार्गदर्शन.'),
      },
      {
        icon: CheckCircle,
        title: tr('Complete Traceability', 'पूर्ण ट्रेसिबिलिटी'),
        desc: tr('Clear source-to-field trace records for each batch.', 'प्रत्येक बॅचसाठी स्रोत ते शेत असा स्पष्ट मागोवा.'),
      },
    ]

    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left: editorial intro */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <p className="text-xs tracking-[0.2em] uppercase text-primary font-semibold mb-4">
              {tr('Why Shahu', 'का Shahu')}
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-5">
              {tr('What Makes Us Different', 'आम्हाला वेगळे काय बनवते')}
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              {tr(
                'Not flashy claims. Just a tighter process, cleaner seed lots, and measurable outcomes farmers can trust.',
                'चमकदार दावे नाहीत. अधिक काटेकोर प्रक्रिया, स्वच्छ बियाणे लॉट्स आणि शेतकऱ्यांना विश्वास ठेवता येणारे मोजमापयोग्य परिणाम.',
              )}
            </p>
            <div className="h-px w-24 bg-foreground/20" />
          </div>

          {/* Right: staggered list cards */}
          <div className="lg:col-span-8 space-y-4">
            {features.map((feature, i) => (
              <article
                key={feature.title}
                className={`group bg-white border border-black/10 rounded-2xl p-6 md:p-7 transition-all duration-300 hover:border-black/30 hover:shadow-[0_10px_30px_-18px_rgba(0,0,0,0.45)] ${
                  i % 2 === 1 ? 'lg:ml-10' : ''
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-12 h-12 rounded-xl border border-black/15 flex items-center justify-center bg-[#fafafa] group-hover:bg-primary/5 group-hover:border-primary/30 transition-colors">
                    <feature.icon className="w-5 h-5 text-foreground" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[11px] tracking-[0.18em] uppercase text-muted-foreground">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="h-px w-8 bg-black/15" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    )
  })()}
</section>



      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-primary to-accent text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-white rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">{tr('Trusted by Thousands', 'हजारोंचा विश्वास')}</h2>
            <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto animate-fade-in animation-delay-100">
              {tr('Real farmers, real results. Hear directly from our farming partners.', 'खरे शेतकरी, खरे परिणाम. आमच्या भागीदार शेतकऱ्यांचे थेट अनुभव ऐका.')}
            </p>
          </div>

          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Carousel autoPlay={true} autoPlayInterval={6000}>
              {[
                {
                  name: 'Rajesh Kumar',
                  region: tr('Maharashtra', 'महाराष्ट्र'),
                  content: tr('SHAHU SEEDS transformed my yield by 30%. The quality is consistent, and their support team is always there when I need them.', 'SHAHU SEEDS मुळे माझ्या उत्पादनात 30% वाढ झाली. गुणवत्ता सातत्यपूर्ण आहे आणि गरज पडली की त्यांची सपोर्ट टीम तत्पर असते.'),
                  rating: 5,
                },
                {
                  name: 'Priya Sharma',
                  region: tr('Karnataka', 'कर्नाटक'),
                  content: tr("Best seeds I've used in 15 years of farming. The germination rate is outstanding and my crop quality improved significantly.", '15 वर्षांच्या शेतीत मी वापरलेली ही सर्वोत्तम बियाणे आहेत. उगवण दर उत्कृष्ट असून पिकाची गुणवत्ता लक्षणीयरीत्या सुधारली.'),
                  rating: 5,
                },
                {
                  name: 'Vikram Singh',
                  region: tr('Gujarat', 'गुजरात'),
                  content: tr('Professional service, quality seeds, and exceptional customer support. Highly recommended for any serious farmer.', 'व्यावसायिक सेवा, दर्जेदार बियाणे आणि उत्कृष्ट ग्राहक सहाय्य. गंभीरतेने शेती करणाऱ्या प्रत्येक शेतकऱ्यासाठी शिफारस करतो.'),
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 rounded-2xl p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-lg text-primary mb-6 leading-relaxed opacity-90">{testimonial.content}</p>
                  <div className="border-t border-primary-foreground/20 pt-4">
                    <p className="font-bold text-primary text-lg">{testimonial.name}</p>
                    <p className="text-sm text-primary opacity-75">{testimonial.region}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Rajesh Kumar',
                region: tr('Maharashtra', 'महाराष्ट्र'),
                content: tr('SHAHU SEEDS transformed my yield by 30%. The quality is consistent, and their support team is always there when I need them.', 'SHAHU SEEDS मुळे माझ्या उत्पादनात 30% वाढ झाली. गुणवत्ता सातत्यपूर्ण आहे आणि गरज पडली की त्यांची सपोर्ट टीम तत्पर असते.'),
                rating: 5,
              },
              {
                name: 'Priya Sharma',
                region: tr('Karnataka', 'कर्नाटक'),
                content: tr("Best seeds I've used in 15 years of farming. The germination rate is outstanding and my crop quality improved significantly.", '15 वर्षांच्या शेतीत मी वापरलेली ही सर्वोत्तम बियाणे आहेत. उगवण दर उत्कृष्ट असून पिकाची गुणवत्ता लक्षणीयरीत्या सुधारली.'),
                rating: 5,
              },
              {
                name: 'Vikram Singh',
                region: tr('Gujarat', 'गुजरात'),
                content: tr('Professional service, quality seeds, and exceptional customer support. Highly recommended for any serious farmer.', 'व्यावसायिक सेवा, दर्जेदार बियाणे आणि उत्कृष्ट ग्राहक सहाय्य. गंभीरतेने शेती करणाऱ्या प्रत्येक शेतकऱ्यासाठी शिफारस करतो.'),
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/30 rounded-2xl p-8 hover:bg-primary-foreground/20 hover:shadow-2xl hover:border-primary-foreground/50 transition-all duration-500 group animate-fade-in" style={{ animationDelay: `${(index + 2) * 150}ms` }}>
                <div className="flex gap-1 mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-lg mb-6 leading-relaxed opacity-90 group-hover:opacity-100 transition-opacity">{testimonial.content}</p>
                <div className="border-t border-primary-foreground/20 pt-4">
                  <p className="font-bold text-lg group-hover:text-secondary transition-colors">{testimonial.name}</p>
                  <p className="text-sm opacity-75">{testimonial.region}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    {/* // add/update imports
import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  XCircle,
  Sparkles,
  ShieldCheck,
  Headphones,
  Sprout,
  BarChart3,
  FlaskConical,
  ChevronDown,
} from "lucide-react"; */}

<section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-24">
  {/* subtle texture, no full-section gradient */}
  <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle_at_1px_1px,currentColor_1px,transparent_1px)] [background-size:18px_18px]" />
  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-border" />
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-border" />

  <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
      <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
        <Sparkles className="h-3.5 w-3.5" />
        {tr('Field-Backed Comparison', 'शेत-आधारित तुलना')}
      </p>
      <h2 className="text-balance text-3xl font-black tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {tr('Why SHAHU SEEDS Performs Better', 'SHAHU SEEDS अधिक चांगली कामगिरी का करते')}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        {tr(
          'Explore results through performance, resilience, and support quality. Switch views to see how each category changes the score.',
          'कामगिरी, टिकाव आणि सहाय्य गुणवत्तेनुसार निकाल पहा. प्रत्येक श्रेणीने स्कोअर कसा बदलतो ते पाहण्यासाठी दृश्य बदला.',
        )}
      </p>
    </div>

    {(() => {
      const lenses = [
        { id: "performance", label: tr("Performance", "कामगिरी"), icon: BarChart3, weights: { shahu: 98, standard: 83, economy: 64 } },
        { id: "risk", label: tr("Risk Control", "जोखीम नियंत्रण"), icon: ShieldCheck, weights: { shahu: 96, standard: 72, economy: 46 } },
        { id: "support", label: tr("Support", "सहाय्य"), icon: Headphones, weights: { shahu: 99, standard: 69, economy: 38 } },
        { id: "innovation", label: tr("Innovation", "नवकल्पना"), icon: FlaskConical, weights: { shahu: 95, standard: 68, economy: 30 } },
      ] as const;

      const rows = [
        {
          feature: tr("Germination Rate", "उगवण दर"),
          icon: Sprout,
          shahu: "98%",
          standard: "85%",
          economy: "70%",
          detail: tr("Better stand establishment under variable soil moisture.", "मातीतील बदलत्या आर्द्रतेत चांगली उभारणी."),
        },
        {
          feature: tr("Yield Guarantee", "उत्पादन हमी"),
          icon: ShieldCheck,
          shahu: tr("Full Coverage", "पूर्ण संरक्षण"),
          standard: tr("Partial", "आंशिक"),
          economy: tr("None", "नाही"),
          detail: tr("Lower downside risk during stress seasons.", "तणावपूर्ण हंगामात कमी जोखीम."),
        },
        {
          feature: tr("Disease Resistance", "रोग प्रतिकार"),
          icon: ShieldCheck,
          shahu: tr("Advanced Stack", "प्रगत संरक्षण"),
          standard: tr("Standard", "सामान्य"),
          economy: tr("Basic", "मूलभूत"),
          detail: tr("Reduces pressure and improves crop stability.", "रोगदाब कमी करून पिक स्थिरता वाढवते."),
        },
        {
          feature: tr("Agronomy Support", "कृषी तांत्रिक सहाय्य"),
          icon: Headphones,
          shahu: tr("24/7 Field Team", "24/7 फील्ड टीम"),
          standard: tr("Business Hours", "कार्यालयीन वेळ"),
          economy: tr("Email Only", "फक्त ईमेल"),
          detail: tr("Faster corrective actions in critical windows.", "महत्त्वाच्या टप्प्यांवर जलद सुधारात्मक कृती."),
        },
        {
          feature: tr("Quality Certification", "गुणवत्ता प्रमाणन"),
          icon: CheckCircle2,
          shahu: tr("International", "आंतरराष्ट्रीय"),
          standard: tr("National", "राष्ट्रीय"),
          economy: tr("None", "नाही"),
          detail: tr("Stricter lot checks and better consistency.", "कडक लॉट तपासणी आणि अधिक सातत्य."),
        },
        {
          feature: tr("R&D Pipeline", "R&D पाइपलाइन"),
          icon: FlaskConical,
          shahu: tr("Continuous", "सातत्यपूर्ण"),
          standard: tr("Limited", "मर्यादित"),
          economy: tr("None", "नाही"),
          detail: tr("Faster release of region-suited hybrids.", "प्रदेशानुसार योग्य हायब्रिड्सचे जलद सादरीकरण."),
        },
      ];

      const [activeLens, setActiveLens] = useState<(typeof lenses)[number]["id"]>("performance");
      const [openRow, setOpenRow] = useState<number | null>(0);
      const active = useMemo(() => lenses.find((l) => l.id === activeLens)!, [activeLens]);

      const scoreCards = [
        { name: "SHAHU SEEDS", score: active.weights.shahu, strong: true },
        { name: tr("Standard Seeds", "स्टॅंडर्ड बियाणे"), score: active.weights.standard, strong: false },
        { name: tr("Economy Seeds", "इकॉनॉमी बियाणे"), score: active.weights.economy, strong: false },
      ];

      return (
        <>
          {/* Lens switcher */}
          <div className="mb-6 grid grid-cols-2 gap-2 rounded-2xl border border-border bg-card p-2 sm:mb-8 sm:grid-cols-4">
            {lenses.map((lens) => {
              const Icon = lens.icon;
              const isActive = activeLens === lens.id;
              return (
                <button
                  key={lens.id}
                  onClick={() => setActiveLens(lens.id)}
                  className={`inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-background text-foreground hover:bg-muted"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="truncate">{lens.label}</span>
                </button>
              );
            })}
          </div>

          {/* responsive score cards */}
          <div className="mb-8 grid gap-3 sm:grid-cols-3">
            {scoreCards.map((card) => (
              <article
                key={card.name}
                className={`rounded-2xl border p-4 transition hover:-translate-y-0.5 ${
                  card.strong
                    ? "border-primary/40 bg-primary/5"
                    : "border-border bg-card"
                }`}
              >
                <div className="mb-2 flex items-center justify-between gap-2">
                  <h3 className={`text-sm font-bold ${card.strong ? "text-primary" : "text-foreground"}`}>{card.name}</h3>
                  <span className={`text-lg font-black ${card.strong ? "text-primary" : "text-foreground"}`}>{card.score}/100</span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${card.strong ? "bg-primary" : "bg-muted-foreground/60"}`}
                    style={{ width: `${card.score}%` }}
                  />
                </div>
              </article>
            ))}
          </div>

          {/* desktop table */}
          <div className="hidden overflow-hidden rounded-3xl border border-border bg-card md:block">
            <div className="grid grid-cols-4 border-b border-border bg-muted/50 px-6 py-4 text-sm font-bold text-foreground">
              <div>{tr('Factor', 'घटक')}</div>
              <div className="text-center text-primary">SHAHU</div>
              <div className="text-center">{tr('Standard', 'स्टॅंडर्ड')}</div>
              <div className="text-center">{tr('Economy', 'इकॉनॉमी')}</div>
            </div>

            {rows.map((row, idx) => {
              const Icon = row.icon;
              return (
                <div key={row.feature} className={`grid grid-cols-4 gap-2 px-6 py-4 ${idx % 2 ? "bg-background" : "bg-muted/20"}`}>
                  <div>
                    <p className="flex items-center gap-2 font-semibold text-foreground">
                      <Icon className="h-4 w-4 text-primary" />
                      {row.feature}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">{row.detail}</p>
                  </div>
                  <div className="text-center">
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-sm font-bold text-primary">
                      <CheckCircle2 className="h-4 w-4" />
                      {row.shahu}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="inline-flex rounded-full bg-muted px-2.5 py-1 text-sm font-semibold text-muted-foreground">{row.standard}</span>
                  </div>
                  <div className="text-center">
                    <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-1 text-sm font-semibold text-muted-foreground">
                      <XCircle className="h-4 w-4" />
                      {row.economy}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* mobile interactive accordion */}
          <div className="space-y-3 md:hidden">
            {rows.map((row, idx) => {
              const Icon = row.icon;
              const isOpen = openRow === idx;
              return (
                <article key={row.feature} className="overflow-hidden rounded-2xl border border-border bg-card">
                  <button
                    onClick={() => setOpenRow(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left"
                  >
                    <span className="flex items-center gap-2 font-semibold text-foreground">
                      <Icon className="h-4 w-4 text-primary" />
                      {row.feature}
                    </span>
                    <ChevronDown className={`h-4 w-4 text-muted-foreground transition ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="border-t border-border px-4 py-3">
                      <p className="mb-3 text-xs text-muted-foreground">{row.detail}</p>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center justify-between rounded-lg bg-primary/10 px-3 py-2">
                          <span className="font-semibold text-primary">SHAHU</span>
                          <span className="font-bold text-primary">{row.shahu}</span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-muted px-3 py-2">
                          <span className="font-semibold text-muted-foreground">{tr('Standard', 'स्टॅंडर्ड')}</span>
                          <span className="text-muted-foreground">{row.standard}</span>
                        </div>
                        <div className="flex items-center justify-between rounded-lg bg-muted px-3 py-2">
                          <span className="font-semibold text-muted-foreground">{tr('Economy', 'इकॉनॉमी')}</span>
                          <span className="text-muted-foreground">{row.economy}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-card p-6 text-center sm:mt-10 sm:p-8">
            <h3 className="text-xl font-black text-foreground sm:text-2xl">{tr('See What Fits Your Farm Conditions', 'तुमच्या शेताला योग्य काय ते जाणून घ्या')}</h3>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
              {tr('Get a recommendation based on region, soil profile, irrigation model, and target yield.', 'प्रदेश, मातीची रचना, सिंचन पद्धत आणि लक्ष्यित उत्पादन यावर आधारित शिफारस मिळवा.')}
            </p>
            <Link
              href="/contact"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-95"
            >
              {tr('Book Field Consultation', 'फील्ड कन्सल्टेशन बुक करा')}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </>
      );
    })()}
  </div>
</section>


      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: tr('Success Rate', 'यश दर'), value: '98%', icon: CheckCircle },
              { label: tr('Farmers Satisfied', 'समाधानी शेतकरी'), value: '10K+', icon: Users },
              { label: tr('Regions Covered', 'समाविष्ट प्रदेश'), value: '20+', icon: Leaf },
              { label: tr('Years Active', 'कार्यरत वर्षे'), value: '2+', icon: Award },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-block mb-4 p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all">
                  <stat.icon className="w-8 h-8 text-primary group-hover:scale-125 transition-transform" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <p className="text-muted-foreground font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-primary via-accent to-primary text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-float-delayed"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {tr('Ready to Transform Your', 'तुमचे')}
              <span className="block text-secondary">{tr('Harvest?', 'उत्पादन बदलण्यासाठी तयार आहात?')}</span>
            </h2>
            <p className="text-xl opacity-95 mb-8 max-w-2xl mx-auto leading-relaxed">
              {tr(
                'Join thousands of farmers who have already elevated their yields with SHAHU SEEDS. Experience premium quality and proven results.',
                'SHAHU SEEDS सोबत आधीच उत्पादन वाढवलेल्या हजारो शेतकऱ्यांमध्ये सामील व्हा. प्रीमियम गुणवत्ता आणि सिद्ध परिणामांचा अनुभव घ्या.',
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-200">
              <Link
                href="/contact"
                className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all duration-300 inline-flex items-center justify-center gap-3 group"
              >
                {tr('Start Growing Today', 'आजच सुरुवात करा')}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="border-3 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 hover:shadow-lg transition-all duration-300 backdrop-blur-sm"
              >
                {tr('Learn Our Story', 'आमची कहाणी जाणून घ्या')}
              </Link>
            </div>

            <div className="pt-8 animate-fade-in animation-delay-300">
              <p className="text-sm opacity-80">
                {tr('Join 50,000+ farmers already growing with SHAHU SEEDS', 'SHAHU SEEDS सोबत लागवड करणाऱ्या 50,000+ शेतकऱ्यांमध्ये सामील व्हा')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
