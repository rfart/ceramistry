"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faqItems";
import ScrollReveal from "./ScrollReveal";

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-[var(--color-text-primary)]/8 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group"
        aria-expanded={isOpen}
      >
        <span className="text-base md:text-lg font-[family-name:var(--font-display)] italic text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-primary)] transition-colors duration-300">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="shrink-0 mt-1 text-[var(--color-text-secondary)]"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-sm md:text-base text-[var(--color-text-secondary)] leading-relaxed pb-6 pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="text-sm font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] text-[var(--color-accent-primary)] mb-4">
              Potter&apos;s FAQ
            </p>
            <h2 className="text-fluid-section font-[family-name:var(--font-display)] italic text-[var(--color-text-primary)]">
              Questions from the studio.
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="bg-[var(--color-surface)] rounded-[var(--radius-lg)] px-6 md:px-10 border border-[var(--color-text-primary)]/5">
            {faqItems.map((item, i) => (
              <FAQItem
                key={i}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === i}
                onToggle={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
              />
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
