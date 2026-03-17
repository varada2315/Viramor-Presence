import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { Droplet, Flame, Sparkles, Crown, Phone, Mail, MessageCircle, MapPin, Instagram } from "lucide-react";
import { Link } from "wouter";

// Images
import heroSmoke from "@/assets/images/hero-smoke.png";
import distillationImage from "@/assets/images/distillation.png";
import attarImage from "@/assets/images/sovereign-attar.png";
import bakhoorImage from "@/assets/images/royal-bakhoor.png";
import giftBoxImage from "@/assets/images/gift-box.png";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const navLinkClass = "nav-link-luxe";
  
  // Keep hero motion subtle to reduce scroll jank
  const heroYRaw = useTransform(scrollY, [0, 2200], [0, 36]);
  const heroY = useSpring(heroYRaw, {
    stiffness: 58,
    damping: 34,
    mass: 1.05,
    restDelta: 0.01,
  });
  const useHeroParallax = !isMobile && !prefersReducedMotion;

  useEffect(() => {
    const handleScroll = () => {
      const next = window.scrollY > 50;
      setIsScrolled((prev) => (prev === next ? prev : next));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px)");
    const apply = () => setIsMobile(mediaQuery.matches);
    apply();
    mediaQuery.addEventListener("change", apply);
    return () => mediaQuery.removeEventListener("change", apply);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30 luxury-shell">
      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-50 glass-header transition-all duration-700 ${
          isScrolled ? "py-4" : "py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <div className="w-1/3 hidden md:block">
            <nav className="flex gap-10 text-xs uppercase">
              <a href="#story" data-testid="link-nav-story" className={navLinkClass}>Story</a>
              <a href="#collections" data-testid="link-nav-collections" className={navLinkClass}>Collections</a>
            </nav>
          </div>
          
          <div className="w-full md:w-1/3 flex justify-center">
            {/* Logo placeholder - using text until logo is uploaded */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-serif text-primary tracking-[0.24em] md:tracking-[0.3em] font-medium m-0 leading-none">
              VIRAMORÉ
            </h1>
          </div>
          
          <div className="w-1/3 hidden md:flex justify-end">
             <nav className="flex gap-10 text-xs uppercase">
              <a href="#packages" data-testid="link-nav-packages" className={navLinkClass}>Packages</a>
              <a href="#contact" data-testid="link-nav-contact" className={navLinkClass}>Contact</a>
            </nav>
          </div>
        </div>
        <div className="md:hidden px-4 pb-2 pt-3">
          <nav className="grid grid-cols-2 gap-x-4 gap-y-2 text-[10px] uppercase text-center">
            <a href="#story" data-testid="link-nav-mobile-story" className={navLinkClass}>Story</a>
            <a href="#collections" data-testid="link-nav-mobile-collections" className={navLinkClass}>Collections</a>
            <a href="#packages" data-testid="link-nav-mobile-packages" className={navLinkClass}>Packages</a>
            <a href="#contact" data-testid="link-nav-mobile-contact" className={navLinkClass}>Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[92svh] md:h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: useHeroParallax ? heroY : 0 }}
          className="absolute inset-0 z-0 hero-parallax-layer"
        >
          <motion.img 
            initial={{ scale: 1.035 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            src={heroSmoke} 
            alt="Luxury smoke trail" 
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="w-full h-full hero-image-optimized opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.25),transparent_45%)]"></div>
        </motion.div>
        <div className="absolute inset-0 z-[1] pointer-events-none hero-title-contrast-layer" aria-hidden="true"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-36 md:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="section-kicker mb-6">VIRAMORÉ</p>
            <h2 className="hero-pop-title text-3xl sm:text-4xl md:text-6xl lg:text-[5rem] font-serif text-white tracking-[0.1em] sm:tracking-[0.15em] mb-6 md:mb-8 leading-tight drop-shadow-2xl">
              PRESENCE, <span className="hero-pop-gold">BOTTLED.</span>
            </h2>
            <div className="divider-gold mb-8"></div>
            <p className="hero-pop-subtitle text-xs sm:text-sm md:text-lg font-serif font-normal tracking-[0.18em] sm:tracking-[0.3em] text-white/80 uppercase mb-10 md:mb-16">
              The silent language of sovereignty.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
              <a 
                href="#contact"
                data-testid="link-hero-claim"
                className="px-6 sm:px-10 py-4 sm:py-5 w-full sm:w-auto max-w-xs btn-luxe-solid"
              >
                Claim Your Presence
              </a>
              <a 
                href="#story"
                data-testid="link-hero-explore"
                className="px-6 sm:px-10 py-4 sm:py-5 w-full sm:w-auto max-w-xs btn-luxe-outline"
              >
                Explore The Collection
              </a>
            </div>
          </motion.div>
        </div>
        
      </section>

      {/* The Problem Section */}
      <section className="py-24 md:py-40 relative bg-background scroll-mt-36 content-auto" id="purpose">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-14 md:mb-24"
          >
            <p className="section-kicker mb-4">The Fragrance Dilemma</p>
            <h2 className="text-3xl md:text-4xl mb-6 text-white font-serif tracking-[0.1em]">The Problem With Modern Fragrance</h2>
            <div className="divider-gold"></div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-10 md:gap-16 mb-24 md:mb-40"
          >
            <motion.div variants={fadeIn} className="text-center group">
              <div className="w-20 h-20 rounded-full border border-white/5 flex items-center justify-center mx-auto mb-10 group-hover:border-primary/40 transition-colors duration-700 bg-white/[0.01]">
                <span className="text-primary font-serif text-2xl">01</span>
              </div>
              <h3 className="text-lg md:text-xl mb-6 text-white tracking-widest uppercase">The Lack of Identity</h3>
              <p className="text-white/50 font-light leading-relaxed mb-6 text-sm">Generic perfumes make everyone smell the same.</p>
              <p className="text-primary/90 text-[11px] tracking-[0.2em] uppercase leading-relaxed">We offer "Identity in a Drop."<br/>Our masterpieces are mood-mapped to your persona.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center group">
              <div className="w-20 h-20 rounded-full border border-white/5 flex items-center justify-center mx-auto mb-10 group-hover:border-primary/40 transition-colors duration-700 bg-white/[0.01]">
                <span className="text-primary font-serif text-2xl">02</span>
              </div>
              <h3 className="text-lg md:text-xl mb-6 text-white tracking-widest uppercase">The Disappointment</h3>
              <p className="text-white/50 font-light leading-relaxed mb-6 text-sm">High street scents vanish within hours.</p>
              <p className="text-primary/90 text-[11px] tracking-[0.2em] uppercase leading-relaxed">We provide Eternal Presence<br/>through oil-based attars.</p>
            </motion.div>

            <motion.div variants={fadeIn} className="text-center group">
              <div className="w-20 h-20 rounded-full border border-white/5 flex items-center justify-center mx-auto mb-10 group-hover:border-primary/40 transition-colors duration-700 bg-white/[0.01]">
                <span className="text-primary font-serif text-2xl">03</span>
              </div>
              <h3 className="text-lg md:text-xl mb-6 text-white tracking-widest uppercase">The Chaos of Synthetics</h3>
              <p className="text-white/50 font-light leading-relaxed mb-6 text-sm">Chemical blends lack soul and cause fatigue.</p>
              <p className="text-primary/90 text-[11px] tracking-[0.2em] uppercase leading-relaxed">We use raw ingredients<br/>like Oud and Amber.</p>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="max-w-4xl mx-auto text-center p-7 sm:p-10 md:p-24 relative luxury-card"
          >
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/30"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/30"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/30"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/30"></div>
            
            <p className="text-base sm:text-lg md:text-2xl font-serif text-white/80 leading-[1.9] md:leading-[2] italic mb-10 md:mb-12">
              "In a world of mass-produced, fleeting scents, VIRAMORÉ restores the power of personal presence. We solve the disappointment of weak synthetic fragrances by offering high-concentration oil blends that linger as long as your legacy."
            </p>
            <p className="text-primary text-[11px] sm:text-sm tracking-[0.2em] sm:tracking-[0.3em] uppercase leading-loose">
              We don't just offer scent.<br/>We offer a silent language of authority.
            </p>
          </motion.div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-20 md:py-32 bg-[#050505] border-y border-white/5 content-auto">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-14 md:mb-24"
          >
            <p className="section-kicker mb-4">Signature Excellence</p>
            <h2 className="text-3xl md:text-4xl mb-6 text-white font-serif tracking-[0.1em]">Why VIRAMORÉ</h2>
            <div className="divider-gold"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="p-7 md:p-12 luxury-card hover:border-primary/40 transition-all duration-700 group"
            >
              <Sparkles strokeWidth={0.5} className="w-10 h-10 text-primary mb-10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <h3 className="text-sm tracking-[0.2em] uppercase mb-6 text-white">Mood-Mapped Artistry</h3>
              <p className="text-white/40 font-light leading-loose text-sm">
                Wear the scent that defines your emotional persona. A meticulously crafted fragrance tailored to the sovereign aura you project.
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="p-7 md:p-12 luxury-card hover:border-primary/40 transition-all duration-700 group"
            >
              <Flame strokeWidth={0.5} className="w-10 h-10 text-primary mb-10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <h3 className="text-sm tracking-[0.2em] uppercase mb-6 text-white">Ancient Alchemy</h3>
              <p className="text-white/40 font-light leading-loose text-sm">
                Traditional distillation using incredibly rare ingredients. Extracting the absolute essence of nature through infinite patience and fire.
              </p>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="p-7 md:p-12 luxury-card hover:border-primary/40 transition-all duration-700 group"
            >
              <Crown strokeWidth={0.5} className="w-10 h-10 text-primary mb-10 opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
              <h3 className="text-sm tracking-[0.2em] uppercase mb-6 text-white">Silent Luxury</h3>
              <p className="text-white/40 font-light leading-loose text-sm">
                Minimal matte textures and sovereign gold accents. A tactile and visual experience that perfectly matches the liquid gold within.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-0 relative scroll-mt-36 content-auto" id="story">
        <div className="grid md:grid-cols-2 min-h-[90vh]">
          <div className="relative h-[60vh] md:h-auto overflow-hidden">
            <motion.img 
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              src={distillationImage} 
              alt="Traditional distillation" 
              loading="lazy"
              decoding="async"
              className="absolute inset-0 w-full h-full image-luxe opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/60 md:from-transparent to-background"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:hidden"></div>
          </div>
          
          <div className="py-16 md:py-32 px-5 sm:px-6 md:px-20 lg:px-32 flex items-center bg-background z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-5xl mb-10 md:mb-16 text-white font-serif tracking-[0.08em] md:tracking-[0.1em]">The VIRAMORÉ Story</h2>
              
              <div className="space-y-6 md:space-y-8 text-white/60 font-light leading-loose text-sm md:text-base">
                <p>
                  <strong className="text-white/90 font-medium uppercase tracking-widest text-xs">True luxury isn't manufactured.<br/>It is distilled through time.</strong>
                </p>
                <p>
                  Our journey led us to Kannauj — the heart of Indian perfumery for over 400 years.
                </p>
                <p>
                  Using the traditional Deg-Bhapka steam distillation process, we extract the purest essences of Oud, Amber, and Rose. Each drop is distilled through patience and fire in copper stills.
                </p>
                <p className="pt-6 md:pt-10 text-xl md:text-2xl font-serif text-primary italic">
                  This is not fragrance.<br/>This is liquid legacy.
                </p>
              </div>

              <div className="mt-14 md:mt-24 pt-10 md:pt-16 border-t border-white/5">
                <h4 className="text-[10px] tracking-[0.3em] text-primary mb-8 uppercase">Our Mission</h4>
                <p className="text-white/70 font-light leading-loose text-sm">
                  "To resurrect the ancient art of sovereign perfumery. By combining the 400-year heritage of Kannauj with modern minimalist luxury, we craft liquid auras that ensure your presence is remembered long after you leave the room."
                </p>
                
                <h4 className="text-[10px] tracking-[0.3em] text-primary mb-8 uppercase mt-10 md:mt-12">Our Vision</h4>
                <p className="text-white/70 font-light leading-loose text-sm">
                  "To become the global benchmark of silent luxury where India's ancestral alchemy meets modern identity."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-24 md:py-40 bg-background relative scroll-mt-36 content-auto" id="collections">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16 md:mb-32"
          >
            <p className="section-kicker mb-4">Crafted For Legacy</p>
            <h2 className="text-3xl md:text-5xl mb-6 text-white font-serif tracking-[0.1em]">The Collections</h2>
            <div className="divider-gold mt-8 mb-8"></div>
          </motion.div>

          <div className="space-y-24 md:space-y-40">
            {/* Product 1 */}
            <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="aspect-[3/4] relative group overflow-hidden"
              >
                <img
                  src={attarImage}
                  alt="Sovereign Attar Collection"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full image-luxe transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 border border-white/5 m-8 z-10 pointer-events-none transition-all duration-700 group-hover:border-primary/20"></div>
                <div className="image-gloss transition-opacity duration-700 opacity-85 group-hover:opacity-60"></div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="md:pr-12"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl text-white mb-4 font-serif">The Sovereign Collection</h3>
                <p className="text-primary tracking-[0.3em] text-[10px] uppercase mb-10">Signature Attars</p>
                <p className="text-white/50 font-light leading-loose mb-12 text-sm md:text-base">
                  Distilled using the traditional Deg-Bhapka process. These pure, highly concentrated oils are designed to melt into your skin, creating a unique olfactory signature that lasts for days.
                </p>
                <a href="#contact" data-testid="button-view-collection" className="inline-block px-6 sm:px-10 py-4 sm:py-5 btn-luxe-outline">
                  View Collection
                </a>
              </motion.div>
            </div>

            {/* Product 2 */}
            <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="md:pl-12 order-2 md:order-1"
              >
                <h3 className="text-2xl sm:text-3xl md:text-4xl text-white mb-4 font-serif">Royal Bakhoors & Ouds</h3>
                <p className="text-primary tracking-[0.3em] text-[10px] uppercase mb-10">Atmospheric Presence</p>
                <p className="text-white/50 font-light leading-loose mb-12 text-sm md:text-base">
                  Premium wood chips meticulously infused with rare oils. Used for centuries by royalty to transform their homes into sanctuaries of peace and power.
                </p>
                <a href="#contact" data-testid="button-view-bakhoor" className="inline-block px-6 sm:px-10 py-4 sm:py-5 btn-luxe-outline">
                  Discover Bakhoors
                </a>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="aspect-[3/4] relative group overflow-hidden order-1 md:order-2"
              >
                <img
                  src={bakhoorImage}
                  alt="Royal Bakhoor"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full image-luxe transition-transform duration-[2s] group-hover:scale-105"
                />
                <div className="absolute inset-0 border border-white/5 m-8 z-10 pointer-events-none transition-all duration-700 group-hover:border-primary/20"></div>
                <div className="image-gloss transition-opacity duration-700 opacity-85 group-hover:opacity-60"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Packages Section */}
      <section className="py-24 md:py-40 bg-[#050505] relative border-t border-white/5 scroll-mt-36 content-auto" id="packages">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-10 md:opacity-20 pointer-events-none">
           <img src={giftBoxImage} alt="" loading="lazy" decoding="async" className="object-cover w-full h-full object-right" />
           <div className="absolute inset-0 bg-gradient-to-r from-[#050505] to-transparent"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-14 md:mb-24 text-center"
          >
            <p className="section-kicker mb-4">Private Compositions</p>
            <h2 className="text-3xl md:text-4xl mb-6 text-white font-serif tracking-[0.1em]">Special Packages</h2>
            <div className="divider-gold"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="luxury-card p-7 md:p-12 hover:border-primary/40 transition-all duration-700 flex flex-col h-full group"
            >
              <h3 className="text-lg mb-6 text-white tracking-[0.1em] font-serif">Discovery Curation</h3>
              <div className="w-8 h-[1px] bg-primary/30 mb-8 group-hover:w-16 transition-all duration-500"></div>
              <p className="text-white/40 font-light leading-loose mb-12 flex-grow text-sm">
                A limited edition attar discovery set. Explore the sovereign spectrum before committing to your signature scent.
              </p>
              <a href="#contact" data-testid="link-package-discovery" className="micro-link-luxe">Reserve Set &rarr;</a>
            </motion.div>

            {/* Package 2 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="luxury-card p-7 md:p-12 hover:border-primary/40 transition-all duration-700 flex flex-col h-full group"
            >
              <h3 className="text-lg mb-6 text-white tracking-[0.1em] font-serif">Exhibition Special</h3>
              <div className="w-8 h-[1px] bg-primary/30 mb-8 group-hover:w-16 transition-all duration-500"></div>
              <p className="text-white/40 font-light leading-loose mb-12 flex-grow text-sm">
                Access rare scents available only at exclusive exhibitions. Includes a private bespoke scent consultation to discover your aura.
              </p>
              <a href="#contact" data-testid="link-package-exhibition" className="micro-link-luxe">Inquire Availability &rarr;</a>
            </motion.div>

            {/* Package 3 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="luxury-card p-7 md:p-12 hover:border-primary/40 transition-all duration-700 flex flex-col h-full relative overflow-hidden group"
            >
              <h3 className="text-lg mb-6 text-white tracking-[0.1em] font-serif">Bespoke Gifting</h3>
              <div className="w-8 h-[1px] bg-primary/30 mb-8 group-hover:w-16 transition-all duration-500"></div>
              <p className="text-white/40 font-light leading-loose mb-12 flex-grow text-sm">
                The ultimate silent language of appreciation. Luxury corporate and wedding gift boxes crafted to leave a lasting impression.
              </p>
              <a href="#contact" data-testid="link-package-gifting" className="micro-link-luxe">Request Catalog &rarr;</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer className="bg-background pt-24 md:pt-40 pb-14 md:pb-16 border-t border-white/5 scroll-mt-36 content-auto" id="contact">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-14 md:gap-24 mb-20 md:mb-32">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 md:mb-10 tracking-[0.1em]">Connect</h2>
              <p className="text-white/50 font-light leading-loose max-w-md mb-10 md:mb-16 text-sm md:text-base">
                For bespoke inquiries, sovereign collections, or private consultations, we await your correspondence.
              </p>
              
              <div className="space-y-6 md:space-y-8">
                <a href="tel:+918468896754" data-testid="link-contact-phone" className="flex items-center gap-4 md:gap-8 text-white/60 hover:text-primary transition-colors duration-500 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 border border-white/10 flex items-center justify-center rounded-full group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-500">
                    <Phone strokeWidth={1} className="w-5 h-5" />
                  </div>
                  <span className="tracking-[0.1em] text-sm">+91 84688 96754</span>
                </a>
                
                <a href="mailto:info@viramore.co.in" data-testid="link-contact-email" className="flex items-center gap-4 md:gap-8 text-white/60 hover:text-primary transition-colors duration-500 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 border border-white/10 flex items-center justify-center rounded-full group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-500">
                    <Mail strokeWidth={1} className="w-5 h-5" />
                  </div>
                  <span className="tracking-[0.1em] text-sm">info@viramore.co.in</span>
                </a>
                
                <a href="https://wa.me/918468896754" target="_blank" rel="noopener noreferrer" data-testid="link-contact-whatsapp" className="flex items-center gap-4 md:gap-8 text-white/60 hover:text-primary transition-colors duration-500 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 border border-white/10 flex items-center justify-center rounded-full group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-500">
                    <MessageCircle strokeWidth={1} className="w-5 h-5" />
                  </div>
                  <span className="tracking-[0.1em] text-sm">WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="mb-10 md:mb-16 p-7 md:p-10 luxury-card">
                <h4 className="text-[10px] tracking-[0.3em] text-primary mb-8 uppercase">Location</h4>
                <div className="flex items-start gap-6 text-white/50 font-light">
                  <MapPin strokeWidth={1} className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <p className="leading-loose text-sm">
                    Viramoré House,<br />
                    Lullanagar,<br />
                    Pune 411040
                  </p>
                </div>
              </div>
              
              <div className="p-7 md:p-10 luxury-card">
                 <h4 className="text-[10px] tracking-[0.3em] text-primary mb-8 uppercase">Follow</h4>
                 <a href="https://www.instagram.com/viramore.lab" data-testid="link-contact-instagram" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 text-white/50 hover:text-primary transition-colors duration-500 w-fit group">
                   <div className="w-10 h-10 border border-white/10 flex items-center justify-center rounded-full group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-500">
                     <Instagram strokeWidth={1} className="w-4 h-4" />
                   </div>
                   <span className="tracking-[0.2em] uppercase text-[11px]">@viramore.lab</span>
                 </a>
              </div>
            </div>
          </div>
          
          <div className="pt-10 md:pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-[10px] tracking-[0.2em] md:tracking-[0.3em] text-white/30 uppercase">
            <p>&copy; {new Date().getFullYear()} VIRAMORÉ. All rights reserved.</p>
            <div className="flex gap-10">
              <Link href="/privacy" data-testid="link-footer-privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
