export const EDITOR_PROFILE = {
  name: "Fasih Raza",
  role: "Video Editor & Visual Storyteller",
  kicker: "VIDEO EDITOR & VISUAL STORYTELLER",
  heroHeadline: "I turn raw footage into visual experiences.",
  heroDescription: "Specializing in high-retention short-form reels, cinematic commercials, dynamic music videos, and narrative YouTube storytelling. Transforming chaotic multi-cam rushes into punchy, unforgettable visual rhythm.",
  availability: "Available for select projects",
  location: "Remote Worldwide",
  portraitUrl: "/src/assets/images/portrait_fasih_raza_1792316762601.jpeg",
  bio: `I am a freelance video editor and post-production specialist with over 7 years of cutting experience. My philosophy centers on emotional rhythm: matching sound design, kinetic micro-cuts, and precise color grading to hold human attention from the first second to the final frame.`,
  contact: {
    email: "fasihaptech@gmail.com",
    whatsapp: "+1 (555) 019-2834",
    whatsappUrl: "https://wa.me/15550192834?text=Hi%20Fasih,%20I%20have%20a%20video%20project%20inquiry",
    instagram: "@fasih.edits",
    instagramUrl: "https://instagram.com",
    youtube: "@FasihRazaFilms",
    youtubeUrl: "https://youtube.com",
    twitter: "@fasihraza",
    twitterUrl: "https://x.com"
  },
  stats: [
    { label: "Total Video Views", value: "45M+" },
    { label: "Completed Edits", value: "240+" },
    { label: "Avg. Retention Rate", value: "84%" },
    { label: "Standard Delivery", value: "48-72h" }
  ],
  tools: [
    { name: "Adobe Premiere Pro", role: "NLE Assembly & Multi-cam Pacing", level: "Master" },
    { name: "DaVinci Resolve Studio", role: "Color Grading & ACES Color Science", level: "Master" },
    { name: "Adobe After Effects", role: "Kinetic Typography & 3D Tracking", level: "Advanced" },
    { name: "CapCut Pro Desktop", role: "Native Platform Algorithms & Captions", level: "Advanced" },
    { name: "Adobe Audition", role: "Foley, Multitrack Mix & Dialogue Isolation", level: "Advanced" },
    { name: "Blender 3D", role: "3D Mockups & Title Extrusions", level: "Intermediate" }
  ]
};
export const PROJECTS = [
  {
    id: "cyberpunk-tokyo",
    title: "Neon Drift // Shinjuku After Rain",
    client: "Aethel Apparel Brand",
    category: "Reels & Shorts",
    duration: "0:28",
    aspectRatio: "9:16",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-tokyo-night-traffic-and-neon-lights-42407-large.mp4",
    posterUrl: "/src/assets/images/cinematic_film_still_1792315115142.jpg",
    tagline: "High-contrast nocturnal streetwear drop with anamorphic motion design",
    description: "A punchy vertical teaser cut designed for Instagram Reels and TikTok, synced precisely to 134 BPM synth wave percussion.",
    objective: "Generate massive organic reach and pre-launch hype for the Tokyo capsule collection within the first 3 seconds of scroll.",
    creativeApproach: "Utilized rapid-cut match transitions between neon alleyways and product close-ups, with speed-ramped whip pans that match the beat drops.",
    techniques: {
      colorGrading: "Kodak 2383 film print emulation with teal shadow push and saturated neon reds.",
      soundDesign: "Custom atmospheric rainfall foley blended with synthesized riser swells and heavy bass impacts.",
      pacing: "128 cuts per minute during the beat drop with deliberate 0.5s visual rests on hero garments.",
      motionGraphics: "Subtle chromatic aberration displacement and custom Japanese typographic tracking."
    },
    software: ["DaVinci Resolve", "Adobe Premiere Pro", "After Effects"],
    metrics: {
      views: "2.4M",
      retention: "89%",
      engagement: "14.2%"
    }
  },
  {
    id: "apex-velocity",
    title: "Apex GT // The Mountain Pass",
    client: "Apex Performance Motors",
    category: "Brand Commercials",
    duration: "0:35",
    aspectRatio: "9:16",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-sports-car-driving-through-the-city-at-night-42436-large.mp4",
    posterUrl: "/src/assets/images/hero_editor_studio_1792315114388.jpg",
    tagline: "Adrenaline-fueled sports coupe commercial optimized for vertical social feeds",
    description: "Transforming track telemetry and drone chase footage into a heart-pounding vertical brand experience.",
    objective: "Showcase vehicle acceleration and acoustic engineering to drive test drive reservations on mobile.",
    creativeApproach: "Cut on motion vectors, matching tire spins with camera zooms. Seamlessly stitched internal cockpit cams with exterior high-speed chases.",
    techniques: {
      colorGrading: "Arri Alexa LogC to Rec.709 with cold steel highlights and deep rich asphalt blacks.",
      soundDesign: "Engine roar micro-layering: supercharged V8 exhaust rumble combined with Doppler whip fx.",
      pacing: "Progressive acceleration: starting at 40 BPM and escalating into a 160 BPM climax.",
      motionGraphics: "Minimal telemetry HUD graphics tracking vehicle steering angles."
    },
    software: ["Premiere Pro", "DaVinci Resolve Studio"],
    metrics: {
      views: "1.8M",
      retention: "82%",
      engagement: "9.8%"
    }
  },
  {
    id: "solitude-cinema",
    title: "Echoes of the North",
    client: "Nordic Wanderlust Doc",
    category: "Cinematic Edits",
    duration: "0:44",
    aspectRatio: "9:16",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-fog-over-a-dense-forest-of-pine-trees-42405-large.mp4",
    posterUrl: "/src/assets/images/cinematic_film_still_1792315115142.jpg",
    tagline: "Atmospheric travel documentary cut exploring solitude and scale",
    description: "Contemplative narrative reel combining slow dolly drone shots with evocative nature sound design.",
    objective: "Captivate high-end travel enthusiasts and spark deep emotional resonance through slow, deliberate framing.",
    creativeApproach: "Anti-hustle editing: allowing moments to breathe for 3-4 seconds while keeping visual interest alive through micro-camera motion.",
    techniques: {
      colorGrading: "Custom muted film LUT with lifted misty midtones and organic 35mm fine grain.",
      soundDesign: "Subtle wind howling, crunching snow foley, and solo cello string sustain.",
      pacing: "Meditative breathing cadence synchronized to acoustic downbeats.",
      motionGraphics: "Minimalist editorial title cards using classic serif typography."
    },
    software: ["DaVinci Resolve", "Adobe Audition"],
    metrics: {
      views: "940K",
      retention: "78%",
      engagement: "11.4%"
    }
  },
  {
    id: "underground-sound",
    title: "Midnight Signal // Tour Visuals",
    client: "Kroma Sound Records",
    category: "Music Videos",
    duration: "0:32",
    aspectRatio: "9:16",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-dj-mixing-music-on-a-sound-console-42398-large.mp4",
    posterUrl: "/src/assets/images/hero_editor_studio_1792315114388.jpg",
    tagline: "Strobe-synced live concert recap with analogue glitch aesthetics",
    description: "Capturing the raw energy of an underground electronic warehouse session in London.",
    objective: "Promote European festival ticket sales by conveying the sweat, bass, and communal euphoria of the live experience.",
    creativeApproach: "Frame-rate modulation from 24fps down to 12fps shutter-drag, interspersed with CRT monitor feedback loops.",
    techniques: {
      colorGrading: "Fluorescent magenta/cyan split tone with high contrast and film halation.",
      soundDesign: "Crowd cheer dynamics, filtered low-pass EQ build-ups, and stadium reverb drops.",
      pacing: "Sync-locked to sub-bass transients with optical flow frame morphing.",
      motionGraphics: "Analogue tape distortion, VHS scanlines, and kinetic lyric overlays."
    },
    software: ["After Effects", "Premiere Pro"],
    metrics: {
      views: "3.1M",
      retention: "91%",
      engagement: "16.7%"
    }
  },
  {
    id: "creator-mastery",
    title: "The Art of Attention",
    client: "Devin Cole Creative",
    category: "YouTube Content",
    duration: "0:50",
    aspectRatio: "9:16",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-young-man-working-with-his-laptop-at-home-42409-large.mp4",
    posterUrl: "/src/assets/images/portrait_video_editor_1792315115574.jpg",
    tagline: "High-retention educational short dissecting modern visual storytelling",
    description: "A masterclass in YouTube pacing: retention hooks, animated paper textures, sound accents, and B-roll cadence.",
    objective: "Convert casual vertical viewers into loyal YouTube channel subscribers with zero drop-off in the first 10 seconds.",
    creativeApproach: "Visual pattern interrupt every 2.4 seconds using zoom snaps, graphical callouts, and multi-layered sound design.",
    techniques: {
      colorGrading: "Natural skin-tone preservation with clean daylight neutral balance.",
      soundDesign: "Tactile whooshes, keyboard clicks, paper ruffles, and cinematic pop accents.",
      pacing: "Aggressive retention curve design with continuous forward visual momentum.",
      motionGraphics: "Smooth spring animations, highlighted text callouts, and animated UI elements."
    },
    software: ["Premiere Pro", "After Effects", "CapCut Pro"],
    metrics: {
      views: "1.2M",
      retention: "86%",
      engagement: "13.1%"
    }
  },
  {
    id: "artisan-ceramics",
    title: "Earth & Kiln // Master Potter",
    client: "Komorebi Studio Kyoto",
    category: "Brand Commercials",
    duration: "0:29",
    aspectRatio: "9:16",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-potter-shaping-a-clay-vase-42401-large.mp4",
    posterUrl: "/src/assets/images/cinematic_film_still_1792315115142.jpg",
    tagline: "Tactile artisanal craft commercial for a luxury ceramic collection",
    description: "Macro cinematography highlighting wet clay textures, spinning wheels, and artisan hands.",
    objective: "Establish emotional craftsmanship prestige and drive pre-orders for limited ceramic vessels.",
    creativeApproach: "Seamless circular match-cuts following the pottery wheel rotation, paired with intimate ASMR audio.",
    techniques: {
      colorGrading: "Warm terracotta tones with rich umber shadows and soft daylight roll-off.",
      soundDesign: "Isolated wet clay squelch, wheel motor hum, and crisp water droplets in binaural stereo.",
      pacing: "Smooth fluid flow that mirrors the potter\u2019s hand pressure.",
      motionGraphics: "Subtle clean branding watermark in matte gold."
    },
    software: ["DaVinci Resolve Studio", "Adobe Audition"],
    metrics: {
      views: "850K",
      retention: "88%",
      engagement: "15.9%"
    }
  }
];
export const SERVICES = [
  {
    id: "short-form",
    title: "Short-Form Video Editing",
    shortDesc: "Punchy, high-retention Reels, TikToks, and YouTube Shorts built to hook viewers in the first 2 seconds.",
    turnaround: "24\u201348 Hours",
    deliverables: [
      "Hook optimization & script trimming",
      "Dynamic animated subtitles & emojis",
      "Pattern interrupts & B-roll layering",
      "Platform-native audio & 9:16 exports"
    ],
    idealFor: "Creators, Founders, & DTC Brands wanting viral momentum"
  },
  {
    id: "youtube-editing",
    title: "YouTube Video Editing",
    shortDesc: "Full-length narrative storytelling engineered for maximum Average View Duration and click-through retention.",
    turnaround: "3\u20135 Days",
    deliverables: [
      "A-Roll narrative assembly & dead air purge",
      "Chapter structuring & pacing curves",
      "Custom motion graphics & screen mockups",
      "Color correction & multitrack audio mix"
    ],
    idealFor: "YouTubers with 50K+ subscribers seeking agency-grade polish"
  },
  {
    id: "cinematic-edits",
    title: "Cinematic & Showreel Editing",
    shortDesc: "Visually poetic edits for travel, documentaries, athletic films, and brand manifestos with rich emotional weight.",
    turnaround: "4\u20137 Days",
    deliverables: [
      "Narrative arc development & emotional pacing",
      "Advanced speed-ramping & vector cuts",
      "Film grain & 35mm optical emulation",
      "Mastered cinematic soundtrack integration"
    ],
    idealFor: "Directors, cinematographers, & high-end luxury brands"
  },
  {
    id: "brand-commercials",
    title: "Brand Commercials & Ads",
    shortDesc: "High-converting video advertisements tailored for paid Meta, TikTok, and YouTube ad campaigns.",
    turnaround: "3\u20135 Days",
    deliverables: [
      "3x hook variations for A/B testing",
      "Clear value proposition callouts",
      "Direct-response CTA animations",
      "Split-ratio delivery (9:16, 1:1, 16:9)"
    ],
    idealFor: "E-commerce brands seeking lower CPA and higher ROAS"
  },
  {
    id: "social-content",
    title: "Social Media Content Packages",
    shortDesc: "Consistent monthly editing pipelines for personal brands and modern agencies requiring reliable weekly output.",
    turnaround: "Weekly Batch",
    deliverables: [
      "8\u201316 vertical reels per month",
      "Long-form to short-form repurposed cuts",
      "Organized Notion revision dashboard",
      "Source project archiving in Cloud"
    ],
    idealFor: "Busy executives and content creators scaling their presence"
  },
  {
    id: "color-sound",
    title: "Color Grading & Sound Design",
    shortDesc: "Elevating locked cuts into broadcast-ready cinema with custom ACES color transforms and immersive audio landscapes.",
    turnaround: "48 Hours",
    deliverables: [
      "ACES / Log to Rec.709 color science",
      "Film look emulation (Kodak/Fuji stock)",
      "Dialogue de-noising & vocal mastering",
      "Foley effects, risers, hits, & atmospheric beds"
    ],
    idealFor: "Production houses and editors needing finishing polish"
  }
];
export const PROCESS_STEPS = [
  {
    step: "01",
    number: "01",
    title: "Discover",
    description: "Understand the vision, target audience, and platform dynamics.",
    details: [
      "Review raw footage, assets, and audio tracks",
      "Align on brand tone, references, and pacing benchmarks",
      "Define target platform (Reels, TikTok, YouTube, TVC)"
    ],
    timeline: "Day 1"
  },
  {
    step: "02",
    number: "02",
    title: "Plan",
    description: "Shape the narrative concept, hook architecture, and visual direction.",
    details: [
      "Rough assemble the narrative backbone",
      "Select musical score, key sound cues, and BPM grid",
      "Identify critical hook frames and pattern interrupts"
    ],
    timeline: "Day 1\u20132"
  },
  {
    step: "03",
    number: "03",
    title: "Edit",
    description: "Build the story through precise pacing, visual effects, and layered sound.",
    details: [
      "Precision micro-cutting and dynamic speed ramps",
      "Custom kinetic typography and motion graphics",
      "Binaural sound design, foley layers, and dialogue mix",
      "Professional color grading & film emulation"
    ],
    timeline: "Day 2\u20133"
  },
  {
    step: "04",
    number: "04",
    title: "Deliver",
    description: "Refine the final master for its intended platform with zero compression loss.",
    details: [
      "Client review cycle via frame-accurate preview link",
      "Fine-tuning based on precise client feedback",
      "High-bitrate ProRes and H.264 exports",
      "Platform-ready delivery with thumbnail frames"
    ],
    timeline: "Day 3\u20134"
  }
];
