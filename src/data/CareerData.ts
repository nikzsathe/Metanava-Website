export interface JobPosition {
  id: number;
  title: string;
  location: string;
  type: string;
  summary: string;
  applyEmail: string;
}

export interface Benefit {
  id: number;
  title: string;
  description: string;
}

export const jobPositions: JobPosition[] = [
  {
    id: 1,
    title: "Senior Demand Generation Manager",
    location: "Remote – India",
    type: "Full-time",
    summary: "Own ABM and demand programs for enterprise technology clients, partnering with media, data, and sales pods.",
    applyEmail: "careers@metanovatech.com",
  },
  {
    id: 2,
    title: "Marketing Operations Specialist",
    location: "Pune, Maharashtra",
    type: "Hybrid",
    summary: "Build automation workflows, maintain CRM hygiene, and ensure marketing attribution is accurate across systems.",
    applyEmail: "careers@metanovatech.com",
  },
  {
    id: 3,
    title: "Content & Research Strategist",
    location: "Remote – EMEA",
    type: "Contract-to-hire",
    summary: "Translate complex B2B stories into campaigns, nurture streams, and analyst-grade publications that drive demand.",
    applyEmail: "careers@metanovatech.com",
  },
];

export const benefits: Benefit[] = [
  {
    id: 1,
    title: "Flexible-first culture",
    description: "Global collaboration hours and remote-friendly policies keep teams productive without burning out.",
  },
  {
    id: 2,
    title: "Learning stipend",
    description: "Annual budgets for certifications, conferences, and tooling experimentation to stay ahead of the market.",
  },
  {
    id: 3,
    title: "Wellness coverage",
    description: "Comprehensive health plans, mental wellness days, and regional benefits for you and your family.",
  },
  {
    id: 4,
    title: "Ownership & impact",
    description: "Small, empowered squads own outcomes across marquee projects for the world’s leading technology brands.",
  },
];

