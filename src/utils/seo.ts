/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * K S Associates – Dynamic Open Graph & Twitter Social Card Manager
 */

export interface PageSeoConfig {
  title: string;
  description: string;
  image?: string;
  type?: string;
}

const PAGE_SEO: Record<string, PageSeoConfig> = {
  home: {
    title: 'K S Associates | Engineering Construction & Surveying – Feroke, Calicut',
    description: 'Civil engineering practice, RCC structural construction, precision land surveying, and photorealistic 3D architectural design in Feroke, Calicut.',
    image: '/og-image.jpg',
    type: 'website',
  },
  about: {
    title: 'About Our Practice | K S Associates – Engineering, Construction & Surveying',
    description: 'Learn about K S Associates: engineering rigor, verified subcontract track record in RCC works, precision surveying, and 3D architectural design in Feroke, Kerala.',
    image: '/og-image.jpg',
    type: 'website',
  },
  services: {
    title: 'Engineering Services | Construction, Survey & 3D Design – K S Associates',
    description: 'Comprehensive engineering services: residential & commercial construction, total station land surveying, and high-fidelity 3D architectural visualization.',
    image: '/og-construction.jpg',
    type: 'website',
  },
  projects: {
    title: 'Architectural Projects & CAD Archive | K S Associates Portfolio',
    description: 'Explore authentic architectural projects by K S Associates: commercial complexes, apartments, and luxury villas with verified drawings and 3D renders.',
    image: '/og-projects.jpg',
    type: 'website',
  },
  contact: {
    title: 'Contact Engineering Office | K S Associates – Farook Hospital Complex, Feroke',
    description: 'Get in touch with K S Associates for construction tenders, land surveying, and 3D design consultations. Office at Farook Hospital Complex, Feroke, Calicut.',
    image: '/og-image.jpg',
    type: 'website',
  },
};

function setMetaTag(selector: string, attribute: 'content', value: string) {
  let element = document.querySelector(selector) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement('meta');
    if (selector.startsWith('meta[name="')) {
      const name = selector.slice(11, -2);
      element.setAttribute('name', name);
    } else if (selector.startsWith('meta[property="')) {
      const property = selector.slice(15, -2);
      element.setAttribute('property', property);
    }
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
}

function setCanonicalTag(url: string) {
  let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', url);
}

export function updatePageSeo(pageKey: string, customConfig?: Partial<PageSeoConfig>) {
  const baseConfig = PAGE_SEO[pageKey] || PAGE_SEO.home;
  const config = { ...baseConfig, ...customConfig };

  // Update Page Title
  document.title = config.title;

  // Update Standard Meta Description
  setMetaTag('meta[name="description"]', 'content', config.description);

  // Update Open Graph Tags
  setMetaTag('meta[property="og:title"]', 'content', config.title);
  setMetaTag('meta[property="og:description"]', 'content', config.description);
  setMetaTag('meta[property="og:type"]', 'content', config.type || 'website');
  
  if (config.image) {
    const fullImageUrl = config.image.startsWith('http') 
      ? config.image 
      : `${window.location.origin}${config.image.startsWith('/') ? config.image : `/${config.image}`}`;
    setMetaTag('meta[property="og:image"]', 'content', fullImageUrl);
    setMetaTag('meta[property="og:image:secure_url"]', 'content', fullImageUrl);
    setMetaTag('meta[name="twitter:image"]', 'content', fullImageUrl);
  }

  // Canonical URL Resolution
  const origin = window.location.origin || 'https://ksassociates.co.in';
  const canonicalUrl = pageKey === 'home'
    ? `${origin}/`
    : `${origin}/#${pageKey}`;

  setCanonicalTag(canonicalUrl);
  setMetaTag('meta[property="og:url"]', 'content', canonicalUrl);

  // Update Twitter Cards
  setMetaTag('meta[name="twitter:title"]', 'content', config.title);
  setMetaTag('meta[name="twitter:description"]', 'content', config.description);
}
