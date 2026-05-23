import { experiences } from "~/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Work Experience" />

        <div className="space-y-10">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className="animate-fade-in-up grid gap-4 sm:grid-cols-[6rem_1fr]"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="text-right">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">
                  {exp.period}
                </span>
              </div>

              <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-blue-200 dark:before:bg-blue-800">
                <span className="absolute left-[-3px] top-1.5 h-[7px] w-[7px] rounded-full bg-blue-500" />

                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {exp.position}
                  </h3>
                  <span className="rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
                    {exp.type}
                  </span>
                </div>
                <p className="text-blue-600 dark:text-blue-400">{exp.company}</p>
                <p className="text-sm text-gray-400 dark:text-gray-500">
                  {exp.city}
                </p>

                {exp.achievements.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {exp.achievements.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
