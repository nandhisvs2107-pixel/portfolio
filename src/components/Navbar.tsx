import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(targetId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#07080b]/90 backdrop-blur-md border-b border-[#c5a059]/20 py-3.5 shadow-2xl shadow-black'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Monogram Crest / Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
            aria-label="Nandhis V S Portfolio Home"
          >
            <div className="w-9 h-9 rounded-md bg-[#0d0f17] border border-[#c5a059]/40 flex items-center justify-center text-[#e5c178] font-cinzel font-bold text-sm tracking-wider group-hover:border-[#c5a059] transition-colors shadow-md">
              NVS
            </div>
            <div className="flex flex-col">
              <span className="font-semibold tracking-wide text-[#f5f2eb] font-cinzel text-sm group-hover:text-[#c5a059] transition-colors">
                NANDHIS V S
              </span>
              <span className="text-[9px] text-[#c5a059] font-mono uppercase tracking-widest -mt-0.5">
                IT Student
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0d0f17]/90 p-1.5 rounded-full border border-[#c5a059]/20 backdrop-blur-md shadow-lg">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#c5a059] to-[#e5c178] text-black font-bold shadow-md'
                      : 'text-[#a39e93] hover:text-[#f5f2eb] hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Quick Contact CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="mailto:nandhisvs@gmail.com"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium text-[#f5f2eb] bg-[#0d0f17] border border-[#c5a059]/30 hover:border-[#c5a059] hover:bg-[#c5a059] hover:text-black transition-all duration-300"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#c5a059] group-hover:text-black" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-[#0d0f17] text-[#e8e4d9] hover:text-[#c5a059] border border-[#c5a059]/30 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#07080b]/95 backdrop-blur-xl border-b border-[#c5a059]/20 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-4 duration-200">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-gradient-to-r from-[#c5a059] to-[#e5c178] text-black font-bold'
                    : 'text-[#a39e93] hover:bg-white/5 hover:text-[#f5f2eb]'
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <div className="pt-2 border-t border-[#c5a059]/20">
            <a
              href="mailto:nandhisvs@gmail.com"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg text-xs font-bold bg-gradient-to-r from-[#c5a059] to-[#e5c178] text-black hover:opacity-90 transition-opacity"
            >
              Email Me Directly
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
