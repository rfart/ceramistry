import ScrollReveal from "./ScrollReveal";

export default function PainPoint() {
  return (
    <section className="relative bg-[var(--color-text-primary)] text-[var(--color-background)] py-24 md:py-32 film-grain overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <ScrollReveal>
          <p className="text-sm font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] text-[var(--color-accent-secondary)] mb-6">
            No more kiln surprises
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-fluid-section font-[family-name:var(--font-display)] italic mb-8">
            Glazing isn&apos;t like painting.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-fluid-body text-[var(--color-background)]/70 max-w-2xl mx-auto leading-relaxed">
            A minor shift in recipe or firing temperature can ruin weeks of
            throwing and trimming — draining your time, materials, and kiln
            cycles. Every test tile is a gamble. Every failed batch means
            starting over from scratch.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
