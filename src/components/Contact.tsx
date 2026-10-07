import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Copy, Check, Send, Sparkles, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const email = 'nandhisvs@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/nandhisvs/';
  const githubUrl = 'https://github.com/nandhisvs2107-pixel';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);

    try {
      confetti({
        particleCount: 40,
        spread: 55,
        origin: { y: 0.85 },
        colors: ['#c5a059', '#e5c178', '#f6f3eb'],
      });
    } catch {
      // Ignore fallback
    }

    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0b0f] relative overflow-hidden border-t border-[#c5a059]/15">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c5a059]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0d0f17] border border-[#c5a059]/30 text-[#e5c178] text-xs font-mono tracking-widest uppercase">
            <Send className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#f6f3eb] tracking-tight font-serif-heading">
            Let&apos;s Build Something.
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-2" />
          <p className="text-[#a39e93] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Have an idea, opportunity, or project worth discussing? Feel free to reach out.
          </p>
        </div>

        {/* Contact Container Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass-card-luxury p-8 sm:p-12 rounded-3xl border border-[#c5a059]/30 shadow-2xl space-y-10 text-center relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Primary Action Section */}
            <div className="space-y-6 max-w-xl mx-auto">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-[#0d0f17] border border-[#c5a059]/30 flex items-center justify-center text-[#c5a059] shadow-lg">
                <Mail className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#f6f3eb] font-serif-heading">
                  Direct Email Reachout
                </h3>
                <p className="text-sm text-[#c5a059] mt-1 font-mono">
                  {email}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4">
                {/* Main Email CTA Button */}
                <a
                  href={`mailto:${email}`}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-[#c5a059] via-[#e5c178] to-[#c5a059] text-black shadow-xl shadow-[#c5a059]/20 hover:shadow-[#c5a059]/35 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                  <span>Email Me</span>
                </a>

                {/* Quick Copy Email Button */}
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm bg-[#0d0f17] text-[#f5f2eb] border border-[#c5a059]/30 hover:border-[#c5a059] transition-all duration-200"
                  aria-label="Copy Email Address"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-[#c5a059]" />
                      <span className="text-[#c5a059] font-mono">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-[#a39e93]" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social Cards Grid */}
            <div className="pt-8 border-t border-[#c5a059]/15 grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* LinkedIn */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-[#08090d] hover:bg-[#c5a059] hover:text-black border border-[#c5a059]/20 transition-all flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#0d0f17] text-[#c5a059] group-hover:bg-black group-hover:text-white transition-colors">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#f6f3eb] group-hover:text-black font-serif-heading transition-colors">LinkedIn</h4>
                    <p className="text-[11px] text-[#a39e93] group-hover:text-black/80 font-mono">Connect Professional</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#a39e93] group-hover:text-black transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-[#08090d] hover:bg-[#c5a059] hover:text-black border border-[#c5a059]/20 transition-all flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#0d0f17] text-[#c5a059] group-hover:bg-black group-hover:text-white transition-colors">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#f6f3eb] group-hover:text-black font-serif-heading transition-colors">GitHub</h4>
                    <p className="text-[11px] text-[#a39e93] group-hover:text-black/80 font-mono">Code Repository</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#a39e93] group-hover:text-black transition-colors" />
              </a>

              {/* Direct Mail */}
              <a
                href={`mailto:${email}`}
                className="group p-5 rounded-2xl bg-[#08090d] hover:bg-[#c5a059] hover:text-black border border-[#c5a059]/20 transition-all flex items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#0d0f17] text-[#c5a059] group-hover:bg-black group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#f6f3eb] group-hover:text-black font-serif-heading transition-colors">Email</h4>
                    <p className="text-[11px] text-[#a39e93] group-hover:text-black/80 font-mono">nandhisvs@gmail.com</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#a39e93] group-hover:text-black transition-colors" />
              </a>

            </div>

            {/* Response Promise */}
            <div className="pt-2 flex items-center justify-center gap-2 text-xs text-[#a39e93] font-mono">
              <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Available for student collaborations, projects, and tech discussions</span>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};
