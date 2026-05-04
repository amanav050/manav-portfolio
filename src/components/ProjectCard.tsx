import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";

type ProjectCardProps = {
  slug: string;
  title: string;
  hook: string;
  metric: string;
  tags: string[];
  variant: "crimson" | "forest" | "navy" | "mustard" | "plum" | "ink" | "terracotta" | "teal" | "ochre";
  imageUrl?: string;
};

const variantStyles: Record<string, { bg: string; text: string; tag: string; metric: string }> = {
  crimson:    { bg: "#A8323C", text: "#FAF6EE", tag: "rgba(250,246,238,0.18)", metric: "#FAD7D4" },
  forest:     { bg: "#2D5F4A", text: "#F4F1EA", tag: "rgba(244,241,234,0.18)", metric: "#B8D4C7" },
  navy:       { bg: "#1F2D4D", text: "#F2F0E8", tag: "rgba(242,240,232,0.18)", metric: "#B8C4DB" },
  mustard:    { bg: "#C68B17", text: "#1A1410", tag: "rgba(26,20,16,0.15)",   metric: "#1A1410" },
  plum:       { bg: "#5B3A5C", text: "#F4F0E8", tag: "rgba(244,240,232,0.18)", metric: "#D6BBD7" },
  ink:        { bg: "#1A1A1F", text: "#F2EFE8", tag: "rgba(242,239,232,0.15)", metric: "#E8B86A" },
  terracotta: { bg: "#C26545", text: "#FAF6EE", tag: "rgba(250,246,238,0.18)", metric: "#1A1410" },
  teal:       { bg: "#1F5E5C", text: "#F4F1EA", tag: "rgba(244,241,234,0.18)", metric: "#A8D4D2" },
  ochre:      { bg: "#A56A1F", text: "#F4F1EA", tag: "rgba(244,241,234,0.18)", metric: "#F4D9A8" },
};

export default function ProjectCard({
  slug,
  title,
  hook,
  metric,
  tags,
  variant,
  imageUrl,
}: ProjectCardProps) {
  const style = variantStyles[variant] || variantStyles.ink;

  return (
    <Link href={`/work/${slug}`} className="block group">
      <article className="rounded-2xl overflow-hidden transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:scale-[1.02]">
        <div className="relative aspect-[16/9] overflow-hidden bg-ink/5">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-ink/30 text-xs">No preview</div>
          )}
        </div>

        <div
          style={{ backgroundColor: style.bg, color: style.text }}
          className="px-7 py-6 relative"
        >
          <div className="flex flex-wrap gap-1.5 mb-2.5">
            {tags.map((tag) => (
              <span
                key={tag}
                style={{ backgroundColor: style.tag }}
                className="rounded-full px-2.5 py-0.5 text-[10px] tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="font-serif text-2xl leading-snug mb-2">{title}</h3>
          <p className="text-sm opacity-80 leading-relaxed mb-3 line-clamp-2">{hook}</p>

          <div className="flex items-center justify-between pt-2 border-t border-current/15">
            <span style={{ color: style.metric }} className="text-sm font-medium">{metric}</span>
            <span className="text-xs opacity-60 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">Read →</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
