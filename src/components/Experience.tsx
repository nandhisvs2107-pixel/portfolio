import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Building2, CheckCircle2, Clock } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-[#07080b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d0f17] border border-[#c5a059]/30 text-[#e5c178] text-xs font-mono tracking-widest uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>PRACTICAL EXPERIENCE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f6f3eb] tracking-tight font-serif-heading">
            Internship & Experience
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-2" />
          <p className="text-[#a39e93] text-sm sm:text-base">
            Professional exposure gained during early academic software exploration.
          </p>
        </div>

        {/* Timeline / Card Container */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="glass-card-luxury p-7 sm:p-9 rounded-2xl border-l-4 border-l-[#c5a059] shadow-xl relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-[#c5a059]/15">
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-xl bg-[#0d0f17] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059]">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#f6f3eb] font-serif-heading">MSEED COMPANY</h3>
                  <p className="text-sm font-semibold text-[#c5a059] font-mono">Web Developer Intern</p>
                </div>
              </div>

              {/* Honest Duration Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 text-[#e5c178] text-xs font-mono">
                <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
                <span>12 Days Internship</span>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-[#e6e2d8] text-base sm:text-lg leading-relaxed font-sans">
                &ldquo;Completed a 12-day internship experience at MSEED as a Web Developer.&rdquo;
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#08090d] border border-[#c5a059]/20 flex items-center gap-3 text-xs text-[#e6e2d8]">
                  <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>Gained real-world IT company environment exposure</span>
                </div>
                <div className="p-4 rounded-xl bg-[#08090d] border border-[#c5a059]/20 flex items-center gap-3 text-xs text-[#e6e2d8]">
                  <Calendar className="w-4 h-4 text-[#c5a059] shrink-0" />
                  <span>12-Day Intensive Student Training</span>
                </div>
              </div>
            </div>

            {/* Footer Tag */}
            <div className="mt-6 pt-4 border-t border-[#c5a059]/15 flex items-center justify-between text-xs text-[#a39e93] font-mono">
              <span>Organization: MSEED</span>
              <span>Role: Web Developer Intern</span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
