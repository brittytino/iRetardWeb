import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "@/styles/tokens.css";
import { Analytics } from "@vercel/analytics/next";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "iRetardgram | Reclaim Your Attention",
    template: "%s | iRetardgram",
  },
  description: "A patched Instagram client removing infinite-feed traps while preserving essential communication. No algorithmic manipulation.",
  metadataBase: new URL("https://iretardgram.app"),
  applicationName: "iRetardgram",
  keywords: [
    "distraction-free instagram",
    "instagram feed blocker",
    "focus app",
    "attention economy",
    "minimal instagram client",
    "digital wellbeing",
  ],
  authors: [{ name: "iRetardgram" }],
  creator: "iRetardgram",
  publisher: "iRetardgram",
  category: "productivity",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "iRetardgram | Reclaim Your Attention",
    description: "Remove infinite-feed traps from Instagram while preserving DMs, stories, and notifications. Gain your control back.",
    url: "https://iretardgram.app",
    siteName: "iRetardgram",
    type: "website",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "iRetardgram - Reclaim your attention",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "iRetardgram",
    description: "Reclaim your attention. Keep Instagram useful.",
    images: ["/og.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-black text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
