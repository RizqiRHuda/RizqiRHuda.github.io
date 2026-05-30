import { useState } from "react";
import { projects } from "~/data/portfolio";
import { SectionHeading } from "./SectionHeading";

const INITIAL_SHOW = 4;

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_SHOW);
  const hasMore = projects.length > INITIAL_SHOW;

  return (
    <section id="projects" className="bg-blue-50/40 px-6 py-24 dark:bg-blue-950/10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Projects" />

        <div className="space-y-16">
          {visible.map((project, idx) => (
            <div
              key={project.id}
              className="animate-fade-in-up grid gap-8 md:grid-cols-2 md:items-center"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                <div className="aspect-4/3 overflow-hidden rounded-lg bg-blue-50 dark:bg-blue-950/30">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className={idx % 2 === 1 ? "md:order-1 md:text-right" : ""}>
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">
                  {String(project.id).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-gray-500 dark:text-gray-400">
                  {project.description}
                </p>

                <div className={`mt-4 flex flex-wrap gap-1.5 ${idx % 2 === 1 ? "md:justify-end" : ""}`}>
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className={`mt-5 flex items-center gap-4 ${idx % 2 === 1 ? "md:justify-end" : ""}`}>
                  <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                  >
                    <GitHubIcon />
                    Repository
                  </a>
                  {/* {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                    >
                      <ExternalLinkIcon />
                      Live Demo
                    </a>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {hasMore && !showAll && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(true)}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-6 py-3 text-sm font-semibold text-blue-700 transition-all hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
            >
              Show all {projects.length} projects
              <ArrowIcon />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1-.8 1.5L13 22" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <polyline points="19 12 12 19 5 12" />
    </svg>
  );
}
