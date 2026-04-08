import type { Metadata } from "next";
import DocsClient from "@/app/docs/DocsClient";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "iRetardgram documentation covering installation, build pipeline, block matrix, and troubleshooting.",
  alternates: {
    canonical: "/docs",
  },
};

export default function DocsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "iRetardgram Documentation",
    description:
      "Installation, build pipeline, block matrix, keystore signing, and debugging guidance for iRetardgram.",
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
