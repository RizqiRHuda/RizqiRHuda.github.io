import type { Route } from "./+types/home";
import { Header } from "~/components/Header";
import { Hero } from "~/components/Hero";
import { About } from "~/components/About";
import { Education } from "~/components/Education";
import { Organization } from "~/components/Organization";
import { Experience } from "~/components/Experience";
import { Projects } from "~/components/Projects";
import { Contact } from "~/components/Contact";
import { Footer } from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Rizqi Rohmatul Huda| Full Stack Developer" },
    {
      name: "description",
      content: "Portfolio of Rizqi - Full Stack Developer",
    },
  ];
}

export default function Home() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Organization />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
