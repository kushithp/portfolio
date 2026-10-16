// Empty arrays hide their block. Only add things that are true.
export interface Entry {
  date: string;
  title: string;
  detail?: string;
}
export const education: Entry[] = [
  {
    date: "Now",
    title: "B.Tech,3rd year, Computer Science Engineering",
    detail: "St Joseph Engineering College  Vamanjoor, Mangalore",
  },
];
export const certifications: Entry[] = [];
export const achievements: Entry[] = [];
export const milestones: Entry[] = [];
