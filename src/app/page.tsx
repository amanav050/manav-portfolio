import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";

export default function Home() {
  const projects = getFeaturedProjects();

  return (
    <main className="min-h-screen bg-cream">
      <Navbar />
      <Hero />
      
      <section className="mx-auto max-w-[1400px] px-8 py-10">
        <div className="flex items-center gap-3 text-xs text-ink/50 mb-8">
          <span className="h-px flex-1 bg-ink/15" />
          <span className="tracking-widest">WHAT I DO</span>
          <span className="h-px flex-1 bg-ink/15" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="rounded-2xl bg-dark text-cream p-6 relative overflow-hidden hover:-translate-y-1 transition group">
            <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-accent/40 blur-xl group-hover:scale-125 transition-transform duration-500" />
            <p className="text-[10px] tracking-widest text-cream/50 mb-3 relative">SHIP</p>
            <h3 className="font-serif text-2xl mb-2 relative">AI products, end-to-end</h3>
            <p className="text-sm text-cream/70 leading-relaxed relative">RAG, evaluation, prompt engineering, full-stack delivery. Production traffic, not demos.</p>
          </div>
          <div className="rounded-2xl bg-cream border border-ink/10 p-6 hover:-translate-y-1 transition">
            <p className="text-[10px] tracking-widest text-ink/40 mb-3">WRITE</p>
            <h3 className="font-serif text-2xl text-ink mb-2">PRDs people read</h3>
            <p className="text-sm text-ink/65 leading-relaxed">Iceberg root-cause, RICE prioritisation, research-backed personas. No fluff, no jargon.</p>
          </div>
          <div className="rounded-2xl bg-peach/50 p-6 hover:-translate-y-1 transition">
            <p className="text-[10px] tracking-widest text-ink/50 mb-3">RESEARCH</p>
            <h3 className="font-serif text-2xl text-ink mb-2">Signal over noise</h3>
            <p className="text-sm text-ink/65 leading-relaxed">Real conversations with real users. Hypotheses tested, not assumed. The signal hidden in what people actually do — not what they say.</p>
          </div>
        </div>
      </section>

      <section id="work" className="mx-auto max-w-[1400px] px-8 py-12">
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <p className="text-xs tracking-widest text-ink/40 mb-2">— FEATURED</p>
            <h2 className="font-serif text-3xl text-ink">
              Selected work <span className="italic text-accent">/ 2026</span>
            </h2>
          </div>
          <a href="/work" className="text-xs text-ink/60 hover:text-accent transition">
            View all →
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              slug={project.slug}
              title={project.title}
              hook={project.hook}
              metric={project.metric}
              tags={project.tags}
              variant={project.cardVariant}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-8 py-12">
        <div className="rounded-3xl bg-dark p-10 relative overflow-hidden">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-success/15 rounded-full mb-5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              <span className="text-xs text-success">CURRENTLY BUILDING</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-cream mb-3 max-w-2xl">
              SynergyFit — an AI fitness app shipping <span className="italic text-accent">soon.</span>
            </h2>
            <p className="text-cream/70 text-base leading-relaxed max-w-xl">
              Personalised workout and diet plans built from a user's body metrics, fitness goals, and available time. Currently in production. More projects loading regularly.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
