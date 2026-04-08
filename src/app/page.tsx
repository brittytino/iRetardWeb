import HomeClient from "@/app/HomeClient";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "iRetardgram",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "Android",
    description:
      "A distraction-free Instagram client that blocks infinite feeds and reels while keeping messages, stories, search, and notifications.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    url: "https://iretardgram.app",
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
