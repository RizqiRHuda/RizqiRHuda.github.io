import { personalInfo, skills, techStack } from "~/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="bg-blue-50/40 px-6 py-24 dark:bg-blue-950/10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="About Me" />

        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-200">
              {personalInfo.description}
            </p>
            <div className="mt-6 flex items-center gap-3 text-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-400" />
              <span className="text-green-600 dark:text-green-400">Available for opportunities</span>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div>
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-gray-900 dark:text-white">
                Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-gray-900 dark:text-white">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <a
                    key={tech.name}
                    href={tech.icon}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-blue-900/20"
                  >
                    <img
                      src={`${tech.icon}/000000.svg`}
                      alt={tech.name}
                      className="h-4 w-4"
                      loading="lazy"
                    />
                    {tech.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
