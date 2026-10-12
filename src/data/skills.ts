export interface SkillGroup { category: string; items: { name: string; status?: "comfortable" | "learning" }[] }
export const skills: SkillGroup[] = [
  { category: "Languages", items: [{ name: "Add your languages" }] },
  { category: "Frontend", items: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }] },
  { category: "Tools & fundamentals", items: [{ name: "Git" }, { name: "Data structures" }, { name: "Algorithms", status: "learning" }] },
];
