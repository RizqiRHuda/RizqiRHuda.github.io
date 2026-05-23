import { organizations } from "~/data/portfolio";
import { SectionHeading } from "./SectionHeading";

const initials = ["HM", "UK"];

export function Organization() {
  return (
    <section id="organization" className="bg-blue-50/40 px-6 py-24 dark:bg-blue-950/10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading title="Organization" />

        <div className="space-y-5">
          {organizations.map((org, idx) => (
            <div
              key={org.id}
              className="animate-fade-in-up flex items-start gap-5"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600 dark:bg-blue-900/40 dark:text-blue-300">
                {initials[idx]}
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {org.position}
                  </h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {org.period}
                  </span>
                </div>
                <p className="text-sm text-blue-600 dark:text-blue-400">{org.name}</p>
                <p className="text-sm text-gray-400 dark:text-gray-500">{org.city}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
