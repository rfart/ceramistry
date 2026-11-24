import ScrollReveal from "./ScrollReveal";

const comparisons = [
  {
    title: "Olive Khaki Matte",
    metadata: "Cone 6 · Oxidation · Stoneware",
    appGradient: "linear-gradient(135deg, #6B7C3F, #8B9A5C, #A4B06D)",
    realGradient: "linear-gradient(135deg, #7A8B4A, #96A860, #B0C278)",
  },
  {
    title: "Deep Ocean Blue",
    metadata: "Cone 8 · Reduction · Porcelain",
    appGradient: "linear-gradient(135deg, #1A3A5C, #2C5F8A, #4A82B0)",
    realGradient: "linear-gradient(135deg, #1E4268, #336D96, #5090BC)",
  },
];

const testimonials = [
  {
    quote:
      "Ceramistry can be used to explore different glaze color possibilities. The app is very helpful for experimenting with various colors and can save quite a bit of time during the R&D process.",
    name: "Ariebul Hikami",
    role: "Project Manager at Gridwerk Studio",
    studio: "Owner of Aranaloka Ceramic Studio",
    initial: "A",
  },
  {
    quote:
      "Ceramistry can be helpful for workshop students who are curious about glaze materials, ingredient quantities, and the final results. Instead of having everyone weigh the ingredients and wait several weeks, the app helps visualize and experiment with different glaze colors.",
    name: "Nasya Alifah Ramadani",
    role: "Co-Founder",
    studio: "Ponyee Keramik",
    initial: "N",
  },
  {
    quote:
      "Useful tool for introducing glaze concepts to workshop students. The AR feature also helps communicate color expectations with clients.",
    name: "Bagus Aji Nugroho",
    role: "Co-Founder",
    studio: "Ponyee Keramik",
    initial: "B",
  },
];

export default function AppVsReality() {
  return (
    <section id="app-vs-reality" className="py-24 md:py-32 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <p className="text-sm font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] text-[var(--color-accent-primary)] mb-4">
              App vs. Reality
            </p>
            <h2 className="text-fluid-section font-[family-name:var(--font-display)] italic text-[var(--color-text-primary)] mb-4">
              See the proof.
            </h2>
            <p className="text-fluid-body text-[var(--color-text-secondary)] max-w-xl mx-auto">
              Side-by-side comparisons of Ceramistry&apos;s digital preview next to
              actual fired test tiles.
            </p>
          </div>
        </ScrollReveal>

        {/* Comparison cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {comparisons.map((comp, i) => (
            <ScrollReveal key={comp.title} delay={i * 0.1}>
              <div className="bg-[var(--color-accent-white)] rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-text-primary)]/5">
                <div className="grid grid-cols-2">
                  {/* App preview */}
                  <div className="p-4">
                    <p className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-wider text-[var(--color-text-secondary)] mb-2">
                      App Preview
                    </p>
                    <div
                      className="aspect-square rounded-[var(--radius-sm)] flex items-end p-3"
                      style={{ background: comp.appGradient }}
                    >
                      <span className="text-[10px] font-[family-name:var(--font-mono)] text-white/60">
                        [Digital Preview]
                      </span>
                    </div>
                  </div>
                  {/* Fired result */}
                  <div className="p-4">
                    <p className="text-[10px] font-[family-name:var(--font-mono)] uppercase tracking-wider text-[var(--color-text-secondary)] mb-2">
                      Fired Result
                    </p>
                    <div
                      className="aspect-square rounded-[var(--radius-sm)] flex items-end p-3"
                      style={{ background: comp.realGradient }}
                    >
                      <span className="text-[10px] font-[family-name:var(--font-mono)] text-white/60">
                        [Fired Tile Photo]
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <p className="text-sm font-semibold text-[var(--color-text-primary)]">
                    {comp.title}
                  </p>
                  <p className="text-xs font-[family-name:var(--font-mono)] text-[var(--color-text-secondary)]">
                    {comp.metadata}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <blockquote className="bg-[var(--color-accent-white)] rounded-[var(--radius-lg)] p-6 border border-[var(--color-text-primary)]/5 h-full flex flex-col">
                <p className="text-sm italic text-[var(--color-text-secondary)] mb-4 leading-relaxed flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[var(--color-accent-primary)] flex items-center justify-center text-sm font-semibold text-[var(--color-accent-white)] shrink-0">
                    {t.initial}
                  </div>
                  <div className="text-xs text-[var(--color-text-secondary)]">
                    <span className="font-semibold text-[var(--color-text-primary)] block">
                      {t.name}
                    </span>
                    {t.role}, {t.studio}
                  </div>
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
