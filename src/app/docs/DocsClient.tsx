"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlockMatrix from "@/components/ui/BlockMatrix";
import { registerScrollTrigger } from "@/lib/animations/gsap";

export default function DocsClient() {
  useEffect(() => {
    registerScrollTrigger();
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-foreground selection:bg-cyan/30 selection:text-white">
      <Navbar />

      <div className="max-w-7xl mx-auto pt-32 pb-24 px-6 flex flex-col lg:flex-row gap-12">
        <aside className="w-full lg:w-64 shrink-0 mt-8">
          <div className="lg:sticky lg:top-32 flex flex-col gap-4 border-l border-white/10 pl-6 space-y-2">
            <h3 className="text-white font-bold tracking-tight mb-2">Documentation</h3>
            <a href="#intro" className="text-white/60 hover:text-cyan transition-colors text-sm">Introduction</a>
            <a href="#products" className="text-white/60 hover:text-cyan transition-colors text-sm">Products</a>
            <a href="#app-quick-start" className="text-white/60 hover:text-cyan transition-colors text-sm">Mobile App</a>
            <a href="#extension-overview" className="text-white/60 hover:text-cyan transition-colors text-sm">Chrome Extension</a>
            <a href="#strict-policy" className="text-white/60 hover:text-cyan transition-colors text-sm">Strict Policy</a>
            <a href="#network-blocking" className="text-white/60 hover:text-cyan transition-colors text-sm">Network Blocking</a>
            <a href="#load-unpacked" className="text-white/60 hover:text-cyan transition-colors text-sm">Load Unpacked</a>
            <a href="#build-release" className="text-white/60 hover:text-cyan transition-colors text-sm">Build & Release</a>
            <a href="#block-matrix" className="text-white/60 hover:text-cyan transition-colors text-sm">Block Matrix</a>
            <a href="#signing" className="text-white/60 hover:text-cyan transition-colors text-sm">Keystore & Signing</a>
            <a href="#debugging" className="text-white/60 hover:text-cyan transition-colors text-sm">Debugging</a>
            <a href="#faq" className="text-white/60 hover:text-cyan transition-colors text-sm">FAQ</a>
          </div>
        </aside>

        <main className="flex-1 max-w-4xl prose prose-invert prose-p:text-white/70 prose-headings:text-white prose-a:text-cyan hover:prose-a:text-lime">
          <section id="intro" className="mb-20 scroll-mt-32">
            <h1 className="text-4xl lg:text-[4rem] font-black mb-8 tracking-tighter text-white font-space-grotesk">
              iRetardgram Documentation
            </h1>
            <p className="text-xl leading-relaxed text-white/80">
              Welcome to the official documentation. iRetard now includes both a mobile Instagram application and a strict local-only Chrome extension. Both products follow one principle: remove addictive loops, keep useful communication.
            </p>
          </section>

          <section id="products" className="mb-20 scroll-mt-32 border-t border-white/5 pt-12">
            <h2 className="text-3xl font-bold mb-6 tracking-tighter font-space-grotesk">Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <article className="rounded-2xl border border-cyan/20 bg-cyan/5 p-6">
                <h3 className="text-xl font-bold text-white mb-3">Mobile Instagram Application</h3>
                <p className="text-white/75 m-0">
                  Patched Android app that blocks timeline and recommendation-heavy surfaces while keeping direct messaging and core utility paths intact.
                </p>
              </article>
              <article className="rounded-2xl border border-lime/20 bg-lime/5 p-6">
                <h3 className="text-xl font-bold text-white mb-3">iRetard Chrome Extension</h3>
                <p className="text-white/75 m-0">
                  Strict local-only Manifest V3 extension for Instagram discipline. Chrome support now, broader browser support soon.
                </p>
              </article>
            </div>
          </section>

          <section id="app-quick-start" className="mb-20 scroll-mt-32 border-t border-white/5 pt-12">
            <h2 className="text-3xl font-bold mb-6 tracking-tighter font-space-grotesk">Mobile App Quick Start</h2>
            <p>To install the pre-built APK:</p>
            <ol className="list-decimal pl-5 space-y-3 text-white/70">
              <li>Navigate to the <a href="https://github.com/brittytino/iRetardgram/releases">Releases page</a>.</li>
              <li>Download the latest <code>iRetardgram-vX.X.X.apk</code>.</li>
              <li>Ensure your device allows installation from unknown sources.</li>
              <li>Install the application and log in as usual.</li>
            </ol>
            <div className="bg-cyan/5 border border-cyan/20 rounded-xl p-6 mt-6">
              <strong className="text-cyan block mb-2 font-bold uppercase tracking-widest text-xs">Note</strong>
              <p className="text-sm m-0 leading-relaxed text-cyan/80">You may need to uninstall the original Instagram application first, due to mismatched package signatures stopping Android from overwriting.</p>
            </div>
          </section>

          <section id="extension-overview" className="mb-20 scroll-mt-32 border-t border-white/5 pt-12">
            <h2 className="text-3xl font-bold mb-6 tracking-tighter font-space-grotesk">Chrome Extension Overview</h2>
            <p className="text-white/75">
              iRetard is a strict local-only Manifest V3 Chrome extension for Instagram discipline.
            </p>
            <p className="text-white/75 mt-4">
              This project is open source on GitHub and maintained by brittytino.
            </p>
            <a
              href="https://github.com/brittytino/iretard"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-cyan hover:text-lime transition-colors"
            >
              github.com/brittytino/iretard
            </a>
          </section>

          <section id="strict-policy" className="mb-20 scroll-mt-32 border-t border-white/5 pt-12">
            <h2 className="text-3xl font-bold mb-6 tracking-tighter font-space-grotesk">Strict Default Policy</h2>
            <ul className="list-disc pl-5 space-y-3 text-white/70">
              <li>No user override controls in popup.</li>
              <li>Daily Instagram budget is fixed to 30 minutes.</li>
              <li>Popup shows a real countdown clock (MM:SS) from 30:00 with live updates.</li>
              <li>Active Instagram sessions are watched continuously with heartbeat evaluation (non-static).</li>
              <li>Every 5 minutes of active Instagram use shows a mandatory math challenge modal.</li>
              <li>Emergency unlock flow is disabled.</li>
            </ul>
          </section>

          <section id="network-blocking" className="mb-20 scroll-mt-32 border-t border-white/5 pt-12">
            <h2 className="text-3xl font-bold mb-6 tracking-tighter font-space-grotesk">Network Blocking & Redirect Rules</h2>
            <p className="text-white/75 mb-4">The extension blocks home feed timeline request patterns:</p>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li><code>/feed/timeline/</code></li>
              <li><code>/feed/following/</code></li>
              <li><code>/web/feed/timeline/</code></li>
              <li>GraphQL home-feed query URLs containing feed/timeline hints.</li>
            </ul>
            <p className="text-white/75 mt-6 mb-4">Tab redirect behavior:</p>
            <ul className="list-disc pl-5 space-y-2 text-white/70">
              <li>Reels tab routes are redirected to Direct Messages.</li>
              <li>Fragment requests targeting <code>fragment_clips</code> are intercepted and redirected to DMs.</li>
            </ul>
          </section>

          <section id="load-unpacked" className="mb-20 scroll-mt-32 border-t border-white/5 pt-12">
            <h2 className="text-3xl font-bold mb-6 tracking-tighter font-space-grotesk">Load Unpacked (Chrome)</h2>
            <ol className="list-decimal pl-5 space-y-3 text-white/70">
              <li>Open <code>chrome://extensions</code>.</li>
              <li>Enable Developer mode.</li>
              <li>Click Load unpacked.</li>
              <li>Select this folder.</li>
            </ol>
            <p className="text-white/60 mt-6 text-sm">
              Chrome is supported now. Additional browser packaging support is planned soon.
            </p>
          </section>

          <section id="build-release" className="mb-20 scroll-mt-32 border-t border-white/5 pt-12">
            <h2 className="text-3xl font-bold mb-6 tracking-tighter font-space-grotesk">Build & Release Pipeline</h2>
            <p>
              We utilize a CI/CD pipeline built on GitHub Actions for mobile APK releases. When a tag is pushed, the workflow:
            </p>
            <ul className="list-disc pl-5 space-y-3 text-white/70">
              <li>Downloads the base APK (matching the target version).</li>
              <li>Decompiles using <code>apktool</code>.</li>
              <li>Applies semantic <code>smali</code> patches targeting the network request controllers.</li>
              <li>Recompiles, zipaligns, and signs using the repository Keystore.</li>
            </ul>
            <p className="mt-4 text-white/70">
              Chrome extension distribution is local-unpacked for now, with store deployment not yet scheduled.
            </p>
          </section>

          <section id="block-matrix" className="mb-20 scroll-mt-32 w-full border-t border-white/5 pt-12">
            <h2 className="text-3xl font-bold mb-8 tracking-tighter font-space-grotesk">Block Matrix</h2>
            <BlockMatrix />
          </section>

          <section id="signing" className="mb-20 scroll-mt-32 border-t border-white/5 pt-12">
            <h2 className="text-3xl font-bold mb-6 tracking-tighter font-space-grotesk">Keystore & Signing</h2>
            <p>
              To build locally, you must provide your own signing key.
            </p>
            <pre className="bg-[#0a0a0a] border border-white/[0.05] p-6 rounded-2xl overflow-x-auto text-sm font-mono text-cyan/80 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
              keytool -genkey -v -keystore my-release-key.keystore -alias alias_name -keyalg RSA -keysize 2048 -validity 10000
            </pre>
            <p className="mt-6">
              Export the base64 keystore to your GitHub Secrets if deploying through the CI pipeline.
            </p>
          </section>

          <section id="debugging" className="mb-20 scroll-mt-32 border-t border-white/5 pt-12">
            <h2 className="text-3xl font-bold mb-6 tracking-tighter font-space-grotesk">Debugging</h2>
            <p>
              If the application crashes on load, capture the logcat output:
            </p>
            <pre className="bg-[#0a0a0a] border border-white/[0.05] p-6 rounded-2xl overflow-x-auto text-sm font-mono text-lime/80 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
              adb logcat | grep -iE &quot;fatal|exception|androidruntime&quot;
            </pre>
            <p className="mt-6 text-white/70">For extension debugging, inspect service worker and content script errors in Developer mode from <code>chrome://extensions</code>.</p>
          </section>

          <section id="faq" className="mb-16 scroll-mt-32 border-t border-white/5 pt-12">
            <h2 className="text-3xl font-bold mb-8 tracking-tighter font-space-grotesk">FAQ</h2>
            <div className="space-y-8">
              <div className="border border-white/5 p-6 rounded-2xl bg-white/[0.01]">
                <h4 className="font-bold text-lg mb-2 text-white">Will my account be banned?</h4>
                <p className="text-white/60 leading-relaxed m-0 text-sm">iRetardgram modifies the client to drop requests locally, which Instagram servers generally interpret as weak connection failures. Ban risks are mathematically low, but use at your own risk.</p>
              </div>
              <div className="border border-white/5 p-6 rounded-2xl bg-white/[0.01]">
                <h4 className="font-bold text-lg mb-2 text-white">Are Direct Messages delayed?</h4>
                <p className="text-white/60 leading-relaxed m-0 text-sm">No. Push notifications (FCM) and the Realtime MQTT messaging systems are completely bypassed by our patches, remaining fully intact with zero latency added.</p>
              </div>
              <div className="border border-white/5 p-6 rounded-2xl bg-white/[0.01]">
                <h4 className="font-bold text-lg mb-2 text-white">What gets disabled in extension mode?</h4>
                <p className="text-white/60 leading-relaxed m-0 text-sm">Feed posts are blocked at network layer with visual fallback blocker, and reels tab routes are redirected to DMs while fragment clips are blocked.</p>
              </div>
              <div className="border border-white/5 p-6 rounded-2xl bg-white/[0.01]">
                <h4 className="font-bold text-lg mb-2 text-white">What still works in extension mode?</h4>
                <p className="text-white/60 leading-relaxed m-0 text-sm">Stories, Direct Messages, Profile, Reels in DMs, Search, and Notifications continue to work.</p>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </div>
  );
}
