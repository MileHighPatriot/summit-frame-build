"use client";

import { AnimatePresence, motion } from "motion/react";
import { useId, useState } from "react";

export type FaqItem = { question: string; answer: string };

export default function Faq({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <ul className="border-t border-ink/15">
      {items.map((item, index) => {
        const isOpen = open === index;
        const panelId = `${baseId}-panel-${index}`;
        const buttonId = `${baseId}-button-${index}`;
        return (
          <li key={item.question} className="border-b border-ink/15">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen(isOpen ? null : index)}
                className="group flex w-full items-center justify-between gap-8 py-7 text-left sm:py-9"
              >
                <span className="t-h3">{item.question}</span>
                <span
                  aria-hidden="true"
                  className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-500 ${
                    isOpen ? "border-ink bg-ink text-paper" : "border-ink/25 group-hover:border-ink"
                  }`}
                >
                  <span className="absolute h-px w-4 bg-current" />
                  <span
                    className={`absolute h-4 w-px bg-current transition-transform duration-500 ease-out-expo ${
                      isOpen ? "scale-y-0" : ""
                    }`}
                  />
                </span>
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="t-body max-w-3xl pb-9 text-stone">{item.answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
