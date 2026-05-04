import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getAllProjects, getProjectBySlug } from "@/lib/projects";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const allProjects = getAllProjects();
  const currentIndex = allProjects.findIndex((p) => p.slug === slug);
  const nextProject = allProjects[currentIndex + 1] || allProjects[0];

  const hasContent = project.content.trim().length > 20;
  const hasLinks = project.liveUrl || project.githubUrl || project.pdfUrl;

  return (
    <main className="min-h-screen bg-cream relative overflow-hidden">
      <div className="absolute -top-20 -right-32 h-80 w-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute top-[60%] -left-32 h-72 w-72 rounded-full bg-peach/30 blur-3xl pointer-events-none" />

      <Navbar />
      
      <article className="mx-auto max-w-3xl px-6 pt-12 pb-16 relative">
        <Link href="/work" className="inline-flex items-center gap-1 text-sm text-ink/60 hover:text-accent transition mb-10 group">
          <span className="transition-transform group-hover:-translate-x-1">←</span> Back to work
        </Link>

        <div className="mb-10">
          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-accent/15 text-accent px-3 py-1 text-xs tracking-wide">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-serif text-4xl md:text-5xl leading-tight text-ink mb-5">
            {project.title}
          </h1>

          <p className="text-lg text-ink/70 leading-relaxed mb-6 max-w-2xl">
            {project.hook}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs text-ink/50">
            <span>{new Date(project.date).toLocaleDateString("en-US", { year: "numeric", month: "long" })}</span>
            <span className="h-1 w-1 rounded-full bg-ink/30" />
            <span>{project.category}</span>
          </div>
        </div>

        {hasLinks && (
          <div className="flex flex-wrap gap-3 mb-10">
            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-dark rounded-full text-sm font-medium hover:scale-[1.03] hover:shadow-lg transition"
              >
                Try live app <span>↗</span>
              </a>
            )}
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-dark text-cream rounded-full text-sm font-medium hover:scale-[1.03] hover:shadow-lg transition"
              >
                View on GitHub <span>↗</span>
              </a>
            )}
            {project.pdfUrl && (
              <a 
                href={project.pdfUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent border border-dark text-ink rounded-full text-sm font-medium hover:bg-dark hover:text-cream hover:scale-[1.03] transition"
              >
                Download PDF <span>↓</span>
              </a>
            )}
          </div>
        )}

        <div className="relative rounded-3xl bg-dark p-8 mb-12 overflow-hidden">
          <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-accent/40 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-accent/20 blur-3xl pointer-events-none" />
          <div className="relative flex items-center justify-between flex-wrap gap-6">
            <div>
              <p className="text-[10px] tracking-[0.2em] text-cream/50 mb-2">KEY OUTCOME</p>
              <p className="font-serif text-4xl md:text-5xl text-accent leading-none">{project.metric}</p>
              {project.metricLabel && (
                <p className="text-sm text-cream/60 mt-3 max-w-xs">{project.metricLabel}</p>
              )}
            </div>
            <div className="flex items-center gap-2 text-xs text-cream/40">
              <span className="h-px w-8 bg-cream/20" />
              <span className="tracking-widest">RESULT</span>
            </div>
          </div>
        </div>

        {project.pdfUrl && (
          <div className="rounded-2xl border border-ink/10 bg-cream overflow-hidden mb-12 shadow-md">
            <div className="px-5 py-3 bg-peach/40 flex items-center justify-between">
              <p className="text-xs tracking-widest text-ink/60">FULL DOCUMENT</p>
              <a href={project.pdfUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline">Open in new tab ↗</a>
            </div>
            <iframe
              src={project.pdfUrl}
              className="w-full h-[700px]"
              title={project.title}
            />
          </div>
        )}

        {hasContent && (
          <div className="prose-custom">
            <MDXRemote source={project.content} />
          </div>
        )}

        {!hasContent && !project.pdfUrl && !hasLinks && (
          <div className="rounded-2xl border border-dashed border-ink/20 bg-peach/20 p-10 text-center">
            <p className="text-ink/60 text-sm mb-3">Full case study coming soon.</p>
            <p className="text-xs text-ink/40 max-w-md mx-auto leading-relaxed">
              The complete walkthrough — research, frameworks, decisions, tradeoffs — will live here.
            </p>
          </div>
        )}

        <Link href={`/work/${nextProject.slug}`} className="block group mt-16">
          <div className="rounded-2xl bg-peach/40 hover:bg-peach/70 transition p-6 relative overflow-hidden">
            <div className="absolute -top-8 -right-8 h-32 w-32 rounded-full bg-accent/20 blur-2xl pointer-events-none transition-all group-hover:scale-125" />
            <div className="relative flex items-center justify-between">
              <div>
                <p className="text-[10px] tracking-[0.2em] text-ink/50 mb-2">NEXT PROJECT</p>
                <p className="font-serif text-2xl text-ink group-hover:text-accent transition">
                  {nextProject.title}
                </p>
              </div>
              <span className="text-2xl text-accent transition-transform group-hover:translate-x-2">→</span>
            </div>
          </div>
        </Link>
      </article>

      <Footer />
    </main>
  );
}
