/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * K S Associates – Corporate Profile: About Us (Refined Standard)
 */

import React from 'react';
import { COMPANY_INFO, CREDENTIALS_DATA } from '../data/company';
import heroImg1 from '@/src/assets/images/ks_hero_render_1793621473732.jpg';
import constructionRccImg from '@/src/assets/images/ks_construction_rcc_1793621557021.jpg';
import surveyingSiteImg from '@/src/assets/images/ks_surveying_site_1793621570744.jpg';
import cadDrawingImg from '@/src/assets/images/ks_cad_drawing_1793621586595.jpg';
import {
  Building2,
  Compass,
  Box,
  CheckCircle2,
  ShieldCheck,
  Award,
  FileCheck,
  Download
} from 'lucide-react';

interface AboutProps {
  onNavigate: (page: string) => void;
  onOpenContactModal: () => void;
}

export const About: React.FC<AboutProps> = ({ onNavigate, onOpenContactModal }) => {
  return (
    <div className="w-full pt-28 pb-20">
      {/* Header Banner */}
      <section className="bg-[#343A24] text-white py-16 sm:py-20 mb-16 border-b border-[#C6A65B]/20">
        <div className="corporate-container">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A65B]">
              Practice Profile · Engineering Construction & Surveying
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-heading font-semibold text-white tracking-tight">
              About K S Associates
            </h1>
            <p className="text-base sm:text-lg text-white/85 font-normal leading-relaxed">
              An engineering-led practice integrating precision land surveying, structural civil execution, and photorealistic architectural 3D visualization.
            </p>
          </div>
        </div>
      </section>

      <div className="corporate-container space-y-24">
        {/* SECTION 1: Company Introduction */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A65B]">
                Section <span className="font-numeric">01</span> · Corporate Profile
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#343A24]">
                Company Introduction
              </h2>
            </div>

            <div className="space-y-4 text-[15px] sm:text-base text-[#4A4D46] leading-relaxed">
              <p>
                <strong className="text-[#292B27]">{COMPANY_INFO.fullName}</strong> is a civil engineering and construction company committed to delivering high-quality construction solutions with excellence, reliability and professionalism. Operating with GSTIN registration <span className="font-numeric text-[#292B27] font-bold">{COMPANY_INFO.gstin}</span> from our primary office in the Farook Hospital Complex (Feroke, Calicut), we provide specialized civil engineering and surveying services across Kerala.
              </p>
              <p>
                Our services focus on planning, designing and executing construction projects with meticulous attention to quality, safety and customer satisfaction. We aim to turn our clients' visions into reality through innovative ideas, skilled workmanship and strong foundations.
              </p>
              <p>
                Our core activities center on three interconnected engineering pillars: <strong>Construction</strong>, <strong>Survey</strong>, and <strong>3D Design</strong>. Accurate survey data establishes the site's physical truth; 3D visualization validates spatial aesthetics and proportions; and disciplined structural execution builds enduring landmarks.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#292B27]">
              <div className="p-4 bg-white rounded-[2px] border border-[#292B27]/10">
                <span className="text-[#C6A65B] text-[11px] uppercase tracking-wider block mb-1 font-semibold">MANAGEMENT</span>
                <span className="text-[#292B27] font-bold text-sm block">{COMPANY_INFO.contactPerson.name}</span>
                <span className="text-[#77786F] text-[11px] uppercase tracking-wider">{COMPANY_INFO.contactPerson.designation}</span>
              </div>
              <div className="p-4 bg-white rounded-[2px] border border-[#292B27]/10">
                <span className="text-[#C6A65B] text-[11px] uppercase tracking-wider block mb-1 font-semibold">PRIMARY DESK</span>
                <span className="text-[#4A4D46] leading-relaxed">
                  Call: <span className="font-numeric font-bold text-[#292B27]">{COMPANY_INFO.displayPhone}</span><br />
                  WhatsApp: <span className="font-numeric font-bold text-[#25D366]">{COMPANY_INFO.displayWhatsApp}</span>
                </span>
              </div>
              <div className="p-4 bg-white rounded-[2px] border border-[#292B27]/10">
                <span className="text-[#C6A65B] text-[11px] uppercase tracking-wider block mb-1 font-semibold">REGISTERED OFFICE</span>
                <span className="text-[#4A4D46] leading-relaxed">
                  {COMPANY_INFO.address.line1}, {COMPANY_INFO.address.landmark}, Feroke, Calicut – {COMPANY_INFO.address.pincode}
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-[2px] overflow-hidden border border-[#292B27]/12 shadow-sm aspect-[4/3]">
              <img
                src={heroImg1}
                alt="K S Associates Architectural Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-3 right-3 bg-[#343A24] text-[#C6A65B] text-[11px] px-2.5 py-1 rounded-[2px] font-semibold uppercase tracking-wider">
                Architectural Visualization Practice
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Our Approach */}
        <section className="bg-white p-8 sm:p-12 rounded-[2px] border border-[#292B27]/10 space-y-8">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A65B]">
              Section <span className="font-numeric">02</span> · Operational Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#343A24]">
              Our Approach
            </h2>
            <p className="text-sm sm:text-base text-[#4A4D46] leading-relaxed">
              How accurate surveying, realistic visualization, and rigorous civil engineering synchronize to eliminate construction risks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#F5F4EF] rounded-[2px] border border-[#292B27]/8 space-y-2.5">
              <div className="w-8 h-8 bg-[#343A24] text-[#C6A65B] flex items-center justify-center font-numeric font-bold text-xs rounded-[2px]">
                01
              </div>
              <h3 className="font-heading font-semibold text-lg text-[#343A24]">
                Phase 1: Ground Truth & Survey
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4D46] leading-relaxed">
                Before any architectural lines are finalized, the physical boundaries, levels, setbacks, and contours of the plot are verified. This eliminates boundary disputes and foundation level miscalculations.
              </p>
            </div>

            <div className="p-6 bg-[#F5F4EF] rounded-[2px] border border-[#292B27]/8 space-y-2.5">
              <div className="w-8 h-8 bg-[#343A24] text-[#C6A65B] flex items-center justify-center font-numeric font-bold text-xs rounded-[2px]">
                02
              </div>
              <h3 className="font-heading font-semibold text-lg text-[#343A24]">
                Phase 2: 3D Architectural Modeling
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4D46] leading-relaxed">
                Floor plans are translated into true-to-scale 3D exterior models. Stakeholders inspect daylighting, facade materials, window placement, and volumetric proportions, finalizing decisions prior to mobilization.
              </p>
            </div>

            <div className="p-6 bg-[#F5F4EF] rounded-[2px] border border-[#292B27]/8 space-y-2.5">
              <div className="w-8 h-8 bg-[#343A24] text-[#C6A65B] flex items-center justify-center font-numeric font-bold text-xs rounded-[2px]">
                03
              </div>
              <h3 className="font-heading font-semibold text-lg text-[#343A24]">
                Phase 3: Structural Execution
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4D46] leading-relaxed">
                Execution follows vetted structural drawings strictly. Steel reinforcement, formwork tolerances, concrete grades, and curing cycles are rigorously monitored to ensure long-term structural safety.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: Our Expertise */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-[2px] overflow-hidden border border-[#292B27]/10">
                <img
                  src={constructionRccImg}
                  alt="RCC Structural Framework Execution"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-square rounded-[2px] overflow-hidden border border-[#292B27]/10">
                <img
                  src={surveyingSiteImg}
                  alt="Precision Land Surveying Field Scene"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="aspect-video rounded-[2px] overflow-hidden border border-[#292B27]/10 col-span-2">
                <img
                  src={cadDrawingImg}
                  alt="Architectural Working CAD Plans"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A65B]">
                Section <span className="font-numeric">03</span> · Core Competencies
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-[#343A24]">
                Our Expertise
              </h2>
            </div>

            <div className="space-y-4 text-[15px] text-[#4A4D46] leading-relaxed">
              <p>
                Our technical capability spans commercial buildings, multi-family residential apartments, and custom villa estates across Kozhikode and Malappuram districts.
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-[#292B27]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A65B] shrink-0 mt-0.5" />
                  <span>
                    <strong>Reinforced Concrete (RCC) Subcontracts:</strong> Execution of foundations, load-bearing columns, floor beams, and structural slabs for public and institutional buildings.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A65B] shrink-0 mt-0.5" />
                  <span>
                    <strong>Engineering Surveying & Demarcation:</strong> Establishing verified site boundaries, property dimensions, and coordinate baselines.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#C6A65B] shrink-0 mt-0.5" />
                  <span>
                    <strong>3D Architectural Rendering:</strong> Translating CAD drawings into photo-accurate daylight, twilight, and facade perspectives.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 4 & 5: Our Commitment & Our Work Philosophy */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section 4: Our Commitment */}
          <div className="p-8 bg-[#F5F4EF] rounded-[2px] border border-[#292B27]/10 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A65B]">
              Section <span className="font-numeric">04</span> · Quality Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#343A24]">
              Our Commitment
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-[#4A4D46] leading-relaxed">
              <p>
                At K S Associates, our commitment is centered on transparency, build quality, and structural accountability. We do not compromise on material specifications or bypass site testing protocols.
              </p>
              <p>
                We pledge that every drawing delivered is technically constructible, every site dimension reported is mathematically verified, and every structural concrete member placed meets approved architectural specifications and scheduled milestones.
              </p>
            </div>
          </div>

          {/* Section 5: Our Work Philosophy */}
          <div className="p-8 bg-[#F5F4EF] rounded-[2px] border border-[#292B27]/10 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A65B]">
              Section <span className="font-numeric">05</span> · Ethos
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#343A24]">
              Our Work Philosophy
            </h2>
            <div className="space-y-3 text-xs sm:text-sm text-[#4A4D46] leading-relaxed">
              <p className="font-medium text-[#292B27]">
                "A building is only as reliable as the foundation beneath it and the planning behind it."
              </p>
              <p>
                We believe that great architecture is not merely an artistic sketch, but a rigorous synthesis of geography, structural physics, and craftsmanship. By maintaining strict discipline across our three primary services, we ensure that clients receive enduring value rather than temporary finishes.
              </p>
            </div>
          </div>
        </section>

        {/* DOCUMENTED CONSTRUCTION EXPERIENCE & CREDENTIALS SECTION */}
        <section className="p-8 sm:p-12 bg-white rounded-[2px] border border-[#292B27]/12 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[#292B27]/10 pb-6 gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C6A65B]">
                <ShieldCheck className="w-4 h-4 text-[#C6A65B]" />
                <span>Verified Documentation</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#343A24] mt-1">
                {CREDENTIALS_DATA.title}
              </h2>
            </div>
            <div className="text-xs bg-[#F5F4EF] px-3 py-1.5 rounded-[2px] border border-[#292B27]/10 self-start md:self-auto">
              Certificate Date: <span className="font-numeric font-bold">30 April 2026</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="text-sm font-semibold text-[#343A24]">
                Project: {CREDENTIALS_DATA.certificate.project}
              </div>
              <p className="text-xs sm:text-sm text-[#4A4D46] leading-relaxed">
                {CREDENTIALS_DATA.certificate.verificationStatement}
              </p>

              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#343A24] block">
                  Documented Subcontract Scope:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#4A4D46]">
                  {CREDENTIALS_DATA.certificate.scopeSummary.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2 bg-[#F5F4EF] rounded-[2px] border border-[#292B27]/8">
                      <FileCheck className="w-3.5 h-3.5 text-[#C6A65B] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compliance note regarding ISO status */}
              <div className="p-3.5 bg-[#F5F4EF] border-l-2 border-[#C6A65B] text-[11px] text-[#4A4D46] leading-relaxed">
                {CREDENTIALS_DATA.certificate.noteOnISO}
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#343A24] text-white p-6 rounded-[2px] space-y-4 border border-[#C6A65B]/20">
              <div className="flex items-center gap-2 text-[#C6A65B] text-xs font-semibold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Subcontract Certificate Record</span>
              </div>
              <div className="space-y-2.5 text-xs text-white/80">
                <div>
                  <span className="text-white/50 block text-[10px]">ISSUING AUTHORITY</span>
                  <strong className="text-white text-sm">{CREDENTIALS_DATA.certificate.issuer}</strong>
                  <div className="text-[#C6A65B] text-[11px]">{CREDENTIALS_DATA.certificate.issuerCredentials}</div>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <span className="text-white/50 block text-[10px]">AWARDED TO</span>
                  <strong className="text-white">{COMPANY_INFO.name}</strong>
                  <div className="text-white/70">{COMPANY_INFO.tagline}</div>
                </div>
                <div className="pt-2 border-t border-white/10">
                  <span className="text-white/50 block text-[10px]">RECORD LOCATION</span>
                  <span className="text-white">Tuneri, Kozhikode, Kerala</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Official Brand Identity & Transparent Logo Assets */}
        <section className="bg-white p-8 sm:p-10 rounded-[2px] border border-[#292B27]/10 shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A65B]">
              Official Identity Assets
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-[#343A24]">
              K S Associates Official Logo Assets (Transparent Background PNG)
            </h2>
            <p className="text-sm text-[#4A4D46] max-w-3xl leading-relaxed">
              Official high-resolution transparent background PNG assets extracted and calibrated from certified company documents. Suitable for architectural plans, subcontract letterheads, digital media, and signage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Dark Transparent Logo */}
            <div className="p-6 rounded-[2px] border border-[#292B27]/10 bg-[#F5F4EF] flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#343A24]">
                  Charcoal & White Bevel (Dark Variant)
                </div>
                <div className="h-24 flex items-center justify-center p-3 bg-white/70 border border-[#292B27]/8 rounded-[2px]">
                  <img
                    src="/ks_associates_logo_bg.png"
                    alt="K S Associates Dark Logo Transparent PNG"
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
                <p className="text-[11px] text-[#4A4D46] leading-relaxed">
                  Transparent background PNG formatted for white, ivory, and light architectural backgrounds.
                </p>
              </div>
              <a
                href="/ks_associates_logo_bg.png"
                download="KS_Associates_Logo_Dark_Transparent.png"
                className="w-full py-2 bg-[#343A24] text-white hover:bg-[#242918] text-xs font-medium uppercase tracking-wider rounded-[2px] transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-[#C6A65B]" />
                <span>Download Dark PNG</span>
              </a>
            </div>

            {/* Card 2: White & Gold Transparent Logo */}
            <div className="p-6 rounded-[2px] border border-[#292B27]/10 bg-[#343A24] text-white flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#C6A65B]">
                  White & Muted Gold (Light Variant)
                </div>
                <div className="h-24 flex items-center justify-center p-3 bg-[#242918] border border-white/10 rounded-[2px]">
                  <img
                    src="/ks_associates_logo_white.png"
                    alt="K S Associates White Logo Transparent PNG"
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
                <p className="text-[11px] text-white/75 leading-relaxed">
                  Transparent background PNG calibrated for dark olive headers, dark hero overlays, and deep charcoal surfaces.
                </p>
              </div>
              <a
                href="/ks_associates_logo_white.png"
                download="KS_Associates_Logo_White_Transparent.png"
                className="w-full py-2 bg-[#C6A65B] text-[#292B27] hover:bg-[#DECA8D] text-xs font-semibold uppercase tracking-wider rounded-[2px] transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download White PNG</span>
              </a>
            </div>

            {/* Card 3: Surveyor Compass Emblem */}
            <div className="p-6 rounded-[2px] border border-[#292B27]/10 bg-[#F5F4EF] flex flex-col justify-between space-y-5">
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#343A24]">
                  Surveyor Compass Rose Emblem
                </div>
                <div className="h-24 flex items-center justify-center p-3 bg-white/70 border border-[#292B27]/8 rounded-[2px]">
                  <img
                    src="/ks_associates_emblem.png"
                    alt="K S Associates Compass Emblem Transparent PNG"
                    className="max-h-16 w-auto object-contain"
                  />
                </div>
                <p className="text-[11px] text-[#4A4D46] leading-relaxed">
                  Transparent circular seal depicting the surveyor compass rose with architectural high-rise buildings and residential roof.
                </p>
              </div>
              <a
                href="/ks_associates_emblem.png"
                download="KS_Associates_Emblem_Transparent.png"
                className="w-full py-2 bg-[#343A24] text-white hover:bg-[#242918] text-xs font-medium uppercase tracking-wider rounded-[2px] transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-3.5 h-3.5 text-[#C6A65B]" />
                <span>Download Emblem PNG</span>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="p-8 sm:p-12 bg-[#343A24] text-white rounded-[2px] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-white">
              Ready to Discuss Your Project with Our Engineers?
            </h3>
            <p className="text-xs sm:text-sm text-white/75">
              Get in touch for construction subcontracts, land boundary surveying, or 3D architectural elevations.
            </p>
          </div>
          <button
            onClick={onOpenContactModal}
            className="px-6 py-2.5 bg-[#C6A65B] text-[#292B27] hover:bg-[#DECA8D] font-semibold text-xs uppercase tracking-wider rounded-[3px] transition-colors whitespace-nowrap"
          >
            Request Consultation
          </button>
        </section>
      </div>
    </div>
  );
};
