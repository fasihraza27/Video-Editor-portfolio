/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { PortfolioShowcase } from "./components/PortfolioShowcase";
import { ProjectDetailModal } from "./components/ProjectDetailModal";
import { AboutSection } from "./components/AboutSection";
import { CreativeProcess } from "./components/CreativeProcess";
import { ServicesSection } from "./components/ServicesSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
export default function App() {
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState("");
  const [selectedProjectForContact, setSelectedProjectForContact] = useState("");
  const handleOpenDetail = (project) => {
    setActiveModalProject(project);
  };
  const handleCloseDetail = () => {
    setActiveModalProject(null);
  };
  const handleRequestQuote = (projectTitle) => {
    setSelectedProjectForContact(projectTitle);
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleSelectService = (serviceTitle) => {
    setSelectedServiceForContact(serviceTitle);
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleExploreWork = () => {
    const workSection = document.querySelector("#work");
    if (workSection) {
      workSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleOpenContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return <div className="min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-white selection:text-black">
      {
    /* Top Bar strictly matching 3-zone contract */
  }
      <Navbar onOpenContact={handleOpenContact} />

      {
    /* Hero with vertical smartphone preview */
  }
      <Hero
    onExploreWork={handleExploreWork}
    onOpenContact={handleOpenContact}
    onOpenProjectDetail={handleOpenDetail}
  />

      {
    /* Main Feature: 9:16 Vertical Smartphone Video Showcase */
  }
      <PortfolioShowcase onOpenDetail={handleOpenDetail} />

      {
    /* About Section with Studio Setup & Interactive NLE Timeline */
  }
      <AboutSection />

      {
    /* 4-Step Creative Process */
  }
      <CreativeProcess />

      {
    /* Services Section */
  }
      <ServicesSection onSelectService={handleSelectService} />

      {
    /* Contact & Project Inquiry Section */
  }
      <ContactSection
    initialService={selectedServiceForContact}
    initialProjectTitle={selectedProjectForContact}
  />

      {
    /* Footer */
  }
      <Footer />

      {
    /* High-Resolution Project Detail Modal */
  }
      {activeModalProject && <ProjectDetailModal
    project={activeModalProject}
    onClose={handleCloseDetail}
    onSelectProject={(proj) => setActiveModalProject(proj)}
    onRequestQuote={handleRequestQuote}
  />}
    </div>;
}
