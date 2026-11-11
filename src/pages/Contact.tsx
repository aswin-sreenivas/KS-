/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * K S Associates – Corporate Contact & Consultation Desk (Refined Standard)
 */

import React from 'react';
import { COMPANY_INFO } from '../data/company';
import { ContactForm } from '../components/ContactForm';
import {
  Phone,
  Mail,
  MapPin,
  FileText,
  ExternalLink,
  User,
  MessageSquare
} from 'lucide-react';

export const Contact: React.FC = () => {
  const mapEmbedUrl = `https://maps.google.com/maps?q=Farook+Hospital+Complex,+Feroke,+Kozhikode,+Kerala&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="w-full pt-28 pb-20">
      {/* Header Banner */}
      <section className="bg-[#343A24] text-white py-16 sm:py-20 mb-16 border-b border-[#C6A65B]/20">
        <div className="corporate-container">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A65B]">
              Engineering Consultation & Desk
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-heading font-semibold text-white tracking-tight">
              Contact Us
            </h1>
            <p className="text-base sm:text-lg text-white/85 font-normal leading-relaxed">
              Reach our engineering office in Feroke, Calicut to discuss construction works, land surveying, or 3D architectural visualizations.
            </p>
          </div>
        </div>
      </section>

      <div className="corporate-container space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Official Information Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A65B]">
                Official Registered Office
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#343A24] mt-1">
                {COMPANY_INFO.fullName}
              </h2>
              <p className="text-xs uppercase tracking-wider font-semibold text-[#C6A65B] mt-1">
                {COMPANY_INFO.tagline}
              </p>
            </div>

            {/* Contact Details List */}
            <div className="space-y-3.5">
              {/* Contact Person */}
              <div className="p-4 bg-white rounded-[2px] border border-[#292B27]/10 flex items-start gap-4">
                <div className="w-9 h-9 rounded-[2px] bg-[#343A24] text-[#C6A65B] flex items-center justify-center shrink-0">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#77786F]">Key Contact Person</div>
                  <div className="text-base font-semibold text-[#292B27]">
                    {COMPANY_INFO.contactPerson.name}
                  </div>
                  <p className="text-xs text-[#C6A65B] font-semibold uppercase tracking-wider">
                    {COMPANY_INFO.contactPerson.designation}
                  </p>
                </div>
              </div>

              {/* Direct Telephone */}
              <div className="p-4 bg-white rounded-[2px] border border-[#292B27]/10 flex items-start gap-4">
                <div className="w-9 h-9 rounded-[2px] bg-[#343A24] text-[#C6A65B] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#77786F]">Primary Contact Number</div>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="text-base font-numeric font-bold text-[#292B27] hover:text-[#C6A65B] transition-colors"
                  >
                    {COMPANY_INFO.displayPhone}
                  </a>
                  <p className="text-xs text-[#77786F] mt-0.5">
                    Available for consultations, site visits, and project enquiries.
                  </p>
                </div>
              </div>

              {/* WhatsApp Hotline */}
              <div className="p-4 bg-white rounded-[2px] border border-[#292B27]/10 flex items-start gap-4">
                <div className="w-9 h-9 rounded-[2px] bg-[#25D366] text-white flex items-center justify-center shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#77786F]">Official WhatsApp</div>
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                      COMPANY_INFO.whatsappMessage
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-numeric font-bold text-[#292B27] hover:text-[#25D366] transition-colors"
                  >
                    {COMPANY_INFO.displayWhatsApp}
                  </a>
                  <p className="text-xs text-[#77786F] mt-0.5">
                    Instant messaging for drawings, site surveys, and quotes.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="p-4 bg-white rounded-[2px] border border-[#292B27]/10 flex items-start gap-4">
                <div className="w-9 h-9 rounded-[2px] bg-[#343A24] text-[#C6A65B] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] uppercase tracking-wider text-[#77786F]">Official Email</div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="text-sm font-semibold text-[#292B27] hover:text-[#C6A65B] transition-colors break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                  <p className="text-xs text-[#77786F] mt-0.5">
                    Send tender documents, architectural CAD files, and inquiries.
                  </p>
                </div>
              </div>

              {/* Office Address */}
              <div className="p-4 bg-white rounded-[2px] border border-[#292B27]/10 flex items-start gap-4">
                <div className="w-9 h-9 rounded-[2px] bg-[#343A24] text-[#C6A65B] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#77786F]">Office Location</div>
                  <p className="text-sm text-[#292B27] leading-relaxed font-medium">
                    {COMPANY_INFO.address.line1}, {COMPANY_INFO.address.landmark}
                    <br />
                    {COMPANY_INFO.address.postOffice}, {COMPANY_INFO.address.city} – {COMPANY_INFO.address.pincode}
                    <br />
                    <span className="text-[#77786F] font-normal">{COMPANY_INFO.address.state}, {COMPANY_INFO.address.country}</span>
                  </p>
                </div>
              </div>

              {/* GSTIN */}
              <div className="p-4 bg-white rounded-[2px] border border-[#292B27]/10 flex items-start gap-4">
                <div className="w-9 h-9 rounded-[2px] bg-[#343A24] text-[#C6A65B] flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider text-[#77786F]">Tax Registration</div>
                  <p className="text-sm font-numeric font-bold text-[#292B27]">
                    GSTIN: {COMPANY_INFO.gstin}
                  </p>
                  <p className="text-xs text-[#77786F] mt-0.5">
                    Official Goods & Services Tax identification number.
                  </p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action Plate */}
            <div className="p-6 bg-[#343A24] text-white rounded-[2px] space-y-3 border border-[#C6A65B]/20">
              <span className="text-xs text-[#C6A65B] uppercase block font-semibold tracking-wider">
                Instant WhatsApp Enquiry
              </span>
              <p className="text-xs text-white/80 leading-relaxed">
                Connect instantly with our team for questions regarding building plans, surveying appointments, or subcontract pricing.
              </p>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                  COMPANY_INFO.whatsappMessage
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/15 text-white border border-white/20 rounded-[2px] font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                <span>Open WhatsApp Chat</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-[2px] border border-[#292B27]/12 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A65B]">
                Project Consultation Form
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-[#343A24] mt-1">
                Send Us an Enquiry
              </h3>
              <p className="text-xs sm:text-sm text-[#77786F] mt-1">
                Select your required service (Construction, Survey, or 3D Design) and share your project details.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>

        {/* Map Section */}
        <section className="bg-white rounded-[2px] overflow-hidden border border-[#292B27]/10 space-y-4 p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-[#292B27]/8">
            <div>
              <h3 className="font-heading font-semibold text-xl text-[#343A24]">
                Office Location Map
              </h3>
              <p className="text-xs text-[#77786F]">
                Farook Hospital Complex, Feroke, Calicut, Kerala – 673631
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Farook+Hospital+Complex,+Feroke,+Kozhikode,+Kerala"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#C6A65B] hover:text-[#292B27] font-medium flex items-center gap-1 transition-colors"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="w-full h-80 sm:h-96 rounded-[2px] overflow-hidden bg-black/5 relative">
            <iframe
              title="K S Associates Office Location Map"
              src={mapEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>
    </div>
  );
};
