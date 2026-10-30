"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import { categoryMeta, profile, type FilmCategory } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

// 작품이 하나도 없는 분류는 탭에서 숨깁니다.
const categories = (Object.keys(categoryMeta) as FilmCategory[]).filter(
  (key) => profile.filmography[key].length > 0,
);

export function Filmography() {
  const [active, setActive] = useState<FilmCategory>(categories[0]);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  if (categories.length === 0) return null;

  const works = profile.filmography[active];
  const { noteLabel } = categoryMeta[active];

  // WAI-ARIA 탭 패턴: 좌우 화살표로 탭 이동
  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (step === 0) return;
    event.preventDefault();
    const next = (index + step + categories.length) % categories.length;
    setActive(categories[next]);
    tabRefs.current[next]?.focus();
  }

  return (
    <section
      id="filmography"
      aria-labelledby="filmography-title"
      className="mx-auto max-w-6xl scroll-mt-4 px-8 py-24"
    >
      <SectionHeading id="filmography-title" eyebrow="Filmography" title="필모그래피" />

      <div role="tablist" aria-label="작품 분류" className="mb-7 flex flex-wrap gap-2.5">
        {categories.map((key, index) => {
          const selected = key === active;
          return (
            <button
              key={key}
              ref={(el) => {
                tabRefs.current[index] = el;
              }}
              type="button"
              role="tab"
              id={`${baseId}-tab-${key}`}
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(key)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`min-h-11 cursor-pointer rounded-full border-[1.5px] px-5.5 text-[15px] transition-colors ${
                selected
                  ? "border-accent bg-accent text-white"
                  : "border-line hover:border-ink"
              }`}
            >
              {categoryMeta[key].label}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`${baseId}-panel`}
        aria-labelledby={`${baseId}-tab-${active}`}
        className="overflow-x-auto"
      >
        <table className="w-full min-w-[560px] border-collapse text-left">
          <thead>
            <tr className="border-b-[1.5px] border-ink text-[13px] text-muted">
              <th scope="col" className="w-[100px] pb-3 font-normal">연도</th>
              <th scope="col" className="pb-3 font-normal">작품</th>
              <th scope="col" className="pb-3 font-normal">배역</th>
              <th scope="col" className="pb-3 font-normal">{noteLabel}</th>
            </tr>
          </thead>
          <tbody>
            {works.map((work) => (
              <tr key={`${work.year}-${work.title}`} className="border-b border-oat align-baseline">
                <td className="py-5.5 pr-6 text-muted">{work.year}</td>
                <td className="py-5.5 pr-6 font-serif text-xl font-bold">{work.title}</td>
                <td className="py-5.5 pr-6">{work.role}</td>
                <td className="py-5.5 text-muted">{work.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
