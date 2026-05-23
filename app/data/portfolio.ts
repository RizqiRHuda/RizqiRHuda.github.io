export const personalInfo = {
  name: "Rizqi Rohmatul Huda",
  title: "Full Stack Developer",
  email: "rizkyrhuda@email.com",
  phone: "+62 853 3434 4962",
  location: "Indonesia",
  description:
    "A passionate full-stack developer with experience building modern web applications. I enjoy crafting clean, efficient code and solving complex problems. Always eager to learn new technologies and improve my craft.",
  photoUrl:
    "/img/2141720264.jpg",
  resumeUrl: "#",
};

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "Laravel",
  "PHP",
  "Python",
  "MySQL",
  "MongoDB",
  "Tailwind CSS",
  "Git",
];

export const techStack = [
  { name: "React", icon: "https://cdn.simpleicons.org/react" },
  { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Express", icon: "https://cdn.simpleicons.org/express" },
  { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel" },
  { name: "PHP", icon: "https://cdn.simpleicons.org/php" },
  { name: "Python", icon: "https://cdn.simpleicons.org/python" },
  { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql" },
  { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb" },
];

export const education = [
  {
    id: 1,
    level: "D4",
    major: "Informatic Engineering",
    period: "2021 - 2025",
    institution: "State Polytechnic of Malang",
    city: "Malang",
    details: [
      "Developed an educational application to improve computational thinking skills integrated with gamification for elementary school students.",
      "Completed an internship as a Fullstack Developer at a software house company, developing customer-oriented applications using Laravel and MySQL.",
      "Completed an internship as a Fullstack Developer at an automotive manufacturing company, contributing to the development of internal company systems and operational needs.",
    ],
  },
  // {
  //   id: 2,
  //   level: "SMA",
  //   major: "IPA",
  //   period: "2019 - 2021",
  //   institution: "SMA Negeri Contoh",
  //   city: "Kota Contoh",
  //   details: [
  //     "Jurusan Ilmu Pengetahuan Alam",
  //     "Aktif dalam kegiatan ekstrakurikuler",
  //   ],
  // },
];

export const organizations = [
  {
    id: 1,
    position: "Staff - Organizing Committee",
    name: "UKM USAHA MAHASISWA (USMA)",
    period: "2021 - 2023",
    city: "Malang",
  },
  // {
  //   id: 2,
  //   position: "Anggota",
  //   name: "UKM Robotika",
  //   period: "2022 - 2023",
  //   city: "Kota Contoh",
  // },
];

export const experiences = [
  {
    id: 1,
    position: "Full Stack Developer Intern",
    company: "PT. Surabaya Autocomp Indonesia",
    type: "Internship",
    period: "January 2024 - June 2024",
    city: "Jakarta",
    achievements: [
      "Reduced clinic administrative workload by digitizing medical record management for 6,000+ employees using a Laravel-based system.",
      "Improved operational efficiency by decreasing data entry time by 50% through workflow automation and structured data processing",
      "Enhanced healthcare monitoring and reporting accuracy with real-time visit tracking and disease trend visualization features.",
    ],
  },
  {
    id: 2,
    position: "Fullstack Developer Intern",
    company: "CV. AGSATU",
    type: "Internship",
    period: "July 2024 - December 2024",
    city: "Kediri",
    achievements: [
      "Improved field survey efficiency by digitizing manual chili monitoring and reporting processes with a Laravel-based system.",
      "Enhanced data accuracy and accessibility through structured survey management for tonnage, pricing, and location tracking.",
      "Supported data-driven decision making with interactive dashboards and automated daily report export features.",
    ],
  },
  {
    id: 3,
    position: "Fullstack Developer",
    company: "State Polytechnic of Malang",
    type: "Project-Based",
    period: "July 2025 - December 2025",
    city: "Malang",
    achievements: [
      "Improved user experience and website accessibility by redesigning the UI/UX of bebras.or.id with a modern and responsive interface.",
      "Developed a responsive web application using Laravel and Tailwind CSS, ensuring seamless performance across desktop and mobile devices.",
      "Enhanced content navigation and interface consistency, making information access more intuitive for users.",
    ],
  }
];

export const projects = [
  {
    id: 1,
    title: "Clinical Information System",
    description:
      "A clinical information system for managing patient treatment records, medicine and disease data, consultation histories, and visualizing healthcare trends over time.",
    image: "/img/klinik.png",
    techStack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    repository: "https://github.com/rizqi/ecommerce",
    demo: "https://ecommerce-demo.vercel.app",
  },
  {
    id: 2,
    title: "Sipare - Chili Monitoring & Distribution Information System",
    description:
      "A web-based chili monitoring system for managing field survey data, tracking chili distribution and pricing trends, visualizing statistical reports, and generating daily survey documentation efficiently.",
    image: "/img/sipare.jpeg",
    techStack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
    repository: "https://github.com/rizqi/inventory",
  },
    {
    id: 3,
    title: "Logikid",
    description:
      "A web-based application designed to support and enhance computational thinking skills, integrated with gamification for primary school students",
    image: "/img/logikid.png",
    techStack: ["Laravel", "MySQL"],
    repository: "https://github.com/rizqi/portfolio",
    demo: "#",
  },
  {
    id: 4,
    title: "Bebras Indonesia Website Redesign & Development",
    description:
      "A website redesign and development project focused on improving the UI/UX, responsiveness, and accessibility of the Bebras Indonesia platform through modern interface design and responsive web implementation using Laravel and Tailwind CSS.",
    image: "/img/bebras.png",
    techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "Tailwind CSS"],
    repository: "https://github.com/rizqi/portfolio",
    demo: "#",
  },
  {
    id: 5,
    title: "Finsight",
    description:
      "A web-based personal finance app that helps users manage their personal finances by tracking income and expenditure, setting monthly budgets, visualising financial data, and predicting next month’s expenditure using machine learning.",
    image: "/img/web_dashboard.png",
    techStack: ["React", "Express", "Mongo DB", "python", "Tailwind CSS"],
    repository: "https://github.com/rizqi/portfolio",
    demo: "#",
  },
  // {
  //   id: 6,
  //   title: "Portfolio Website",
  //   description:
  //     "Website portfolio personal yang dibangun dengan React Router dan Tailwind CSS.",
  //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  //   techStack: ["React", "TypeScript", "Tailwind CSS"],
  //   repository: "https://github.com/rizqi/portfolio",
  //   demo: "#",
  // },
];

export const socialLinks = {
  github: "https://github.com/RizqiRHuda",
  linkedin: "https://www.linkedin.com/in/rizqi-rohmatul-huda-18415229b/",
  email: "mailto:rizkyrhuda@email.com",
};
