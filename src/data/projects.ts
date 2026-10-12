// To add a project: copy one object below, change the values, save.
export interface Project {
  id: string; title: string; shortDescription: string; fullDescription: string;
  category: string[]; technologies: string[]; image: string; gallery: string[];
  problem: string; solution: string; keyFeatures: string[]; myContribution: string; challenges: string;
  githubUrl: string; liveDemoUrl: string; featured: boolean; status: "completed" | "in-progress" | "planned";
}
export const projects: Project[] = [
  { id: "ecotrack", title: "EcoTrack",
    shortDescription: "A carbon footprint tracker that calculates emissions from daily activities and shows useful environmental insights.",
    fullDescription: "", category: ["Full Stack", "Experiments"], technologies: [], image: "/images/projects/ecotrack.jpg", gallery: [],
    problem: "", solution: "", keyFeatures: [], myContribution: "", challenges: "", githubUrl: "", liveDemoUrl: "", featured: true, status: "completed" },
  { id: "reviewlens-ai", title: "ReviewLens AI",
    shortDescription: "An AI-powered review analyzer that surfaces sentiment, recurring themes and summaries of product feedback.",
    fullDescription: "", category: ["Artificial Intelligence", "Web Development"], technologies: [], image: "/images/projects/reviewlens.jpg", gallery: [],
    problem: "", solution: "", keyFeatures: [], myContribution: "", challenges: "", githubUrl: "", liveDemoUrl: "", featured: true, status: "completed" },
];
