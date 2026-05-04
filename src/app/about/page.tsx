import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About — Manav Agarwal",
  description: "Analyst by training, PM by obsession.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream relative overflow-hidden">
      <div className="absolute -top-20 -right-32 h-80 w-80 rounded-full bg-accent/15 blur-3xl pointer-events-none" />
      <div className="absolute top-[40%] -left-32 h-72 w-72 rounded-full bg-peach/40 blur-3xl pointer-events-none" />
      
      <Navbar />
      
      <section className="mx-auto max-w-4xl px-6 pt-12 pb-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8 items-start">
          <div>
            <div className="relative aspect-square rounded-2xl overflow-hidden ring-4 ring-accent/20 shadow-xl avatar-hover">
              <Image
                src="/images/manav.png"
                alt="Manav Agarwal"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="mt-3 flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-2 bg-success/15 rounded-lg">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                <span className="text-xs text-ink">Open to APM / PM roles</span>
              </div>
              <div className="flex gap-2">
                <a href="https://www.linkedin.com/in/manav-agarwal68/" target="_blank" rel="noopener noreferrer" className="flex-1 px-3 py-2 bg-dark text-cream text-center text-xs rounded-lg hover:bg-dark/90 hover:scale-[1.02] transition">
                  LinkedIn ↗
                </a>
                <a href="https://github.com/amanav050" target="_blank" rel="noopener noreferrer" className="flex-1 px-3 py-2 bg-transparent border border-dark text-ink text-center text-xs rounded-lg hover:bg-dark hover:text-cream hover:scale-[1.02] transition">
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs tracking-widest text-ink/40 mb-2">— ABOUT</p>
            <h1 className="font-serif text-4xl md:text-5xl text-ink mb-6 leading-tight">
              I'm Manav. I make products <span className="italic text-accent">people want to use.</span>
            </h1>
            <div className="space-y-4 text-base text-ink/75 leading-relaxed">
              <p>
                I started my career as an analyst — staring at dashboards, building models, asking why the numbers moved. Somewhere along the way I realized I cared more about what we should build than what we already had.
              </p>
              <p>
                Today I write PRDs, run user research, tear down products, and ship features. I've shipped live AI products end-to-end through the Next Leap PM Fellowship — including a production-grade RAG chatbot for SBI Mutual Fund, an AI restaurant recommender using Groq's LLaMA, and Groww Pulse — a tool that turns app store reviews into a one-page weekly pulse in under 60 seconds.
              </p>
              <p>
                I'm drawn to AI products, consumer apps, and the strange spaces in between — anywhere there's a real user with a real problem and someone willing to fix it. I think the best PMs are part-analyst, part-designer, part-storyteller. I'm working on all three.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-8">
          <div>
            <div className="border-t border-ink/10 pt-6">
              <p className="text-xs tracking-widest text-ink/40 mb-3">EDUCATION</p>
              <p className="text-sm text-ink/80 leading-relaxed">
                <span className="font-medium text-ink">King's College London</span> — MSc Engineering with Management (Upper Merit), 2024–2025
              </p>
              <p className="text-sm text-ink/80 leading-relaxed mt-1">
                <span className="font-medium text-ink">GGSIPU, India</span> — B.Tech Electrical and Electronics Engineering, CGPA 9.2/10
              </p>
            </div>

            <div className="border-t border-ink/10 pt-6 mt-6">
              <p className="text-xs tracking-widest text-ink/40 mb-3">LANGUAGES</p>
              <p className="text-sm text-ink/80">English (Fluent) · Hindi (Fluent) · French (Conversational)</p>
            </div>
          </div>

          <aside className="bg-peach/50 rounded-2xl p-5 h-fit">
            <p className="text-[10px] tracking-widest text-ink/50 mb-4">SKILLS</p>
            
            <div className="space-y-4">
              <div>
                <p className="text-[10px] tracking-wider text-ink/50 mb-1">PRODUCT</p>
                <p className="text-xs text-ink leading-relaxed">PRDs, Roadmapping, RICE, JTBD, North Star Metrics, A/B Testing, MVP Scoping, GTM, User Research</p>
              </div>
              <div>
                <p className="text-[10px] tracking-wider text-ink/50 mb-1">AI / LLM</p>
                <p className="text-xs text-ink leading-relaxed">RAG Architecture, Prompt Engineering, LLM Evals, Vector Embeddings, Human-in-the-Loop, AI PRDs</p>
              </div>
              <div>
                <p className="text-[10px] tracking-wider text-ink/50 mb-1">DATA</p>
                <p className="text-xs text-ink leading-relaxed">SQL, Power BI, Excel, Funnel Analysis, Cohort Analysis, Conversion Metrics</p>
              </div>
              <div>
                <p className="text-[10px] tracking-wider text-ink/50 mb-1">VIBE CODING</p>
                <p className="text-xs text-ink leading-relaxed">Windsurf, Cursor, Lovable, v0, Bolt, Cassidy.AI</p>
              </div>
              <div>
                <p className="text-[10px] tracking-wider text-ink/50 mb-1">DESIGN AND PROTOTYPING</p>
                <p className="text-xs text-ink leading-relaxed">Figma, Notion, Wireframing, Rapid Prototyping</p>
              </div>
              <div>
                <p className="text-[10px] tracking-wider text-ink/50 mb-1">PROCESS</p>
                <p className="text-xs text-ink leading-relaxed">Agile, Scrum, Stakeholder Management, Cross-functional Collaboration</p>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-ink/15">
              <p className="text-[10px] tracking-widest text-ink/50 mb-1">REACH OUT</p>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=amanav050@gmail.com" target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline break-all">
                amanav050@gmail.com
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-16 relative">
        <p className="text-xs tracking-widest text-ink/40 mb-2">— HOW I WORK</p>
        <h2 className="font-serif text-3xl text-ink mb-8">Three principles.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-dark rounded-2xl p-6 text-cream relative overflow-hidden hover:-translate-y-1 transition">
            <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full bg-accent/30 blur-xl" />
            <p className="font-serif text-2xl text-accent mb-2 relative">01</p>
            <h3 className="font-serif text-xl mb-2 relative">Start with the problem</h3>
            <p className="text-sm text-cream/70 leading-relaxed relative">I write PRDs to solve something real, not to look smart.</p>
          </div>
          <div className="bg-accent rounded-2xl p-6 text-dark hover:-translate-y-1 transition">
            <p className="font-serif text-2xl text-dark mb-2">02</p>
            <h3 className="font-serif text-xl mb-2">Validate before you build</h3>
            <p className="text-sm text-dark/80 leading-relaxed">Six interviews can save six months.</p>
          </div>
          <div className="bg-peach rounded-2xl p-6 text-ink hover:-translate-y-1 transition">
            <p className="font-serif text-2xl text-accent mb-2">03</p>
            <h3 className="font-serif text-xl mb-2">Ship and learn</h3>
            <p className="text-sm text-ink/70 leading-relaxed">A flawed shipped product beats a perfect plan.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
