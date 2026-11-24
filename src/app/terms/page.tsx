import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Ceramistry",
  description: "Ceramistry terms of service.",
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-5 sm:px-8 py-32">
      <a
        href="/"
        className="text-sm text-[var(--color-accent-primary)] hover:underline mb-8 inline-block"
      >
        &larr; Back to home
      </a>
      <h1 className="text-fluid-section font-[family-name:var(--font-display)] italic text-[var(--color-text-primary)] mb-8">
        Terms of Service
      </h1>
      <div className="prose prose-sm max-w-none text-[var(--color-text-secondary)] space-y-6">
        <p>
          <strong>Last updated:</strong> [Date]
        </p>
        <p>
          Welcome to Ceramistry. By accessing or using our application and
          website, you agree to be bound by these Terms of Service.
        </p>
        <h2 className="text-lg font-[family-name:var(--font-display)] italic text-[var(--color-text-primary)]">
          Use of Service
        </h2>
        <p>
          [Placeholder: Define acceptable use, account responsibilities, and
          content guidelines.]
        </p>
        <h2 className="text-lg font-[family-name:var(--font-display)] italic text-[var(--color-text-primary)]">
          Intellectual Property
        </h2>
        <p>
          [Placeholder: Describe ownership of content, glaze recipes, and app
          materials.]
        </p>
        <h2 className="text-lg font-[family-name:var(--font-display)] italic text-[var(--color-text-primary)]">
          Limitation of Liability
        </h2>
        <p>
          [Placeholder: Ceramistry provides glaze predictions as estimates.
          Actual fired results may vary. We are not liable for material waste or
          kiln outcomes.]
        </p>
        <h2 className="text-lg font-[family-name:var(--font-display)] italic text-[var(--color-text-primary)]">
          Contact Us
        </h2>
        <p>
          For questions about these terms, contact us at{" "}
          <a
            href="mailto:legal@ceramistry.app"
            className="text-[var(--color-accent-primary)] hover:underline"
          >
            legal@ceramistry.app
          </a>
          .
        </p>
      </div>
    </main>
  );
}
