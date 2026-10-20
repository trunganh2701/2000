import { timeline } from "../content";
import { SECTIONS } from "./sections";
import { Folio, Kicker, wrap } from "./ui";

const { id, page } = SECTIONS.timeline;

export function Timeline() {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="mt-28 bg-blush/30 py-16 lg:mt-40 lg:py-24">
      <div className={wrap}>
        <Folio section={SECTIONS.timeline.title} page={page} />
        <div className="reveal grid gap-8 pt-12 lg:grid-cols-12 lg:pt-20">
          <div className="lg:col-span-7">
            <Kicker>{timeline.kicker}</Kicker>
            <h2 id={`${id}-title`} className="mt-5 font-display text-5xl leading-tight sm:text-7xl">
              {timeline.title} <span className="text-burgundy italic">♡</span>
            </h2>
          </div>
          <p className="max-w-lg self-end font-serif text-xl leading-relaxed text-ink-soft italic lg:col-span-5">
            {timeline.intro}
          </p>
        </div>
        <ol className="relative mt-14 grid gap-6 border-l-2 border-burgundy/25 pl-7 sm:pl-10 lg:mt-20 lg:gap-8">
          {timeline.items.map((moment, index) => (
            <li key={index} className="reveal relative max-w-4xl rounded-sm border border-burgundy/10 bg-paper px-6 py-7 shadow-[0_16px_40px_-28px_rgb(62_11_23/0.25)] sm:px-10">
              <span aria-hidden className="absolute top-10 -left-[2.45rem] grid size-9 place-items-center rounded-full border border-burgundy/40 bg-paper text-xl text-burgundy sm:-left-[3.3rem]">
                {moment.icon}
              </span>
              <p className="font-mono text-[11px] uppercase tracking-[0.19em] text-burgundy">{moment.when}</p>
              <h3 className="mt-3 font-display text-3xl leading-snug sm:text-4xl">{moment.title}</h3>
              <p className="mt-3 max-w-2xl font-serif text-xl leading-relaxed text-ink-soft">{moment.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 pl-7 font-hand text-3xl text-burgundy sm:pl-10">Còn tiếp… và còn tiếp nữa ♡</p>
      </div>
    </section>
  );
}
