import HomeClient from "@/app/HomeClient";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        name: "iRetard Mobile App",
        applicationCategory: "ProductivityApplication",
        operatingSystem: "Android",
        description:
          "A distraction-reduced Instagram mobile application that blocks feed/recommendation loops while preserving communication features.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        url: "https://iretardgram.app",
      },
      {
        "@type": "SoftwareApplication",
        name: "iRetard Browser Extension",
        applicationCategory: "BrowserApplication",
        operatingSystem: "Chrome, Edge, Brave, Opera, Vivaldi, Firefox",
        description:
          "Open-source extension distributed as local unpacked install with no paid store deployment.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
        },
        url: "https://iretardgram.app/docs#extension-local-install",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
