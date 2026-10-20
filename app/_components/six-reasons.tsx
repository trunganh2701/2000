"use client";

import { useState } from "react";
import { sixReasons } from "../content";
import { SECTIONS } from "./sections";
import { Folio, Kicker, wrap } from "./ui";

const { id, page } = SECTIONS.reasons;

export function SixReasons() {
  const [opened, setOpened] = useState<number[]>([]);

  function toggle(index: number) {
    setOpened((current) => current.includes(index)
      ? current.filter((item) => item !== index)
      : [...current, index]);
  }

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="relative overflow-hidden bg-[#f5d4e0] py-24 lg:py-36">
      <div aria-hidden className="pointer-events-none absolute -left-16 top-0 font-display text-[16rem] leading-none text-white/25 lg:text-[32rem]">6</div>
      <div className={`${wrap} relative`}>
        <Folio section={SECTIONS.reasons.title} page={page} />
        <div className="pt-12 text-center lg:pt-20">
          <Kicker>{sixReasons.kicker}</Kicker>
          <h2 id={`${id}-title`} className="mx-auto mt-4 max-w-4xl font-display text-5xl leading-[1.08] sm:text-7xl">
            {sixReasons.title} <span className="italic text-burgundy">♡</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-serif text-xl leading-relaxed text-ink-soft italic sm:text-2xl">{sixReasons.intro}</p>
          <p className="mt-4 font-mono text-xs tracking-[0.16em] text-burgundy">{sixReasons.hint}</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {sixReasons.items.map((item, index) => {
            const isOpen = opened.includes(index);
            return (
              <button
                type="button"
                key={item.front}
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className={`group relative flex min-h-64 flex-col items-center justify-center border p-7 text-center shadow-[0_12px_40px_-28px_rgb(107_35_65/0.35)] transition-all duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy ${isOpen ? "border-burgundy bg-burgundy text-paper" : "border-burgundy/20 bg-paper/85 text-ink"}`}
              >
                <span className={`absolute left-5 top-5 font-mono text-xs tracking-[0.2em] ${isOpen ? "text-paper/75" : "text-burgundy"}`}>{String(index + 1).padStart(2, "0")} / 06</span>
                <span aria-hidden className="text-5xl">{item.emoji}</span>
                <span className="mt-5 font-display text-3xl sm:text-4xl">{isOpen ? item.title : item.front}</span>
                <span className={`mt-3 max-w-sm font-serif text-lg leading-relaxed ${isOpen ? "text-paper/95" : "text-ink-soft"}`}>
                  {isOpen ? item.text : "Chạm để biết điều anh thích ở em"}
                </span>
                <span className={`mt-6 font-mono text-[10px] uppercase tracking-widest ${isOpen ? "text-paper/70" : "text-burgundy"}`}>
                  {isOpen ? "Chạm lần nữa để đóng" : "Mở tấm thẻ ↗"}
                </span>
              </button>
            );
          })}
        </div>
        <p className="mt-10 text-center font-hand text-3xl text-burgundy">Hết 6 điều? Chưa đâu, chỉ là hết chỗ trên trang thôi!</p>
      </div>
    </section>
  );
}
