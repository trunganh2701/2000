"use client";

import { useState } from "react";
import { secretLetter } from "../content";
import { SECTIONS } from "./sections";
import { Folio, Kicker, wrap } from "./ui";

const { id, page } = SECTIONS.secret;

export function SecretLetter() {
  const [opened, setOpened] = useState(false);

  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`${wrap} scroll-mt-6 py-28 lg:py-40`}>
      <Folio section={SECTIONS.secret.title} page={page} />
      <div className="reveal mx-auto max-w-4xl pt-14 text-center lg:pt-20">
        <Kicker>{secretLetter.kicker}</Kicker>
        <h2 id={`${id}-title`} className="mt-5 font-display text-5xl leading-tight sm:text-7xl">{secretLetter.title}</h2>
        <p className="mx-auto mt-6 max-w-2xl font-serif text-2xl leading-relaxed text-ink-soft italic">{secretLetter.intro}</p>
      </div>
      <div className="mx-auto mt-14 max-w-3xl rounded-sm bg-blush/35 p-4 sm:p-8">
        <div className="relative border border-dashed border-burgundy/35 bg-paper p-8 text-center shadow-[0_30px_60px_-35px_rgb(92_19_36/0.35)] sm:p-12">
          <span aria-hidden className="block font-display text-6xl text-burgundy">♡</span>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">{secretLetter.closedText}</p>
          <button
            type="button"
            aria-expanded={opened}
            aria-controls="secret-letter-content"
            onClick={() => setOpened((previous) => !previous)}
            className="mt-7 border border-burgundy bg-burgundy px-6 py-4 font-sans text-xs font-semibold uppercase tracking-[0.13em] text-paper transition-colors hover:bg-burgundy-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy"
          >
            {opened ? secretLetter.closeButton : secretLetter.openButton}
          </button>
        </div>
        {opened && (
          <article id="secret-letter-content" className="fade-in mt-4 border border-ink/10 bg-paper px-6 py-9 shadow-[0_18px_35px_-25px_rgb(92_19_36/0.4)] sm:px-12 sm:py-12" aria-live="polite">
            <h3 className="font-hand text-4xl text-burgundy sm:text-5xl">{secretLetter.greeting}</h3>
            {secretLetter.paragraphs.map((paragraph, index) => (
              <p key={index} className="mt-6 font-serif text-[1.4rem] leading-[1.6] text-ink">{paragraph}</p>
            ))}
            <p className="mt-8 -rotate-1 font-hand text-3xl text-burgundy sm:text-4xl">{secretLetter.postscript}</p>
          </article>
        )}
      </div>
    </section>
  );
}
