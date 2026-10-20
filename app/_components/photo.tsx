import Image from "next/image";
import type { Photo as PhotoData } from "../content";

type Props = {
  photo: PhotoData;
  sizes: string;
  label: string;
  hint: string;
  eager?: boolean;
};

export function Photo({ photo, sizes, label, hint, eager }: Props) {
  if (photo.src) {
    return (
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        quality={90}
        loading={eager ? "eager" : "lazy"}
        fetchPriority={eager ? "high" : "auto"}
        className="object-cover"
        style={{ objectPosition: photo.position ?? "50% 50%" }}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`Chỗ trống cho ảnh: ${photo.alt}`}
      className="fpo absolute inset-0 flex items-center justify-center overflow-hidden"
    >
      <div aria-hidden className="absolute -left-[15%] top-[8%] rotate-[-18deg] font-display text-[12rem] italic leading-none text-burgundy/10 sm:text-[17rem]">love</div>
      <div aria-hidden className="absolute right-[5%] top-[10%] font-display text-7xl text-burgundy/20">♡</div>
      <div aria-hidden className="absolute bottom-[13%] left-[5%] font-display text-7xl text-burgundy/20">✧</div>
      <div className="absolute inset-4 border border-burgundy/20 sm:inset-6" />
      <div className="relative mx-8 max-w-sm border border-white/80 bg-paper/85 px-5 py-9 text-center shadow-[0_18px_65px_-30px_rgb(107_35_65/0.5)] backdrop-blur-sm sm:px-8 sm:py-12">
        <p className="font-display text-6xl italic leading-none text-burgundy">♡</p>
        <p className="mt-4 font-display text-3xl leading-tight text-burgundy sm:text-4xl">Chỗ dành cho kỷ niệm</p>
        <p className="mt-3 font-serif text-lg italic text-ink-soft">{label}</p>
        <p className="mt-5 break-all font-mono text-[10px] tracking-[0.08em] text-burgundy/80">public/photos/{hint}</p>
      </div>
    </div>
  );
}
