import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Database, Compass, CheckCircle2, UserCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0b0f] relative border-y border-[#c5a059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d0f17] border border-[#c5a059]/30 text-[#e5c178] text-xs font-mono tracking-widest uppercase">
            <UserCheck className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f6f3eb] tracking-tight font-serif-heading">
            Student Journey & Academic Focus
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-2" />
          <p className="text-[#a39e93] text-sm sm:text-base leading-relaxed">
            Building strong technological fundamentals through active learning and hands-on experimentation.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Biography Card */}
          <motion.div
            className="lg:col-span-7 glass-card-luxury p-7 sm:p-9 rounded-2xl flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3.5 border-b border-[#c5a059]/15 pb-5">
                <div className="w-11 h-11 rounded-xl bg-[#0d0f17] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#f6f3eb] font-serif-heading">Biography</h3>
                  <p className="text-xs text-[#a39e93] font-mono">Academic Background & Mindset</p>
                </div>
              </div>

              <p className="text-[#e6e2d8] text-base sm:text-lg leading-relaxed font-sans">
                I’m <strong className="text-[#f6f3eb] font-bold font-serif-heading text-lg">NANDHIS V S</strong>, a 2nd-year B.Tech Information Technology student at <strong className="text-[#c5a059] font-medium border-b border-[#c5a059]/40 pb-0.5">SNS College of Technology</strong>. I’m currently building my foundation in programming and database technologies while exploring practical applications of AI and modern web development.
              </p>

              {/* Learning Focus Badges */}
              <div className="pt-2 space-y-3">
                <h4 className="text-xs font-mono uppercase text-[#c5a059] tracking-wider">
                  Current Skill Level & Focus
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#08090d] border border-[#c5a059]/20 flex items-start gap-3">
                    <Code2 className="w-4 h-4 text-[#c5a059] mt-1 shrink-0" />
                    <div>
                      <h5 className="text-sm font-bold text-[#f6f3eb] font-serif-heading">Python</h5>
                      <p className="text-xs text-[#a39e93] mt-0.5">Core programming fundamentals (Beginner)</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#08090d] border border-[#c5a059]/20 flex items-start gap-3">
                    <Database className="w-4 h-4 text-[#c5a059] mt-1 shrink-0" />
                    <div>
                      <h5 className="text-sm font-bold text-[#f6f3eb] font-serif-heading">SQL</h5>
                      <p className="text-xs text-[#a39e93] mt-0.5">Database queries & structure (Beginner)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#c5a059]/15 flex items-center justify-between text-xs text-[#a39e93] font-mono">
              <span>Degree: B.Tech IT</span>
              <span className="text-[#c5a059]">2nd Year Undergrad</span>
            </div>
          </motion.div>

          {/* Education & Journey Sidebar */}
          <motion.div
            className="lg:col-span-5 space-y-6 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Education Card */}
            <div className="glass-card-luxury p-7 rounded-2xl border-l-4 border-l-[#c5a059]">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-md bg-[#0d0f17] text-[#c5a059] text-xs font-mono font-medium border border-[#c5a059]/30">
                  EDUCATION
                </span>
                <span className="text-xs text-[#a39e93] font-mono">Current Enrolment</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#f6f3eb] font-serif-heading">
                SNS COLLEGE OF TECHNOLOGY
              </h3>
              <p className="text-sm text-[#c5a059] font-medium mt-1">
                B.Tech Information Technology
              </p>
              <div className="mt-4 flex items-center gap-2.5 text-xs text-[#a39e93] bg-[#08090d] p-3 rounded-xl border border-[#c5a059]/15">
                <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>Currently in 2nd Year of Academic Study</span>
              </div>
            </div>

            {/* Student Journey Timeline Card */}
            <div className="glass-card-luxury p-7 rounded-2xl">
              <div className="flex items-center gap-2 mb-5">
                <Compass className="w-4 h-4 text-[#c5a059]" />
                <h4 className="text-xs font-bold text-[#f6f3eb] font-mono uppercase tracking-wider">
                  Academic Timeline
                </h4>
              </div>

              <div className="space-y-4 relative before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#c5a059]/20">
                <div className="relative pl-6">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#c5a059] border-2 border-[#07080b] -translate-x-[7px]" />
                  <h5 className="text-xs font-semibold text-[#f6f3eb] font-mono">Present — 2nd Year B.Tech IT</h5>
                  <p className="text-xs text-[#a39e93] mt-0.5">
                    Exploring AI-assisted concept development and deepening database & software basics.
                  </p>
                </div>

                <div className="relative pl-6">
                  <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-[#3a352a] border-2 border-[#07080b] -translate-x-[7px]" />
                  <h5 className="text-xs font-semibold text-[#f6f3eb] font-mono">1st Year Foundation</h5>
                  <p className="text-xs text-[#a39e93] mt-0.5">
                    Completed introductory engineering courses and started learning Python & SQL basics.
                  </p>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
