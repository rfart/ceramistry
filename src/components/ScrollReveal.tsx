"use client";

import { motion, useReducedMotion, useInView } from "framer-motion";
import { type ReactNode, useRef, useState, useEffect } from "react";

export default function ScrollReveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });
  const [fallback, setFallback] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFallback(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const visible = isInView || fallback;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.6,
        delay: visible && !fallback ? delay : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
