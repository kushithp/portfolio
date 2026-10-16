// To add a project: copy one object below, change the values, save.
export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string[];
  technologies: string[];
  image: string;
  gallery: string[];
  problem: string;
  solution: string;
  keyFeatures: string[];
  myContribution: string;
  challenges: string;
  githubUrl: string;
  liveDemoUrl: string;
  featured: boolean;
  status: "completed" | "in-progress" | "planned";
}
export const projects: Project[] = [
 {
  id: "medvault",
  title: "MedVault AI",
  shortDescription:
    "An AI-powered healthcare management platform that helps users organize medical records, analyze medical reports, track medications, and manage health information.",
  fullDescription:
    "MedVault AI is a digital healthcare platform designed to simplify medical record management and make health information easier to understand. It combines centralized medical document organization with AI-assisted report summaries, medication tracking, health analytics, appointment management, and family health records.",
  category: [
    "Full Stack",
    "AI Application",
    "Healthcare",
    "Web App",
  ],
  technologies: [
    "React",
    "TypeScript",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "Google Gemini API",
    "Firebase",
  ],
  image: "/images/projects/medivault.png",
  gallery: [],
  problem:
    "Medical reports, prescriptions, appointments, and family health information can become scattered across different documents and applications. Understanding medical terminology can also be difficult for users without a medical background.",
  solution:
    "MedVault AI brings health records and essential healthcare management tools into one platform. AI-assisted report summaries help users understand medical information, while dedicated tools support medication tracking, appointment organization, and health record management.",
  keyFeatures: [
    "AI-assisted medical report analysis and summaries",
    "Centralized digital medical record management",
    "Medication tracking and dosage schedule management",
    "Health dashboard and analytics",
    "Medical appointment management",
    "Family health record organization",
    "Report comparison and document export, where supported",
  ],
  myContribution:
    "Developed MedVault AI as a healthcare technology project, focusing on the user experience, medical record organization, AI-assisted report understanding, and integration of healthcare management features.",
  challenges:
    "Integrating AI-assisted report analysis with document processing and health management workflows while keeping the interface understandable, maintaining reliable data handling, and avoiding presenting AI-generated summaries as professional medical diagnoses.",
  githubUrl: "https://github.com/kushithp/MedVault",
  liveDemoUrl: "",
  featured: true,
  status: "completed",
},
  {
    id: "fittrack",
title: "FitTrack",
shortDescription:
"A cross-platform fitness tracking application for iOS and Windows that helps users manage workouts, monitor fitness progress, and stay consistent with their health goals.",
fullDescription:
"FitTrack is a fitness companion designed to help users organize their workout routines, record physical activities, and monitor their progress over time. Built for iOS and Windows, the application aims to provide a convenient and consistent fitness tracking experience across devices.",
category: ["Full Stack", "Mobile App", "Desktop App", "Health & Fitness"],
technologies: [],
image: "/images/projects/fittrack.png",
gallery: [],
problem:
"Tracking workouts, maintaining consistent exercise routines, and monitoring fitness progress across different devices can be challenging when information is scattered across multiple applications or recorded manually.",
solution:
"FitTrack brings fitness tracking into a single cross-platform application, providing a centralized experience for recording workouts, reviewing progress, and managing personal fitness goals.",
keyFeatures: [
"Cross-platform support for iOS and Windows",
"Workout and physical activity tracking",
"Fitness goal management",
"Progress monitoring and workout history",
"User-friendly fitness dashboard",
"Consistent experience across supported devices",
],
myContribution:
"Designed and developed FitTrack as a cross-platform fitness application, focusing on usability, workout management, fitness progress tracking, and a consistent experience across iOS and Windows.",
challenges:
"Designing a consistent user experience across mobile and desktop platforms while organizing fitness data and ensuring that the application's core tracking workflows remain intuitive and maintainable.",
githubUrl: "https://github.com/kushithp/fittrack",
liveDemoUrl: "",
featured: true,
status: "completed",
},
];
