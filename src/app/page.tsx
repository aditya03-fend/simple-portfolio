import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";

export default function Home() {
  return (
    <PageWrapper>
      <section className="flex flex-col justify-center min-h-[60vh] py-12 bg-[--background]">
        
        {/* Header Section */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
            Crafting digital <br />
            experiences
          </h1>
        </div>

        {/* Minimalist Divider */}
        <div className="w-24 h-px bg-neutral-800 my-12" />

        {/* Bio / Story Section */}
        <div className="space-y-6 text-neutral-400 leading-loose max-w-xl">
          <p>
            Hi, I&apos;m <strong className="text-white font-medium">Aditya</strong>. 
            Currently a Computer Science student with a deep passion for <strong className="text-white font-medium">Frontend Development.</strong>
          </p>
          <p>
            I believe that great software is a blend of clean code and human-centric design. 
            I&apos;m not just building websites, I&apos;m building interactions that feel natural and fluid.
          </p>
        </div>

        {/* Call to Action (Text Links Only) */}
        <div className="mt-12 flex items-center gap-8 text-sm font-medium">
          <Link 
            href="/contact" 
            className="text-neutral-500 hover:text-white transition-colors flex items-center gap-2 group"
          >
            Contact
            <span className="group-hover:translate-x-1 transition-transform duration-300">
              &rarr;
            </span>
          </Link>
        </div>

      </section>
    </PageWrapper>
  );
}