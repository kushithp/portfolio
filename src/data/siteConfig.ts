export const siteConfig = {
  title: "Your Name | Developer Portfolio", monogram: "YN", defaultTheme: "light" as "light" | "dark",
  heroHeadline: "developer.", contactHeading: "Have something in mind?",
  contactText: "I'm always interested in meaningful projects, technical discussions, internships and chances to build something useful.",
  footerText: "Designed and built by me", assistantName: "Ask About My Work",
  nav: [["Home", "home"], ["About", "about"], ["Work", "work"], ["Skills", "skills"], ["Journey", "journey"], ["Contact", "contact"]] as [string, string][],
  sections: { about: true, work: true, skills: true, journey: true, currentlyLearning: true, certifications: true, achievements: true, assistant: true, contact: true },
  reduceMotion: false,
};
