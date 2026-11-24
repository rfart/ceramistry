"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { demoPresets } from "@/data/demoPresets";
import ScrollReveal from "./ScrollReveal";

export default function PhotoToGlazeDemo() {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [activeSwatchIndex, setActiveSwatchIndex] = useState(0);

  const preset = demoPresets[activePresetIndex];
  const swatch = preset.swatches[activeSwatchIndex];

  const handlePresetChange = (index: number) => {
    setActivePresetIndex(index);
    setActiveSwatchIndex(0);
  };

  return (
    <section className="py-24 md:py-32 bg-[var(--color-accent-white)]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <ScrollReveal>
          <div className="text-center mb-14 md:mb-18">
            <p className="text-sm font-[family-name:var(--font-mono)] uppercase tracking-[0.2em] text-[var(--color-accent-primary)] mb-4">
              Try it yourself
            </p>
            <h2 className="text-fluid-section font-[family-name:var(--font-display)] italic text-[var(--color-text-primary)] mb-4">
              Photo to Glaze, in seconds.
            </h2>
            <p className="text-fluid-body text-[var(--color-text-secondary)] max-w-xl mx-auto">
              Click a photo to extract its palette, then pick a swatch to see
              the recipe.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-12 items-start">
            {/* Photo grid */}
            <div>
              {/* Desktop: grid, Mobile: horizontal scroll */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-3">
                {demoPresets.map((p, i) => (
                  <button
                    key={p.name}
                    onClick={() => handlePresetChange(i)}
                    className={`relative aspect-[4/3] rounded-[var(--radius-md)] overflow-hidden transition-all duration-500 ${
                      activePresetIndex === i
                        ? "ring-2 ring-[var(--color-accent-primary)] ring-offset-2 ring-offset-[var(--color-background)] scale-[1.02]"
                        : "opacity-70 hover:opacity-100"
                    }`}
                    aria-label={`Select ${p.name} preset`}
                    aria-pressed={activePresetIndex === i}
                  >
                    <div
                      className="absolute inset-0"
                      style={{ background: p.gradient }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/50 to-transparent">
                      <span className="text-xs font-semibold text-white">
                        {p.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Mock iOS card */}
            <div className="bg-[var(--color-surface)] rounded-[var(--radius-lg)] border border-[var(--color-text-primary)]/8 overflow-hidden">
              {/* Card header */}
              <div className="px-5 pt-5 pb-4">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={preset.name}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    className="text-sm font-semibold text-[var(--color-text-primary)]"
                  >
                    {preset.name}
                  </motion.p>
                </AnimatePresence>
              </div>

              {/* Vessel color preview */}
              <div className="mx-5 mb-4">
                <motion.div
                  className="aspect-square rounded-[var(--radius-md)] flex items-center justify-center relative overflow-hidden"
                  animate={{ backgroundColor: swatch.hex }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Simple vessel shape */}
                  <svg
                    viewBox="0 0 120 140"
                    className="w-24 h-28 drop-shadow-lg"
                    fill="none"
                  >
                    <motion.path
                      d="M30 20 C30 20, 25 10, 40 5 C55 0, 65 0, 80 5 C95 10, 90 20, 90 20 L95 50 C95 60, 100 80, 100 100 C100 120, 85 135, 60 135 C35 135, 20 120, 20 100 C20 80, 25 60, 25 50 Z"
                      animate={{ fill: `${swatch.hex}dd` }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      stroke="white"
                      strokeWidth="1"
                      strokeOpacity={0.3}
                    />
                  </svg>
                  <p className="absolute bottom-2 right-3 text-xs font-[family-name:var(--font-mono)] text-white/60">
                    Preview
                  </p>
                </motion.div>
              </div>

              {/* Swatches */}
              <div className="px-5 pb-4">
                <p className="text-xs text-[var(--color-text-secondary)] mb-2 font-semibold uppercase tracking-wider">
                  Palette
                </p>
                <div className="flex gap-2">
                  {preset.swatches.map((s, i) => (
                    <button
                      key={s.hex}
                      onClick={() => setActiveSwatchIndex(i)}
                      className={`flex-1 flex flex-col items-center gap-1.5 p-2 rounded-[var(--radius-sm)] transition-all duration-300 ${
                        activeSwatchIndex === i
                          ? "bg-[var(--color-accent-white)] ring-1 ring-[var(--color-accent-primary)]/30"
                          : "hover:bg-[var(--color-accent-white)]/50"
                      }`}
                      aria-label={`Select ${s.name} swatch`}
                      aria-pressed={activeSwatchIndex === i}
                    >
                      <div
                        className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: s.hex }}
                      />
                      <span className="text-[10px] font-[family-name:var(--font-mono)] text-[var(--color-text-secondary)]">
                        {s.percentage}%
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected swatch info */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activePresetIndex}-${activeSwatchIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-5 pb-4"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                      {swatch.name}
                    </span>
                    <span className="text-xs font-[family-name:var(--font-mono)] text-[var(--color-text-secondary)] ml-auto">
                      {swatch.hex}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Recipe table */}
              <div className="border-t border-[var(--color-text-primary)]/8">
                <div className="px-5 py-3">
                  <p className="text-xs text-[var(--color-text-secondary)] font-semibold uppercase tracking-wider mb-3">
                    Glaze Recipe
                  </p>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${activePresetIndex}-${activeSwatchIndex}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{
                        duration: 0.25,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="space-y-0"
                    >
                      {swatch.recipe.map((ingredient) => (
                        <div
                          key={ingredient.name}
                          className="flex items-center justify-between py-1.5 border-b border-[var(--color-text-primary)]/4 last:border-b-0"
                        >
                          <span className="text-sm text-[var(--color-text-primary)]">
                            {ingredient.name}
                          </span>
                          <span className="text-sm font-[family-name:var(--font-mono)] text-[var(--color-text-secondary)] tabular-nums">
                            {ingredient.grams.toFixed(2)}g
                          </span>
                        </div>
                      ))}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
