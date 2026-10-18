import { useRef, useState } from "react";
import { ArrowDown, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { PROJECTS } from "../data/portfolioData";
export const Hero = ({
  onExploreWork,
  onOpenContact,
  onOpenProjectDetail
}) => {
  const featuredProject = PROJECTS[0];
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
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
  const toggleAudio = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };
  return <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 border-b border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {
    /* Split Screen Hero Layout */
  }
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {
    /* Left Column: Typography */
  }
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {
    /* Minimal Label & Availability */
  }
            <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-neutral-400 font-mono">
              <span className="text-white font-medium">Video Editor &amp; Visual Storyteller</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span className="text-neutral-400">Available for select projects</span>
            </div>

            {
    /* Headline */
  }
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight leading-[1.08] text-balance">
              I turn raw footage into{" "}
              <span className="font-semibold text-white">visual experiences.</span>
            </h1>

            {
    /* Editorial Description */
  }
            <p className="text-neutral-400 text-base sm:text-lg leading-relaxed max-w-xl font-light">
              Crafting engaging short-form reels, cinematic edits, social media videos, and brand commercials with rhythm, intention, and precise visual pacing.
            </p>

            {
    /* Minimal CTAs */
  }
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
    type="button"
    onClick={onExploreWork}
    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider uppercase text-black bg-white rounded-md hover:bg-neutral-200 active:scale-[0.99] transition-all cursor-pointer"
  >
                <span>Explore My Work</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </button>

              <button
    type="button"
    onClick={onOpenContact}
    className="inline-flex items-center gap-2 px-6 py-3 text-xs font-medium tracking-wider uppercase text-neutral-300 hover:text-white border border-white/15 rounded-md hover:border-white/30 active:scale-[0.99] transition-all cursor-pointer"
  >
                <span>Let's Collaborate</span>
              </button>
            </div>
          </div>

          {
    /* Right Column: Clean Minimal Smartphone Mockup */
  }
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-[260px] sm:w-[280px] aspect-[9/16] rounded-[38px] p-[8px] bg-[#18181b] border border-neutral-700/60 shadow-2xl">
              {
    /* Screen Bezel */
  }
              <div className="relative w-full h-full rounded-[30px] overflow-hidden bg-black select-none">
                {
    /* Camera Cutout */
  }
                <div className="absolute top-2.5 inset-x-0 z-20 flex justify-center pointer-events-none">
                  <div className="w-20 h-4 bg-black rounded-full border border-neutral-800/80" />
                </div>

                {
    /* Looping Showcase Video */
  }
                <video
    ref={videoRef}
    src={featuredProject.videoUrl}
    poster={featuredProject.posterUrl}
    playsInline
    loop
    autoPlay
    muted={isMuted}
    className="w-full h-full object-cover cursor-pointer"
    onClick={togglePlay}
  />

                {
    /* Quiet Controls Overlay */
  }
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-between p-4 pointer-events-none">
                  {
    /* Category */
  }
                  <div className="pt-6 flex justify-between items-center text-[10px] font-mono text-neutral-400">
                    <span className="uppercase tracking-wider">{featuredProject.category}</span>
                    <span>{featuredProject.duration}</span>
                  </div>

                  {
    /* Bottom details & action */
  }
                  <div className="space-y-2 pointer-events-auto">
                    <div>
                      <span className="text-[10px] text-neutral-400 uppercase tracking-wider block font-mono">
                        {featuredProject.client}
                      </span>
                      <h3 className="text-sm font-medium text-white line-clamp-1">
                        {featuredProject.title}
                      </h3>
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <div className="flex items-center gap-1.5">
                        <button
    type="button"
    onClick={togglePlay}
    aria-label={isPlaying ? "Pause preview" : "Play preview"}
    className="p-1.5 rounded-full bg-black/60 hover:bg-white hover:text-black text-neutral-200 border border-white/10 transition-colors cursor-pointer"
  >
                          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                        </button>

                        <button
    type="button"
    onClick={toggleAudio}
    aria-label={isMuted ? "Unmute sound" : "Mute sound"}
    className="p-1.5 rounded-full bg-black/60 hover:bg-white hover:text-black text-neutral-200 border border-white/10 transition-colors cursor-pointer"
  >
                          {!isMuted ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                      <button
    type="button"
    onClick={() => onOpenProjectDetail(featuredProject)}
    className="text-[11px] font-medium text-white hover:underline underline-offset-4 cursor-pointer"
  >
                        View Project
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>;
};
