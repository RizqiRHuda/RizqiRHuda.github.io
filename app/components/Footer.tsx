import { personalInfo } from "~/data/portfolio";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 px-6 py-10 dark:bg-gray-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-gray-400">
          &copy; {year} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-sm text-gray-500">
          Built with React Router & Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
