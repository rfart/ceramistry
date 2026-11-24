"use client";

import ScrollReveal from "./ScrollReveal";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export default function VideoSection() {
  return (
    <section className="relative bg-[var(--color-background)] py-24 md:py-32 film-grain overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <p className="text-sm font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] text-[var(--color-accent)] text-center mb-4">
            See Ceramistry in Action
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="rounded-[var(--radius-lg)] overflow-hidden shadow-lg aspect-video">
            <LiteYouTubeEmbed
              id="HXkKZfaQreo"
              title="Ceramistry — See It in Action"
              poster="maxresdefault"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
