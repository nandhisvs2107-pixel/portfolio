import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040406] border-t border-white/10 py-12 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-lg font-bold text-white font-heading tracking-tight">
              NANDHIS V S
            </h3>
            <p className="text-xs text-zinc-400 font-mono">
              IT STUDENT — SNS College of Technology
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/nandhisvs2107-pixel"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-zinc-900 hover:bg-white hover:text-black text-zinc-300 border border-white/10 transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.linkedin.com/in/nandhisvs/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-zinc-900 hover:bg-white hover:text-black text-zinc-300 border border-white/10 transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href="mailto:nandhisvs@gmail.com"
              className="p-2.5 rounded-xl bg-zinc-900 hover:bg-white hover:text-black text-zinc-300 border border-white/10 transition-all"
              aria-label="Email Nandhis V S"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-zinc-900 hover:bg-white hover:text-black text-zinc-300 border border-white/10 transition-all ml-2"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-500 gap-4">
          <p>© 2026 NANDHIS V S. All rights reserved.</p>
          <p className="text-[11px] text-zinc-400">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};
