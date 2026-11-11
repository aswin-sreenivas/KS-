/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * K S Associates – Core Engineering Services (Refined Standard)
 */

import React from 'react';
import { COMPANY_INFO, SERVICES } from '../data/company';
import heroImg1 from '@/src/assets/images/ks_hero_render_1793621473732.jpg';
import heroImg2 from '@/src/assets/images/ks_hero_exterior_2_1793621489483.jpg';
import constructionRccImg from '@/src/assets/images/ks_construction_rcc_1793621557021.jpg';
import surveyingSiteImg from '@/src/assets/images/ks_surveying_site_1793621570744.jpg';
import bcroadRender from '@/src/assets/pdf_extracts/bcroad_3d_render.png';
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Phone
} from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: string) => void;
  onOpenContactModal: (service?: 'Construction' | 'Survey' | '3D Design') => void;
}

export const Services: React.FC<ServicesProps> = ({
  onNavigate,
  onOpenContactModal,
}) => {
  return (
    <div className="w-full pt-28 pb-20">
      {/* Services Header Banner */}
      <section className="bg-[#343A24] text-white py-16 sm:py-20 mb-16 border-b border-[#C6A65B]/20">
        <div className="corporate-container">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A65B]">
              Multidisciplinary Engineering Practice
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-heading font-semibold text-white tracking-tight">
              Our Core Services
            </h1>
            <p className="text-base sm:text-lg text-white/85 font-normal leading-relaxed">
              Three synchronized disciplines providing end-to-end technical certainty: structural construction, land surveying, and architectural 3D design.
            </p>
          </div>
        </div>
      </section>

      <div className="corporate-container space-y-28">
        {/* ===================== SERVICE 01: CONSTRUCTION ===================== */}
        <section id="service-construction" className="space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 bg-[#343A24] text-[#C6A65B] flex items-center justify-center font-numeric font-bold text-xs rounded-[2px]">
              01
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A65B]">
              Primary Service <span className="font-numeric">01</span> · Civil & Structural
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-semibold text-[#343A24]">
                Construction Solutions
              </h2>

              <p className="text-base sm:text-lg text-[#292B27] font-medium leading-relaxed border-l-2 border-[#C6A65B] pl-4">
                "From structural execution to building construction, K S Associates focuses on planned execution, engineering standards and quality-oriented construction work."
              </p>

              <p className="text-sm text-[#4A4D46] leading-relaxed">
                We handle comprehensive civil construction works with an unwavering focus on structural stability. The firm has verified documentary evidence of subcontract structural works involving RCC foundations, column placement, beam alignment, and suspended slab casting on government infrastructure projects in Kerala.
              </p>

              <div className="space-y-2 pt-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#343A24] block">
                  Structural & Civil Capabilities:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#292B27]">
                  {[
                    'RCC Foundations & Substructure Footings',
                    'Engineered Concrete Column Framing',
                    'Cast-in-Place Beams & Floor Slabs',
                    'Structural Drawing Execution Compliance',
                    'Bar Bending & Steel Reinforcement Supervision',
                    'Quality Concrete Curing & Testing Control',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 p-2.5 bg-[#F5F4EF] rounded-[2px] border border-[#292B27]/8">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A65B] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subcontract Note */}
              <div className="p-4 bg-white rounded-[2px] border border-[#292B27]/10 text-xs text-[#4A4D46] space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-[#343A24]">
                  <ShieldCheck className="w-4 h-4 text-[#C6A65B]" />
                  <span>Documented Structural Subcontract</span>
                </div>
                <p>
                  Subcontract structural execution on the "Construction of Govt. ITI Building for SC Development at Tuneri, Kerala" (certified by Selmec Engineering Construction, ISO 9001:2015).
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-3 items-center">
                <button
                  onClick={() => onOpenContactModal('Construction')}
                  className="px-5 py-2.5 bg-[#343A24] hover:bg-[#242918] text-[#C6A65B] font-semibold text-xs uppercase tracking-wider rounded-[3px] transition-colors duration-150 flex items-center gap-2"
                >
                  <span>Enquire for Construction Works</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onNavigate('projects')}
                  className="px-5 py-2.5 bg-[#F5F4EF] hover:bg-[#ECEAE2] text-[#292B27] font-medium text-xs uppercase tracking-wider rounded-[3px] transition-colors duration-150 border border-[#292B27]/10"
                >
                  View Structural Projects
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-[2px] overflow-hidden border border-[#292B27]/12 shadow-sm aspect-[16/10]">
                <img
                  src={constructionRccImg}
                  alt="K S Associates RCC Structural Framework Site Execution"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-[#343A24] text-white text-xs px-2.5 py-1 rounded-[2px] font-semibold uppercase tracking-wider">
                  RCC Framework · Formwork & Column Execution
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== SERVICE 02: SURVEY ===================== */}
        <section id="service-survey" className="space-y-6 pt-12 border-t border-[#292B27]/10">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 bg-[#343A24] text-[#C6A65B] flex items-center justify-center font-numeric font-bold text-xs rounded-[2px]">
              02
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A65B]">
              Primary Service <span className="font-numeric">02</span> · Land Survey & Baselines
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative rounded-[2px] overflow-hidden border border-[#292B27]/12 shadow-sm aspect-[16/10]">
                <img
                  src={surveyingSiteImg}
                  alt="K S Associates Precision Land Surveying"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-3 bg-[#343A24] text-white text-xs px-2.5 py-1 rounded-[2px] font-semibold uppercase tracking-wider">
                  Site Measurement & Topographic Baselines
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 order-1 lg:order-2 space-y-5">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-semibold text-[#343A24]">
                Surveying Services
              </h2>

              <p className="text-base sm:text-lg text-[#292B27] font-medium leading-relaxed border-l-2 border-[#C6A65B] pl-4">
                "Accurate surveying and site measurements form an essential foundation for informed planning and development."
              </p>

              <p className="text-sm text-[#4A4D46] leading-relaxed">
                Before architects place a room or structural engineers calculate column footings, the physical reality of the site must be established without ambiguity. Our surveying operations verify perimeter boundaries, natural gradients, access road alignments, and setback limits across Feroke, Kozhikode, and surrounding regions.
              </p>

              <div className="space-y-2 pt-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#343A24] block">
                  Field Survey Scope:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#292B27]">
                  {[
                    'Plot Boundary & Perimeter Demarcation',
                    'Topographic Site & Contour Measurements',
                    'Building Approval Site Plan Verification',
                    'Access Road Alignment & Setback Mapping',
                    'Structural Baseline Coordinate Transfer',
                    'Pre-Construction Plot Validation',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 p-2.5 bg-[#F5F4EF] rounded-[2px] border border-[#292B27]/8">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A65B] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 flex flex-wrap gap-3 items-center">
                <button
                  onClick={() => onOpenContactModal('Survey')}
                  className="px-5 py-2.5 bg-[#343A24] hover:bg-[#242918] text-[#C6A65B] font-semibold text-xs uppercase tracking-wider rounded-[3px] transition-colors duration-150 flex items-center gap-2"
                >
                  <span>Enquire for Surveying</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="px-5 py-2.5 bg-white text-[#292B27] hover:text-[#C6A65B] text-xs uppercase tracking-wider rounded-[3px] transition-colors duration-150 border border-[#292B27]/10 flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C6A65B]" />
                  <span>Call <strong className="font-numeric">{COMPANY_INFO.displayPhone}</strong></span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== SERVICE 03: 3D DESIGN ===================== */}
        <section id="service-3d-design" className="space-y-6 pt-12 border-t border-[#292B27]/10">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 bg-[#343A24] text-[#C6A65B] flex items-center justify-center font-numeric font-bold text-xs rounded-[2px]">
              03
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-[#C6A65B]">
              Primary Service <span className="font-numeric">03</span> · Architectural Visualization
            </span>
          </div>

          <div className="space-y-6">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-semibold text-[#343A24]">
                Architectural 3D Design
              </h2>

              <p className="text-base sm:text-lg text-[#292B27] font-medium leading-relaxed border-l-2 border-[#C6A65B] pl-4">
                "Visualize your building before construction begins through detailed architectural 3D designs and realistic exterior visualizations."
              </p>

              <p className="text-sm text-[#4A4D46] leading-relaxed">
                Given our extensive suite of actual architectural project documents—spanning commercial complexes, multi-family apartments, and luxury villas—our 3D design division transforms technical floor plans and elevations into high-fidelity architectural visualizations. Experience textures, material finishes, shading elements, and twilight ambient illumination prior to laying the first brick.
              </p>
            </div>

            {/* Visual Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div className="relative rounded-[2px] overflow-hidden border border-[#292B27]/12 aspect-[16/10] group">
                <img
                  src={bcroadRender}
                  alt="BC Road Commercial Building 3D Visualization"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-5 flex flex-col justify-end text-white">
                  <div className="text-xs font-semibold text-[#C6A65B] uppercase tracking-wider">Commercial 3D Render</div>
                  <h4 className="font-heading text-lg font-semibold">BC Road Commercial (Illikkal Building)</h4>
                  <p className="text-xs text-white/80 mt-0.5">Glazed storefront frontage, jaali screens, and upper terrace.</p>
                </div>
              </div>

              <div className="relative rounded-[2px] overflow-hidden border border-[#292B27]/12 aspect-[16/10] group">
                <img
                  src={heroImg2}
                  alt="Cantilevered Architectural Elevation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-5 flex flex-col justify-end text-white">
                  <div className="text-xs font-semibold text-[#C6A65B] uppercase tracking-wider">Volumetric Elevation Study</div>
                  <h4 className="font-heading text-lg font-semibold">Cantilevered Pavilion Residence</h4>
                  <p className="text-xs text-white/80 mt-0.5">Realistic evening twilight lighting and stone facade veneer testing.</p>
                </div>
              </div>
            </div>

            {/* Scope Grid */}
            <div className="p-8 bg-white rounded-[2px] border border-[#292B27]/10 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#343A24] block">
                3D Design Deliverables:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs text-[#4A4D46]">
                <div className="space-y-1">
                  <strong className="text-[#292B27] block text-sm font-heading">Exterior 3D Perspectives</strong>
                  <p className="leading-relaxed">True-to-scale elevations showing roof pitch, pergolas, balconies, and entry porticos.</p>
                </div>
                <div className="space-y-1">
                  <strong className="text-[#292B27] block text-sm font-heading">Daylight & Twilight Simulation</strong>
                  <p className="leading-relaxed">Testing solar angles, shade patterns, and ambient facade architectural illumination.</p>
                </div>
                <div className="space-y-1">
                  <strong className="text-[#292B27] block text-sm font-heading">Material & Texture Exploration</strong>
                  <p className="leading-relaxed">Comparing paint palettes, exterior tiles, granite stone, timber battens, and glass tints.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-3 items-center">
              <button
                onClick={() => onOpenContactModal('3D Design')}
                className="px-5 py-2.5 bg-[#343A24] hover:bg-[#242918] text-[#C6A65B] font-semibold text-xs uppercase tracking-wider rounded-[3px] transition-colors duration-150 flex items-center gap-2"
              >
                <span>Request 3D Architectural Visualization</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onNavigate('projects')}
                className="px-5 py-2.5 bg-[#F5F4EF] hover:bg-[#ECEAE2] text-[#292B27] font-medium text-xs uppercase tracking-wider rounded-[3px] transition-colors duration-150 border border-[#292B27]/10"
              >
                Browse Render Portfolio
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
