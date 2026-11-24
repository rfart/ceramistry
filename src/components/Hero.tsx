"use client";

import { Download } from "lucide-react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { APP_STORE_URL } from "@/lib/constants";

export default function Hero() {
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
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 text-base font-semibold text-[var(--color-background)] bg-[var(--color-accent-primary)] rounded-[var(--radius-pill)] hover:opacity-90 transition-opacity duration-300"
                >
                  <Download size={18} />
                  Download on the App Store
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Hero visual — iPhone mockup with app screenshot */}
          <ScrollReveal delay={0.15}>
            <div className="relative mx-auto w-full max-w-[320px] md:max-w-[360px]">
              {/* Screenshot inside the frame */}
              <div className="absolute left-[4.1%] right-[4.1%] top-[1.4%] bottom-[1.4%] rounded-[38px] md:rounded-[43px] overflow-hidden bg-black">
                <Image
                  src="/images/app-screenshot.jpg"
                  alt="Ceramistry app showing Soft Sky Blue glaze preview on a 3D mug"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              {/* iPhone frame overlay */}
              <Image
                src="/images/iphone-frame.png"
                alt=""
                width={388}
                height={800}
                className="relative w-full h-auto"
                priority
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
