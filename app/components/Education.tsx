import { education } from "~/data/portfolio";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <SectionHeading title="Education" />

        <div className="space-y-10">
          {education.map((item, idx) => (
            <div
              key={item.id}
              className="animate-fade-in-up grid gap-4 sm:grid-cols-[6rem_1fr]"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="text-right">
                <span className="text-xs font-semibold uppercase tracking-[0.15em] text-blue-600">
                  {item.period}
                </span>
              </div>

              <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-blue-200 dark:before:bg-blue-800">
                <span className="absolute left-[-3px] top-1.5 h-[7px] w-[7px] rounded-full bg-blue-500" />

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.level} — {item.major}
                </h3>
                <p className="text-blue-600 dark:text-blue-400">{item.institution}</p>

                {item.details.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {item.details.map((detail, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400" />
                        {detail}
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
