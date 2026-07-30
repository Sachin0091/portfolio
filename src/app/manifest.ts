import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} - ${site.role}`,
    short_name: site.name,
    description: site.summary,
    start_url: "/",
    display: "standalone",
    background_color: "#f7f2e7",
    theme_color: "#f7f2e7",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
