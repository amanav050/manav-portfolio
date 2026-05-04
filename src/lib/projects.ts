import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Project } from "./types";

const projectsDirectory = path.join(process.cwd(), "src/content/projects");

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) return [];
  
  const files = fs.readdirSync(projectsDirectory).filter((f) => f.endsWith(".mdx"));
  
  const projects = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const fullPath = path.join(projectsDirectory, filename);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      title: data.title,
      hook: data.hook,
      metric: data.metric,
      metricLabel: data.metricLabel,
      tags: data.tags || [],
      category: data.category,
      cardVariant: data.cardVariant,
      featured: data.featured || false,
      date: data.date,
      pdfUrl: data.pdfUrl,
      liveUrl: data.liveUrl,
      githubUrl: data.githubUrl,
      imageUrl: data.imageUrl,
      content,
    } as Project;
  });
  
  return projects.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getProjectBySlug(slug: string): Project | null {
  const projects = getAllProjects();
  return projects.find((p) => p.slug === slug) || null;
}

export function getFeaturedProjects(): Project[] {
  return getAllProjects().filter((p) => p.featured).slice(0, 4);
}
