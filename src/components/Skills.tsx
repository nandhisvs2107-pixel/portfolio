import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Sparkles, AlertCircle, Cpu } from 'lucide-react';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative bg-[#07080b] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d0f17] border border-[#c5a059]/30 text-[#e5c178] text-xs font-mono tracking-widest uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL SPECS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f6f3eb] tracking-tight font-serif-heading">
            Skills & Current Focus
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-2" />
          <p className="text-[#a39e93] text-sm sm:text-base max-w-xl mx-auto">
            An honest overview of my ongoing technical learning, foundation tools, and areas of exploration.
          </p>
        </div>

        {/* Honest Representation Banner */}
        <div className="max-w-3xl mx-auto mb-10 p-4 rounded-xl bg-[#0d0f17] border border-[#c5a059]/30 flex items-start gap-3 text-xs text-[#e6e2d8]">
          <AlertCircle className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
          <p>
            <strong className="text-[#c5a059]">Authentic Progression:</strong> As a 2nd-year IT student, I am currently developing fundamental competency in these technologies through coursework and self-directed practice.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          
          {/* Card 1: Programming */}
          <motion.div
            className="glass-card-luxury p-7 rounded-2xl flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0d0f17] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059]">
                  <Terminal className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#08090d] border border-[#c5a059]/20 text-[#c5a059] text-[11px] font-mono">
                  Core Language
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#f6f3eb] mb-2 font-serif-heading">Programming</h3>
              <p className="text-xs text-[#a39e93] mb-6">
                Fundamental logic building & scripting
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#08090d] border border-[#c5a059]/20 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#f6f3eb] text-base font-serif-heading">Python</span>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#c5a059]/15 text-[#e5c178] border border-[#c5a059]/30">
                      Beginner Level
                    </span>
                  </div>
                  <p className="text-xs text-[#a39e93]">
                    Basic syntax, control flow, functions, data structures, and script execution.
                  </p>
                  <div className="pt-2 flex items-center gap-1.5 text-[11px] text-[#c5a059] font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                    <span>Currently Learning & Working With</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#c5a059]/15 text-[11px] text-[#a39e93] font-mono">
              Status: Active Study
            </div>
          </motion.div>

          {/* Card 2: Database */}
          <motion.div
            className="glass-card-luxury p-7 rounded-2xl flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0d0f17] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059]">
                  <Database className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#08090d] border border-[#c5a059]/20 text-[#c5a059] text-[11px] font-mono">
                  Data Systems
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#f6f3eb] mb-2 font-serif-heading">Database</h3>
              <p className="text-xs text-[#a39e93] mb-6">
                Relational query structuring & table schemas
              </p>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#08090d] border border-[#c5a059]/20 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#f6f3eb] text-base font-serif-heading">SQL</span>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#c5a059]/15 text-[#e5c178] border border-[#c5a059]/30">
                      Beginner Level
                    </span>
                  </div>
                  <p className="text-xs text-[#a39e93]">
                    Basic SELECT queries, filtering, JOINs, table creation, and data manipulation.
                  </p>
                  <div className="pt-2 flex items-center gap-1.5 text-[11px] text-[#c5a059] font-mono">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]" />
                    <span>Currently Learning & Working With</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#c5a059]/15 text-[11px] text-[#a39e93] font-mono">
              Status: Active Study
            </div>
          </motion.div>

          {/* Card 3: Exploration */}
          <motion.div
            className="glass-card-luxury p-7 rounded-2xl flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#0d0f17] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059]">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full bg-[#08090d] border border-[#c5a059]/20 text-[#c5a059] text-[11px] font-mono">
                  Applied Tech
                </span>
              </div>

              <h3 className="text-2xl font-bold text-[#f6f3eb] mb-2 font-serif-heading">Exploration</h3>
              <p className="text-xs text-[#a39e93] mb-6">
                Practical interest areas & project concepts
              </p>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-[#08090d] border border-[#c5a059]/20 flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#e6e2d8]">AI-Assisted Applications</span>
                  <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#c5a059]/15 text-[#e5c178]">
                    Interest Area
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-[#08090d] border border-[#c5a059]/20 flex items-center justify-between">
                  <span className="text-sm font-semibold text-[#e6e2d8]">Web Development</span>
                  <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-[#c5a059]/15 text-[#e5c178]">
                    Practical Focus
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#c5a059]/15 text-[11px] text-[#a39e93] font-mono">
              Status: Self-Directed Exploration
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
