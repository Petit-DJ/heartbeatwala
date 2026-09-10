import { useCallback, useEffect, useRef, useState } from "react";
import {
  constellationLines,
  dustStars,
  openSlots,
  testimonials,
  type Testimonial,
} from "@/data/testimonials";

const byId = new Map(testimonials.map((t) => [t.id, t]));

/** ids directly connected to the given id */
function neighboursOf(id: string) {
  const set = new Set<string>();
  for (const [a, b] of constellationLines) {
    if (a === id) set.add(b);
    if (b === id) set.add(a);
  }
  return set;
}

// deterministic micro-dust for depth
const micro = Array.from({ length: 60 }, (_, i) => {
  const a = Math.sin(i * 12.9898) * 43758.5453;
  const b = Math.sin(i * 78.233) * 12345.6789;
  const fa = a - Math.floor(a);
  const fb = b - Math.floor(b);
  const round = (n: number) => Math.round(n * 1000) / 1000;
  return {
    x: round(fa * 100),
    y: round(fb * 100),
    r: round(0.35 + fa * 0.4),
    o: round(0.06 + fb * 0.12),
  };
});

const RADIUS: Record<Testimonial["magnitude"], number> = { 1: 3, 2: 4.5, 3: 6.5 };

export function Constellation() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<string>("ananya");
  const [dragging, setDragging] = useState(false);
  const drag = useRef({ startX: 0, startScroll: 0, moved: 0 });

  const active = byId.get(selected)!;
  const neighbours = neighboursOf(selected);

  // Centre the initially selected star once mounted.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const target =
      (active.x / 100) * el.scrollWidth - el.clientWidth / 2;
    el.scrollTo({ left: Math.max(0, target) });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const centreOn = useCallback((t: Testimonial) => {
    const el = scrollerRef.current;
    if (!el) return;
    const target = (t.x / 100) * el.scrollWidth - el.clientWidth / 2;
    el.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
  }, []);

  const nudge = (dir: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.6, behavior: "smooth" });
  };

  const onPointerDown = (e: React.PointerEvent) => {
    const el = scrollerRef.current;
    if (!el) return;
    drag.current = { startX: e.clientX, startScroll: el.scrollLeft, moved: 0 };
    if (e.pointerType === "touch") return; // native swipe handles touch
    setDragging(true);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    const el = scrollerRef.current;
    if (!el) return;
    const dx = e.clientX - drag.current.startX;
    drag.current.moved = Math.max(drag.current.moved, Math.abs(dx));
    el.scrollLeft = drag.current.startScroll - dx;
  };
  const endDrag = () => {
    if (!dragging) return;
    setDragging(false);
  };

  const select = (t: Testimonial) => {
    if (drag.current.moved > 6) return; // was a drag, not a click
    setSelected(t.id);
    centreOn(t);
  };

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className={`no-scrollbar overflow-x-auto overflow-y-hidden overscroll-x-contain ${
          dragging ? "cursor-grabbing" : "cursor-grab"
        }`}
        style={{ touchAction: "pan-x pan-y" }}
      >
        <div className="relative h-[420px] w-[1750px] select-none sm:h-[520px] sm:w-[2200px]">
          {/* lines */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {constellationLines.map(([a, b]) => {
              const A = byId.get(a)!;
              const B = byId.get(b)!;
              const lit = a === selected || b === selected;
              return (
                <line
                  key={`${a}-${b}`}
                  x1={A.x}
                  y1={A.y}
                  x2={B.x}
                  y2={B.y}
                  vectorEffect="non-scaling-stroke"
                  stroke="var(--on-warm)"
                  strokeWidth={lit ? 0.9 : 0.6}
                  strokeOpacity={lit ? 0.4 : 0.13}
                  className="transition-all duration-700"
                />
              );
            })}
          </svg>

          {/* faint dust */}
          {[...dustStars, ...micro].map((d, i) => (
            <span
              key={i}
              aria-hidden
              className="star absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-onwarm"
              style={{
                left: `${d.x}%`,
                top: `${d.y}%`,
                width: d.r * 2.4,
                height: d.r * 2.4,
                opacity: d.o,
                animationDelay: `${(i % 7) * 1.1}s`,
              }}
            />
          ))}

          {/* open slots reserved for future student voices */}
          {openSlots.map((s, i) => (
            <span
              key={`slot-${i}`}
              aria-hidden
              className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-onwarm/25"
              style={{ left: `${s.x}%`, top: `${s.y}%`, width: 14, height: 14 }}
            >
              <span
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-onwarm/30"
                style={{ width: 3, height: 3 }}
              />
            </span>
          ))}

          {/* student stars */}
          {testimonials.map((t, i) => {
            const isActive = t.id === selected;
            const isNear = neighbours.has(t.id);
            const r = RADIUS[t.magnitude] * (isActive ? 1.6 : 1);
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => select(t)}
                aria-label={`View testimonial from ${t.name}, ${t.instrument} student`}
                aria-pressed={isActive}
                className="group absolute -translate-x-1/2 -translate-y-1/2 rounded-full outline-none focus-visible:ring-1 focus-visible:ring-brass/70"
                style={{
                  left: `${t.x}%`,
                  top: `${t.y}%`,
                  padding: 14,
                }}
              >
                {/* halo */}
                <span
                  aria-hidden
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-700"
                  style={{
                    width: r * 7,
                    height: r * 7,
                    background:
                      "radial-gradient(closest-side, color-mix(in oklab, var(--brass) 55%, transparent), transparent)",
                    opacity: isActive ? 0.55 : isNear ? 0.24 : 0.12,
                  }}
                />
                {/* secondary ring on prominent stars */}
                {(t.magnitude === 3 || isActive) && (
                  <span
                    aria-hidden
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-700"
                    style={{
                      width: r * 3.4,
                      height: r * 3.4,
                      borderColor: "color-mix(in oklab, var(--on-warm) 40%, transparent)",
                      opacity: isActive ? 0.5 : 0.18,
                    }}
                  />
                )}
                {/* core */}
                <span
                  aria-hidden
                  className="star relative block rounded-full transition-all duration-500 group-hover:scale-125"
                  style={{
                    width: r,
                    height: r,
                    animationDelay: `${(i % 6) * 1.3}s`,
                    background: "var(--on-warm)",
                    opacity: isActive ? 1 : isNear ? 0.9 : 0.55 + t.magnitude * 0.1,
                    boxShadow: isActive
                      ? "0 0 18px color-mix(in oklab, var(--brass) 70%, transparent)"
                      : "none",
                  }}
                />
                <span
                  className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 whitespace-nowrap pt-1 text-[0.6rem] uppercase tracking-[0.18em] text-onwarm/0 transition-colors duration-300 group-hover:text-onwarm/60 group-focus-visible:text-onwarm/60"
                  style={isActive ? { color: "color-mix(in oklab, var(--on-warm) 75%, transparent)" } : undefined}
                >
                  {t.name}
                </span>
              </button>
            );
          })}

          {/* testimonial anchored to the selected star */}
          <div
            key={active.id}
            className="constellation-quote pointer-events-none absolute hidden w-[min(20rem,70vw)] sm:block"
            style={{
              left: `clamp(1.5rem, ${active.x}% + 2.6rem, calc(100% - 22rem))`,
              top: `clamp(1rem, ${active.y}% - 1.5rem, calc(100% - 12rem))`,
            }}
          >
            <div
              aria-hidden
              className="absolute -inset-x-10 -inset-y-8 -z-10"
              style={{
                background:
                  "radial-gradient(60% 60% at 35% 50%, color-mix(in oklab, var(--ink) 92%, transparent), transparent 75%)",
              }}
            />
            <div className="border-l border-onwarm/25 pl-5">
              <p className="font-display text-lg italic leading-snug text-onwarm/90 sm:text-xl">
                &ldquo;{active.quote}&rdquo;
              </p>
              <p className="mt-4 text-[0.65rem] uppercase tracking-[0.22em] text-onwarm/50">
                {active.name} · {active.instrument} · {active.duration}
                {active.branch ? ` · ${active.branch}` : ""}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* soft edges + controls */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-ink to-transparent" />

      {/* persistent reading panel — the selected student's review */}
      <figure
        key={`panel-${active.id}`}
        aria-live="polite"
        className="constellation-quote mx-auto mt-10 max-w-xl px-6 text-center sm:mt-12"
      >
        <blockquote className="font-display text-xl italic leading-snug text-onwarm/90 sm:text-2xl">
          &ldquo;{active.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-5 text-[0.65rem] uppercase tracking-[0.24em] text-onwarm/50">
          {active.name} · {active.instrument} · {active.duration}
          {active.branch ? ` · ${active.branch}` : ""}
        </figcaption>
      </figure>

      <div className="mt-8 flex items-center justify-between gap-6 px-1">
        <p className="text-[0.65rem] uppercase tracking-[0.22em] text-onwarm/35">
          Drag or swipe to wander the field
        </p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => nudge(-1)}
            aria-label="Pan left"
            className="rounded-full border border-onwarm/20 px-3 py-1.5 text-xs text-onwarm/55 transition-colors hover:border-onwarm/45 hover:text-onwarm"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            aria-label="Pan right"
            className="rounded-full border border-onwarm/20 px-3 py-1.5 text-xs text-onwarm/55 transition-colors hover:border-onwarm/45 hover:text-onwarm"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
