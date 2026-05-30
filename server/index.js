import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { Links, Meta, Outlet, Scripts, ScrollRestoration, ServerRouter, UNSAFE_withComponentProps, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx, jsxs } from "react/jsx-runtime";
import { useState } from "react";
//#region \0rolldown/runtime.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
//#endregion
//#region node_modules/@react-router/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = /* @__PURE__ */ __exportAll({
	default: () => handleRequest,
	streamTimeout: () => streamTimeout
});
var streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
	if (request.method.toUpperCase() === "HEAD") return new Response(null, {
		status: responseStatusCode,
		headers: responseHeaders
	});
	return new Promise((resolve, reject) => {
		let shellRendered = false;
		let userAgent = request.headers.get("user-agent");
		let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
		let timeoutId = setTimeout(() => abort(), streamTimeout + 1e3);
		const { pipe, abort } = renderToPipeableStream(/* @__PURE__ */ jsx(ServerRouter, {
			context: routerContext,
			url: request.url
		}), {
			[readyOption]() {
				shellRendered = true;
				const body = new PassThrough({ final(callback) {
					clearTimeout(timeoutId);
					timeoutId = void 0;
					callback();
				} });
				const stream = createReadableStreamFromReadable(body);
				responseHeaders.set("Content-Type", "text/html");
				pipe(body);
				resolve(new Response(stream, {
					headers: responseHeaders,
					status: responseStatusCode
				}));
			},
			onShellError(error) {
				reject(error);
			},
			onError(error) {
				responseStatusCode = 500;
				if (shellRendered) console.error(error);
			}
		});
	});
}
//#endregion
//#region app/root.tsx
var root_exports = /* @__PURE__ */ __exportAll({
	ErrorBoundary: () => ErrorBoundary,
	Layout: () => Layout,
	default: () => root_default,
	links: () => links
});
var links = () => [
	{
		rel: "preconnect",
		href: "https://fonts.googleapis.com"
	},
	{
		rel: "preconnect",
		href: "https://fonts.gstatic.com",
		crossOrigin: "anonymous"
	},
	{
		rel: "stylesheet",
		href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
	}
];
function Layout({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsxs("head", { children: [
			/* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
			/* @__PURE__ */ jsx("meta", {
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			}),
			/* @__PURE__ */ jsx(Meta, {}),
			/* @__PURE__ */ jsx(Links, {})
		] }), /* @__PURE__ */ jsxs("body", { children: [
			children,
			/* @__PURE__ */ jsx(ScrollRestoration, {}),
			/* @__PURE__ */ jsx(Scripts, {})
		] })]
	});
}
var root_default = UNSAFE_withComponentProps(function App() {
	return /* @__PURE__ */ jsx(Outlet, {});
});
var ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary({ error }) {
	let message = "Oops!";
	let details = "An unexpected error occurred.";
	let stack;
	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? "404" : "Error";
		details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
	}
	return /* @__PURE__ */ jsxs("main", {
		className: "pt-16 p-4 container mx-auto",
		children: [
			/* @__PURE__ */ jsx("h1", { children: message }),
			/* @__PURE__ */ jsx("p", { children: details }),
			stack
		]
	});
});
//#endregion
//#region app/data/portfolio.ts
var personalInfo = {
	name: "Rizqi Rohmatul Huda",
	title: "Full Stack Developer",
	email: "rizkyrhuda@email.com",
	phone: "+62 853 3434 4962",
	location: "Indonesia",
	description: "A passionate full-stack developer with experience building modern web applications. I enjoy crafting clean, efficient code and solving complex problems. Always eager to learn new technologies and improve my craft.",
	photoUrl: "/img/2141720264.jpg",
	resumeUrl: "#"
};
var skills = [
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
	"Git"
];
var techStack = [
	{
		name: "React",
		icon: "https://cdn.simpleicons.org/react"
	},
	{
		name: "Node.js",
		icon: "https://cdn.simpleicons.org/nodedotjs"
	},
	{
		name: "Express",
		icon: "https://cdn.simpleicons.org/express"
	},
	{
		name: "Laravel",
		icon: "https://cdn.simpleicons.org/laravel"
	},
	{
		name: "PHP",
		icon: "https://cdn.simpleicons.org/php"
	},
	{
		name: "Python",
		icon: "https://cdn.simpleicons.org/python"
	},
	{
		name: "MySQL",
		icon: "https://cdn.simpleicons.org/mysql"
	},
	{
		name: "MongoDB",
		icon: "https://cdn.simpleicons.org/mongodb"
	}
];
var education = [{
	id: 1,
	level: "D4",
	major: "Informatic Engineering",
	period: "2021 - 2025",
	institution: "State Polytechnic of Malang",
	city: "Malang",
	details: [
		"Developed an educational application to improve computational thinking skills integrated with gamification for elementary school students.",
		"Completed an internship as a Fullstack Developer at a software house company, developing customer-oriented applications using Laravel and MySQL.",
		"Completed an internship as a Fullstack Developer at an automotive manufacturing company, contributing to the development of internal company systems and operational needs."
	]
}];
var organizations = [{
	id: 1,
	position: "Staff - Organizing Committee",
	name: "UKM USAHA MAHASISWA (USMA)",
	period: "2021 - 2023",
	city: "Malang"
}];
var experiences = [
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
			"Enhanced healthcare monitoring and reporting accuracy with real-time visit tracking and disease trend visualization features."
		]
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
			"Supported data-driven decision making with interactive dashboards and automated daily report export features."
		]
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
			"Enhanced content navigation and interface consistency, making information access more intuitive for users."
		]
	}
];
var projects = [
	{
		id: 1,
		title: "Clinical Information System",
		description: "A clinical information system for managing patient treatment records, medicine and disease data, consultation histories, and visualizing healthcare trends over time.",
		image: "/img/klinik.png",
		techStack: [
			"Laravel",
			"PHP",
			"MySQL",
			"Bootstrap"
		],
		repository: "https://github.com/rizqi/ecommerce",
		demo: "https://ecommerce-demo.vercel.app"
	},
	{
		id: 2,
		title: "Sipare - Chili Monitoring & Distribution Information System",
		description: "A web-based chili monitoring system for managing field survey data, tracking chili distribution and pricing trends, visualizing statistical reports, and generating daily survey documentation efficiently.",
		image: "/img/sipare.jpeg",
		techStack: [
			"Laravel",
			"PHP",
			"MySQL",
			"Bootstrap"
		],
		repository: "https://github.com/rizqi/inventory"
	},
	{
		id: 3,
		title: "Logikid",
		description: "A web-based application designed to support and enhance computational thinking skills, integrated with gamification for primary school students",
		image: "/img/logikid.png",
		techStack: ["Laravel", "MySQL"],
		repository: "https://github.com/rizqi/portfolio",
		demo: "#"
	},
	{
		id: 4,
		title: "Bebras Indonesia Website Redesign & Development",
		description: "A website redesign and development project focused on improving the UI/UX, responsiveness, and accessibility of the Bebras Indonesia platform through modern interface design and responsive web implementation using Laravel and Tailwind CSS.",
		image: "/img/bebras.png",
		techStack: [
			"Laravel",
			"PHP",
			"MySQL",
			"Bootstrap",
			"Tailwind CSS"
		],
		repository: "https://github.com/rizqi/portfolio",
		demo: "#"
	},
	{
		id: 5,
		title: "Finsight",
		description: "A web-based personal finance app that helps users manage their personal finances by tracking income and expenditure, setting monthly budgets, visualising financial data, and predicting next month’s expenditure using machine learning.",
		image: "/img/web_dashboard.png",
		techStack: [
			"React",
			"Express",
			"Mongo DB",
			"python",
			"Tailwind CSS"
		],
		repository: "https://github.com/rizqi/portfolio",
		demo: "#"
	}
];
var socialLinks = {
	github: "https://github.com/RizqiRHuda",
	linkedin: "https://www.linkedin.com/in/rizqi-rohmatul-huda-18415229b/",
	email: "mailto:rizkyrhuda@email.com"
};
//#endregion
//#region app/components/Header.tsx
var navItems = [
	{
		label: "About",
		href: "#about"
	},
	{
		label: "Education",
		href: "#education"
	},
	{
		label: "Experience",
		href: "#experience"
	},
	{
		label: "Projects",
		href: "#projects"
	},
	{
		label: "Contact",
		href: "#contact"
	}
];
function Header() {
	return /* @__PURE__ */ jsx("header", {
		className: "fixed top-0 left-0 right-0 z-50 border-b border-gray-200/80 bg-white/90 backdrop-blur-md dark:border-gray-800/80 dark:bg-gray-950/90",
		children: /* @__PURE__ */ jsxs("nav", {
			className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4",
			children: [/* @__PURE__ */ jsxs("a", {
				href: "#",
				className: "text-lg font-bold tracking-tight text-gray-900 dark:text-white",
				children: [/* @__PURE__ */ jsx("span", {
					className: "text-blue-600",
					children: "."
				}), personalInfo.name]
			}), /* @__PURE__ */ jsx("ul", {
				className: "flex items-center gap-8",
				children: navItems.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", {
					href: item.href,
					className: "group relative text-sm font-medium text-gray-500 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
					children: [item.label, /* @__PURE__ */ jsx("span", { className: "absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-600 transition-all duration-300 group-hover:w-full" })]
				}) }, item.href))
			})]
		})
	});
}
//#endregion
//#region app/components/Hero.tsx
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative flex min-h-screen items-center overflow-hidden px-6 pt-20",
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute inset-0 -z-10",
			children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)]" })
		}), /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-5",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "md:col-span-3",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-sm font-medium uppercase tracking-[0.25em] text-blue-600",
						children: "Full Stack Developer"
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "mt-4 text-[clamp(3rem,12vw,7rem)] font-bold leading-[0.9] tracking-tight text-gray-900 dark:text-white",
						children: personalInfo.name
					}),
					/* @__PURE__ */ jsx("div", { className: "mt-6 h-px w-16 bg-blue-500" }),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 max-w-md text-base leading-relaxed text-gray-500 dark:text-gray-400",
						children: personalInfo.description
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 flex flex-wrap items-center gap-6 text-sm",
						children: [
							/* @__PURE__ */ jsxs("span", {
								className: "flex items-center gap-2 text-gray-500 dark:text-gray-400",
								children: [/* @__PURE__ */ jsx("span", { className: "h-2 w-2 rounded-full bg-green-400" }), "Available"]
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-gray-300 dark:text-gray-600",
								children: "/"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-gray-500 dark:text-gray-400",
								children: personalInfo.location
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-gray-300 dark:text-gray-600",
								children: "/"
							}),
							/* @__PURE__ */ jsx("a", {
								href: `mailto:${personalInfo.email}`,
								className: "text-blue-600 hover:underline dark:text-blue-400",
								children: personalInfo.email
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-10 flex flex-wrap gap-4",
						children: [/* @__PURE__ */ jsxs("a", {
							href: personalInfo.resumeUrl,
							download: true,
							className: "inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 active:scale-[0.97]",
							children: [/* @__PURE__ */ jsx(DownloadIcon, {}), "Download CV"]
						}), /* @__PURE__ */ jsx("a", {
							href: "#contact",
							className: "inline-flex items-center gap-2 rounded-lg bg-blue-50 px-6 py-3 text-sm font-semibold text-blue-700 transition-all hover:bg-blue-100 active:scale-[0.97] dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50",
							children: "Get in Touch"
						})]
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "relative flex items-center justify-center md:col-span-2 md:justify-end",
				children: [
					/* @__PURE__ */ jsx("div", { className: "absolute right-0 top-1/2 h-[30vw] w-[30vw] -translate-y-1/2 rounded-full border-[1.5px] border-blue-200 dark:border-blue-800" }),
					/* @__PURE__ */ jsx("div", { className: "absolute right-[10%] top-1/2 h-[20vw] w-[20vw] -translate-y-1/2 rounded-full border-[1.5px] border-blue-100 dark:border-blue-900" }),
					/* @__PURE__ */ jsx("div", {
						className: "relative",
						children: /* @__PURE__ */ jsx("img", {
							src: personalInfo.photoUrl,
							alt: personalInfo.name,
							className: "relative h-40 w-40 rounded-full object-cover ring-2 ring-blue-100 dark:ring-blue-800 md:h-48 md:w-48"
						})
					})
				]
			})]
		})]
	});
}
function DownloadIcon() {
	return /* @__PURE__ */ jsxs("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "16",
		height: "16",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ jsx("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
			/* @__PURE__ */ jsx("polyline", { points: "7 10 12 15 17 10" }),
			/* @__PURE__ */ jsx("line", {
				x1: "12",
				y1: "15",
				x2: "12",
				y2: "3"
			})
		]
	});
}
//#endregion
//#region app/components/SectionHeading.tsx
function SectionHeading({ title, subtitle }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "mb-14",
		children: [/* @__PURE__ */ jsx("h2", {
			className: "text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl",
			children: title
		}), subtitle && /* @__PURE__ */ jsx("p", {
			className: "mt-2 text-gray-500 dark:text-gray-400",
			children: subtitle
		})]
	});
}
//#endregion
//#region app/components/About.tsx
function About() {
	return /* @__PURE__ */ jsx("section", {
		id: "about",
		className: "bg-blue-50/40 px-6 py-24 dark:bg-blue-950/10",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ jsx(SectionHeading, { title: "About Me" }), /* @__PURE__ */ jsxs("div", {
				className: "grid gap-16 lg:grid-cols-5",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-3",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-xl leading-relaxed text-gray-700 dark:text-gray-200",
						children: personalInfo.description
					}), /* @__PURE__ */ jsxs("div", {
						className: "mt-6 flex items-center gap-3 text-sm",
						children: [/* @__PURE__ */ jsx("span", { className: "flex h-2 w-2 rounded-full bg-green-400" }), /* @__PURE__ */ jsx("span", {
							className: "text-green-600 dark:text-green-400",
							children: "Available for opportunities"
						})]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "lg:col-span-2",
					children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
						className: "mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-gray-900 dark:text-white",
						children: "Skills"
					}), /* @__PURE__ */ jsx("div", {
						className: "flex flex-wrap gap-2",
						children: skills.map((skill) => /* @__PURE__ */ jsx("span", {
							className: "rounded-md bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
							children: skill
						}, skill))
					})] }), /* @__PURE__ */ jsxs("div", {
						className: "mt-8",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-gray-900 dark:text-white",
							children: "Tech Stack"
						}), /* @__PURE__ */ jsx("div", {
							className: "flex flex-wrap gap-2",
							children: techStack.map((tech) => /* @__PURE__ */ jsxs("a", {
								href: tech.icon,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "inline-flex items-center gap-2 rounded-md bg-white px-3 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-blue-50 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-blue-900/20",
								children: [/* @__PURE__ */ jsx("img", {
									src: `${tech.icon}/000000.svg`,
									alt: tech.name,
									className: "h-4 w-4",
									loading: "lazy"
								}), tech.name]
							}, tech.name))
						})]
					})]
				})]
			})]
		})
	});
}
//#endregion
//#region app/components/Education.tsx
function Education() {
	return /* @__PURE__ */ jsx("section", {
		id: "education",
		className: "px-6 py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-4xl",
			children: [/* @__PURE__ */ jsx(SectionHeading, { title: "Education" }), /* @__PURE__ */ jsx("div", {
				className: "space-y-10",
				children: education.map((item, idx) => /* @__PURE__ */ jsxs("div", {
					className: "animate-fade-in-up grid gap-4 sm:grid-cols-[6rem_1fr]",
					style: { animationDelay: `${idx * .15}s` },
					children: [/* @__PURE__ */ jsx("div", {
						className: "text-right",
						children: /* @__PURE__ */ jsx("span", {
							className: "text-xs font-semibold uppercase tracking-[0.15em] text-blue-600",
							children: item.period
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "relative pl-6 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-blue-200 dark:before:bg-blue-800",
						children: [
							/* @__PURE__ */ jsx("span", { className: "absolute left-[-3px] top-1.5 h-[7px] w-[7px] rounded-full bg-blue-500" }),
							/* @__PURE__ */ jsxs("h3", {
								className: "text-lg font-semibold text-gray-900 dark:text-white",
								children: [
									item.level,
									" — ",
									item.major
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-blue-600 dark:text-blue-400",
								children: item.institution
							}),
							item.details.length > 0 && /* @__PURE__ */ jsx("ul", {
								className: "mt-3 space-y-1.5",
								children: item.details.map((detail, i) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300",
									children: [/* @__PURE__ */ jsx("span", { className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400" }), detail]
								}, i))
							})
						]
					})]
				}, item.id))
			})]
		})
	});
}
//#endregion
//#region app/components/Organization.tsx
var initials = ["HM", "UK"];
function Organization() {
	return /* @__PURE__ */ jsx("section", {
		id: "organization",
		className: "bg-blue-50/40 px-6 py-24 dark:bg-blue-950/10",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl",
			children: [/* @__PURE__ */ jsx(SectionHeading, { title: "Organization" }), /* @__PURE__ */ jsx("div", {
				className: "space-y-5",
				children: organizations.map((org, idx) => /* @__PURE__ */ jsxs("div", {
					className: "animate-fade-in-up flex items-start gap-5",
					style: { animationDelay: `${idx * .15}s` },
					children: [/* @__PURE__ */ jsx("div", {
						className: "flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-sm font-bold text-blue-600 dark:bg-blue-900/40 dark:text-blue-300",
						children: initials[idx]
					}), /* @__PURE__ */ jsxs("div", {
						className: "min-w-0 flex-1",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-col gap-0.5 sm:flex-row sm:items-center sm:justify-between",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-lg font-semibold text-gray-900 dark:text-white",
									children: org.position
								}), /* @__PURE__ */ jsx("span", {
									className: "text-sm text-gray-500 dark:text-gray-400",
									children: org.period
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-blue-600 dark:text-blue-400",
								children: org.name
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-gray-400 dark:text-gray-500",
								children: org.city
							})
						]
					})]
				}, org.id))
			})]
		})
	});
}
//#endregion
//#region app/components/Experience.tsx
function Experience() {
	return /* @__PURE__ */ jsx("section", {
		id: "experience",
		className: "px-6 py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-4xl",
			children: [/* @__PURE__ */ jsx(SectionHeading, { title: "Work Experience" }), /* @__PURE__ */ jsx("div", {
				className: "space-y-10",
				children: experiences.map((exp, idx) => /* @__PURE__ */ jsxs("div", {
					className: "animate-fade-in-up grid gap-4 sm:grid-cols-[6rem_1fr]",
					style: { animationDelay: `${idx * .15}s` },
					children: [/* @__PURE__ */ jsx("div", {
						className: "text-right",
						children: /* @__PURE__ */ jsx("span", {
							className: "text-xs font-semibold uppercase tracking-[0.15em] text-blue-600",
							children: exp.period
						})
					}), /* @__PURE__ */ jsxs("div", {
						className: "relative pl-6 before:absolute before:left-0 before:top-2 before:h-full before:w-px before:bg-blue-200 dark:before:bg-blue-800",
						children: [
							/* @__PURE__ */ jsx("span", { className: "absolute left-[-3px] top-1.5 h-[7px] w-[7px] rounded-full bg-blue-500" }),
							/* @__PURE__ */ jsxs("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ jsx("h3", {
									className: "text-lg font-semibold text-gray-900 dark:text-white",
									children: exp.position
								}), /* @__PURE__ */ jsx("span", {
									className: "rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
									children: exp.type
								})]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-blue-600 dark:text-blue-400",
								children: exp.company
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm text-gray-400 dark:text-gray-500",
								children: exp.city
							}),
							exp.achievements.length > 0 && /* @__PURE__ */ jsx("ul", {
								className: "mt-3 space-y-1.5",
								children: exp.achievements.map((item, i) => /* @__PURE__ */ jsxs("li", {
									className: "flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300",
									children: [/* @__PURE__ */ jsx("span", { className: "mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-400" }), item]
								}, i))
							})
						]
					})]
				}, exp.id))
			})]
		})
	});
}
//#endregion
//#region app/components/Projects.tsx
var INITIAL_SHOW = 4;
function Projects() {
	const [showAll, setShowAll] = useState(false);
	const visible = showAll ? projects : projects.slice(0, INITIAL_SHOW);
	const hasMore = projects.length > INITIAL_SHOW;
	return /* @__PURE__ */ jsx("section", {
		id: "projects",
		className: "bg-blue-50/40 px-6 py-24 dark:bg-blue-950/10",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ jsx(SectionHeading, { title: "Projects" }),
				/* @__PURE__ */ jsx("div", {
					className: "space-y-16",
					children: visible.map((project, idx) => /* @__PURE__ */ jsxs("div", {
						className: "animate-fade-in-up grid gap-8 md:grid-cols-2 md:items-center",
						style: { animationDelay: `${idx * .1}s` },
						children: [/* @__PURE__ */ jsx("div", {
							className: idx % 2 === 1 ? "md:order-2" : "",
							children: /* @__PURE__ */ jsx("div", {
								className: "aspect-4/3 overflow-hidden rounded-lg bg-blue-50 dark:bg-blue-950/30",
								children: /* @__PURE__ */ jsx("img", {
									src: project.image,
									alt: project.title,
									className: "h-full w-full object-cover transition-transform duration-500 hover:scale-105",
									loading: "lazy"
								})
							})
						}), /* @__PURE__ */ jsxs("div", {
							className: idx % 2 === 1 ? "md:order-1 md:text-right" : "",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "text-xs font-semibold uppercase tracking-[0.15em] text-blue-600",
									children: String(project.id).padStart(2, "0")
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white",
									children: project.title
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-gray-500 dark:text-gray-400",
									children: project.description
								}),
								/* @__PURE__ */ jsx("div", {
									className: `mt-4 flex flex-wrap gap-1.5 ${idx % 2 === 1 ? "md:justify-end" : ""}`,
									children: project.techStack.map((tech) => /* @__PURE__ */ jsx("span", {
										className: "rounded-md bg-blue-50 px-2 py-0.5 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300",
										children: tech
									}, tech))
								}),
								/* @__PURE__ */ jsxs("div", {
									className: `mt-5 flex items-center gap-4 ${idx % 2 === 1 ? "md:justify-end" : ""}`,
									children: [/* @__PURE__ */ jsxs("a", {
										href: project.repository,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "flex items-center gap-1.5 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400",
										children: [/* @__PURE__ */ jsx(GitHubIcon$1, {}), "Repository"]
									}), project.demo && /* @__PURE__ */ jsxs("a", {
										href: project.demo,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "flex items-center gap-1.5 text-sm font-medium text-gray-700 transition-colors hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400",
										children: [/* @__PURE__ */ jsx(ExternalLinkIcon, {}), "Live Demo"]
									})]
								})
							]
						})]
					}, project.id))
				}),
				hasMore && !showAll && /* @__PURE__ */ jsx("div", {
					className: "mt-12 text-center",
					children: /* @__PURE__ */ jsxs("button", {
						onClick: () => setShowAll(true),
						className: "inline-flex items-center gap-2 rounded-lg bg-blue-50 px-6 py-3 text-sm font-semibold text-blue-700 transition-all hover:bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:hover:bg-blue-900/50",
						children: [
							"Show all ",
							projects.length,
							" projects",
							/* @__PURE__ */ jsx(ArrowIcon, {})
						]
					})
				})
			]
		})
	});
}
function GitHubIcon$1() {
	return /* @__PURE__ */ jsxs("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "16",
		height: "16",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [/* @__PURE__ */ jsx("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1-.8 1.5L13 22" }), /* @__PURE__ */ jsx("path", { d: "M9 18c-4.51 2-5-2-7-2" })]
	});
}
function ExternalLinkIcon() {
	return /* @__PURE__ */ jsxs("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "16",
		height: "16",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ jsx("path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" }),
			/* @__PURE__ */ jsx("polyline", { points: "15 3 21 3 21 9" }),
			/* @__PURE__ */ jsx("line", {
				x1: "10",
				y1: "14",
				x2: "21",
				y2: "3"
			})
		]
	});
}
function ArrowIcon() {
	return /* @__PURE__ */ jsxs("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "14",
		height: "14",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [/* @__PURE__ */ jsx("line", {
			x1: "12",
			y1: "5",
			x2: "12",
			y2: "19"
		}), /* @__PURE__ */ jsx("polyline", { points: "19 12 12 19 5 12" })]
	});
}
//#endregion
//#region app/components/Contact.tsx
function Contact() {
	return /* @__PURE__ */ jsx("section", {
		id: "contact",
		className: "px-6 py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-4xl",
			children: [/* @__PURE__ */ jsx(SectionHeading, { title: "Get in Touch" }), /* @__PURE__ */ jsxs("div", {
				className: "rounded-xl bg-blue-50/60 p-12 text-center dark:bg-blue-950/20",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-xl text-gray-700 dark:text-gray-200",
						children: "Let's work together."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-2 text-gray-500 dark:text-gray-400",
						children: "I'm always open to new opportunities and collaborations."
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-8",
						children: /* @__PURE__ */ jsx("a", {
							href: `mailto:${personalInfo.email}`,
							className: "text-2xl font-semibold text-blue-600 transition-colors hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300",
							children: personalInfo.email
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 flex items-center justify-center gap-6",
						children: [/* @__PURE__ */ jsx("a", {
							href: socialLinks.github,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300",
							children: /* @__PURE__ */ jsx(GitHubIcon, {})
						}), /* @__PURE__ */ jsx("a", {
							href: socialLinks.linkedin,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300",
							children: /* @__PURE__ */ jsx(LinkedInIcon, {})
						})]
					})
				]
			})]
		})
	});
}
function GitHubIcon() {
	return /* @__PURE__ */ jsxs("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "22",
		height: "22",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [/* @__PURE__ */ jsx("path", { d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1-.8 1.5L13 22" }), /* @__PURE__ */ jsx("path", { d: "M9 18c-4.51 2-5-2-7-2" })]
	});
}
function LinkedInIcon() {
	return /* @__PURE__ */ jsxs("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		width: "22",
		height: "22",
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "2",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		children: [
			/* @__PURE__ */ jsx("path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" }),
			/* @__PURE__ */ jsx("rect", {
				width: "4",
				height: "12",
				x: "2",
				y: "9"
			}),
			/* @__PURE__ */ jsx("circle", {
				cx: "4",
				cy: "4",
				r: "2"
			})
		]
	});
}
//#endregion
//#region app/components/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		className: "bg-gray-900 px-6 py-10 dark:bg-gray-950",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row",
			children: [/* @__PURE__ */ jsxs("p", {
				className: "text-sm text-gray-400",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					personalInfo.name,
					". All rights reserved."
				]
			}), /* @__PURE__ */ jsx("p", {
				className: "text-sm text-gray-500",
				children: "Built with React Router & Tailwind CSS"
			})]
		})
	});
}
//#endregion
//#region app/routes/home.tsx
var home_exports = /* @__PURE__ */ __exportAll({
	default: () => home_default,
	meta: () => meta
});
function meta({}) {
	return [{ title: "Rizqi Rohmatul Huda| Full Stack Developer" }, {
		name: "description",
		content: "Portfolio of Rizqi - Full Stack Developer"
	}];
}
var home_default = UNSAFE_withComponentProps(function Home() {
	return /* @__PURE__ */ jsxs("div", {
		className: "bg-white text-gray-900 dark:bg-gray-950 dark:text-white",
		children: [
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsxs("main", { children: [
				/* @__PURE__ */ jsx(Hero, {}),
				/* @__PURE__ */ jsx(About, {}),
				/* @__PURE__ */ jsx(Education, {}),
				/* @__PURE__ */ jsx(Organization, {}),
				/* @__PURE__ */ jsx(Experience, {}),
				/* @__PURE__ */ jsx(Projects, {}),
				/* @__PURE__ */ jsx(Contact, {})
			] }),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
});
//#endregion
//#region \0virtual:react-router/server-manifest
var server_manifest_default = {
	"entry": {
		"module": "/assets/entry.client-DPpfOceV.js",
		"imports": ["/assets/jsx-runtime-B2AOyWuI.js"],
		"css": []
	},
	"routes": {
		"root": {
			"id": "root",
			"parentId": void 0,
			"path": "",
			"index": void 0,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": true,
			"module": "/assets/root-BtZRC7_M.js",
			"imports": ["/assets/jsx-runtime-B2AOyWuI.js"],
			"css": ["/assets/root-D0a0YSxm.css"],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		},
		"routes/home": {
			"id": "routes/home",
			"parentId": "root",
			"path": void 0,
			"index": true,
			"caseSensitive": void 0,
			"hasAction": false,
			"hasLoader": false,
			"hasClientAction": false,
			"hasClientLoader": false,
			"hasClientMiddleware": false,
			"hasDefaultExport": true,
			"hasErrorBoundary": false,
			"module": "/assets/home-Ce_T9ZhZ.js",
			"imports": ["/assets/jsx-runtime-B2AOyWuI.js"],
			"css": [],
			"clientActionModule": void 0,
			"clientLoaderModule": void 0,
			"clientMiddlewareModule": void 0,
			"hydrateFallbackModule": void 0
		}
	},
	"url": "/assets/manifest-9c87068a.js",
	"version": "9c87068a",
	"sri": void 0
};
//#endregion
//#region \0virtual:react-router/server-build
var assetsBuildDirectory = "build/client";
var basename = "/";
var future = {
	"unstable_optimizeDeps": false,
	"v8_passThroughRequests": false,
	"unstable_trailingSlashAwareDataRequests": false,
	"unstable_previewServerPrerendering": false,
	"v8_middleware": false,
	"v8_splitRouteModules": false,
	"v8_viteEnvironmentApi": false
};
var ssr = true;
var isSpaMode = false;
var prerender = [];
var routeDiscovery = {
	"mode": "lazy",
	"manifestPath": "/__manifest"
};
var publicPath = "/";
var entry = { module: entry_server_node_exports };
var routes = {
	"root": {
		id: "root",
		parentId: void 0,
		path: "",
		index: void 0,
		caseSensitive: void 0,
		module: root_exports
	},
	"routes/home": {
		id: "routes/home",
		parentId: "root",
		path: void 0,
		index: true,
		caseSensitive: void 0,
		module: home_exports
	}
};
var allowedActionOrigins = false;
//#endregion
export { allowedActionOrigins, server_manifest_default as assets, assetsBuildDirectory, basename, entry, future, isSpaMode, prerender, publicPath, routeDiscovery, routes, ssr };
