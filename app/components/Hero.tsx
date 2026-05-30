import { personalInfo } from "~/data/portfolio";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-blue-600">
            Full Stack Developer
          </p>

          <h1 className="mt-4 text-[clamp(3rem,12vw,7rem)] font-bold leading-[0.9] tracking-tight text-gray-900 dark:text-white">
            {personalInfo.name}
          </h1>

          <div className="mt-6 h-px w-16 bg-blue-500" />

          <p className="mt-6 max-w-md text-base leading-relaxed text-gray-500 dark:text-gray-400">
            {personalInfo.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
            <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              Available
            </span>
            <span className="text-gray-300 dark:text-gray-600">/</span>
            <span className="text-gray-500 dark:text-gray-400">{personalInfo.location}</span>
            <span className="text-gray-300 dark:text-gray-600">/</span>
            <a href={`mailto:${personalInfo.email}`} className="text-blue-600 hover:underline dark:text-blue-400">
              {personalInfo.email}
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 active:scale-[0.97]"
            >
              <DownloadIcon />
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-50 px-6 py-3 text-sm font-semibold text-blue-700 transition-all hover:bg-blue-100 active:scale-[0.97] dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center md:col-span-2 md:justify-end">
          <div className="absolute right-0 top-1/2 h-[30vw] w-[30vw] -translate-y-1/2 rounded-full border-[1.5px] border-blue-200 dark:border-blue-800" />
          <div className="absolute right-[10%] top-1/2 h-[20vw] w-[20vw] -translate-y-1/2 rounded-full border-[1.5px] border-blue-100 dark:border-blue-900" />

          <div className="relative">
            <img
              src={personalInfo.photoUrl}
              alt={personalInfo.name}
              className="relative h-40 w-40 rounded-full object-cover ring-2 ring-blue-100 dark:ring-blue-800 md:min-h-72 md:w-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function DownloadIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}
