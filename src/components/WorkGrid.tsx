"use client";

import { useState } from "react";
import { Project } from "@/lib/types";
import ProjectCard from "./ProjectCard";
import { clsx } from "clsx";

const categories = ["All", "PRD", "Case Study", "Teardown", "Wireframe", "Shipped"] as const;
type Category = typeof categories[number];

export default function WorkGrid({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filtered = activeFilter === "All" 
    ? projects 
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={clsx(
              "rounded-full px-4 py-1.5 text-xs transition",
              activeFilter === cat
                ? "bg-dark text-cream"
                : "bg-transparent border border-ink/20 text-ink/60 hover:border-ink/50"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-ink/20 p-12 text-center text-ink/40 text-sm">
          Nothing here yet in this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
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
      )}
    </div>
  );
}
