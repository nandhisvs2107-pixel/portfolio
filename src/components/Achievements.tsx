import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Sparkles, Terminal, ShieldCheck } from 'lucide-react';

export const Achievements: React.FC = () => {
  const activities = [
    {
      category: 'LEADERSHIP',
      title: 'Conducted a Hackathon',
      description: 'Led the planning, coordination, and execution of a college technical hackathon event.',
      icon: Terminal,
    },
    {
      category: 'EVENT ORGANIZATION',
      title: 'Conducted Cultural Events',
      description: 'Contributed actively to organizing campus cultural events and student engagement programs.',
      icon: Users,
    },
    {
      category: 'HACKATHONS',
      title: 'Participated in Multiple Hackathons',
      description: 'Actively competed in tech hackathons to solve problems, learn under time limits, and collaborate.',
      icon: Trophy,
    },
  ];

  return (
    <section id="achievements" className="py-24 bg-[#07080b] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d0f17] border border-[#c5a059]/30 text-[#e5c178] text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>ACTIVITIES & LEADERSHIP</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-[#f6f3eb] tracking-tight font-serif-heading">
            Achievements & Activities
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-2" />
          <p className="text-[#a39e93] text-sm sm:text-base">
            Extracurricular engagement, event organization, and hackathon participation.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {activities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={activity.title}
                className="glass-card-luxury p-7 rounded-2xl border border-[#c5a059]/20 shadow-xl flex flex-col justify-between"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#0d0f17] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono bg-[#08090d] border border-[#c5a059]/20 text-[#c5a059]">
                      {activity.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#f6f3eb] font-serif-heading mb-2">
                    &ldquo;{activity.title}&rdquo;
                  </h3>
                  <p className="text-sm text-[#e6e2d8] leading-relaxed">
                    {activity.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#c5a059]/15 flex items-center justify-between text-xs text-[#a39e93] font-mono">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#c5a059]" />
                    Extracurricular
                  </span>
                  <span className="text-[#c5a059]">Active</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
