import { motion } from "framer-motion";
import { ArrowLeft, Mail, MessageCircle, MapPin } from "lucide-react";
import { Link } from "wouter";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 pb-20">
      {/* Simple Header */}
      <header className="py-10 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-4xl flex justify-between items-center">
          <Link href="/" className="group flex items-center gap-2 text-white/50 hover:text-primary transition-colors duration-500">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-[10px] tracking-[0.3em] uppercase">Return Home</span>
          </Link>
          <h1 className="text-xl font-serif text-primary tracking-[0.3em]">VIRAMORÉ</h1>
        </div>
      </header>

      <main className="container mx-auto px-6 max-w-3xl mt-20">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-3xl md:text-5xl font-serif text-white mb-4 tracking-[0.1em]">Privacy Policy</h1>
          <p className="text-primary text-[10px] tracking-[0.3em] uppercase mb-16">Last Updated: 07/03/2026</p>

          <div className="prose prose-invert prose-primary max-w-none space-y-12 text-white/60 font-light leading-loose text-sm md:text-base">
            <section>
              <p>
                VIRAMORÉ ("we", "our", "us") values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or interact with our services.
              </p>
              <p className="mt-4">
                By using our website, you agree to the practices described in this policy.
              </p>
            </section>

            <section className="space-y-6">
              <h2 className="text-white font-serif text-xl tracking-wider pt-4 border-t border-white/5">1. Information We Collect</h2>
              <p>We may collect the following types of information when you interact with our website:</p>
              
              <div className="space-y-4">
                <h3 className="text-primary text-xs tracking-widest uppercase">Personal Information</h3>
                <p>When you contact us, place inquiries, or interact with our services, we may collect:</p>
                <ul className="list-disc pl-5 space-y-2 text-white/50">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>WhatsApp contact</li>
                  <li>Mailing or office address</li>
                  <li>Any information you voluntarily provide through forms or messages</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-primary text-xs tracking-widest uppercase">Automatically Collected Information</h3>
                <p>When you visit our website, certain information may be automatically collected, including:</p>
                <ul className="list-disc pl-5 space-y-2 text-white/50">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Device information</li>
                  <li>Pages visited</li>
                  <li>Time spent on pages</li>
                  <li>Referring websites</li>
                </ul>
              </div>
            </section>

            <section className="space-y-6">
              <h2 className="text-white font-serif text-xl tracking-wider pt-4 border-t border-white/5">2. How We Use Your Information</h2>
              <p>We use the collected information to:</p>
              <ul className="list-disc pl-5 space-y-2 text-white/50">
                <li>Respond to your inquiries or messages</li>
                <li>Provide customer support</li>
                <li>Share information about our products or services</li>
                <li>Improve our website experience</li>
                <li>Monitor website performance and usage</li>
                <li>Provide updates about exhibitions, consultations, or exclusive releases</li>
              </ul>
              <p className="italic text-primary/70 text-xs">We do not sell, trade, or rent your personal information to third parties.</p>
            </section>

            <section className="space-y-6">
              <h2 className="text-white font-serif text-xl tracking-wider pt-4 border-t border-white/5">3. Cookies and Tracking Technologies</h2>
              <p>Our website may use cookies and similar technologies to enhance your browsing experience.</p>
              <p>Cookies help us understand user behavior, improve website functionality, and provide a smoother browsing experience.</p>
            </section>

            <section className="space-y-6">
              <h2 className="text-white font-serif text-xl tracking-wider pt-4 border-t border-white/5">4. Third-Party Links</h2>
              <p>Our website may contain links to third-party platforms such as Instagram or other external websites. We are not responsible for the privacy practices or content of these third-party sites.</p>
            </section>

            <section className="space-y-6">
              <h2 className="text-white font-serif text-xl tracking-wider pt-4 border-t border-white/5">5. Data Security</h2>
              <p>We take reasonable measures to protect your personal information from unauthorized access, misuse, or disclosure. However, no internet transmission is completely secure.</p>
            </section>

            <section className="space-y-6">
              <h2 className="text-white font-serif text-xl tracking-wider pt-4 border-t border-white/5">6. Your Privacy Rights</h2>
              <p>Depending on your location, you may have rights to request access to, correction of, or deletion of your personal data.</p>
            </section>

            <section className="space-y-6">
              <h2 className="text-white font-serif text-xl tracking-wider pt-4 border-t border-white/5">7. Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              
              <div className="grid gap-6 mt-8 p-8 border border-white/5 bg-white/[0.01]">
                <div className="flex items-center gap-4">
                  <Mail size={18} className="text-primary" />
                  <a href="mailto:info@viramore.co.in" className="text-white/80 hover:text-primary transition-colors">info@viramore.co.in</a>
                </div>
                <div className="flex items-center gap-4">
                  <MessageCircle size={18} className="text-primary" />
                  <span className="text-white/80">+91 84688 96754</span>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin size={18} className="text-primary mt-1" />
                  <span className="text-white/80">Viramoré House, Lullanagar, Pune 411040</span>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
