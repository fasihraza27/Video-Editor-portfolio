import { ArrowUp } from "lucide-react";
import { EDITOR_PROFILE } from "../data/portfolioData";
export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return <footer className="border-t border-white/[0.06] py-12 text-xs text-neutral-400">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-white font-medium tracking-wider uppercase text-xs">
              {EDITOR_PROFILE.name}
            </span>
            <span className="text-neutral-700">·</span>
            <span>© {currentYear} All rights reserved</span>
          </div>

          <div className="flex items-center gap-6">
            <a
    href={EDITOR_PROFILE.contact.instagramUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-colors"
  >
              Instagram
            </a>
            <a
    href={EDITOR_PROFILE.contact.youtubeUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-colors"
  >
              YouTube
            </a>
            <a
    href={EDITOR_PROFILE.contact.twitterUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-colors"
  >
              X / Twitter
            </a>
            <button
    type="button"
    onClick={scrollToTop}
    className="inline-flex items-center gap-1 hover:text-white transition-colors cursor-pointer ml-2"
  >
              <span>Top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>;
};
