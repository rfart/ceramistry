import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Ceramistry",
  description: "Ceramistry privacy policy.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 sm:px-8 py-32">
      <a
        href="/"
        className="text-sm text-[var(--color-accent-primary)] hover:underline mb-8 inline-block"
      >
        &larr; Back to home
      </a>
      <h1 className="text-fluid-section font-[family-name:var(--font-display)] italic text-[var(--color-text-primary)] mb-8">
        Privacy Policy
      </h1>
      <div className="prose prose-sm max-w-none text-[var(--color-text-secondary)] space-y-6">
        <p>
          <strong>Last updated:</strong> [Date]
        </p>
        <p>
          Ceramistry (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This Privacy
          Policy explains how we collect, use, and protect information when you
          use our iOS application and website.
        </p>
        <h2 className="text-lg font-[family-name:var(--font-display)] italic text-[var(--color-text-primary)]">
          Information We Collect
        </h2>
        <p>
          [Placeholder: Detail the types of information collected — camera
          access for color extraction, usage analytics, device information, etc.]
        </p>
        <h2 className="text-lg font-[family-name:var(--font-display)] italic text-[var(--color-text-primary)]">
          How We Use Your Information
        </h2>
        <p>
          [Placeholder: Describe how collected information is used to improve the
          app experience, provide glaze recommendations, etc.]
        </p>
        <h2 className="text-lg font-[family-name:var(--font-display)] italic text-[var(--color-text-primary)]">
          Data Storage & Security
        </h2>
        <p>
          [Placeholder: Explain data storage practices, encryption, and security
          measures.]
        </p>
        <h2 className="text-lg font-[family-name:var(--font-display)] italic text-[var(--color-text-primary)]">
          Contact Us
        </h2>
        <p>
          If you have questions about this Privacy Policy, please contact us at{" "}
          <a
            href="mailto:privacy@ceramistry.app"
            className="text-[var(--color-accent-primary)] hover:underline"
          >
            privacy@ceramistry.app
          </a>
          .
        </p>
      </div>
    </main>
  );
}
