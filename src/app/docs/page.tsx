import type { Metadata } from "next";
import DocsClient from "@/app/docs/DocsClient";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "iRetard documentation for both mobile app and Chrome extension: strict policy, network blocking rules, and local unpacked install instructions.",
  alternates: {
    canonical: "/docs",
  },
};

export default function DocsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "iRetard Documentation (App + Extension)",
    description:
      "Documentation for iRetard mobile app and strict local-only Chrome extension, including blocking behavior and unpacked installation flow.",
    author: {
      "@type": "Organization",
      name: "iRetardgram",
      url: "https://iretardgram.app",
    },
    url: "https://iretardgram.app/docs",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DocsClient />
    </>
  );
}
