import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, LayoutGrid, Columns } from 'lucide-react';
import { Project, PROJECTS } from '../data/portfolioData';
import { SmartphoneFrame } from './SmartphoneFrame';

interface PortfolioShowcaseProps {
  onOpenDetail: (project: Project) => void;
}

const CATEGORIES = [
  'All',
  'Reels & Shorts',
  'Cinematic Edits',
  'Brand Commercials',
  'Music Videos',
  'YouTube Content',
] as const;

export const PortfolioShowcase: React.FC<PortfolioShowcaseProps> = ({ onOpenDetail }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [activeAudioId, setActiveAudioId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');

  const carouselRef = useRef<HTMLDivElement>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (selectedCategory === 'All') return true;
    return p.category === selectedCategory;
  });

  const handleToggleAudio = (id: string) => {
    setActiveAudioId((prev) => (prev === id ? null : id));
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="work" className="py-24 sm:py-32 border-b border-white/[0.06] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-white/[0.06]">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block">
              Selected Work
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-white tracking-tight">
              Vertical Video Showcase
            </h2>
          </div>

          {/* View Toggles & Carousel Nav */}
          <div className="flex items-center gap-3">
            <div className="flex items-center border border-white/10 rounded-md p-0.5">
              <button
                type="button"
                onClick={() => setViewMode('carousel')}
                aria-label="Carousel View"
                className={`p-1.5 rounded transition-colors ${
                  viewMode === 'carousel' ? 'bg-white text-black' : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Columns className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                aria-label="Grid View"
                className={`p-1.5 rounded transition-colors ${
                  viewMode === 'grid' ? 'bg-white text-black' : 'text-neutral-400 hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
            </div>

            {viewMode === 'carousel' && (
              <div className="hidden sm:flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => scrollCarousel('left')}
                  aria-label="Scroll left"
                  className="p-1.5 rounded border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollCarousel('right')}
                  aria-label="Scroll right"
                  className="p-1.5 rounded border border-white/10 hover:border-white/30 text-neutral-400 hover:text-white transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Minimal Category Filter Tabs */}
        <div className="py-8 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-white text-black font-semibold'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Showcase Container */}
        {viewMode === 'carousel' ? (
          <div
            ref={carouselRef}
            className="flex items-start gap-8 sm:gap-10 overflow-x-auto no-scrollbar py-4 scroll-smooth"
          >
            {filteredProjects.map((project, idx) => (
              <div key={project.id} className="shrink-0 w-[270px] sm:w-[290px]">
                <SmartphoneFrame
                  project={project}
                  priority={idx < 2}
                  isHovered={hoveredProjectId === project.id}
                  isDimmed={hoveredProjectId !== null && hoveredProjectId !== project.id}
                  isAudioActive={activeAudioId === project.id}
                  onHover={(id) => setHoveredProjectId(id)}
                  onToggleAudio={handleToggleAudio}
                  onOpenDetail={onOpenDetail}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 py-4">
            {filteredProjects.map((project, idx) => (
              <SmartphoneFrame
                key={project.id}
                project={project}
                priority={idx < 3}
                isHovered={hoveredProjectId === project.id}
                isDimmed={hoveredProjectId !== null && hoveredProjectId !== project.id}
                isAudioActive={activeAudioId === project.id}
                onHover={(id) => setHoveredProjectId(id)}
                onToggleAudio={handleToggleAudio}
                onOpenDetail={onOpenDetail}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
