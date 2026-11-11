/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * K S Associates – Architectural Project Archive & Portfolio (Refined Standard)
 */

import React, { useState } from 'react';
import { PROJECTS, ProjectItem } from '../data/company';
import {
  MapPin,
  ArrowRight,
  ShieldCheck,
  AlertCircle,
  Eye
} from 'lucide-react';

interface ProjectsProps {
  onOpenProjectModal: (project: ProjectItem) => void;
  onOpenContactModal: () => void;
}

export const Projects: React.FC<ProjectsProps> = ({
  onOpenProjectModal,
  onOpenContactModal,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'commercial' | 'residential' | 'construction' | 'render'>('all');
  const [statusFilter, setStatusFilter] = useState<'all' | 'Proposed' | 'Completed'>('all');

  const filteredProjects = PROJECTS.filter((proj) => {
    // Category match
    let matchesCategory = true;
    if (activeFilter === 'commercial') {
      matchesCategory = proj.projectType === 'Commercial Building';
    } else if (activeFilter === 'residential') {
      matchesCategory =
        proj.projectType === 'Residential Building' ||
        proj.projectType === 'Apartment Building' ||
        proj.projectType === 'Villa Project';
    } else if (activeFilter === 'construction') {
      matchesCategory = proj.category === 'construction';
    } else if (activeFilter === 'render') {
      matchesCategory = proj.projectType === 'Architectural Visualization';
    }

    // Status match
    let matchesStatus = true;
    if (statusFilter !== 'all') {
      matchesStatus = proj.status === statusFilter;
    }

    return matchesCategory && matchesStatus;
  });

  return (
    <div className="w-full pt-28 pb-20">
      {/* Header Banner */}
      <section className="bg-[#343A24] text-white py-16 sm:py-20 mb-12 border-b border-[#C6A65B]/20">
        <div className="corporate-container">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#C6A65B]">
              Architectural Drawings & Civil Works
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-heading font-semibold text-white tracking-tight">
              Projects & Portfolio
            </h1>
            <p className="text-base sm:text-lg text-white/85 font-normal leading-relaxed">
              Explore our architectural 3D visualizations, commercial proposals, residential villas, and verified civil subcontract works.
            </p>
          </div>
        </div>
      </section>

      <div className="corporate-container space-y-12">
        {/* Interactive Filter Bars (Clean corporate tabs, no pills) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#292B27]/10">
          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#ECEAE2] rounded-[3px] border border-[#292B27]/8">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'commercial', label: 'Commercial' },
              { id: 'residential', label: 'Residential & Villas' },
              { id: 'construction', label: 'Civil Subcontracts' },
              { id: 'render', label: '3D Render Studies' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-[2px] transition-colors duration-150 ${
                  activeFilter === tab.id
                    ? 'bg-[#343A24] text-[#C6A65B] font-semibold'
                    : 'text-[#4A4D46] hover:text-[#292B27]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Status Filter */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-[#77786F] uppercase font-semibold tracking-wider text-[11px]">Status:</span>
            <div className="flex items-center gap-1 bg-[#ECEAE2] p-1 rounded-[3px] border border-[#292B27]/8">
              <button
                onClick={() => setStatusFilter('all')}
                className={`px-2.5 py-1 rounded-[2px] transition-colors duration-150 ${
                  statusFilter === 'all'
                    ? 'bg-white text-[#292B27] font-semibold shadow-xs'
                    : 'text-[#77786F] hover:text-[#292B27]'
                }`}
              >
                All (<span className="font-numeric font-bold">{PROJECTS.length}</span>)
              </button>
              <button
                onClick={() => setStatusFilter('Proposed')}
                className={`px-2.5 py-1 rounded-[2px] transition-colors duration-150 ${
                  statusFilter === 'Proposed'
                    ? 'bg-white text-[#292B27] font-semibold shadow-xs'
                    : 'text-[#77786F] hover:text-[#292B27]'
                }`}
              >
                Proposed
              </button>
              <button
                onClick={() => setStatusFilter('Completed')}
                className={`px-2.5 py-1 rounded-[2px] transition-colors duration-150 ${
                  statusFilter === 'Completed'
                    ? 'bg-white text-[#292B27] font-semibold shadow-xs'
                    : 'text-[#77786F] hover:text-[#292B27]'
                }`}
              >
                Completed
              </button>
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onOpenProjectModal(project)}
              className="group cursor-pointer bg-white rounded-[2px] overflow-hidden border border-[#292B27]/12 hover:border-[#343A24] transition-colors duration-150 flex flex-col justify-between"
            >
              <div>
                {/* Image Showcase */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />

                  {/* Top Bar Badges */}
                  <div className="absolute top-3 left-3 bg-[#343A24] text-white text-[11px] px-2 py-0.5 rounded-[2px] flex items-center gap-1.5 font-medium">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        project.status === 'Completed' ? 'bg-emerald-400' : 'bg-[#C6A65B]'
                      }`}
                    />
                    <span>{project.status}</span>
                  </div>

                  {/* Hover Inspect Icon */}
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-center justify-center">
                    <span className="px-3.5 py-1.5 bg-[#343A24] text-[#C6A65B] rounded-[2px] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 border border-[#C6A65B]/40">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Drawings</span>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 space-y-2.5">
                  <div className="flex items-center gap-2 text-xs text-[#77786F]">
                    <span className="font-semibold text-[#C6A65B] uppercase tracking-wider">
                      {project.projectType}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1 truncate">
                      <MapPin className="w-3.5 h-3.5 text-[#C6A65B] shrink-0" />
                      {project.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-heading font-semibold text-[#343A24] group-hover:text-[#C6A65B] transition-colors duration-150 leading-snug">
                    {project.title}
                  </h3>

                  {project.clientRef && (
                    <p className="text-xs text-[#77786F]">
                      Reference: <strong className="text-[#292B27]">{project.clientRef}</strong>
                    </p>
                  )}

                  <p className="text-xs sm:text-sm text-[#4A4D46] line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Copyright notice label if applicable */}
                  {project.copyrightNotice && (
                    <div className="p-2.5 bg-[#F5F4EF] rounded-[2px] border-l-2 border-amber-600 text-[11px] text-[#4A4D46] leading-relaxed flex items-start gap-1.5 mt-2">
                      <AlertCircle className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                      <span>Intellectual Property Archival Notice</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-3.5 bg-[#F5F4EF] border-t border-[#292B27]/10 flex items-center justify-between text-xs text-[#292B27]">
                {project.totalArea ? (
                  <span className="font-numeric text-[#4A4D46] text-[11px]">
                    Built-up: <strong className="text-[#292B27] font-bold">{project.totalArea}</strong>
                  </span>
                ) : (
                  <span className="text-[11px] text-[#77786F]">
                    {project.category === 'construction' ? 'RCC Subcontract Work' : 'Architectural Study'}
                  </span>
                )}

                <span className="text-[#343A24] font-medium group-hover:text-[#C6A65B] flex items-center gap-1 transition-colors">
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Subcontract Credential Callout */}
        <div className="p-8 bg-white rounded-[2px] border border-[#292B27]/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C6A65B]">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified Subcontract Certification</span>
            </div>
            <h3 className="text-2xl font-heading font-semibold text-[#343A24]">
              Government ITI Building SC Development, Tuneri
            </h3>
            <p className="text-xs sm:text-sm text-[#4A4D46] leading-relaxed">
              Certificate dated 30 April 2026 issued by Selmec Engineering Construction confirms K S Associates' successful subcontract execution of RCC foundations, columns, beams, and slabs in full compliance with approved drawings.
            </p>
          </div>
          <button
            onClick={() => onOpenContactModal()}
            className="px-5 py-2.5 bg-[#343A24] text-[#C6A65B] hover:bg-[#242918] font-semibold text-xs uppercase tracking-wider rounded-[3px] transition-colors duration-150 whitespace-nowrap"
          >
            Enquire for Subcontracts
          </button>
        </div>
      </div>
    </div>
  );
};
