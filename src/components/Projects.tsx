import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Car, Sparkles, DollarSign, Eye, Cpu, ShieldCheck } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'visualizer' | 'pricing'>('visualizer');

  return (
    <section id="projects" className="py-24 bg-[#0a0b0f] relative border-y border-[#c5a059]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d0f17] border border-[#c5a059]/30 text-[#e5c178] text-xs font-mono tracking-widest uppercase">
            <Car className="w-3.5 h-3.5" />
            <span>FEATURED WORK</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f6f3eb] tracking-tight font-serif-heading">
            Featured Project Concept
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-2" />
          <p className="text-[#a39e93] text-sm sm:text-base leading-relaxed">
            Exploring practical applications of AI-assisted image visualization and spare parts price estimation.
          </p>
        </div>

        {/* Featured Project Showcase Container */}
        <motion.div
          className="glass-card-luxury rounded-3xl overflow-hidden border border-[#c5a059]/30 shadow-2xl relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Top Status Header */}
          <div className="bg-[#0c0e16] px-6 sm:px-8 py-5 border-b border-[#c5a059]/20 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-[#0d0f17] border border-[#c5a059]/30 text-[#c5a059]">
                <Car className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-[#c5a059] uppercase tracking-widest">Concept Showcase</span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#f6f3eb] font-serif-heading">
                  AI-Assisted Automobile Modification Visualizer
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#c5a059]/15 text-[#e5c178] border border-[#c5a059]/30 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-[#c5a059] animate-pulse" />
                AI-Assisted Project Concept
              </span>
            </div>
          </div>

          {/* Project Body Layout */}
          <div className="p-6 sm:p-9 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Description Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase text-[#c5a059] tracking-wider mb-2">
                  Project Concept Overview
                </h4>
                <p className="text-[#e6e2d8] text-base sm:text-lg leading-relaxed font-sans">
                  An AI-assisted automobile modification visualization concept that helps users understand potential vehicle modifications by generating visual representations of how the vehicle could look after modification. The project also aims to help users explore the prices of required spare parts.
                </p>
              </div>

              {/* Core Objectives */}
              <div className="space-y-3 pt-2">
                <h5 className="text-xs font-mono uppercase text-[#c5a059] tracking-wider">
                  Core Project Objectives
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#08090d] border border-[#c5a059]/20 space-y-1">
                    <div className="flex items-center gap-2 text-[#f6f3eb] font-bold text-sm font-serif-heading">
                      <Sparkles className="w-4 h-4 text-[#c5a059]" />
                      <span>Visual Representation</span>
                    </div>
                    <p className="text-xs text-[#a39e93]">
                      Helps users preview modified vehicle aesthetics prior to actual physical modifications.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#08090d] border border-[#c5a059]/20 space-y-1">
                    <div className="flex items-center gap-2 text-[#f6f3eb] font-bold text-sm font-serif-heading">
                      <DollarSign className="w-4 h-4 text-[#c5a059]" />
                      <span>Spare Parts Pricing</span>
                    </div>
                    <p className="text-xs text-[#a39e93]">
                      Enables users to explore estimated pricing for required custom parts & body kits.
                    </p>
                  </div>
                </div>
              </div>

              {/* Verified Concept Tags */}
              <div>
                <h5 className="text-xs font-mono uppercase text-[#c5a059] tracking-wider mb-2">
                  Technical Scope
                </h5>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3.5 py-1 rounded-lg bg-[#0d0f17] text-[#e8e4d9] text-xs border border-[#c5a059]/20 font-mono">
                    Python
                  </span>
                  <span className="px-3.5 py-1 rounded-lg bg-[#c5a059]/15 text-[#e5c178] text-xs border border-[#c5a059]/30 font-mono">
                    AI Visualization Concept
                  </span>
                  <span className="px-3.5 py-1 rounded-lg bg-[#0d0f17] text-[#e8e4d9] text-xs border border-[#c5a059]/20 font-mono">
                    Spare Parts Exploration
                  </span>
                  <span className="px-3.5 py-1 rounded-lg bg-[#0d0f17] text-[#e8e4d9] text-xs border border-[#c5a059]/20 font-mono">
                    UI Design Concept
                  </span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0d0f17] border border-[#c5a059]/20 text-xs text-[#a39e93] flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#c5a059] shrink-0" />
                <span>Honest Note: Concept exploration under active development.</span>
              </div>
            </div>

            {/* Right Interactive Visual Simulation Box */}
            <div className="lg:col-span-5 bg-[#06070a] rounded-2xl border border-[#c5a059]/25 p-5 space-y-4 shadow-inner">
              <div className="flex items-center justify-between border-b border-[#c5a059]/20 pb-3">
                <div className="flex items-center gap-2 text-xs font-mono text-[#c5a059]">
                  <Eye className="w-4 h-4" />
                  <span>CONCEPT BLUEPRINT PREVIEW</span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('visualizer')}
                    className={`px-3 py-1 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'visualizer'
                        ? 'bg-gradient-to-r from-[#c5a059] to-[#e5c178] text-black font-bold'
                        : 'text-[#a39e93] hover:text-[#f6f3eb]'
                    }`}
                  >
                    Visualizer
                  </button>
                  <button
                    onClick={() => setActiveTab('pricing')}
                    className={`px-3 py-1 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'pricing'
                        ? 'bg-gradient-to-r from-[#c5a059] to-[#e5c178] text-black font-bold'
                        : 'text-[#a39e93] hover:text-[#f6f3eb]'
                    }`}
                  >
                    Parts Price
                  </button>
                </div>
              </div>

              {/* Simulation Screen */}
              <div className="relative aspect-[4/3] rounded-xl bg-[#08090d] border border-[#c5a059]/20 p-4 flex flex-col justify-between overflow-hidden">
                <div className="absolute inset-0 bg-flow-pattern opacity-40" />
                
                {activeTab === 'visualizer' ? (
                  <div className="relative z-10 flex flex-col justify-between h-full space-y-4">
                    <div className="flex items-center justify-between text-xs text-[#a39e93] font-mono">
                      <span>[MODE: VISUAL SIMULATION]</span>
                      <span className="text-[#c5a059]">AI PROMPT MOCK</span>
                    </div>

                    <div className="my-auto text-center space-y-3 p-4 rounded-xl bg-[#0d0f17] border border-[#c5a059]/30">
                      <div className="w-12 h-12 mx-auto rounded-full bg-[#c5a059]/15 border border-[#c5a059]/40 flex items-center justify-center text-[#c5a059]">
                        <Cpu className="w-6 h-6 animate-pulse" />
                      </div>
                      <h5 className="text-sm font-bold text-[#f6f3eb] font-serif-heading">Vehicle Modification Concept</h5>
                      <p className="text-xs text-[#a39e93]">
                        Select stock vehicle &rarr; Apply AI modification prompt &rarr; Generate visual render preview
                      </p>
                    </div>

                    <div className="flex justify-between items-center text-[10px] text-[#716c62] font-mono border-t border-[#c5a059]/15 pt-2">
                      <span>Input: Stock Body</span>
                      <span>Output: Custom Render</span>
                    </div>
                  </div>
                ) : (
                  <div className="relative z-10 flex flex-col justify-between h-full space-y-3">
                    <div className="flex items-center justify-between text-xs text-[#a39e93] font-mono">
                      <span>[MODE: SPARE PARTS COST]</span>
                      <span className="text-[#c5a059]">ESTIMATOR</span>
                    </div>

                    <div className="space-y-2">
                      <div className="p-2.5 rounded-lg bg-[#0d0f17] border border-[#c5a059]/20 flex justify-between items-center text-xs">
                        <span className="text-[#e8e4d9]">Aerodynamic Front Bumper</span>
                        <span className="text-[#c5a059] font-mono font-semibold">Spare Part Price</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#0d0f17] border border-[#c5a059]/20 flex justify-between items-center text-xs">
                        <span className="text-[#e8e4d9]">Custom Alloy Rims (Set)</span>
                        <span className="text-[#c5a059] font-mono font-semibold">Spare Part Price</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#0d0f17] border border-[#c5a059]/20 flex justify-between items-center text-xs">
                        <span className="text-[#e8e4d9]">Rear Spoiler Assembly</span>
                        <span className="text-[#c5a059] font-mono font-semibold">Spare Part Price</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-[10px] text-[#716c62] font-mono border-t border-[#c5a059]/15 pt-2">
                      <span>Data Module: Spare Parts Catalog</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="text-[11px] text-[#a39e93] text-center font-mono">
                Click tabs above to toggle concept interface preview
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
