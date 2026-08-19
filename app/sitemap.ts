import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { serviceCities } from "@/data/service-area";
import { site } from "@/data/site";

export const dynamic = "force-static";

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
    "/area",
  ].map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
  }));
  const projectRoutes = projects.map((project) => ({
    url: `${site.url}/work/${project.slug}`,
    lastModified,
  }));
  const areaRoutes = serviceCities.map((city) => ({
    url: `${site.url}/area/${city.id}`,
    lastModified,
  }));
  return [...staticRoutes, ...projectRoutes, ...areaRoutes];
}
