import { useEffect, useState } from "react";
import { siteConfig as c } from "./data/siteConfig";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectGrid from "./components/ProjectGrid";
import ProjectCaseStudy from "./components/ProjectCaseStudy";
import Skills from "./components/Skills";
import EducationTimeline from "./components/EducationTimeline";
import ContactForm from "./components/ContactForm";
import AIChat from "./components/AIChat";
import Footer from "./components/Footer";
export default function App() {
  const [theme, setTheme] = useState<string>(c.defaultTheme);
  const [open, setOpen] = useState<string | null>(null);
  useEffect(() => { document.documentElement.dataset.theme = theme; document.title = c.title; }, [theme]);
  useEffect(() => { document.body.classList.toggle("reduce", c.reduceMotion); }, []);
  const s = c.sections;
  return (
    <div className="frame"><div className="canvas">
      <Navigation theme={theme} onTheme={() => setTheme(theme === "dark" ? "light" : "dark")} />
      <Hero />
      {s.about && <About />}
      {s.work && <ProjectGrid onOpen={setOpen} />}
      {s.skills && <Skills />}
      {s.journey && <EducationTimeline />}
      {s.contact && <ContactForm />}
      <Footer />
    </div>
    {open && <ProjectCaseStudy id={open} onOpen={setOpen} onClose={() => setOpen(null)} />}
    {s.assistant && <AIChat />}
    </div>
  );
}
