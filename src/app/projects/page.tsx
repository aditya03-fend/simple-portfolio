import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";

interface Project {
  title: string;
  role: string;
  description: string;
  tech: string[];
  link: string;
  year: string;
}

const projects: Project[] = [
  {
    title: "Organization Web Platform",
    role: "Full Stack Developer",
    description: "A comprehensive platform for student organizations featuring content approval workflows, learning modules, and member portfolio showcases.",
    tech: ["Next.js","TypeScript", "PostgreSQL", "Neon", "Prisma", "Tailwind CSS", "GSAP", "Zustand"],
    link: "https://himikom.vercel.app",
    year: "Nov 2025 - Dec 2025",
  },
];

export default function Projects() {
  return (
    <PageWrapper>
      <div className="flex flex-col h-full py-8">
        
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Selected Projects
          </h1>
          <p className="text-neutral-500 mt-2 text-lg">
            A collection of my work in web development and software engineering.
          </p>
        </header>

        {/* Projects List */}
        <div className="flex flex-col">
          {projects.map((project, index) => (
            <Link 
              key={index}
              href={project.link}
              target="_blank"
              className="group py-8 border-b border-neutral-800 first:border-t hover:bg-neutral-900/30 transition-colors duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1">
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-neutral-200 group-hover:text-white transition-colors flex items-center gap-2">
                  {project.title}
                  <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-neutral-400 text-lg">
                    ↗
                  </span>
                </h3>

                {/* Year */}
                <span className="text-sm font-mono text-neutral-500 mt-1 sm:mt-0">
                  {project.year}
                </span>
              </div>

              {/* Role Label (New) */}
              <div className="mb-3">
                <span className="text-xs font-medium text-neutral-500 tracking-wider py-0.5">
                  {project.role}
                </span>
              </div>

              {/* Description */}
              <p className="text-neutral-400 leading-relaxed max-w-2xl mb-4 text-sm md:text-base">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs font-medium text-neutral-600 hover:text-neutral-400 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}