import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Code2 } from 'lucide-react';
import { SITE_CONFIG } from '../../constants/config';
import { ThemeToggle } from './ThemeToggle';
import { useScrollSpy } from '../../hooks/useScrollSpy';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sectionIds = ['home', 'about', 'skills', 'projects', 'dsa', 'hackathons', 'education', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 120);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 bg-white/80 dark:bg-[#090d16]/85 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 shadow-sm'
          : 'py-4 sm:py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavLinkClick(e, '#home')}
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg p-1"
        >
          <div className="w-9 h-9 rounded-xl bg-slate-900 dark:bg-slate-800 border border-teal-500/40 flex items-center justify-center text-teal-400 group-hover:border-teal-400 transition-colors shadow-sm">
            <Code2 className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-teal-500 transition-colors">
              Ankit Kumar
            </span>
            <span className="text-[10px] font-mono font-medium text-teal-600 dark:text-teal-400 -mt-1">
              B.Tech CSE '28
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-100/70 dark:bg-slate-900/60 p-1.5 rounded-full border border-slate-200/80 dark:border-slate-800">
          {SITE_CONFIG.navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavLinkClick(e, link.href)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-white dark:bg-slate-800 text-teal-600 dark:text-teal-400 shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle & Resume Button */}
        <div className="hidden sm:flex items-center gap-3">
          <ThemeToggle />
          <a
            href={SITE_CONFIG.resume.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white dark:bg-teal-500/10 dark:hover:bg-teal-500/20 dark:text-teal-300 dark:border dark:border-teal-500/30 transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger & Theme Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 mx-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-2">
          <nav className="flex flex-col space-y-1">
            {SITE_CONFIG.navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavLinkClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-teal-500/10 text-teal-600 dark:text-teal-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800">
            <a
              href={SITE_CONFIG.resume.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold bg-teal-500 text-white hover:bg-teal-600 transition-colors shadow-sm"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
