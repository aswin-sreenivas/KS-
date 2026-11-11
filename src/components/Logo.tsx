/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * K S Associates Official Brand Logo
 * Preserves the exact official letterhead logo extracted from verified documents.
 */

import React from 'react';
import logoDarkTransparent from '../assets/logo/ks_logo_dark.png';
import logoWhiteTransparent from '../assets/logo/ks_logo_white.png';

interface LogoProps {
  variant?: 'light' | 'dark' | 'gold';
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'dark',
  className = '',
  showTagline = true,
  size = 'md',
}) => {
  const isLight = variant === 'light';
  const logoSrc = isLight ? logoWhiteTransparent : logoDarkTransparent;

  const logoHeights = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-12 sm:h-14',
  };

  return (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      {/* Official Transparent PNG Logo (No background plate) */}
      <div className="flex items-center justify-center shrink-0 bg-transparent">
        <img
          src={logoSrc}
          alt="K S Associates – Official Logo"
          className={`${logoHeights[size]} w-auto object-contain block drop-shadow-sm`}
        />
      </div>

      {/* Official Tagline */}
      {showTagline && (
        <div className="flex flex-col justify-center border-l border-white/20 pl-3.5 leading-tight">
          <span
            className={`font-heading text-xs tracking-wide uppercase font-semibold ${
              isLight ? 'text-white' : 'text-[#343A24]'
            }`}
          >
            Engineering Construction & Surveying
          </span>
          <span
            className={`text-[11px] font-normal tracking-normal mt-0.5 ${
              isLight ? 'text-[#C6A65B]' : 'text-[#77786F]'
            }`}
          >
            Feroke · Calicut, Kerala
          </span>
        </div>
      )}
    </div>
  );
};
