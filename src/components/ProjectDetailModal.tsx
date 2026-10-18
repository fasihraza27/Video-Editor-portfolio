import React, { useRef, useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react';
import { Project, PROJECTS } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  onRequestQuote?: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onSelectProject,
  onRequestQuote,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowRight') {
        navigateToNext();
      } else if (e.key === 'ArrowLeft') {
        navigateToPrev();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project]);

  if (!project) return null;

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);

  const navigateToPrev = () => {
    const prevIndex = (currentIndex - 1 + PROJECTS.length) % PROJECTS.length;
    onSelectProject(PROJECTS[prevIndex]);
  };

  const navigateToNext = () => {
    const nextIndex = (currentIndex + 1) % PROJECTS.length;
    onSelectProject(PROJECTS[nextIndex]);
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const formatSeconds = (secs: number) => {
    if (isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#121215] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row text-neutral-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close project modal"
          className="absolute top-4 right-4 z-30 p-2 rounded-full bg-black/60 hover:bg-white hover:text-black text-neutral-300 transition-colors cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left Column: Vertical Video Player */}
        <div className="md:w-1/2 bg-black flex flex-col justify-center items-center p-6 border-b md:border-b-0 md:border-r border-white/10">
          <div className="relative w-full max-w-[260px] aspect-[9/16] rounded-[30px] overflow-hidden bg-black border border-neutral-800 shadow-xl">
            <video
              ref={videoRef}
              src={project.videoUrl}
              poster={project.posterUrl}
              playsInline
              loop
              autoPlay
              muted={isMuted}
              onTimeUpdate={() => {
                if (videoRef.current) {
                  setCurrentTime(videoRef.current.currentTime);
                  setDuration(videoRef.current.duration || 0);
                }
              }}
              className="w-full h-full object-cover cursor-pointer"
              onClick={togglePlay}
            />

            {!isPlaying && (
              <div
                onClick={togglePlay}
                className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer"
              >
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
              </div>
            )}
          </div>

          {/* Simple Clean Player Controls */}
          <div className="w-full max-w-[260px] mt-4 flex items-center justify-between text-xs text-neutral-400">
            <div className="flex items-center gap-2">
              <button onClick={togglePlay} className="hover:text-white transition-colors">
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </button>
              <button onClick={toggleMute} className="hover:text-white transition-colors">
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-white" />}
              </button>
              <span className="font-mono text-[11px] ml-1">
                {formatSeconds(currentTime)} / {formatSeconds(duration)}
              </span>
            </div>

            <div className="flex items-center gap-1">
              <button onClick={navigateToPrev} className="p-1 hover:text-white transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={navigateToNext} className="p-1 hover:text-white transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Project Overview */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto max-h-[80vh] md:max-h-[90vh] space-y-6">
          <div className="space-y-1">
            <div className="text-xs text-neutral-400 font-mono">
              <span>{project.category}</span>
              <span className="mx-2">·</span>
              <span>{project.client}</span>
            </div>
            <h2 className="text-2xl font-light text-white tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs text-neutral-400 leading-relaxed font-light pt-2">
              {project.description}
            </p>
          </div>

          {/* Objective & Approach */}
          <div className="space-y-4 pt-4 border-t border-white/10 text-xs text-neutral-300 font-light">
            <div className="space-y-1">
              <span className="text-neutral-400 uppercase tracking-wider font-mono text-[10px] block">
                Objective
              </span>
              <p className="leading-relaxed">{project.objective}</p>
            </div>

            <div className="space-y-1">
              <span className="text-neutral-400 uppercase tracking-wider font-mono text-[10px] block">
                Creative Approach
              </span>
              <p className="leading-relaxed">{project.creativeApproach}</p>
            </div>
          </div>

          {/* Techniques */}
          <div className="space-y-3 pt-4 border-t border-white/10 text-xs">
            <span className="text-neutral-400 uppercase tracking-wider font-mono text-[10px] block">
              Editing Breakdown
            </span>
            <div className="space-y-2 text-neutral-300 font-light">
              <div>
                <span className="text-white font-normal block">Color Grading:</span>
                <span className="text-neutral-400">{project.techniques.colorGrading}</span>
              </div>
              <div>
                <span className="text-white font-normal block">Sound Design:</span>
                <span className="text-neutral-400">{project.techniques.soundDesign}</span>
              </div>
              <div>
                <span className="text-white font-normal block">Pacing:</span>
                <span className="text-neutral-400">{project.techniques.pacing}</span>
              </div>
            </div>
          </div>

          {/* Software & Action */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="text-[11px] font-mono text-neutral-400">
              {project.software.join(' · ')}
            </div>
            <button
              onClick={() => {
                onClose();
                if (onRequestQuote) {
                  onRequestQuote(project.title);
                } else {
                  const target = document.querySelector('#contact');
                  if (target) target.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-4 py-2 bg-white text-black text-xs font-medium rounded hover:bg-neutral-200 transition-colors"
            >
              Collaborate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
