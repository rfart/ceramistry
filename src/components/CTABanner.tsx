import { Download } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function CTABanner() {
  return (
    <section
      id="download"
      className="relative py-24 md:py-32 bg-[var(--color-text-primary)] text-[var(--color-accent-white)] film-grain overflow-hidden"
    >
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
        <ScrollReveal>
          <h2 className="text-fluid-section font-[family-name:var(--font-display)] italic mb-6">
            Capture the colors of your world.
            <br />
            Bring them to life in clay.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <p className="text-fluid-body text-[var(--color-accent-white)]/60 mb-10 max-w-lg mx-auto">
            Download Ceramistry and start turning inspiration into kiln-ready
            glaze recipes today.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 text-base font-semibold text-[var(--color-text-primary)] bg-[var(--color-accent-white)] rounded-[var(--radius-pill)] hover:bg-white transition-colors duration-300"
          >
            <Download size={20} />
            Download on the App Store
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
