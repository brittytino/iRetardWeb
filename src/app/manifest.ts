import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "iRetardgram",
    short_name: "iRetardgram",
    description: "A distraction-free Instagram client focused on real communication.",
    start_url: "/",
    display: "minimal-ui",
    background_color: "#0a0a0f",
    theme_color: "#0a0a0f",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
