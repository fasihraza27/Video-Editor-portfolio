import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { EDITOR_PROFILE } from '../data/portfolioData';

interface NavbarProps {
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Process', href: '#process' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#09090b]/85 backdrop-blur-md border-b border-white/[0.08] py-4'
            : 'bg-transparent border-b border-transparent py-6'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Wordmark */}
            <a
              href="#"
              className="text-sm font-semibold tracking-widest uppercase text-white whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
            >
              {EDITOR_PROFILE.name}
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide uppercase text-neutral-400">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="hover:text-white transition-colors whitespace-nowrap shrink-0"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Clean Minimal CTA */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              <a
                href="#contact"
                onClick={(e) => {
                  handleNavClick(e, '#contact');
                  if (onOpenContact) onOpenContact();
                }}
                className="px-4 py-2 text-xs font-medium tracking-wide text-white bg-white/10 hover:bg-white hover:text-black border border-white/15 rounded-md transition-all whitespace-nowrap shrink-0"
              >
                Let's Collaborate
              </a>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle navigation"
                className="p-1.5 text-neutral-400 hover:text-white transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-[#09090b]/98 backdrop-blur-2xl flex flex-col justify-between pt-28 pb-10 px-8">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xl font-medium tracking-tight text-neutral-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/[0.08] space-y-3">
            <a
              href="#contact"
              onClick={(e) => {
                handleNavClick(e, '#contact');
                if (onOpenContact) onOpenContact();
              }}
              className="block w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-black bg-white rounded-md"
            >
              Start a Project
            </a>
            <p className="text-xs text-neutral-500 text-center">
              Available for select projects
            </p>
          </div>
        </div>
      )}
    </>
  );
};
