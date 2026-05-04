import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-3xl px-6 pt-20 pb-12 overflow-hidden">
      <div className="absolute -top-10 -right-20 h-60 w-60 rounded-full bg-accent/20 blur-3xl pointer-events-none animate-blob-1" />
      <div className="absolute -bottom-10 -left-20 h-72 w-72 rounded-full bg-peach/40 blur-3xl pointer-events-none animate-blob-2" />
      
      <div className="relative">
        <div className="mb-6 animate-fade-up">
          <div className="avatar-hover inline-block">
            <Image
              src="/images/manav.png"
              alt="Manav Agarwal"
              width={72}
              height={72}
              className="rounded-full object-cover ring-2 ring-accent/30"
            />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 rounded-full bg-dark px-3 py-1.5 mb-8 animate-fade-up-delay-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
          </span>
          <span className="text-xs text-peach tracking-wide">
            Available for APM / PM roles · 2026
          </span>
        </div>

        <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight text-ink mb-2 animate-fade-up-delay-2">
          Hey, I'm <span className="italic text-accent relative inline-block underline-grow">Manav</span>.
        </h1>
        <h1 className="font-serif text-5xl md:text-6xl leading-[1.05] tracking-tight text-ink mb-6 animate-fade-up-delay-3">
          I ship <span className="italic text-accent">AI products</span> that move metrics.
        </h1>

        <p className="text-base text-ink/70 leading-relaxed max-w-lg mb-8 animate-fade-up-delay-3">
          Product Owner shipping AI end-to-end — production-grade RAG, user research that doesn't lie, PRDs people actually read.
        </p>

        <div className="flex flex-wrap gap-3 animate-fade-up-delay-4">
          <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-dark px-5 py-2.5 text-sm font-medium text-cream hover:scale-[1.02] hover:shadow-lg transition-all duration-300">
            See my work <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=amanav050@gmail.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center rounded-full border border-dark px-5 py-2.5 text-sm font-medium text-ink hover:bg-dark hover:text-cream hover:scale-[1.02] transition-all duration-300">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
