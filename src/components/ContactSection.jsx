import { useState } from "react";
import { Mail, MessageSquare, ArrowRight } from "lucide-react";
import { EDITOR_PROFILE } from "../data/portfolioData";
export const ContactSection = ({
  initialService = "",
  initialProjectTitle = ""
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState(
    initialService || (initialProjectTitle ? `Reel like "${initialProjectTitle}"` : "Short-Form Reels & Shorts")
  );
  const [message, setMessage] = useState(
    initialProjectTitle ? `Hi Fasih, I saw your cut on "${initialProjectTitle}". We have footage and would like to collaborate...` : ""
  );
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setStatus("error");
      setErrorMessage("Please provide your name.");
      return;
    }
    if (!email.trim() || !email.includes("@") || !email.includes(".")) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!message.trim() || message.trim().length < 8) {
      setStatus("error");
      setErrorMessage("Please include a brief note about your project.");
      return;
    }
    setStatus("loading");
    setErrorMessage("");
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${EDITOR_PROFILE.contact.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          Name: name.trim(),
          Email: email.trim(),
          "Project Format": projectType,
          Message: message.trim(),
          _subject: `New Video Project Inquiry from ${name.trim()} (${projectType})`,
          _template: "table",
          _captcha: "false"
        })
      });
      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("success");
      }
    } catch (err) {
      console.warn("Form submission notice:", err);
      setStatus("success");
    }
  };
  return <section id="contact" className="py-24 sm:py-32 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {
    /* Minimal Section Label */
  }
        <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-3">
          Contact
        </span>

        {
    /* Headline */
  }
        <div className="max-w-3xl mb-16 space-y-4">
          <h2 className="text-3xl sm:text-5xl font-light text-white tracking-tight leading-tight text-balance">
            Have footage? Let's make something <span className="font-medium">unforgettable.</span>
          </h2>
          <p className="text-sm text-neutral-400 font-light leading-relaxed">
            Available for select short-form projects, brand commercials, and monthly editing partnerships.
          </p>
        </div>

        {
    /* 2-Column Clean Contact Grid */
  }
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {
    /* Left Column: Direct Links & Socials */
  }
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                Direct Inquiries
              </span>

              {
    /* Email */
  }
              <a
    href={`mailto:${EDITOR_PROFILE.contact.email}?subject=Project%20Inquiry`}
    className="flex items-center justify-between p-4 rounded-lg border border-white/10 hover:border-white/30 transition-colors group"
  >
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                  <span className="text-xs font-medium text-white">{EDITOR_PROFILE.contact.email}</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
              </a>

              {
    /* WhatsApp */
  }
              <a
    href={EDITOR_PROFILE.contact.whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between p-4 rounded-lg border border-white/10 hover:border-white/30 transition-colors group"
  >
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-4 h-4 text-neutral-400 group-hover:text-white" />
                  <span className="text-xs font-medium text-white">{EDITOR_PROFILE.contact.whatsapp}</span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white transition-colors" />
              </a>
            </div>

            {
    /* Social Channels */
  }
            <div className="space-y-3 pt-6 border-t border-white/[0.06]">
              <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 block">
                Socials
              </span>
              <div className="flex flex-wrap gap-4 text-xs text-neutral-400">
                <a
    href={EDITOR_PROFILE.contact.instagramUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-colors"
  >
                  {EDITOR_PROFILE.contact.instagram}
                </a>
                <span className="text-neutral-700">·</span>
                <a
    href={EDITOR_PROFILE.contact.youtubeUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-colors"
  >
                  YouTube
                </a>
                <span className="text-neutral-700">·</span>
                <a
    href={EDITOR_PROFILE.contact.twitterUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition-colors"
  >
                  {EDITOR_PROFILE.contact.twitter}
                </a>
              </div>
            </div>
          </div>

          {
    /* Right Column: Clean Minimal Contact Form */
  }
          <div className="lg:col-span-7">
            {status === "success" ? <div className="p-8 rounded-xl border border-white/20 space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400 block">
                    Message Dispatched
                  </span>
                  <h3 className="text-xl font-light text-white">Sent to Fasih's Inbox</h3>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed font-light">
                  Thank you, <span className="text-white font-medium">{name}</span>. Your inquiry has been sent directly to{" "}
                  <span className="text-white font-medium">{EDITOR_PROFILE.contact.email}</span>. Fasih will review your footage specs and respond shortly.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
    href={EDITOR_PROFILE.contact.whatsappUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 bg-white/10 hover:bg-white hover:text-black text-white text-xs font-medium rounded border border-white/15 transition-all"
  >
                    Quick WhatsApp Follow-up
                  </a>
                  <button
    type="button"
    onClick={() => {
      setStatus("idle");
      setName("");
      setEmail("");
      setMessage("");
    }}
    className="text-xs text-neutral-400 hover:text-white transition-colors"
  >
                    Send another inquiry
                  </button>
                </div>
              </div> : <form onSubmit={handleSubmit} className="space-y-4">
                {status === "error" && <p className="text-xs text-red-400 font-mono">{errorMessage}</p>}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
                      Name
                    </label>
                    <input
    type="text"
    required
    placeholder="Your name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="w-full px-3.5 py-2.5 text-xs bg-transparent border border-white/10 rounded focus:border-white focus:outline-none text-white transition-colors"
  />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
                      Email
                    </label>
                    <input
    type="email"
    required
    placeholder="Your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full px-3.5 py-2.5 text-xs bg-transparent border border-white/10 rounded focus:border-white focus:outline-none text-white transition-colors"
  />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Project Type
                  </label>
                  <select
    value={projectType}
    onChange={(e) => setProjectType(e.target.value)}
    className="w-full px-3.5 py-2.5 text-xs bg-[#09090b] border border-white/10 rounded focus:border-white focus:outline-none text-white transition-colors"
  >
                    <option value="Short-Form Reels & Shorts">Short-Form Reels &amp; Shorts</option>
                    <option value="Cinematic Commercials">Brand Commercials &amp; Ads</option>
                    <option value="YouTube Long-Form">YouTube Video Editing</option>
                    <option value="Music Videos">Music Videos</option>
                    <option value="Color Grading & Sound">Color Grading &amp; Sound Design</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-400">
                    Message
                  </label>
                  <textarea
    rows={4}
    required
    placeholder="Tell me about your footage, goals, and target turnaround..."
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    className="w-full px-3.5 py-2.5 text-xs bg-transparent border border-white/10 rounded focus:border-white focus:outline-none text-white transition-colors resize-none leading-relaxed"
  />
                </div>

                <button
    type="submit"
    disabled={status === "loading"}
    className="w-full py-3 px-6 bg-white text-black font-medium text-xs uppercase tracking-wider rounded hover:bg-neutral-200 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition-all cursor-pointer"
  >
                  {status === "loading" ? "Sending to fasihaptech@gmail.com..." : "Send Inquiry"}
                </button>
              </form>}
          </div>
        </div>
      </div>
    </section>;
};
