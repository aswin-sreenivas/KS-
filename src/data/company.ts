/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * K S Associates – Official Company Data, Branding & Extracted Project Materials
 */

// Import extracted official PDF architectural renders and drawings
import bcroadRender from '@/src/assets/pdf_extracts/bcroad_3d_render.png';
import bcroadSitePlan from '@/src/assets/pdf_extracts/bcroad_siteplan.png';
import bcroadFloorPlanGf from '@/src/assets/pdf_extracts/bcroad_floorplan_gf.png';
import bcroadFloorPlanFf from '@/src/assets/pdf_extracts/bcroad_floorplan_ff.png';

import chungamRender from '@/src/assets/pdf_extracts/chungam_3d_render.png';
import chungamSitePlan from '@/src/assets/pdf_extracts/chungam_siteplan.png';
import chungamFloorPlan from '@/src/assets/pdf_extracts/chungam_floorplan.png';

import idimuzhikkalRender from '@/src/assets/pdf_extracts/idimuzhikkal_3d_render.png';
import idimuzhikkalSitePlan from '@/src/assets/pdf_extracts/idimuzhikkal_siteplan.png';
import idimuzhikkalFloorPlan from '@/src/assets/pdf_extracts/idimuzhikkal_floorplan.png';

import royalVillaRender from '@/src/assets/pdf_extracts/royalvilla_3d_render.png';
import royalVillaSitePlan from '@/src/assets/pdf_extracts/royalvilla_siteplan.png';
import royalVillaFloorPlan from '@/src/assets/pdf_extracts/royalvilla_floorplan.png';

// High-end supporting engineering & credentials visuals
import constructionRccImg from '@/src/assets/images/ks_construction_rcc_1793621557021.jpg';
import surveyingSiteImg from '@/src/assets/images/ks_surveying_site_1793621570744.jpg';
import genericCadDrawing from '@/src/assets/images/ks_cad_drawing_1793621586595.jpg';

