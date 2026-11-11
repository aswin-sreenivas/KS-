/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * K S Associates – Corporate Contact Modal (Refined Standard)
 */

import React from 'react';
import { ContactForm } from './ContactForm';
import { X } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: 'Construction' | 'Survey' | '3D Design' | '';
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultService,
}) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 flex items-center justify-center p-4"
    >
      <div className="relative w-full max-w-lg bg-[#F5F4EF] rounded-[3px] border border-[#292B27]/20 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#343A24] text-white border-b border-[#C6A65B]/20">
          <div>
            <h3 id="contact-modal-title" className="font-heading text-lg sm:text-xl font-semibold tracking-normal text-white">
              Discuss Your Project
            </h3>
            <p className="text-[11px] text-[#C6A65B] uppercase tracking-wider font-semibold">
              K S Associates · Engineering Consultation
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/70 hover:text-white rounded-[2px] hover:bg-white/10 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          <ContactForm defaultService={defaultService} onSuccess={() => {}} />
        </div>
      </div>
    </div>
  );
};
