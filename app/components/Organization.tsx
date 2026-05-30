import { organizations } from "~/data/portfolio";
import { SectionHeading } from "./SectionHeading";

const initials = ["HM", "UK"];

export function Organization() {
  return (
    <section
      id="organization"
      className="bg-blue-50/40 px-6  dark:bg-blue-950/10"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading title="Organization Experience" />

        <div className="space-y-6">
          {organizations.map((org, idx) => (
            <div
              key={org.id}
              className="animate-fade-in-up rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="flex gap-4">
                {/* Icon */}
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 font-bold text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
                  {initials[idx]}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {org.position}
                      </h3>

                      <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                        {org.name}
                      </p>

                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {org.city}
                      </p>
                    </div>

                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                      {org.period}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  {org.responsibilities && (
                    <ul className="mt-4 space-y-2">
                      {org.responsibilities.map((item, index) => (
                        <li
                          key={index}
                          className="flex gap-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}