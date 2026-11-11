/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * K S Associates – Corporate Navigation Bar
 */

import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/company';
import { Phone, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenContactModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isTransparent = !isScrolled && currentPage === 'home';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
          isTransparent
            ? 'bg-gradient-to-b from-[#242918]/85 via-[#242918]/40 to-transparent py-4 sm:py-5'
            : 'bg-[#343A24] border-b border-[#C6A65B]/20 py-3.5 shadow-sm'
        }`}
      >
        <div className="corporate-container">
          <div className="flex items-center justify-between">
            {/* Official Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A65B]"
              aria-label="K S Associates – Return to Homepage"
            >
              <Logo
                variant="light"
                size={isScrolled ? 'sm' : 'md'}
                showTagline={true}
              />
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-8">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`text-[13px] tracking-normal font-medium transition-colors duration-150 py-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A65B] ${
                      isActive
                        ? 'text-[#C6A65B] font-semibold'
                        : 'text-white/85 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="p-2 text-[#C6A65B] hover:text-white"
                aria-label="Direct Phone Call"
              >
                <Phone className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white hover:text-[#C6A65B] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A65B]"
                aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/60 md:hidden">
          <div className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-[#343A24] text-white p-6 shadow-xl flex flex-col justify-between border-l border-[#C6A65B]/20">
            <div>
              <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
                <Logo variant="light" size="sm" showTagline={false} />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-white/70 hover:text-white"
                  aria-label="Close navigation"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-3">
                {navLinks.map((link) => {
                  const isActive = currentPage === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => handleNavClick(link.id)}
                      className={`block w-full text-left text-base font-heading py-2.5 transition-colors border-b border-white/5 ${
                        isActive
                          ? 'text-[#C6A65B] font-semibold pl-2 border-l-2 border-l-[#C6A65B]'
                          : 'text-white/85 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 space-y-4 text-xs text-white/70">
              <div>
                <p className="font-semibold text-white mb-0.5">Office Location:</p>
                <p>{COMPANY_INFO.address.line1}, {COMPANY_INFO.address.landmark}</p>
                <p>{COMPANY_INFO.address.city} – {COMPANY_INFO.address.pincode}</p>
              </div>

              <div>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="flex items-center gap-2 text-[#C6A65B] font-numeric hover:underline"
                >
                  <Phone className="w-3.5 h-3.5" />
                  {COMPANY_INFO.displayPhone}
                </a>
              </div>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (onOpenContactModal) {
                    onOpenContactModal();
                  } else {
                    handleNavClick('contact');
                  }
                }}
                className="w-full py-2.5 px-4 bg-[#C6A65B] text-[#292B27] font-semibold text-center rounded-[3px] uppercase tracking-wider text-xs hover:bg-[#DECA8D] transition-colors"
              >
                Discuss Your Project
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
