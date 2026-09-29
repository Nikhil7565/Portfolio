export const site = {
  name: "Nikhil Agrawal",
  role: "Software Developer • AI/ML Builder",
  roleLong:
    "Software Developer (Fresher) — Java | Python | AI/ML | Web Development",
  tagline: "BUILDING INTELLIGENCE",
  summary:
    "Computer Science & Engineering student with hands-on experience in Java, Python, JavaScript, AI/ML, responsive web applications, REST APIs, and database-driven systems. Building PWA and AI-powered products with React, FastAPI, Firebase, PyTorch, and modern development tools.",
  location: "Mathura, Uttar Pradesh",
  phone: "+91 7565951601",
  education: {
    school: "GLA University",
    degree: "B.Tech in Computer Science and Engineering",
    years: "2023 – 2027",
  },
  email: "nikhil.agrawal_cs23@gla.ac.in",
  linkedin: "https://www.linkedin.com/in/nikhil-agrawal-58734b2a2",
  github: "https://github.com/Nikhil7565",
  resumeHref: "/resume.pdf",
  profileImage: "/profile.jpg",
  languages: ["Hindi (Native)", "English (Professional)"],
  competencies: [
    "Problem-Solving",
    "Critical Thinking",
    "Adaptability",
    "Team Collaboration",
    "Time Management",
  ],
  metrics: [
    { value: "250+", label: "DSA PROBLEMS" },
    { value: "2×", label: "HACKATHON FINALIST" },
    { value: "AI/ML", label: "EXPERIENCE" },
  ],
  nav: [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#achievements", label: "Achievements" },
    { href: "#contact", label: "Contact" },
  ],
} as const;

export const seo = {
  title: "Nikhil Agrawal — Software Developer | AI/ML Builder",
  description:
    "Portfolio of Nikhil Agrawal, a Computer Science & Engineering student focused on software development, AI/ML, web applications and problem solving.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};
