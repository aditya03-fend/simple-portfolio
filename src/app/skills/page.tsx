import PageWrapper from "@/components/PageWrapper";

const skillCategories = [
  {
    category: "Frontend Development",
    items: ["Next.js ( App Router )", "React.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML5 & CSS3", "Zustand", "Axios"]
  },
  {
    category: "Tools & Environment",
    items: ["Git & GitHub", "Gemini AI", "GPT", "Claude Sonnet", "Visual Studio Code", "Antigravity", "Figma", "Postman", "Docker", "Vercel Deployment"]
  },
  {
    category: "Core Knowledge",
    items: ["Promt Engineer for Developer", "Responsive Web Design ( Mobile First )", "RESTful API Integration", "Web Performance Optimization", "Clean Code Principles"]
  }
];

export default function Skills() {
  return (
    <PageWrapper>
      <section className="max-w-2xl py-8">
        
        {/* Header Title */}
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
          Technical Skills
        </h1>
        <p className="text-neutral-500 mb-10 leading-relaxed">
          A list of technologies and methodologies I currently use to build website.
        </p>

        {/* Document Style List */}
        <div className="space-y-10">
          {skillCategories.map((group) => (
            <div key={group.category}>
              {/* Sub-heading seperti sub-bab di dokumen */}
              <h3 className=" text-lg font-medium text-white mb-4 border-l-2 border-neutral-700 pl-3">
                {group.category}
              </h3>
              
              {/* Standard Bullet List */}
              <ul className="space-y-2 text-neutral-400">
                {group.items.map((item) => (
                  <li key={item} className="relative pl-6 left-6 before:absolute before:left-0 before:top-1/2 before:h-0.5 before:w-2 before:-translate-y-1/2 before:bg-neutral-400">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </section>
    </PageWrapper>
  );
}