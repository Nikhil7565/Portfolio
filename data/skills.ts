export type SkillCategory = {
  id: string;
  label: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "FRONTEND",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    id: "backend",
    label: "BACKEND",
    items: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "FastAPI",
      "REST APIs",
      "API Integration",
    ],
  },
  {
    id: "aiml",
    label: "AI / ML",
    items: ["PyTorch", "NLP", "Python"],
  },
  {
    id: "databases",
    label: "DATABASES",
    items: ["PostgreSQL", "MongoDB", "Firebase Firestore"],
  },
  {
    id: "programming",
    label: "PROGRAMMING",
    items: ["Java", "Python", "JavaScript", "TypeScript", "SQL", "HTML5", "CSS3"],
  },
  {
    id: "core",
    label: "CORE",
    items: ["Data Structures & Algorithms", "Object-Oriented Programming"],
  },
  {
    id: "tools",
    label: "TOOLS",
    items: ["Git", "GitHub Actions", "VS Code"],
  },
];
