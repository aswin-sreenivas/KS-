/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * K S Associates – Corporate Website Application Root (Refined Standard)
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ProjectLightbox } from './components/ProjectLightbox';
import { ContactModal } from './components/ContactModal';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { PROJECTS, ProjectItem } from './data/company';
import { ArrowUp } from 'lucide-react';
import { updatePageSeo } from './utils/seo';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactDefaultService, setContactDefaultService] = useState<'Construction' | 'Survey' | '3D Design' | ''>('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Synchronize hash with current page
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (['home', 'about', 'services', 'projects', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Dynamically update Open Graph & Twitter card metadata for each page type / selected project
  useEffect(() => {
    if (selectedProject) {
      updatePageSeo('projects', {
        title: `${selectedProject.title} | Architectural Project – K S Associates`,
        description: selectedProject.description,
        image: selectedProject.image,
      });
    } else {
      updatePageSeo(currentPage);
    }
  }, [currentPage, selectedProject]);

  // Back to top scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContactModal = (service?: 'Construction' | 'Survey' | '3D Design') => {
    setContactDefaultService(service || '');
    setIsContactModalOpen(true);
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Lightbox project index cycling
  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    setSelectedProject(PROJECTS[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    setSelectedProject(PROJECTS[prevIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F4EF] text-[#292B27] antialiased selection:bg-[#C6A65B] selection:text-[#292B27]">
      {/* Global Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenContactModal={() => handleOpenContactModal()}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <Home
            onNavigate={handleNavigate}
            onOpenProjectModal={(proj) => setSelectedProject(proj)}
            onOpenContactModal={handleOpenContactModal}
          />
        )}
        {currentPage === 'about' && (
          <About
            onNavigate={handleNavigate}
            onOpenContactModal={() => handleOpenContactModal()}
          />
        )}
        {currentPage === 'services' && (
          <Services
            onNavigate={handleNavigate}
            onOpenContactModal={handleOpenContactModal}
          />
        )}
        {currentPage === 'projects' && (
          <Projects
            onOpenProjectModal={(proj) => setSelectedProject(proj)}
            onOpenContactModal={() => handleOpenContactModal()}
          />
        )}
        {currentPage === 'contact' && <Contact />}
      </main>

      {/* Corporate Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenContactModal={() => handleOpenContactModal()}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Back to Top Button with 2px radius and restrained styling */}
      {showBackToTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 left-6 z-40 w-9 h-9 rounded-[2px] bg-[#343A24] text-[#C6A65B] border border-[#C6A65B]/30 flex items-center justify-center hover:bg-[#242918] transition-colors duration-150 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A65B]"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Interactive Project Lightbox with Drawings & 3D Sheets */}
      <ProjectLightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onNavigateNext={handleNextProject}
        onNavigatePrev={handlePrevProject}
      />

      {/* Global Quick Contact & Consultation Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        defaultService={contactDefaultService}
      />
    </div>
  );
}
