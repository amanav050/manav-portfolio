export type Project = {
  slug: string;
  title: string;
  hook: string;
  metric: string;
  metricLabel?: string;
  tags: string[];
  category: "PRD" | "Case Study" | "Teardown" | "Shipped" | "Wireframe";
  cardVariant: "crimson" | "forest" | "navy" | "mustard" | "plum" | "ink" | "terracotta" | "teal" | "ochre";
  featured: boolean;
  date: string;
  pdfUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  imageUrl?: string;
  content: string;
};
