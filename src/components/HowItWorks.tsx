import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Capture Inspiration",
    description:
      "Snap a photo of anything around you — a sunset, a coffee cup, a mossy wall — and extract its dominant color palette instantly.",
    video: "/images/step-01-capture.mp4",
  },
  {
    number: "02",
    title: "Generate the Recipe",
    description:
      "Pick your swatch to receive a balanced, gram-measured glaze recipe ready for the studio scale. Every ingredient, every weight, dialed in.",
    video: "/images/step-02-generate.mp4",
  },
  {
    number: "03",
    title: "Preview Before You Fire",
    description:
      "Inspect the simulated finish on a 3D form tailored to your clay body, cone, and firing atmosphere — before you open the kiln.",
    video: "/images/step-03-preview.mp4",
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
                {/* iPhone frame with video */}
                <div className="relative w-full max-w-[220px] mb-8 mx-auto">
                  <div className="absolute left-[4.1%] right-[4.1%] top-[1.4%] bottom-[1.4%] rounded-[26px] overflow-hidden bg-black">
                    <video
                      src={step.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <Image
                    src="/images/iphone-frame.png"
                    alt=""
                    width={388}
                    height={800}
                    className="relative w-full h-auto"
                  />
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
