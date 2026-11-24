import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { APP_STORE_URL } from "@/lib/constants";

export default function CTABanner() {
  return (
    <section
      id="download"
      className="relative py-24 md:py-32 bg-[var(--color-text-primary)] text-[var(--color-background)] film-grain overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left column — Copy + CTA */}
          <ScrollReveal>
            <div>
              <span className="inline-block font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-[var(--color-background)]/50 mb-4">
                Get the App
              </span>

              <h2 className="text-fluid-section font-[family-name:var(--font-display)] italic mb-6">
                Capture the colors of your world.
                <br />
                Bring them to life in clay.
              </h2>

              <p className="text-fluid-body text-[var(--color-background)]/60 mb-10 max-w-lg">
                Download Ceramistry and start turning inspiration into kiln-ready
                glaze recipes today.
              </p>

              {/* App Store badge + QR code side by side */}
              <div className="flex items-center gap-5">
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-90 transition-opacity duration-300"
                >
                  <Image
                    src="/images/app-store-badge.png"
                    alt="Download on the App Store"
                    width={480}
                    height={162}
                    className="h-[162px] w-auto"
                  />
                </a>

                <div className="hidden md:block shrink-0 rounded-2xl bg-white p-2">
                  <Image
                    src="/images/qr-appstore.svg"
                    alt="QR code to download Ceramistry on the App Store"
                    width={90}
                    height={75}
                    className="h-[75px] w-[75px]"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right column — Phone mockup */}
          <ScrollReveal delay={0.15}>
            <div className="relative w-full md:scale-[1.75] md:translate-x-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/cta-phone.png"
                alt="Ceramistry app showing Royal Blue glaze recipe on iPhone"
                className="w-full h-auto"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
