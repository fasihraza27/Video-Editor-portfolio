import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface SmartphoneFrameProps {
  project: Project;
  isHovered?: boolean;
  isDimmed?: boolean;
  isAudioActive?: boolean;
  onHover?: (id: string | null) => void;
  onToggleAudio?: (id: string) => void;
  onOpenDetail?: (project: Project) => void;
  priority?: boolean;
}

export const SmartphoneFrame: React.FC<SmartphoneFrameProps> = ({
  project,
  isHovered = false,
  isDimmed = false,
  isAudioActive = false,
  onHover,
  onToggleAudio,
  onOpenDetail,
  priority = false,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isInView, setIsInView] = useState(false);

  // IntersectionObserver: Pause when off-screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || hasError) return;

    if (!isInView) {
      if (!video.paused) {
        video.pause();
        setIsPlaying(false);
      }
    } else {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch(() => setIsPlaying(false));
      }
    }
  }, [isInView, hasError]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = !isAudioActive;
    }
  }, [isAudioActive]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleAudioClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onToggleAudio) {
      onToggleAudio(project.id);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (videoRef.current.duration && !isNaN(videoRef.current.duration)) {
        setDuration(videoRef.current.duration);
      }
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => onHover && onHover(project.id)}
      onMouseLeave={() => onHover && onHover(null)}
      className={`group flex flex-col items-center transition-all duration-300 ${
        isDimmed ? 'opacity-35 scale-[0.99]' : 'opacity-100'
      } ${isHovered ? 'scale-[1.02] z-20' : 'z-10'}`}
    >
      {/* Smartphone Mockup */}
      <div className="relative w-full max-w-[270px] sm:max-w-[290px] aspect-[9/16] rounded-[38px] p-[8px] bg-[#141417] border border-neutral-700/60 shadow-xl shadow-black/60 transition-transform duration-300">
        {/* Screen Bezel */}
        <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-black select-none">
          {/* Subtle Top Camera Pill */}
          <div className="absolute top-2 inset-x-0 z-20 flex justify-center pointer-events-none">
            <div className="w-18 h-3.5 bg-black rounded-full border border-neutral-800" />
          </div>

          {/* Video Player */}
          {!hasError ? (
            <video
              ref={videoRef}
              src={project.videoUrl}
              poster={project.posterUrl}
              playsInline
              loop
              muted={!isAudioActive}
              preload={priority ? 'auto' : 'metadata'}
              onTimeUpdate={handleTimeUpdate}
              onError={() => setHasError(true)}
              className="w-full h-full object-cover cursor-pointer"
              onClick={togglePlay}
            />
          ) : (
            <div
              className="w-full h-full relative cursor-pointer"
              onClick={() => onOpenDetail && onOpenDetail(project)}
            >
              <img
                src={project.posterUrl}
                alt={project.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center p-4">
                <span className="text-xs text-neutral-300 font-mono">Tap to view case study</span>
              </div>
            </div>
          )}

          {/* Subtle Controls Overlay */}
          <div
            className={`absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-between p-4 transition-opacity duration-200 ${
              isHovered || !isPlaying ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'
            }`}
          >
            {/* Top duration */}
            <div className="pt-6 flex justify-end items-center pointer-events-none">
              <span className="text-[10px] font-mono text-neutral-400 bg-black/50 px-1.5 py-0.5 rounded">
                {project.duration}
              </span>
            </div>

            {/* Center Play/Pause button */}
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
                className="w-11 h-11 rounded-full bg-black/70 hover:bg-white hover:text-black border border-white/15 text-white flex items-center justify-center backdrop-blur-sm transition-all cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
              </button>
            </div>

            {/* Bottom Actions Bar */}
            <div className="space-y-2">
              {/* Timeline scrubber bar */}
              <div
                className="w-full h-0.5 bg-white/20 rounded-full overflow-hidden cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  const rect = e.currentTarget.getBoundingClientRect();
                  const pos = (e.clientX - rect.left) / rect.width;
                  if (videoRef.current && duration > 0) {
                    videoRef.current.currentTime = pos * duration;
                  }
                }}
              >
                <div
                  className="h-full bg-white"
                  style={{
                    width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%`,
                  }}
                />
              </div>

              {/* Sound & Detail */}
              <div className="flex items-center justify-between text-xs text-white">
                <button
                  type="button"
                  onClick={handleAudioClick}
                  aria-label={isAudioActive ? 'Mute' : 'Unmute'}
                  className="p-1 rounded bg-black/60 hover:bg-white hover:text-black text-neutral-300 transition-colors"
                >
                  {isAudioActive ? <Volume2 className="w-3.5 h-3.5 text-white" /> : <VolumeX className="w-3.5 h-3.5" />}
                </button>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (onOpenDetail) onOpenDetail(project);
                  }}
                  className="flex items-center gap-1 text-[11px] font-medium text-neutral-300 hover:text-white"
                >
                  <span>Details</span>
                  <Maximize2 className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Unboxed Metadata Underneath */}
      <div className="mt-4 text-center max-w-[270px]">
        <div className="text-[11px] text-neutral-400 mb-1 flex items-center justify-center gap-2">
          <span>{project.client}</span>
          <span aria-hidden="true" className="text-neutral-600">·</span>
          <span>{project.category}</span>
        </div>

        <h3
          onClick={() => onOpenDetail && onOpenDetail(project)}
          className="text-sm font-semibold text-white hover:opacity-80 transition-opacity cursor-pointer line-clamp-1"
        >
          {project.title}
        </h3>

        <p className="text-xs text-neutral-400 line-clamp-2 mt-1 leading-relaxed font-light">
          {project.tagline}
        </p>
      </div>
    </div>
  );
};
