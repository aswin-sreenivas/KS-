/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * K S Associates – Corporate Enquiry Form Component (Refined Standard)
 */

import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/company';
import { Send, CheckCircle2, AlertCircle, Phone, MessageSquare, Loader2 } from 'lucide-react';

interface ContactFormProps {
  defaultService?: 'Construction' | 'Survey' | '3D Design' | '';
  onSuccess?: () => void;
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  defaultService = '',
  onSuccess,
  className = '',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceRequired: defaultService || '',
    projectLocation: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Full Name is required';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+\s\-()]{8,18}$/.test(formData.phone.trim())) {
      errs.phone = 'Please provide a valid phone number (min 8 digits)';
    }

    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address';
    }

    if (!formData.serviceRequired) {
      errs.serviceRequired = 'Please select a primary service';
    }

    if (!formData.projectLocation.trim()) {
      errs.projectLocation = 'Project location / site address is required';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide brief details of your project requirements';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const generatedRef = `KSA-${Date.now().toString().slice(-6)}`;
      setReferenceId(generatedRef);
      setIsSubmitting(false);
      setSubmissionSuccess(true);

      try {
        const stored = JSON.parse(localStorage.getItem('ksa_enquiries') || '[]');
        stored.push({
          ref: generatedRef,
          ...formData,
          submittedAt: new Date().toISOString(),
        });
        localStorage.setItem('ksa_enquiries', JSON.stringify(stored));
      } catch (err) {
        console.warn('Storage unavailable', err);
      }

      if (onSuccess) {
        onSuccess();
      }
    }, 600);
  };

  const handleWhatsAppForward = () => {
    const text = `Hello K S Associates,\nMy name is ${formData.fullName}.\nEnquiry Ref: ${referenceId}\nService: ${formData.serviceRequired}\nLocation: ${formData.projectLocation}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  if (submissionSuccess) {
    return (
      <div className="bg-white p-8 rounded-[2px] border border-[#292B27]/12 text-center space-y-4">
        <div className="w-12 h-12 bg-[#343A24] text-[#C6A65B] rounded-[2px] mx-auto flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-heading font-semibold text-[#343A24]">
            Enquiry Received
          </h3>
          <p className="text-xs text-[#77786F] mt-1">
            Reference Number:{' '}
            <span className="font-numeric font-bold text-[#292B27] bg-[#F5F4EF] px-2 py-0.5 rounded-[2px]">
              {referenceId}
            </span>
          </p>
        </div>
        <p className="text-xs sm:text-sm text-[#4A4D46] max-w-md mx-auto leading-relaxed">
          Thank you, <strong>{formData.fullName}</strong>. Your enquiry regarding{' '}
          <strong>{formData.serviceRequired}</strong> at{' '}
          <strong>{formData.projectLocation}</strong> has been registered. Our engineering desk will review your details and contact you shortly.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={handleWhatsAppForward}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#343A24] text-white rounded-[3px] font-semibold text-xs uppercase tracking-wider hover:bg-[#242918] transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-[#C6A65B]" />
            <span>Forward to WhatsApp</span>
          </button>
          <button
            onClick={() => {
              setSubmissionSuccess(false);
              setFormData({
                fullName: '',
                phone: '',
                email: '',
                serviceRequired: defaultService || '',
                projectLocation: '',
                message: '',
              });
            }}
            className="px-5 py-2.5 bg-[#F5F4EF] text-[#292B27] rounded-[3px] font-medium text-xs uppercase tracking-wider hover:bg-[#ECEAE2] transition-colors border border-[#292B27]/10"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`space-y-4 ${className}`}>
      {/* Full Name */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#343A24] mb-1">
          Full Name <span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
          placeholder="e.g. Ashraf Mohammed"
          className={`w-full px-3.5 py-2.5 bg-white border rounded-[3px] text-sm text-[#292B27] placeholder:text-black/30 focus:outline-none focus:ring-1 focus:ring-[#343A24] focus:border-[#343A24] transition-colors ${
            errors.fullName ? 'border-red-600 bg-red-50/20' : 'border-[#292B27]/18'
          }`}
        />
        {errors.fullName && (
          <p className="text-red-700 text-xs mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Phone & Email Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#343A24] mb-1">
            Phone Number <span className="text-red-700">*</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 92074 46666"
            className={`w-full px-3.5 py-2.5 bg-white border rounded-[3px] text-sm text-[#292B27] placeholder:text-black/30 focus:outline-none focus:ring-1 focus:ring-[#343A24] focus:border-[#343A24] transition-colors ${
              errors.phone ? 'border-red-600 bg-red-50/20' : 'border-[#292B27]/18'
            }`}
          />
          {errors.phone && (
            <p className="text-red-700 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[#343A24] mb-1">
            Email Address <span className="text-red-700">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="name@domain.com"
            className={`w-full px-3.5 py-2.5 bg-white border rounded-[3px] text-sm text-[#292B27] placeholder:text-black/30 focus:outline-none focus:ring-1 focus:ring-[#343A24] focus:border-[#343A24] transition-colors ${
              errors.email ? 'border-red-600 bg-red-50/20' : 'border-[#292B27]/18'
            }`}
          />
          {errors.email && (
            <p className="text-red-700 text-xs mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Service Required: EXACTLY Construction, Survey, 3D Design */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#343A24] mb-1">
          Service Required <span className="text-red-700">*</span>
        </label>
        <select
          value={formData.serviceRequired}
          onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
          className={`w-full px-3.5 py-2.5 bg-white border rounded-[3px] text-sm text-[#292B27] focus:outline-none focus:ring-1 focus:ring-[#343A24] focus:border-[#343A24] transition-colors ${
            errors.serviceRequired ? 'border-red-600 bg-red-50/20' : 'border-[#292B27]/18'
          }`}
        >
          <option value="">Select Service (1. Construction / 2. Survey / 3. 3D Design)</option>
          <option value="Construction">1. Construction (Structural, RCC, Building)</option>
          <option value="Survey">2. Survey (Plot Boundary, Topography & Baselines)</option>
          <option value="3D Design">3. 3D Design (Architectural Visualization & Facades)</option>
        </select>
        {errors.serviceRequired && (
          <p className="text-red-700 text-xs mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.serviceRequired}
          </p>
        )}
      </div>

      {/* Project Location */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#343A24] mb-1">
          Project Location <span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          value={formData.projectLocation}
          onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
          placeholder="e.g. Feroke, Calicut / Kozhikode"
          className={`w-full px-3.5 py-2.5 bg-white border rounded-[3px] text-sm text-[#292B27] placeholder:text-black/30 focus:outline-none focus:ring-1 focus:ring-[#343A24] focus:border-[#343A24] transition-colors ${
            errors.projectLocation ? 'border-red-600 bg-red-50/20' : 'border-[#292B27]/18'
          }`}
        />
        {errors.projectLocation && (
          <p className="text-red-700 text-xs mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.projectLocation}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#343A24] mb-1">
          Project Details / Requirements <span className="text-red-700">*</span>
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Describe plot dimensions, proposed floors, structural scope, or architectural rendering requirements..."
          className={`w-full px-3.5 py-2.5 bg-white border rounded-[3px] text-sm text-[#292B27] placeholder:text-black/30 focus:outline-none focus:ring-1 focus:ring-[#343A24] focus:border-[#343A24] transition-colors resize-none ${
            errors.message ? 'border-red-600 bg-red-50/20' : 'border-[#292B27]/18'
          }`}
        />
        {errors.message && (
          <p className="text-red-700 text-xs mt-1 flex items-center gap-1">
            <AlertCircle className="w-3.5 h-3.5" />
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Action */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-6 bg-[#343A24] text-[#C6A65B] hover:bg-[#242918] font-semibold text-xs uppercase tracking-wider rounded-[3px] transition-colors duration-150 flex items-center justify-center gap-2 disabled:opacity-70"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-[#C6A65B]" />
            <span>Transmitting Enquiry...</span>
          </>
        ) : (
          <>
            <span>Submit Engineering Enquiry</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      <div className="flex items-center justify-between text-[11px] text-[#77786F] pt-1">
        <span>Office: Feroke, Calicut</span>
        <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-[#292B27] flex items-center gap-1 font-numeric font-bold">
          <Phone className="w-3 h-3 text-[#C6A65B]" />
          {COMPANY_INFO.displayPhone}
        </a>
      </div>
    </form>
  );
};
