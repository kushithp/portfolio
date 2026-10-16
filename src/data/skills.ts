export interface SkillGroup {
  category: string;
  items: { name: string; status?: "comfortable" | "learning" }[];
}
export const skills: SkillGroup[] = [
  {
    category: "Languages",
    items: [
      { name: "C" },
      { name: "C++" },
      { name: "CSS" },
      { name: "Java" },
      { name: "Python" },
      { name: "JavaScript" },
    ],
  },
  {
    category: "Frontend",
    items: [
      { name: "HTML5" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "React.js" },
      { name: "Tailwind CSS" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Bootstrap" },
      { name: "Responsive Web Design" },
    ],
  },
  {
    category: "Tools & Technologies",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Data structures" },
      { name: "Postman" },
      { name: "Linux" },
      { name: "Algorithms", status: "learning" },
    ],
  },
  {
    category: "CS fundamentals",
    items: [
      { name: "Data Structures & Algorithms (DSA)" },
      { name: "Object-Oriented Programming (OOP)" },
      { name: "Database Management Systems (DBMS)" },
      { name: "Operating Systems (OS)" },
      { name: "Computer Networks (CN)" },
      { name: "Problem Solving" },
    ],
  },
];
