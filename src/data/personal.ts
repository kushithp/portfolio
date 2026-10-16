// EDIT ME: all personal info lives here. Leave a field "" to hide it.
export interface Personal {
  fullName: string;
  displayName: string;
  title: string;
  intro: string;
  about: string[];
  college: string;
  degree: string;
  academicYear: string;
  graduationYear: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  otherLinks: { label: string; url: string }[];
  profilePhoto: string;
  aboutPhoto: string;
  resume: string;
  currentlyLearning: string[];
  careerInterests: string[];
  internship: { open: boolean; note: string };
}
export const personal: Personal = {
  fullName: "Kushith P",
  displayName: "Kushith P",
  title: "Third-year Computer Science Engineering student",
  intro:
    "I build thoughtful digital experiences and practical software, exploring web development, AI, and the technologies shaping what comes next.",
  about: [
    "I'm a third-year Computer Science Engineering student who enjoys turning rough ideas into working software.",
    "I learn fastest by building something real, breaking it, and fixing it.",
  ],
  college: "St Joseph Engineering College vamanjoor, Mangalore",
  degree: "B.Tech, Computer Science Engineering",
  academicYear: "Third year",
  graduationYear: "2028",
  location: "Mangalore, India",
  email: "kushithx@gmail.com",
  phone: "+91 7411404953",
  github: "https://github.com/kushithp",
  linkedin: "https://www.linkedin.com/in/kushith-p132006/",
  otherLinks: [],
  profilePhoto: "/images/IMG_7047.jpeg",
  aboutPhoto: "/images/image2.jpeg",
  resume: "public/documents/resume .pdf",
  currentlyLearning: [],
  careerInterests: ["Software development", "Applied AI"],
  internship: { open: true, note: "Open to internships" },
};
