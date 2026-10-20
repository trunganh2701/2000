"use client";

import { useRef, useState } from "react";
import { music } from "../content";

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);

  if (!music.src) return null;

  async function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) {
      audio.pause();
      setPlaying(false);
      return;
    }
    try {
      await audio.play();
      setPlaying(true);
      setError(false);
    } catch {
      setPlaying(false);
      setError(true);
    }
  }

  return (
    <div className="fixed right-3 bottom-3 z-30 flex max-w-[calc(100vw-1.5rem)] items-center gap-3 rounded-full border border-burgundy/20 bg-paper/95 p-2 pr-4 shadow-[0_12px_40px_rgb(62_11_23/0.22)] backdrop-blur-sm sm:right-6 sm:bottom-6">
      <audio ref={audioRef} src={music.src} preload="none" loop onEnded={() => setPlaying(false)} onError={() => { setPlaying(false); setError(true); }} />
      <button type="button" onClick={toggle} aria-label={playing ? "Tạm dừng nhạc" : "Phát nhạc"} aria-pressed={playing} className="grid size-11 shrink-0 place-items-center rounded-full bg-burgundy text-lg text-paper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-burgundy">
        {playing ? "Ⅱ" : "♫"}
      </button>
      <div className="min-w-0 max-w-44" aria-live="polite">
        <p className="truncate font-sans text-xs font-semibold text-burgundy">{music.title}</p>
        <p className="truncate font-serif text-sm text-ink-soft">{error ? "Không phát được nhạc — kiểm tra file" : playing ? "Đang phát ♡" : music.artist}</p>
      </div>
    </div>
  );
}
