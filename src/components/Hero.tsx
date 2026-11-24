"use client";

import { Download, Play } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Hero({
  onOpenVideo,
}: {
  onOpenVideo: () => void;
}) {
  return (
    <section className="relative min-h-screen flex items-center film-grain overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Copy */}
          <ScrollReveal>
            <div className="max-w-xl">
              <h1 className="text-fluid-hero font-[family-name:var(--font-display)] italic text-[var(--color-text-primary)] mb-6">
                Turn the colors you love into kiln-ready glaze recipes.
              </h1>
              <p className="text-fluid-body text-[var(--color-text-secondary)] mb-10 max-w-lg">
                Take the guesswork out of ceramic glazing. Match real-world
                colors with your camera, generate measured recipes, and preview
                fired results before you open the kiln.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#download"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 text-base font-semibold text-[var(--color-accent-white)] bg-[var(--color-accent-primary)] rounded-[var(--radius-pill)] hover:opacity-90 transition-opacity duration-300"
                >
                  <Download size={18} />
                  Download on the App Store
                </a>
                <button
                  onClick={onOpenVideo}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 text-base font-semibold text-[var(--color-text-primary)] bg-[var(--color-surface)] rounded-[var(--radius-pill)] hover:bg-[var(--color-accent-white)] transition-colors duration-300 border border-[var(--color-text-primary)]/10"
                >
                  <Play size={18} />
                  Watch the 60s Film
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Hero visual placeholder */}
          <ScrollReveal delay={0.15}>
            <div className="relative aspect-[4/3] rounded-[var(--radius-lg)] overflow-hidden bg-gradient-to-br from-[#C4A472] via-[#D9C4A0] to-[#8B6F47]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <div className="w-16 h-16 rounded-[var(--radius-md)] bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                      <rect x="5" y="2" width="14" height="20" rx="3" />
                      <circle cx="12" cy="18" r="1" />
                    </svg>
                  </div>
                  <p className="text-white/80 font-[family-name:var(--font-mono)] text-sm">
                    [Hero: cup + iPhone — 16:9]
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
