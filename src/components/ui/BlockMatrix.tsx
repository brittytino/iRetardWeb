"use client";

import { useRef } from "react";
import { useGsapReveal } from "@/lib/animations/useGsapReveal";

interface BlockMatrixRow {
  route: string;
  purpose: string;
  status: "Blocked" | "Allowed" | "Redirected";
  notes: string;
}

const data: BlockMatrixRow[] = [
  { route: "/api/v1/feed/timeline/", purpose: "Home feed", status: "Blocked", notes: "Primary addiction vector" },
  { route: "/api/v1/discover/explore/", purpose: "Explore tab", status: "Blocked", notes: "Algorithmic content" },
  { route: "/api/v1/clips/", purpose: "Reels discovery", status: "Blocked", notes: "Short-form video loop" },
  { route: "/api/v1/feed/reels_tray/", purpose: "Reels tray", status: "Redirected", notes: "Tab redirected to DMs" },
  { route: "/api/v1/blended_feed/", purpose: "Blend recommendations", status: "Blocked", notes: "Endless scroll engine" },
  { route: "/api/v1/feed/ranked_blend/", purpose: "Ranked blend", status: "Blocked", notes: "Personalized blend variant" },
  { route: "/api/v1/discover/topical_explore/", purpose: "Topical explore", status: "Blocked", notes: "Topic-based discovery" },
  { route: "/api/v1/qp/batch_fetch/", purpose: "Telemetry signals", status: "Blocked", notes: "Recommendation signals" },
  { route: "/api/v1/direct_v2/inbox/", purpose: "DM inbox", status: "Allowed", notes: "Core communication" },
  { route: "/api/v1/users/{pk}/info/", purpose: "Profile info", status: "Allowed", notes: "User profiles" },
  { route: "/api/v1/feed/user/{pk}/", purpose: "User feed", status: "Allowed", notes: "Profile grid view" },
  { route: "/api/v1/news/inbox/", purpose: "Notifications", status: "Allowed", notes: "Activity alerts" },
  { route: "/api/v1/users/search/", purpose: "Search", status: "Allowed", notes: "People search" },
];

const statusColors = {
  Blocked: "text-red-400 bg-red-500/10",
  Allowed: "text-cyan bg-cyan/10",
  Redirected: "text-yellow-400 bg-yellow-500/10",
};

export default function BlockMatrix() {
  const ref = useRef<HTMLDivElement>(null);
  useGsapReveal(ref);

  return (
    <div ref={ref} className="overflow-x-auto rounded-2xl border border-border/50 bg-surface/30">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border/50">
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted/70">
              Route Pattern
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted/70">
              Purpose
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted/70">
              Status
            </th>
            <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-widest text-muted/70 hidden md:table-cell">
              Notes
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr
              key={row.route}
              className={`border-b border-border/20 transition-colors hover:bg-surface-light/30 ${
                i % 2 === 0 ? "bg-transparent" : "bg-surface/20"
              }`}
            >
              <td className="px-4 py-3 font-mono text-xs text-muted">
                {row.route}
              </td>
              <td className="px-4 py-3 text-foreground">{row.purpose}</td>
              <td className="px-4 py-3">
                <span
                  className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium ${statusColors[row.status]}`}
                >
                  {row.status}
                </span>
              </td>
              <td className="px-4 py-3 text-muted hidden md:table-cell">
                {row.notes}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
