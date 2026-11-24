import { Camera, FlaskConical, Eye } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    icon: Camera,
    title: "Capture Inspiration",
    description:
      "Snap a photo of anything around you — a sunset, a coffee cup, a mossy wall — and extract its dominant color palette instantly.",
  },
  {
    number: "02",
    icon: FlaskConical,
    title: "Generate the Recipe",
    description:
      "Pick your swatch to receive a balanced, gram-measured glaze recipe ready for the studio scale. Every ingredient, every weight, dialed in.",
  },
  {
    number: "03",
    icon: Eye,
    title: "Preview Before You Fire",
    description:
      "Inspect the simulated finish on a 3D form tailored to your clay body, cone, and firing atmosphere — before you open the kiln.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <div className="text-center mb-16 md:mb-20">
            <p className="text-sm font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] text-[var(--color-accent-primary)] mb-4">
              How it works
            </p>
            <h2 className="text-fluid-section font-[family-name:var(--font-display)] italic text-[var(--color-text-primary)]">
              Three steps from inspiration to glaze.
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1}>
              <div className="flex flex-col items-start">
                {/* Device frame placeholder */}
                <div className="w-full aspect-[9/16] max-w-[220px] rounded-[var(--radius-lg)] bg-[var(--color-surface)] border border-[var(--color-text-primary)]/5 flex items-center justify-center mb-8 mx-auto">
                  <div className="text-center">
                    <step.icon
                      size={32}
                      className="mx-auto mb-3 text-[var(--color-accent-primary)]"
                      strokeWidth={1.5}
                    />
                    <p className="text-xs font-[family-name:var(--font-mono)] text-[var(--color-text-secondary)]">
                      [UI Video: Step {step.number}]
                    </p>
                  </div>
                </div>

                {/* Text */}
                <div className="text-center w-full">
                  <span className="text-xs font-[family-name:var(--font-mono)] text-[var(--color-accent-primary)] mb-2 block">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-[family-name:var(--font-display)] italic text-[var(--color-text-primary)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