export interface CompanyInfo {
  name: string;
  fullName: string;
  tagline: string;
  industry: string;
  description: string;
  contactPerson: {
    name: string;
    designation: string;
  };
  phone: string;
  displayPhone: string;
  email: string;
  address: {
    line1: string;
    landmark: string;
    postOffice: string;
    city: string;
    district: string;
    state: string;
    pincode: string;
    country: string;
    full: string;
  };
  gstin: string;
  whatsappNumber: string;
  displayWhatsApp: string;
  whatsappMessage: string;
  socialLinks: {
    instagram?: string;
    facebook?: string;
    linkedin?: string;
    youtube?: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const COMPANY_INFO: CompanyInfo = {
  name: 'K S Associates',
  fullName: 'KS ASSOCIATES ENGINEERING CONSTRUCTION AND SURVEY',
  tagline: 'Building Trust, Creating Landmarks',
  industry: 'Civil Engineering',
  description:
    "We are a civil engineering and construction company committed to delivering high-quality construction solutions with excellence, reliability and professionalism. Our services focus on planning, designing and executing construction projects with attention to quality, safety and customer satisfaction. We aim to turn our clients' visions into reality through innovative ideas, skilled workmanship and strong foundations.",
  contactPerson: {
    name: 'Farhad',
    designation: 'General Manager',
  },
  phone: '+919207446666',
  displayPhone: '+91 92074 46666',
  email: 'ksassociatesferoke@gmail.com',
  address: {
    line1: 'FM 5/995, 1st Floor',
    landmark: 'Farook Hospital Complex',
    postOffice: 'P.O. Feroke',
    city: 'Calicut (Kozhikode)',
    district: 'Kozhikode',
    state: 'Kerala',
    pincode: '673631',
    country: 'India',
    full: 'FM 5/995, Farook Hospital Complex, P.O. Feroke, Calicut – 673631, Kerala, India.',
  },
  gstin: '32GDMPS7866H2ZR',
  whatsappNumber: '919947333150',
  displayWhatsApp: '+91 99473 33150',
  whatsappMessage: 'Hello K S Associates, I would like to enquire about your civil engineering and construction services.',
  socialLinks: {
    instagram: '',
    facebook: '',
    linkedin: '',
    youtube: '',
  },
  coordinates: {
    lat: 11.1735,
    lng: 75.8361,
  },
};

export const BRAND_COLORS = {
  deepOliveGreen: '#343A24',
  mutedGoldenBeige: '#C6A65B',
  pureWhite: '#FFFFFF',
  warmIvory: '#F5F4EF',
  darkCharcoal: '#292B27',
};

export interface ServiceItem {
  id: 'construction' | 'survey' | '3d-design';
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  scopePoints: string[];
  image: string;
  highlightText: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'construction',
    number: '01',
    title: 'Construction',
    shortDescription:
      'From structural execution to building construction, K S Associates focuses on planned execution, engineering standards and quality-oriented construction work.',
    fullDescription:
      'Our construction capabilities emphasize disciplined engineering execution, rigorous site supervision, and structural adherence to approved working drawings. We undertake comprehensive building construction and subcontract structural works spanning reinforced cement concrete (RCC) foundations, robust column placement, beam layout, and solid slab casting.',
    scopePoints: [
      'Subcontract Structural Civil Works',
      'RCC Foundations, Footings & Grade Beams',
      'Engineered Columns, Beams & Floor Slabs',
      'Strict Adherence to Structural Drawings & Schedules',
      'Quality Materials Management & Concrete Quality Control',
      'On-site Engineering Coordination & Supervision',
    ],
    image: constructionRccImg,
    highlightText: 'Engineered Structural Execution & RCC Works',
  },
  {
    id: 'survey',
    number: '02',
    title: 'Survey',
    shortDescription:
      'Accurate surveying and site measurements form an essential foundation for informed planning and development.',
    fullDescription:
      'Every dependable architectural and structural project begins with uncompromising ground truth. Our surveying services deliver precision boundary demarcation, topographic level readings, and site measurement data essential for building permits, master planning, and conflict-free execution.',
    scopePoints: [
      'Boundary Demarcation & Perimeter Measurement',
      'Topographic & Site Contour Mapping',
      'Baseline Benchmarking for Architectural Plans',
      'Plot Measurement for Local Authority Approval',
      'Structural Grid Setting-Out & Alignment Checks',
      'Site Verification for Commercial & Residential Plots',
    ],
    image: surveyingSiteImg,
    highlightText: 'Ground-Truth Site Measurement & Precision Baselines',
  },
  {
    id: '3d-design',
    number: '03',
    title: '3D Design',
    shortDescription:
      'Visualize your building before construction begins through detailed architectural 3D designs and realistic exterior visualizations.',
    fullDescription:
      'Bridging technical drawings and spatial reality, our architectural 3D design service transforms 2D floor plans and site blueprints into photorealistic exterior perspectives, volumetric studies, and elevation models. This empowers clients and engineers to validate aesthetics, materials, and proportions before ground is broken.',
    scopePoints: [
      'Photorealistic Architectural Exterior 3D Renders',
      'Commercial & Residential Building Facade Visualization',
      'Daylight, Twilight & Ambient Lighting Studies',
      'Material & Texture Integration (Teak, Glass, Stone, Terracotta, Stucco)',
      'Elevation Analysis & Volumetric Articulation',
      'Conversion of 2D CAD Plans into 3D Architectural Perspectives',
    ],
    image: bcroadRender,
    highlightText: 'Photorealistic Exterior Visualization & Volumetric Studies',
  },
];

export interface DrawingItem {
  label: string;
  type: 'render' | 'floorplan' | 'siteplan';
  image: string;
  caption?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  clientRef?: string;
  projectType: 'Commercial Building' | 'Apartment Building' | 'Residential Building' | 'Villa Project' | 'Structural Works' | 'Architectural Visualization';
  category: 'construction' | 'survey' | '3d-design';
  status: 'Proposed' | 'Completed' | 'Ongoing';
  location: string;
  verified: boolean;
  image: string;
  cadDrawing?: string;
  drawings?: DrawingItem[];
  areaDetails?: {
    label: string;
    area: string;
  }[];
  totalArea?: string;
  availableMaterials: string[];
  description: string;
  subcontractDetails?: {
    certifyingAuthority: string;
    certificationDate: string;
    mainContractorNotes: string;
  };
  copyrightNotice?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'bc-road-building',
    title: 'BC Road Commercial Building (Illikkal Building)',
    projectType: 'Commercial Building',
    category: '3d-design',
    status: 'Proposed',
    location: 'BC Road Junction, Feroke, Kerala',
    verified: true,
    image: bcroadRender,
    cadDrawing: bcroadFloorPlanGf,
    drawings: [
      { label: '3D Exterior Visualization', type: 'render', image: bcroadRender, caption: 'Illikkal Building commercial storefront with glass facade and illuminated interior' },
      { label: 'Ground Floor Plan (76.91 sqm)', type: 'floorplan', image: bcroadFloorPlanGf, caption: 'Shop 1 (3.00x6.00m), Shop 2 (3.00x4.40m), Shop 3 (3.00x6.00m), Twin Toilets' },
      { label: 'First Floor Plan (100.68 sqm)', type: 'floorplan', image: bcroadFloorPlanFf, caption: 'First Floor commercial layout, front passage and toilet' },
      { label: 'Site Plan & Road Network', type: 'siteplan', image: bcroadSitePlan, caption: 'Access from Military Road, to Beypore Beach, Cheruvannur Road & 4 car parks' },
    ],
    areaDetails: [
      { label: 'Ground Floor', area: '76.91 sqm' },
      { label: 'First Floor', area: '100.68 sqm' },
      { label: 'Second Floor', area: '17.36 sqm' },
    ],
    totalArea: '194.95 sqm',
    availableMaterials: [
      'Site Plan (Military Rd / Beypore Beach Rd)',
      'Ground Floor Plan (76.91 sqm)',
      'First Floor Plan (100.68 sqm)',
      'Second Floor Plan (17.36 sqm)',
      'Official 3D Architectural Exterior Visualization',
    ],
    description:
      'A multi-level contemporary commercial structure designed for high visibility at BC Road Junction, Feroke. The actual 3D visualization displays the "Illikkal Building" with expansive street-level boutique display glass, decorative terracotta jaali screen accents, an open upper balcony with glass railings, and paved vehicle parking.',
  },
  {
    id: 'chungam-flat-feroke',
    title: 'Apartment Building at Chungam',
    clientRef: 'Mr. Ashraf',
    projectType: 'Apartment Building',
    category: '3d-design',
    status: 'Proposed',
    location: 'Chungam, Feroke, Kerala',
    verified: true,
    image: chungamRender,
    cadDrawing: chungamFloorPlan,
    drawings: [
      { label: '3D Exterior Render', type: 'render', image: chungamRender, caption: 'Night lighting architectural visualization with balanced balconies and entrance stairway' },
      { label: 'Ground & 1st Floor Plan', type: 'floorplan', image: chungamFloorPlan, caption: 'Dual living units per floor with living, dining, kitchen, and attached bedrooms' },
      { label: 'Site Plan & Boundaries', type: 'siteplan', image: chungamSitePlan, caption: 'Municipality Road & Private Road boundaries, 490.16 m2 total plot calculation' },
    ],
    areaDetails: [
      { label: 'Ground Floor Area', area: '1,555.25 sqft (144.54 m²)' },
      { label: 'First Floor Area', area: '1,781.10 sqft (165.53 m²)' },
      { label: 'Second Floor Area', area: '1,781.10 sqft (165.53 m²)' },
      { label: 'Terrace Floor Area', area: '156.66 sqft (14.56 m²)' },
    ],
    totalArea: '5,274.12 sqft (490.16 m²)',
    availableMaterials: [
      'Site Plan with Municipality & Private Roads',
      'Ground Floor Working Plan',
      'First & Second Floor Working Plans',
      'Terrace Floor Working Plan',
      '3D Night Architectural Visualization',
    ],
    description:
      'Commissioned for Mr. Ashraf at Chungam, Feroke. The verified plans provide a generous 5,274.12 sqft multi-family residential building featuring symmetrical 2-unit-per-floor layouts, private balconies, central open staircase, and perimeter boundary lighting.',
  },
  {
    id: 'idimuzhikkal-residence',
    title: 'Residential Building at Idimuzhikkal',
    clientRef: 'Mr. Shamnas',
    projectType: 'Residential Building',
    category: '3d-design',
    status: 'Proposed',
    location: 'Idimuzhikkal, Kerala',
    verified: true,
    image: idimuzhikkalRender,
    cadDrawing: idimuzhikkalFloorPlan,
    drawings: [
      { label: '3D Exterior Visualization', type: 'render', image: idimuzhikkalRender, caption: 'Modern Kerala fusion home with terracotta tiled pitch roof and double-height arched window' },
      { label: 'Ground & 1st Floor Plan', type: 'floorplan', image: idimuzhikkalFloorPlan, caption: 'Sitout, living, courtyard, dining, kitchen, attached bedrooms & upper open terrace' },
      { label: 'Site Plan & Setback Lines', type: 'siteplan', image: idimuzhikkalSitePlan, caption: 'Road and drain boundary offsets with angular plot layout' },
    ],
    areaDetails: [
      { label: 'Ground Floor Area', area: '1,084.00 sqft' },
      { label: 'First Floor Area', area: '946.23 sqft' },
    ],
    totalArea: '2,030.23 sqft',
    availableMaterials: [
      'Site Plan with Boundary & Drainage Lines',
      'Ground Floor Plan (1,084.00 sqft)',
      'First Floor Plan (946.23 sqft)',
      '3D Architectural Visualization (Twilight Render)',
    ],
    description:
      'Prepared for Mr. Shamnas in Idimuzhikkal. The design unites traditional Kerala roof pitch forms with contemporary architectural detailing: warm terracotta roof tiles, an iconic double-height arched window illuminating the interior staircase and living hall, rustic brick cladding accents, and an open terrace.',
  },
  {
    id: 'royal-villa-feroke',
    title: 'Royal Villa at Feroke',
    clientRef: 'Mr. Abdul Latheef / Royal Group',
    projectType: 'Villa Project',
    category: '3d-design',
    status: 'Proposed',
    location: 'Feroke, Calicut, Kerala',
    verified: true,
    image: royalVillaRender,
    cadDrawing: royalVillaFloorPlan,
    drawings: [
      { label: '3D Exterior Visualization', type: 'render', image: royalVillaRender, caption: 'Grand contemporary facade with vertical hanging gardens, timber eaves, and Royal Villa gate' },
      { label: 'Ground & 1st Floor Plan', type: 'floorplan', image: royalVillaFloorPlan, caption: 'Foyer, living, dining, open kitchen, sitout, and master bedrooms' },
      { label: 'Site Plan & Master Layout', type: 'siteplan', image: royalVillaSitePlan, caption: 'Municipality road (3.0M and 2.8M wide) frontage and access' },
    ],
    areaDetails: [
      { label: 'Ground Floor Plan', area: '945.69 sqft' },
      { label: 'First Floor Plan', area: '988.73 sqft' },
      { label: 'Alternative Upper Level', area: '784.29 sqft' },
    ],
    totalArea: '1,934.42 sqft (Option 1)',
    availableMaterials: [
      'Site Plan with 3M Wide Municipal Access',
      'Ground Floor Plan (945.69 sqft)',
      'First Floor Plan (988.73 sqft / 784.29 sqft)',
      '3D Architectural Exterior Visualization',
    ],
    description:
      'A prestigious contemporary villa proposal for Mr. Abdul Latheef and the Royal Group at Feroke. The actual 3D render displays the prominent "Royal Villa" entrance pillar, rich tropical cantilevered timber soffits, lush vertical hanging planters along the upper balcony, and a soaring double-height glass stair volume.',
  },
  {
    id: 'ponnani-residential-archival',
    title: 'Residential Project at Ponnani',
    clientRef: 'Mr. Niyas Ponnani',
    projectType: 'Residential Building',
    category: '3d-design',
    status: 'Proposed',
    location: 'Ponnani, Malappuram District, Kerala',
    verified: true,
    image: genericCadDrawing,
    availableMaterials: [
      'Ground Floor Plan (Archived)',
      'First Floor Plan (Archived)',
      'Room Layouts & Dimensions (Archived)',
    ],
    copyrightNotice:
      'Copyright Archival Notice: The supplied Ponnani project drawings contain an intellectual property notice identifying them as property of Quesa Developers Pvt Ltd. In accordance with strict ethical and legal guidelines, architectural drawings are held in archive and withheld from public publication pending confirmed third-party clearance.',
    description:
      'Architectural planning and dimensional layout for Mr. Niyas at Ponnani. The project file includes ground and upper floor layouts with detailed room dimensions, currently maintained in the firm’s confidential records under professional IP protection standards.',
  },
];

export const CREDENTIALS_DATA = {
  title: 'Documented Construction Experience',
  subtitle: 'Verified Subcontract Engineering Credentials',
  certificate: {
    issuer: 'Selmec Engineering Construction',
    issuerCredentials: 'ISO 9001:2015 Certified Engineering Firm',
    issueDate: '30 April 2026',
    project: 'Construction of Govt. ITI Building for SC Development at Tuneri, Kerala',
    recipient: 'K S Associates',
    role: 'Subcontractor for Structural Works',
    scopeSummary: [
      'Reinforced Cement Concrete (RCC) Foundations & Substructure',
      'Structural Columns & Vertical Load-Bearing Elements',
      'Engineered Floor & Roof Beams',
      'Suspended Structural RCC Slabs',
    ],
    verificationStatement:
      'The certificate officially attests that K S Associates performed the specified structural execution in accordance with approved engineering drawings, rigorous civil specifications, and demonstrated coordinated scheduling adherence.',
    noteOnISO:
      'Important Note: The ISO 9001:2015 certification belongs to the certifying issuing authority, Selmec Engineering Construction. K S Associates is proud of its verified partnership on major public infrastructure.',
  },
};
