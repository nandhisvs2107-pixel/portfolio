import React from 'react';
import { motion } from 'framer-motion';
import { Award, Cloud, CheckCircle, ShieldCheck } from 'lucide-react';

export const Certifications: React.FC = () => {
  const certifications = [
    {
      title: 'AWS Certification',
      issuer: 'Amazon Web Services',
      icon: Cloud,
    },
    {
      title: 'IBM Certification',
      issuer: 'IBM',
      icon: Award,
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-[#0a0b0f] relative border-y border-[#c5a059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d0f17] border border-[#c5a059]/30 text-[#e5c178] text-xs font-mono tracking-widest uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f6f3eb] tracking-tight font-serif-heading">
            Certifications
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-2" />
          <p className="text-[#a39e93] text-sm sm:text-base">
            Formal technical learning & course completions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                className="glass-card-luxury p-7 sm:p-9 rounded-2xl border border-[#c5a059]/20 shadow-xl flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#0d0f17] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059]">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#c5a059]/15 border border-[#c5a059]/30 text-[#e5c178] text-xs font-mono">
                      <CheckCircle className="w-3.5 h-3.5 text-[#c5a059]" />
                      Completed
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#f6f3eb] font-serif-heading mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium text-[#a39e93]">
                    Issuer: {cert.issuer}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#c5a059]/15 flex items-center justify-between text-xs text-[#a39e93] font-mono">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
                    Certification Recognized
                  </span>
                  <span className="text-[#c5a059]">Verified</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
