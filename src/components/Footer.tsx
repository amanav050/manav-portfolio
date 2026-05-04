export default function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-6 py-8 mt-12 border-t border-ink/10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-ink/60">Built with intent · 2026</p>
        <div className="flex gap-4 text-xs text-ink/70">
          <a href="https://www.linkedin.com/in/manav-agarwal68/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
            LinkedIn {'\u2197'}
          </a>
          <a href="https://github.com/amanav050" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
            GitHub {'\u2197'}
          </a>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=amanav050@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition">
            Email {'\u2197'}
          </a>
        </div>
      </div>
    </footer>
  );
}
