"use client";

import { useState } from "react";
import { coupons, issue } from "../content";
import { SECTIONS } from "./sections";
import { Folio, Kicker, wrap } from "./ui";

const { id, page } = SECTIONS.coupons;

export function LoveCoupons() {
  const [selected, setSelected] = useState<number | null>(null);
  const [copyState, setCopyState] = useState<"idle" | "copied" | "manual">("idle");
  const gift = selected === null ? null : coupons.items[selected];
  const message = gift
    ? `${issue.herName} đã chọn ${gift.subtitle}: ${gift.title}. ${gift.description} — ${issue.masthead} ${issue.date} ♡`
    : "";

  async function copy() {
    if (!message) return;
    try {
      await navigator.clipboard.writeText(message);
      setCopyState("copied");
    } catch {
      setCopyState("manual");
    }
  }

  return (
    <section id={id} aria-labelledby={`${id}-title`} className="bg-paper-deep py-24 lg:py-36">
      <div className={wrap}>
        <Folio section={SECTIONS.coupons.title} page={page} />
        <div className="reveal pt-12 text-center lg:pt-20">
          <Kicker>{coupons.kicker}</Kicker>
          <h2 id={`${id}-title`} className="mt-5 font-display text-5xl leading-tight sm:text-7xl">{coupons.title}</h2>
          <p className="mx-auto mt-5 max-w-2xl font-serif text-xl leading-relaxed text-ink-soft italic sm:text-2xl">{coupons.intro}</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16">
          {coupons.items.map((item, index) => (
            <article key={index} className={`relative flex min-h-80 flex-col items-center border-2 border-dashed p-7 text-center transition-colors ${selected === index ? "border-burgundy bg-blush/30" : "border-burgundy/30 bg-paper"}`}>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-burgundy">{item.subtitle}</span>
              <span className="mt-5 text-5xl" aria-hidden>{item.emoji}</span>
              <h3 className="mt-5 font-display text-3xl sm:text-4xl">{item.title}</h3>
              <p className="mt-3 flex-1 font-serif text-xl leading-relaxed text-ink-soft">{item.description}</p>
              <button
                type="button"
                aria-pressed={selected === index}
                onClick={() => { setSelected(index); setCopyState("idle"); }}
                className={`mt-7 w-full px-4 py-3 font-sans text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors ${selected === index ? "bg-burgundy-deep text-paper" : "bg-burgundy text-paper hover:bg-burgundy-deep"}`}
              >
                {selected === index ? "Đã chọn ♡" : coupons.selectLabel}
              </button>
            </article>
          ))}
        </div>
        {gift && (
          <div className="fade-in mx-auto mt-9 max-w-2xl border-t border-ink/20 pt-9 text-center" aria-live="polite">
            <p className="font-hand text-3xl text-burgundy">{coupons.selectedIntro}: {gift.title}!</p>
            <p className="mt-3 font-serif text-lg text-ink-soft">Lựa chọn mới chỉ được đánh dấu trên trang. Hãy gửi phiếu cho anh để chốt lịch nhé.</p>
            <button type="button" onClick={copy} className="mt-5 border border-burgundy px-6 py-3 font-sans text-xs font-semibold uppercase tracking-[0.12em] text-burgundy hover:bg-burgundy hover:text-paper">
              {coupons.copyLabel}
            </button>
            {copyState === "copied" && <p className="mt-3 font-serif text-lg text-burgundy">{coupons.copySuccess}</p>}
            {copyState === "manual" && (
              <div className="mt-4">
                <p className="font-serif text-lg text-burgundy">{coupons.copyFailed}</p>
                <p className="mt-3 border border-ink/20 p-4 text-left font-serif text-lg select-all">{message}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
