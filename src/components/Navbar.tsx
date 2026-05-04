import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-cream pt-4 pb-2">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex items-center justify-between rounded-full bg-dark px-5 py-3 shadow-lg">
          <Link href="/" className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-accent" />
            <span className="text-sm font-medium text-cream">
              manav<span className="text-accent">.</span>
            </span>
          </Link>
          <div className="flex items-center gap-6 text-sm text-cream/70">
            <Link href="/work" className="hover:text-cream transition">Work</Link>
            <Link href="/about" className="hover:text-cream transition">About</Link>
                      </div>
        </div>
      </div>
    </nav>
  );
}
