/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * K S Associates – Corporate Footer (Refined Standard)
 */

import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO, SERVICES } from '../data/company';
import { Phone, Mail, MapPin, FileText, ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenContactModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNav = (page: string) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#343A24] text-white pt-16 pb-12 border-t border-[#C6A65B]/20">
      <div className="corporate-container">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/10">
          {/* Brand Info & Identity */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="light" size="md" showTagline={true} />
            <p className="text-white/75 text-xs sm:text-sm leading-relaxed max-w-md pt-1">
              K S Associates delivers multidisciplinary civil engineering, precision land surveying,
              and photorealistic 3D architectural design solutions across Kerala, grounded in meticulous planning,
              structural integrity, and quality execution.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-white/70">
              <div className="flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-[#C6A65B] shrink-0" />
                <span>
                  <strong className="text-white font-medium">GSTIN:</strong>{' '}
                  <span className="font-numeric text-[#C6A65B] font-bold">{COMPANY_INFO.gstin}</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-white/60">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A65B]" />
                <span>Documented Subcontract Structural Civil Experience (Tuneri, Kerala)</span>
              </div>
            </div>

          </div>

          {/* Core Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-heading text-sm font-semibold text-white tracking-wider uppercase">
              Primary Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <button
                    onClick={() => handleNav('services')}
                    className="text-white/75 hover:text-[#C6A65B] transition-colors flex items-center gap-2 text-left"
                  >
                    <span className="text-[#C6A65B] font-numeric text-[11px] font-bold">
                      {s.number}
                    </span>
                    <span>{s.title}</span>
                  </button>
                </li>
              ))}
              <li className="pt-1">
                <button
                  onClick={() => handleNav('projects')}
                  className="text-white/75 hover:text-[#C6A65B] transition-colors flex items-center gap-1.5 text-left text-xs"
                >
                  <ArrowRight className="w-3 h-3 text-[#C6A65B]" />
                  <span>Selected Projects Archive</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-sm font-semibold text-white tracking-wider uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => handleNav(item.toLowerCase())}
                    className="text-white/75 hover:text-white transition-colors text-left"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Contact Info */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-heading text-sm font-semibold text-white tracking-wider uppercase">
              Office
            </h4>
            <div className="space-y-3 text-xs text-white/75">
              <div>
                <div className="text-[10px] text-white/50 uppercase">Key Contact</div>
                <div className="text-white font-medium">{COMPANY_INFO.contactPerson.name} ({COMPANY_INFO.contactPerson.designation})</div>
              </div>

              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="flex items-start gap-2.5 hover:text-[#C6A65B] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C6A65B] shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] text-white/50 uppercase">Telephone</div>
                  <span className="font-numeric text-white text-[13px] font-bold">
                    {COMPANY_INFO.displayPhone}
                  </span>
                </div>
              </a>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                  COMPANY_INFO.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-[#25D366] transition-colors"
              >
                <div className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5 flex items-center justify-center font-bold text-xs">
                  WA
                </div>
                <div>
                  <div className="text-[10px] text-white/50 uppercase">WhatsApp</div>
                  <span className="font-numeric text-[#25D366] text-[13px] font-bold">
                    {COMPANY_INFO.displayWhatsApp}
                  </span>
                </div>
              </a>

              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="flex items-start gap-2.5 hover:text-[#C6A65B] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#C6A65B] shrink-0 mt-0.5" />
                <div className="break-all">
                  <div className="text-[10px] text-white/50 uppercase">Email</div>
                  <span className="text-white">{COMPANY_INFO.email}</span>
                </div>
              </a>

              <div className="flex items-start gap-2.5 pt-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#C6A65B] shrink-0 mt-0.5" />
                <div className="leading-relaxed text-[11px]">
                  <div className="text-[10px] text-white/50 uppercase">Address</div>
                  <span>{COMPANY_INFO.address.line1}, {COMPANY_INFO.address.landmark}</span>
                  <br />
                  <span>{COMPANY_INFO.address.postOffice}, {COMPANY_INFO.address.city} – {COMPANY_INFO.address.pincode}</span>
                  <br />
                  <span className="text-[#C6A65B]">{COMPANY_INFO.address.state}, {COMPANY_INFO.address.country}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-white/50 gap-4">
          <p>
            © {currentYear} <strong className="text-white font-medium">K S Associates</strong>. All rights reserved. Engineering Construction & Surveying.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[11px]">
            <span>GSTIN: {COMPANY_INFO.gstin}</span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span>Feroke, Calicut, Kerala</span>
            <span aria-hidden="true" className="text-white/20">·</span>
            <span>
              Website built by <strong className="text-[#C6A65B] font-medium">Gopika MK</strong>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
