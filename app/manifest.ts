import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Amraiz Ahmad — Cyber Security Portfolio",
    short_name: "Amraiz Ahmad",
    description:
      "BS Cyber Security student, aspiring penetration tester & red teamer.",
    start_url: "/",
    display: "standalone",
    background_color: "#0B1220",
    theme_color: "#0B1220",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
