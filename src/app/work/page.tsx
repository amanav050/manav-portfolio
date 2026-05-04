import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WorkGrid from "@/components/WorkGrid";
import { getAllProjects } from "@/lib/projects";

export const metadata = {
  title: "Work - Manav Agarwal",
  description: "Everything I've shipped, written, or torn down.",
};

export default function WorkPage() {
  const projects = getAllProjects();

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      
      <section className="mx-auto max-w-[1400px] px-8 pt-12 pb-8">
        <p className="text-xs tracking-widest text-ink/40 mb-2">- ALL WORK</p>
        <h1 className="font-serif text-4xl md:text-5xl text-ink mb-4">
          Everything I've <span className="italic text-accent">shipped, written,</span> or torn down.
        </h1>
        <p className="text-base text-ink/60 max-w-lg">
          The full archive. PRDs, case studies, teardowns, projects. Filter by category below.
        </p>
      </section>

      <section className="mx-auto max-w-[1400px] px-8 pb-16">
        <WorkGrid projects={projects} />
      </section>

      <Footer />
    </main>
  );
}
