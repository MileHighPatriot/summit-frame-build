import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = [
    "",
    "/work",
    "/services",
    "/process",
    "/about",
    "/crew",
    "/contact",
    "/testimonials",
    "/faq",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
  }));
  const projectRoutes = projects.map((project) => ({
    url: `${site.url}/work/${project.slug}`,
    lastModified,
  }));
  return [...staticRoutes, ...projectRoutes];
}
