"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const directApkUrl = "https://github.com/brittytino/iRetardgram/releases/latest/download/iRetardgram_patched_instagram_latest_stories_enabled.apk";

  const links = [
    { href: "/", label: "Home" },
    { href: "/docs", label: "Docs" },
    { href: "/docs#products", label: "Products" },
    { href: "/docs#load-unpacked", label: "Extension Setup" },
    { href: "https://github.com/brittytino/iRetardgram/releases", label: "Releases", external: true },
    { href: "https://github.com/brittytino/iRetardgram", label: "GitHub", external: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/70">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/instagram_logo.png"
            alt="iRetardLab Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-contain transition-transform duration-200 group-hover:scale-110"
            priority
          />

          <span className="text-lg font-extrabold tracking-tighter">
            <span className="text-cyan">i</span>Retard
            <span className="text-lime">Lab</span>
          </span>
        </Link>
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = link.href === pathname;
            return link.external ? (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-foreground transition-colors duration-200"
              >
                {link.label}
                <span className="inline-block ml-1 text-[10px] opacity-50">↗</span>
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors duration-200 ${isActive ? "text-cyan font-medium" : "text-muted hover:text-foreground"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={directApkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1.5 rounded-full text-sm font-medium bg-cyan/10 text-cyan border border-cyan/20 hover:bg-cyan/20 transition-all duration-200"
          >
            Download
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-foreground transition-transform duration-200 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-opacity duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-foreground transition-transform duration-200 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-xl">
          <div className="flex flex-col gap-1 p-4">
            {links.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-lg text-sm text-muted hover:text-foreground hover:bg-surface transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label} ↗
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-sm transition-colors ${link.href === pathname
                      ? "text-cyan bg-cyan/5"
                      : "text-muted hover:text-foreground hover:bg-surface"
                    }`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )
            )}
            <a
              href={directApkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4 mt-2 px-4 py-2.5 rounded-full text-sm font-medium text-center bg-cyan/10 text-cyan border border-cyan/20"
              onClick={() => setMobileOpen(false)}
            >
              Download APK
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
