export type ExperienceItem = {
  id: string;
  title: string;
  org: string;
  subtitle?: string;
  date: string;
  points: string[];
};

export const experience: ExperienceItem[] = [
  {
    id: "codomax",
    title: "AI & ML Internship",
    org: "Codomax Digital Solutions",
    date: "SEP 2026",
    points: [
      "Developed Python-based mini projects",
      "Applied programming concepts",
      "Performed data analysis and visualization",
      "Used Pandas, NumPy, and Matplotlib",
      "Dataset exploration, cleaning, and visualization",
      "Built and tested Machine Learning models with Scikit-learn",
      "Completed a final AI/ML project",
      "GitHub-based project submission",
    ],
  },
  {
    id: "jovac",
    title: "JOVAC",
    org: "Job-Oriented Value-Added Course",
    subtitle: "Web Development Track",
    date: "JUN 2025 – JUL 2025",
    points: [
      "React.js, Node.js, Express.js, and MongoDB",
      "Full-stack capstone application",
      "Frontend and backend development",
      "REST API design",
      "Agile workflows",
      "Git-based development",
    ],
  },
];

export const workflow = [
  { id: "01", title: "DISCOVER", copy: "Understand the problem." },
  { id: "02", title: "DESIGN", copy: "Define the experience." },
  { id: "03", title: "BUILD", copy: "Turn ideas into software." },
  { id: "04", title: "TEST", copy: "Validate the solution." },
  { id: "05", title: "DEPLOY", copy: "Ship and improve." },
] as const;

export const hackathons = ["CODE FOR BHARAT", "ODOO HACKATHON"] as const;

export const dsaPlatforms = ["LeetCode", "GeeksforGeeks"] as const;

export const certification = {
  title: "AIML Project Based Learning",
  kind: "Certificate of Achievement",
  issuer: "KVCH in association with GLA University",
  date: "JUN–JUL 2025",
};
