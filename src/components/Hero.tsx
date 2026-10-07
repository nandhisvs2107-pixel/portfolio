import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Mail, Sparkles, BookOpen, ChevronRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Hero3DCanvas } from './Hero3DCanvas';

export const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('projects');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('contact');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-flow-pattern bg-[#07080b]"
    >
      {/* Background Gold Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c5a059]/5 rounded-full blur-[150px] pointer-events-none animate-gold-pulse" />

      {/* 3D Celestial Gold Canvas */}
      <Hero3DCanvas />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column - Hero Content */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0d0f17] border border-[#c5a059]/30 text-[#e5c178] text-xs font-mono tracking-widest uppercase backdrop-blur-md shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] animate-pulse" />
              <span>2ND YEAR B.TECH IT STUDENT</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#f6f3eb] font-serif-heading">
                NANDHIS V S
              </h1>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xl sm:text-2xl font-semibold text-[#c5a059] font-cinzel tracking-wider">
                  IT STUDENT
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#c5a059]/40 hidden sm:inline-block" />
                <span className="text-sm font-medium text-[#a39e93] flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-[#c5a059]" />
                  SNS College of Technology
                </span>
              </div>
            </div>

            {/* Tagline */}
            <div className="border-l-2 border-[#c5a059]/50 pl-5 py-1">
              <p className="text-xl sm:text-2xl font-serif-heading italic text-[#e6e2d8] leading-relaxed">
                &ldquo;Building, experimenting, and learning at the intersection of technology and AI.&rdquo;
              </p>
            </div>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#a39e93] max-w-2xl leading-relaxed">
              I’m a 2nd-year Information Technology student exploring software development, AI-assisted applications, and practical technology projects.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#c5a059] via-[#e5c178] to-[#c5a059] text-black shadow-lg shadow-[#c5a059]/20 hover:shadow-[#c5a059]/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-250"
              >
                <span>View My Work</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-sm bg-[#0d0f17] text-[#f5f2eb] border border-[#c5a059]/30 hover:border-[#c5a059] hover:bg-[#151824] transition-all duration-250"
              >
                <span>Let&apos;s Connect</span>
                <Sparkles className="w-4 h-4 text-[#c5a059]" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4 border-t border-[#c5a059]/15">
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/nandhisvs2107-pixel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#0d0f17] hover:bg-[#c5a059] hover:text-black text-[#e8e4d9] border border-[#c5a059]/30 transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/nandhisvs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-[#0d0f17] hover:bg-[#c5a059] hover:text-black text-[#e8e4d9] border border-[#c5a059]/30 transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:nandhisvs@gmail.com"
                  className="p-2.5 rounded-lg bg-[#0d0f17] hover:bg-[#c5a059] hover:text-black text-[#e8e4d9] border border-[#c5a059]/30 transition-all duration-200"
                  aria-label="Email Nandhis V S"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <div className="h-4 w-px bg-[#c5a059]/20" />

              <span className="text-xs text-[#a39e93] font-mono">
                Location: India
              </span>
            </div>
          </motion.div>

          {/* Right Column - Profile Portrait */}
          <motion.div
            className="lg:col-span-5 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            <div className="relative group max-w-sm sm:max-w-md w-full">
              {/* Outer Gold Crest Frame */}
              <div className="absolute -inset-1.5 bg-gradient-to-b from-[#c5a059]/40 via-[#e5c178]/10 to-transparent rounded-2xl blur-md opacity-60 group-hover:opacity-100 transition duration-500" />

              {/* Main Card Container */}
              <div className="relative rounded-2xl bg-[#090a0e] border border-[#c5a059]/30 p-3 sm:p-4 shadow-2xl overflow-hidden">
                {/* Image Frame */}
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden bg-black border border-white/10">
                  <img
                    src="/assets/profile.png"
                    alt="Nandhis V S — IT Student"
                    className="w-full h-full object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />

                  {/* Gradient Overlay at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07080b] via-transparent to-transparent opacity-60" />

                  {/* Status Overlay Badge */}
                  <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-[#0c0e16]/95 border border-[#c5a059]/30 backdrop-blur-md flex items-center justify-between shadow-lg">
                    <div>
                      <h4 className="text-xs font-bold text-[#f6f3eb] font-serif-heading tracking-wide">NANDHIS V S</h4>
                      <p className="text-[11px] text-[#c5a059] font-mono">SNS College of Technology</p>
                    </div>
                    <span className="px-2.5 py-1 text-[10px] font-mono rounded bg-[#c5a059]/15 text-[#e5c178] border border-[#c5a059]/30">
                      B.Tech IT
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-12 lg:mt-16 flex justify-center">
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex flex-col items-center gap-2 text-[#a39e93] hover:text-[#c5a059] text-xs font-mono transition-colors group"
          >
            <span className="tracking-widest uppercase text-[10px]">SCROLL TO EXPLORE</span>
            <div className="p-2 rounded-full border border-[#c5a059]/30 group-hover:border-[#c5a059] bg-[#0d0f17] animate-bounce">
              <ArrowDown className="w-3.5 h-3.5 text-[#c5a059]" />
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};
