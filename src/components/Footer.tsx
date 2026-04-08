import Link from "next/link";

const footerLinks = {
  Project: [
    { label: "Releases", href: "https://github.com/brittytino/iRetardgram/releases", external: true },
    { label: "Source Code", href: "https://github.com/brittytino/iRetardgram", external: true },
    { label: "Documentation", href: "/docs" },
  ],
  Community: [
    { label: "Discord", href: "#", external: true },
    { label: "Issues", href: "https://github.com/brittytino/iRetardgram/issues", external: true },
    { label: "Contribute", href: "https://github.com/brittytino/iRetardgram", external: true },
  ],
  Legal: [
    { label: "License (GPL-3.0)", href: "https://github.com/brittytino/iRetardgram/blob/main/LICENSE", external: true },
    { label: "Privacy", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-border/50 bg-surface/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="text-xl font-extrabold tracking-tighter">
              <span className="text-cyan">i</span>Retard<span className="text-lime">gram</span>
            </span>
            <p className="mt-3 text-sm text-muted leading-relaxed max-w-xs">
              Distraction-control patches for Instagram. Focus over addiction.
            </p>
            <p className="mt-4 text-xs text-muted/60">
              Built upon{" "}
              <a
                href="https://github.com/niccolosottile/FeurStagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors underline underline-offset-2"
              >
                FeurStagram
              </a>
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-muted/70 mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted hover:text-foreground transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-6 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted/50">
            © {new Date().getFullYear()} iRetardgram · Built by{" "}
            <a
              href="https://github.com/brittytino"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-foreground transition-colors"
            >
              brittytino
            </a>
          </p>
          <p className="text-xs text-muted/40">
            Focus is a feature, not a bug.
          </p>
        </div>
      </div>
    </footer>
  );
}
