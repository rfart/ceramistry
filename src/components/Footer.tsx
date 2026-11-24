import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 border-t border-[var(--color-text-primary)]/8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <p className="flex items-center gap-2 font-[family-name:var(--font-display)] italic text-xl text-[var(--color-text-primary)] mb-2">
              <Image
                src="/images/logo.png"
                alt="Ceramistry logo"
                width={24}
                height={24}
                className="rounded-md"
              />
              Ceramistry
            </p>
            <p className="text-sm text-[var(--color-text-secondary)]">
              From camera to kiln, with confidence.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-[var(--color-text-secondary)]">
            <Link
              href="/privacy"
              className="hover:text-[var(--color-text-primary)] transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[var(--color-text-primary)] transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <a
              href="https://www.instagram.com/thobli.and.friends"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-text-primary)] transition-colors duration-300"
              aria-label="Instagram"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-[var(--color-text-primary)]/5">
          <p className="text-xs text-[var(--color-text-secondary)]">
            &copy; 2025 Ceramistry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
