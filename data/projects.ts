export type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  date: string;
  description: string;
  technologies: string[];
  features: string[];
  flow: string[];
  liveDemo: string | null;
  github: string | null;
  caseStudy: {
    problem: string | null;
    solution: string | null;
    contribution: string | null;
    status: string | null;
  };
};

export const projects: Project[] = [
  {
    id: "oswal-point-centre",
    number: "01",
    title: "OSWAL POINT CENTRE",
    category: "ENTERPRISE PWA",
    date: "SEP 2025 – PRESENT",
    description:
      "Enterprise Progressive Web Application for QR-code-based product tracking and warranty management.",
    technologies: [
      "PWA",
      "Firebase",
      "Firestore",
      "Authentication",
      "Responsive UI",
    ],
    features: [
      "QR-code product tracking",
      "Warranty management",
      "Firebase Firestore",
      "Real-time synchronization",
      "Authentication",
      "Secure administrative controls",
      "Responsive desktop/mobile experience",
    ],
    flow: ["QR CODE", "PRODUCT", "DATABASE", "WARRANTY", "ADMIN"],
    liveDemo: null,
    github: null,
    caseStudy: {
      problem:
        "Product tracking and warranty records need a reliable digital path from a scanned QR code to an administrative system of record.",
      solution:
        "A Progressive Web Application that connects QR-code product tracking with warranty management, real-time Firestore data, authentication, and secure admin controls.",
      contribution: null,
      status: "In progress (Sep 2025 – present).",
    },
  },
  {
    id: "image-caption-generator",
    number: "02",
    title: "IMAGE CAPTION GENERATOR",
    category: "AI WEB APPLICATION",
    date: "AUG 2024 – DEC 2024",
    description:
      "AI-based image captioning application combining computer vision and NLP to generate natural-language descriptions.",
    technologies: ["PyTorch", "FastAPI", "React", "Computer Vision", "NLP"],
    features: [
      "Computer vision feature extraction",
      "NLP caption generation",
      "PyTorch model pipeline",
      "FastAPI backend",
      "React interface",
    ],
    flow: ["IMAGE", "COMPUTER VISION", "FEATURE EXTRACTION", "NLP", "GENERATED CAPTION"],
    liveDemo: null,
    github: null,
    caseStudy: {
      problem:
        "Images need to be described in natural language by combining computer vision with NLP.",
      solution:
        "A web application that runs an image through a vision and NLP pipeline to generate captions.",
      contribution: null,
      status: "Completed (Aug 2024 – Dec 2024).",
    },
  },
  {
    id: "personal-portfolio",
    number: "03",
    title: "PERSONAL PORTFOLIO",
    category: "RESPONSIVE WEB APPLICATION",
    date: "2025",
    description:
      "Responsive portfolio website designed to showcase projects, technical skills, achievements and certifications.",
    technologies: ["React", "Responsive Design", "Interactive UI"],
    features: [
      "Project storytelling",
      "Skills visualization",
      "Responsive layout",
      "Interactive UI",
    ],
    flow: ["BRAND", "WORK", "EXPERIENCE", "CONTACT"],
    liveDemo: "/",
    github: null,
    caseStudy: {
      problem:
        "A recruiter-friendly site needed to present software, AI/ML, and product work as one coherent brand.",
      solution:
        "A custom Next.js portfolio with editorial typography, project case studies, and the official cyan N/A-arrow identity.",
      contribution: "Designed and built the full experience.",
      status: "Live.",
    },
  },
];
