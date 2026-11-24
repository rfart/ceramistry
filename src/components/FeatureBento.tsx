import { Camera, Brain, Settings2, Box } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const features = [
  {
    icon: Camera,
    title: "Camera-to-Palette Extraction",
    description:
      "Instant dominant color breakdown from real-world photography. Point, shoot, and see your palette emerge.",
    span: "md:col-span-2",
  },
  {
    icon: Brain,
    title: "ML-Powered Glaze Prediction",
    description:
      "Predicts fired color, surface texture, and opacity using glaze chemistry and UMF logic.",
    span: "md:col-span-1",
  },
  {
    icon: Settings2,
    title: "Studio-Ready Variables",
    description:
      "Configurable for different clay bodies, Cones 1-10, and oxidation/reduction atmospheres.",
    span: "md:col-span-1",
  },
  {
    icon: Box,
    title: "3D Visual Preview",
    description:
      "Rotate and inspect your expected glaze finish before loading the kiln. See matte, satin, and glossy surfaces.",
    span: "md:col-span-2",
  },
];

export default function FeatureBento() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <p className="text-sm font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] text-[var(--color-accent-primary)] mb-4">
              Features
            </p>
            <h2 className="text-fluid-section font-[family-name:var(--font-display)] italic text-[var(--color-text-primary)]">
              Everything you need in the studio.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <ScrollReveal key={feature.title} delay={i * 0.08} className={feature.span}>
              <div className="h-full bg-[var(--color-surface)] rounded-[var(--radius-lg)] p-8 md:p-10 border border-[var(--color-text-primary)]/5 hover:border-[var(--color-accent-primary)]/15 transition-colors duration-500">
                <feature.icon
                  size={28}
                  className="text-[var(--color-accent-primary)] mb-5"
                  strokeWidth={1.5}
                />
                <h3 className="text-lg font-[family-name:var(--font-display)] italic text-[var(--color-text-primary)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
