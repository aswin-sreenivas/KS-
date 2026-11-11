/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * K S Associates – Architectural Project Detail & Lightbox Modal (Refined Standard)
 */

import React, { useState, useEffect } from 'react';
import { ProjectItem, COMPANY_INFO } from '../data/company';
import {
  X,
  ChevronLeft,
  ChevronRight,
  Layers,
  MapPin,
  CheckCircle,
  ShieldAlert,
  FileText,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';

interface ProjectLightboxProps {
  project: ProjectItem | null;
  onClose: () => void;
  onNavigateNext?: () => void;
  onNavigatePrev?: () => void;
}

export const ProjectLightbox: React.FC<ProjectLightboxProps> = ({
  project,
  onClose,
  onNavigateNext,
  onNavigatePrev,
}) => {
  const [selectedDrawingIndex, setSelectedDrawingIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    setSelectedDrawingIndex(0);
    setZoomLevel(1);
  }, [project?.id]);

  if (!project) return null;

  const drawingsList = project.drawings && project.drawings.length > 0
    ? project.drawings
    : [
        { label: '3D Visualization', type: 'render' as const, image: project.image },
        ...(project.cadDrawing
          ? [{ label: 'Working Drawing / CAD', type: 'floorplan' as const, image: project.cadDrawing }]
          : []),
      ];

  const currentDrawing = drawingsList[selectedDrawingIndex] || drawingsList[0];

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.3, 2.5));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.3, 0.8));
  const handleResetZoom = () => setZoomLevel(1);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 flex items-center justify-center p-3 sm:p-6"
    >
      <div className="relative w-full max-w-6xl bg-[#F5F4EF] rounded-[3px] border border-[#292B27]/20 max-h-[94vh] flex flex-col shadow-2xl">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-3.5 bg-[#343A24] text-white border-b border-[#C6A65B]/20 shrink-0">
          <div className="flex items-center gap-3 text-xs">
            <span className="uppercase tracking-widest text-[#C6A65B] font-semibold">
              Architectural Specification
            </span>
            <span className="text-white/30">|</span>
            <span className="text-white/80">
              Status: <strong className="text-white font-medium">{project.status}</strong>
            </span>
            {project.clientRef && (
              <>
                <span className="text-white/30 hidden sm:inline">|</span>
                <span className="text-[#C6A65B] hidden sm:inline">
                  Client: {project.clientRef}
                </span>
              </>
            )}
          </div>

          <div className="flex items-center gap-2">
            {onNavigatePrev && (
              <button
                onClick={onNavigatePrev}
                className="p-1.5 text-white/70 hover:text-white rounded-[2px] hover:bg-white/10 transition-colors"
                title="Previous Project"
                aria-label="Previous Project"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            {onNavigateNext && (
              <button
                onClick={onNavigateNext}
                className="p-1.5 text-white/70 hover:text-white rounded-[2px] hover:bg-white/10 transition-colors"
                title="Next Project"
                aria-label="Next Project"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-white/70 hover:text-white rounded-[2px] hover:bg-white/10 transition-colors ml-2"
              title="Close Modal"
              aria-label="Close project modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-1 p-5 sm:p-6 space-y-6">
          {/* Main Visual Display Area */}
          <div className="space-y-3">
            {/* View Selection Tabs */}
            {drawingsList.length > 1 && (
              <div className="flex flex-wrap items-center gap-2 pb-1 border-b border-[#292B27]/10">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#77786F] mr-1">Views:</span>
                {drawingsList.map((d, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedDrawingIndex(idx);
                      setZoomLevel(1);
                    }}
                    className={`px-3 py-1.5 text-xs font-medium rounded-[2px] transition-colors flex items-center gap-1.5 ${
                      selectedDrawingIndex === idx
                        ? 'bg-[#343A24] text-[#C6A65B] font-semibold'
                        : 'bg-white text-[#4A4D46] hover:text-[#292B27] border border-[#292B27]/10'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>{d.label}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Interactive Image Frame */}
            <div className="relative rounded-[2px] overflow-hidden bg-black/5 border border-[#292B27]/12 min-h-[380px] max-h-[58vh] flex items-center justify-center p-2">
              <div
                className="w-full h-full flex items-center justify-center overflow-auto transition-transform duration-150"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <img
                  src={currentDrawing.image}
                  alt={currentDrawing.label}
                  className="max-h-[54vh] w-auto max-w-full object-contain rounded-[2px] select-none"
                />
              </div>

              {/* Zoom Controls */}
              <div className="absolute bottom-4 right-4 z-10 flex items-center gap-1 bg-[#343A24] p-1 rounded-[2px] border border-[#C6A65B]/30 text-white shadow-md">
                <button
                  onClick={handleZoomIn}
                  className="p-1.5 hover:text-[#C6A65B] transition-colors"
                  title="Zoom In"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={handleZoomOut}
                  className="p-1.5 hover:text-[#C6A65B] transition-colors"
                  title="Zoom Out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
                {zoomLevel !== 1 && (
                  <button
                    onClick={handleResetZoom}
                    className="p-1.5 hover:text-[#C6A65B] transition-colors border-l border-white/20 pl-2"
                    title="Reset Zoom"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                )}
                <span className="text-[10px] font-numeric font-bold px-2 text-[#C6A65B]">
                  {Math.round(zoomLevel * 100)}%
                </span>
              </div>
            </div>

            {/* Visual caption */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs text-[#4A4D46] px-1 gap-1">
              <span className="font-medium text-[#292B27]">
                {currentDrawing.caption || currentDrawing.label}
              </span>
              <span className="text-[#77786F] text-[11px]">
                Sheet <span className="font-numeric font-bold">{selectedDrawingIndex + 1}</span> of <span className="font-numeric font-bold">{drawingsList.length}</span> · Ref: {project.id.toUpperCase()}
              </span>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-1">
            {/* Main Project Description & Context */}
            <div className="lg:col-span-8 space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#C6A65B] tracking-wider uppercase mb-1">
                  <span>{project.projectType}</span>
                  <span aria-hidden="true">·</span>
                  <span className="flex items-center gap-1 text-[#77786F]">
                    <MapPin className="w-3.5 h-3.5 text-[#C6A65B]" />
                    {project.location}
                  </span>
                </div>
                <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-heading font-semibold text-[#343A24]">
                  {project.title}
                </h3>
                {project.clientRef && (
                  <p className="text-xs text-[#77786F] mt-1">
                    Client / Partner Reference: <strong className="text-[#292B27]">{project.clientRef}</strong>
                  </p>
                )}
              </div>

              <p className="text-sm text-[#4A4D46] leading-relaxed">
                {project.description}
              </p>

              {/* Subcontract details if present */}
              {project.subcontractDetails && (
                <div className="p-4 bg-white rounded-[2px] border-l-2 border-[#C6A65B] space-y-1.5 border border-[#292B27]/8">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#343A24]">
                    <CheckCircle className="w-4 h-4 text-[#C6A65B]" />
                    <span>Verified Subcontract Certification</span>
                  </div>
                  <p className="text-xs text-[#4A4D46] leading-relaxed">
                    {project.subcontractDetails.mainContractorNotes}
                  </p>
                  <div className="text-[11px] text-[#77786F] pt-1 border-t border-[#292B27]/8 flex flex-wrap gap-4">
                    <span>Certifying Entity: <strong>{project.subcontractDetails.certifyingAuthority}</strong></span>
                    <span>Date of Issue: <strong>{project.subcontractDetails.certificationDate}</strong></span>
                  </div>
                </div>
              )}

              {/* Copyright condition notice */}
              {project.copyrightNotice && (
                <div className="p-4 bg-[#F5F4EF] rounded-[2px] border-l-2 border-amber-600 text-xs text-[#4A4D46] flex items-start gap-3">
                  <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-semibold mb-0.5 text-[#292B27]">Intellectual Property Archival Notice</strong>
                    <p className="leading-relaxed text-[11px]">{project.copyrightNotice}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Metadata */}
            <div className="lg:col-span-4 space-y-4 bg-white p-5 rounded-[2px] border border-[#292B27]/10 text-xs">
              {project.areaDetails && project.areaDetails.length > 0 && (
                <div>
                  <h4 className="font-semibold text-[#343A24] uppercase tracking-wider text-[11px] mb-2 pb-1 border-b border-[#292B27]/10 font-heading">
                    Floor Area Specifications
                  </h4>
                  <div className="space-y-1.5">
                    {project.areaDetails.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center py-1 border-b border-[#292B27]/5">
                        <span className="text-[#77786F]">{item.label}:</span>
                        <span className="font-numeric font-bold text-[#292B27]">{item.area}</span>
                      </div>
                    ))}
                    {project.totalArea && (
                      <div className="flex justify-between items-center pt-2 font-semibold text-[#343A24]">
                        <span>Total Built-up:</span>
                        <span className="font-numeric text-[#C6A65B] font-bold">{project.totalArea}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div>
                <h4 className="font-semibold text-[#343A24] uppercase tracking-wider text-[11px] mb-2 pb-1 border-b border-[#292B27]/10 font-heading">
                  Documented Materials
                </h4>
                <ul className="space-y-1.5">
                  {project.availableMaterials.map((mat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[#4A4D46]">
                      <FileText className="w-3.5 h-3.5 text-[#C6A65B] shrink-0" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(
                    `Hello K S Associates, I am interested in discussing a project similar to ${project.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-block py-2.5 px-3 bg-[#343A24] hover:bg-[#242918] text-[#C6A65B] text-center font-medium rounded-[3px] transition-colors"
                >
                  Enquire About Similar Project
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
