import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Droplet, Flame, Sparkles, Crown, Phone, Mail, MessageCircle, MapPin, Instagram } from "lucide-react";

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
  const { scrollY } = useScroll();
  
  // Subtle parallax for hero
  const heroY = useTransform(scrollY, [0, 1000], [0, 300]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden font-sans selection:bg-primary/30">
      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-1000 ${
          isScrolled ? "bg-background/95 backdrop-blur-md py-4 shadow-sm border-b border-white/5" : "bg-gradient-to-b from-background/80 to-transparent py-8"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="w-1/3 hidden md:block">
            <nav className="flex gap-10 text-xs tracking-[0.25em] uppercase text-white/70">
              <a href="#story" data-testid="link-nav-story" className="hover:text-primary transition-colors duration-500">Story</a>
              <a href="#collections" data-testid="link-nav-collections" className="hover:text-primary transition-colors duration-500">Collections</a>
            </nav>
          </div>
          
          <div className="w-full md:w-1/3 flex justify-center">
            {/* Logo placeholder - using text until logo is uploaded */}
            <h1 className="text-2xl md:text-3xl font-serif text-primary tracking-[0.3em] font-medium m-0 leading-none">
              VIRAMORÉ
            </h1>
          </div>
          
          <div className="w-1/3 hidden md:flex justify-end">
             <nav className="flex gap-10 text-xs tracking-[0.25em] uppercase text-white/70">
              <a href="#packages" data-testid="link-nav-packages" className="hover:text-primary transition-colors duration-500">Packages</a>
              <a href="#contact" data-testid="link-nav-contact" className="hover:text-primary transition-colors duration-500">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <motion.img 
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            src={heroSmoke} 
            alt="Luxury smoke trail" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background"></div>
        </motion.div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-[5rem] font-serif text-white tracking-[0.15em] mb-8 leading-tight drop-shadow-2xl">
              PRESENCE, <span className="clip-text-gold">BOTTLED.</span>
            </h2>
            <p className="text-sm md:text-lg font-light tracking-[0.3em] text-white/80 uppercase mb-16">
              The silent language of sovereignty.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a 
                href="#collections"
                data-testid="link-hero-claim"
                className="px-10 py-5 bg-primary text-background font-serif tracking-[0.2em] uppercase text-xs hover:bg-white transition-all duration-700 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
              >
                Claim Your Presence
              </a>
              <a 
                href="#story"
                data-testid="link-hero-explore"
                className="px-10 py-5 border border-primary/40 text-primary font-serif tracking-[0.2em] uppercase text-xs hover:border-primary hover:bg-primary/5 transition-all duration-700"
              >
                Explore The Collection
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 text-white/30"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-white/30 to-transparent"></div>
        </motion.div>
      </section>

      {/* The Problem Section */}
      <section className="py-40 relative bg-background" id="purpose">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="text-center mb-24"
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-white font-serif tracking-[0.1em]">The Problem With Modern Fragrance</h2>
            <div className="w-16 h-[1px] bg-primary mx-auto"></div>
          </motion.div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-16 mb-40"
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
            className="max-w-4xl mx-auto text-center p-12 md:p-24 relative"
          >
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-primary/30"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-primary/30"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-primary/30"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/30"></div>
            
            <p className="text-lg md:text-2xl font-serif text-white/80 leading-[2] italic mb-12">
              "In a world of mass-produced, fleeting scents, VIRAMORÉ restores the power of personal presence. We solve the disappointment of weak synthetic fragrances by offering high-concentration oil blends that linger as long as your legacy."
            </p>
            <p className="text-primary text-sm tracking-[0.3em] uppercase leading-loose">
              We don't just offer scent.<br/>We offer a silent language of authority.
            </p>
          </motion.div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-32 bg-[#050505] border-y border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-24"
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-white font-serif tracking-[0.1em]">Why VIRAMORÉ</h2>
            <div className="w-16 h-[1px] bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="p-12 border border-white/[0.03] bg-background hover:border-primary/20 transition-all duration-700 group"
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
              className="p-12 border border-white/[0.03] bg-background hover:border-primary/20 transition-all duration-700 group"
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
              className="p-12 border border-white/[0.03] bg-background hover:border-primary/20 transition-all duration-700 group"
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
      <section className="py-0 relative" id="story">
        <div className="grid md:grid-cols-2 min-h-[90vh]">
          <div className="relative h-[60vh] md:h-auto overflow-hidden">
            <motion.img 
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              src={distillationImage} 
              alt="Traditional distillation" 
              className="absolute inset-0 w-full h-full object-cover grayscale-[30%] opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 md:from-transparent to-background"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:hidden"></div>
          </div>
          
          <div className="py-32 px-8 md:px-20 lg:px-32 flex items-center bg-background z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <h2 className="text-3xl md:text-5xl mb-16 text-white font-serif tracking-[0.1em]">The VIRAMORÉ Story</h2>
              
              <div className="space-y-8 text-white/60 font-light leading-loose text-sm md:text-base">
                <p>
                  <strong className="text-white/90 font-medium uppercase tracking-widest text-xs">True luxury isn't manufactured.<br/>It is distilled through time.</strong>
                </p>
                <p>
                  Our journey led us to Kannauj — the heart of Indian perfumery for over 400 years.
                </p>
                <p>
                  Using the traditional Deg-Bhapka steam distillation process, we extract the purest essences of Oud, Amber, and Rose. Each drop is distilled through patience and fire in copper stills.
                </p>
                <p className="pt-10 text-2xl font-serif text-primary italic">
                  This is not fragrance.<br/>This is liquid legacy.
                </p>
              </div>

              <div className="mt-24 pt-16 border-t border-white/5">
                <h4 className="text-[10px] tracking-[0.3em] text-primary mb-8 uppercase">Our Mission</h4>
                <p className="text-white/70 font-light leading-loose text-sm">
                  "To resurrect the ancient art of sovereign perfumery. By combining the 400-year heritage of Kannauj with modern minimalist luxury, we craft liquid auras that ensure your presence is remembered long after you leave the room."
                </p>
                
                <h4 className="text-[10px] tracking-[0.3em] text-primary mb-8 uppercase mt-12">Our Vision</h4>
                <p className="text-white/70 font-light leading-loose text-sm">
                  "To become the global benchmark of silent luxury where India's ancestral alchemy meets modern identity."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-40 bg-background relative" id="collections">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-32"
          >
            <h2 className="text-3xl md:text-5xl mb-6 text-white font-serif tracking-[0.1em]">The Collections</h2>
            <div className="w-16 h-[1px] bg-primary mx-auto mt-8 mb-8"></div>
          </motion.div>

          <div className="space-y-40">
            {/* Product 1 */}
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="aspect-[3/4] relative group overflow-hidden"
              >
                <img src={attarImage} alt="Sovereign Attar Collection" className="object-cover w-full h-full transition-transform duration-[2s] group-hover:scale-105" />
                <div className="absolute inset-0 border border-white/5 m-8 z-10 pointer-events-none transition-all duration-700 group-hover:border-primary/20"></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="md:pr-12"
              >
                <h3 className="text-3xl md:text-4xl text-white mb-4 font-serif">The Sovereign Collection</h3>
                <p className="text-primary tracking-[0.3em] text-[10px] uppercase mb-10">Signature Attars</p>
                <p className="text-white/50 font-light leading-loose mb-12 text-sm md:text-base">
                  Distilled using the traditional Deg-Bhapka process. These pure, highly concentrated oils are designed to melt into your skin, creating a unique olfactory signature that lasts for days.
                </p>
                <div className="flex items-center gap-6 mb-12 p-6 border border-white/5 bg-white/[0.01]">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  <span className="text-white/70 tracking-[0.2em] text-[10px] uppercase">Format: Matte Black Dropper Bottles</span>
                </div>
                <button data-testid="button-view-collection" className="px-10 py-5 border border-primary/30 text-white font-serif tracking-[0.2em] uppercase text-xs hover:bg-primary hover:text-background hover:border-primary transition-all duration-700">
                  View Collection
                </button>
              </motion.div>
            </div>

            {/* Product 2 */}
            <div className="grid md:grid-cols-2 gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="md:pl-12 order-2 md:order-1"
              >
                <h3 className="text-3xl md:text-4xl text-white mb-4 font-serif">Royal Bakhoors & Ouds</h3>
                <p className="text-primary tracking-[0.3em] text-[10px] uppercase mb-10">Atmospheric Presence</p>
                <p className="text-white/50 font-light leading-loose mb-12 text-sm md:text-base">
                  Premium wood chips meticulously infused with rare oils. Used for centuries by royalty to transform their homes into sanctuaries of peace and power.
                </p>
                <button data-testid="button-view-bakhoor" className="px-10 py-5 border border-primary/30 text-white font-serif tracking-[0.2em] uppercase text-xs hover:bg-primary hover:text-background hover:border-primary transition-all duration-700">
                  Discover Bakhoors
                </button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-100px" }}
                className="aspect-[3/4] relative group overflow-hidden order-1 md:order-2"
              >
                <img src={bakhoorImage} alt="Royal Bakhoor" className="object-cover w-full h-full transition-transform duration-[2s] group-hover:scale-105" />
                <div className="absolute inset-0 border border-white/5 m-8 z-10 pointer-events-none transition-all duration-700 group-hover:border-primary/20"></div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Packages Section */}
      <section className="py-40 bg-[#050505] relative border-t border-white/5" id="packages">
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full opacity-5 pointer-events-none">
           <img src={giftBoxImage} alt="" className="object-cover w-full h-full object-right" />
           <div className="absolute inset-0 bg-gradient-to-r from-[#050505] to-transparent"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="mb-24 text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-white font-serif tracking-[0.1em]">Special Packages</h2>
            <div className="w-16 h-[1px] bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-background border border-white/[0.03] p-12 hover:border-primary/30 transition-all duration-700 flex flex-col h-full group"
            >
              <h3 className="text-lg mb-6 text-white tracking-[0.1em] font-serif">Discovery Curation</h3>
              <div className="w-8 h-[1px] bg-primary/30 mb-8 group-hover:w-16 transition-all duration-500"></div>
              <p className="text-white/40 font-light leading-loose mb-12 flex-grow text-sm">
                A limited edition attar discovery set. Explore the sovereign spectrum before committing to your signature scent.
              </p>
              <a href="#contact" data-testid="link-package-discovery" className="text-primary text-[10px] tracking-[0.3em] uppercase group-hover:text-white transition-colors duration-300">Reserve Set &rarr;</a>
            </motion.div>

            {/* Package 2 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-background border border-white/[0.03] p-12 hover:border-primary/30 transition-all duration-700 flex flex-col h-full group"
            >
              <h3 className="text-lg mb-6 text-white tracking-[0.1em] font-serif">Exhibition Special</h3>
              <div className="w-8 h-[1px] bg-primary/30 mb-8 group-hover:w-16 transition-all duration-500"></div>
              <p className="text-white/40 font-light leading-loose mb-12 flex-grow text-sm">
                Access rare scents available only at exclusive exhibitions. Includes a private bespoke scent consultation to discover your aura.
              </p>
              <a href="#contact" data-testid="link-package-exhibition" className="text-primary text-[10px] tracking-[0.3em] uppercase group-hover:text-white transition-colors duration-300">Inquire Availability &rarr;</a>
            </motion.div>

            {/* Package 3 */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="bg-background border border-white/[0.03] p-12 hover:border-primary/30 transition-all duration-700 flex flex-col h-full relative overflow-hidden group"
            >
              <h3 className="text-lg mb-6 text-white tracking-[0.1em] font-serif">Bespoke Gifting</h3>
              <div className="w-8 h-[1px] bg-primary/30 mb-8 group-hover:w-16 transition-all duration-500"></div>
              <p className="text-white/40 font-light leading-loose mb-12 flex-grow text-sm">
                The ultimate silent language of appreciation. Luxury corporate and wedding gift boxes crafted to leave a lasting impression.
              </p>
              <a href="#contact" data-testid="link-package-gifting" className="text-primary text-[10px] tracking-[0.3em] uppercase group-hover:text-white transition-colors duration-300">Request Catalog &rarr;</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer className="bg-background pt-40 pb-16 border-t border-white/5" id="contact">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-24 mb-32">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-10 tracking-[0.1em]">Connect</h2>
              <p className="text-white/50 font-light leading-loose max-w-md mb-16 text-sm md:text-base">
                For bespoke inquiries, sovereign collections, or private consultations, we await your correspondence.
              </p>
              
              <div className="space-y-8">
                <a href="tel:+910000000000" data-testid="link-contact-phone" className="flex items-center gap-8 text-white/60 hover:text-primary transition-colors duration-500 group">
                  <div className="w-14 h-14 border border-white/10 flex items-center justify-center rounded-full group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-500">
                    <Phone strokeWidth={1} className="w-5 h-5" />
                  </div>
                  <span className="tracking-[0.1em] text-sm">Call Concierge</span>
                </a>
                
                <a href="mailto:concierge@viramore.com" data-testid="link-contact-email" className="flex items-center gap-8 text-white/60 hover:text-primary transition-colors duration-500 group">
                  <div className="w-14 h-14 border border-white/10 flex items-center justify-center rounded-full group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-500">
                    <Mail strokeWidth={1} className="w-5 h-5" />
                  </div>
                  <span className="tracking-[0.1em] text-sm">concierge@viramore.com</span>
                </a>
                
                <a href="#" data-testid="link-contact-whatsapp" className="flex items-center gap-8 text-white/60 hover:text-primary transition-colors duration-500 group">
                  <div className="w-14 h-14 border border-white/10 flex items-center justify-center rounded-full group-hover:border-primary/40 group-hover:bg-primary/5 transition-all duration-500">
                    <MessageCircle strokeWidth={1} className="w-5 h-5" />
                  </div>
                  <span className="tracking-[0.1em] text-sm">WhatsApp Inquiry</span>
                </a>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="mb-16 p-10 border border-white/5 bg-white/[0.01]">
                <h4 className="text-[10px] tracking-[0.3em] text-primary mb-8 uppercase">Atelier</h4>
                <div className="flex items-start gap-6 text-white/50 font-light">
                  <MapPin strokeWidth={1} className="w-5 h-5 text-primary mt-1 shrink-0" />
                  <p className="leading-loose text-sm">
                    VIRAMORÉ Headquarters<br />
                    Luxury District<br />
                    New Delhi, India
                  </p>
                </div>
              </div>
              
              <div className="p-10 border border-white/5 bg-white/[0.01]">
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
          
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] tracking-[0.3em] text-white/30 uppercase">
            <p>&copy; {new Date().getFullYear()} VIRAMORÉ. All rights reserved.</p>
            <div className="flex gap-10">
              <a href="#" data-testid="link-footer-privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" data-testid="link-footer-terms" className="hover:text-primary transition-colors">Terms & Conditions</a>
              <a href="#" data-testid="link-footer-refund" className="hover:text-primary transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
