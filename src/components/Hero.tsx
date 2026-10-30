import { profile } from "@/data/profile";
import { PhotoFrame } from "./PhotoFrame";
import { PlayIcon } from "./icons";

export function Hero() {
  return (
    <section
      id="top"
      aria-label="소개"
      className="mx-auto flex max-w-6xl flex-wrap items-center gap-14 px-8 pt-10 pb-24"
    >
      <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-5">
        <p className="text-sm tracking-[0.2em] text-muted">ACTOR · 배우</p>
        <h1 className="font-serif text-[clamp(64px,8vw,112px)] leading-[1.05] font-bold tracking-tight">
          {profile.nameKo}
        </h1>
        <p className="font-latin text-[44px] leading-none text-accent italic" lang="en">
          {profile.nameEn}
        </p>
        <p className="mt-2 max-w-md font-serif text-xl leading-loose">{profile.tagline}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href="#reel"
            className="inline-flex min-h-12 items-center gap-2.5 rounded-full bg-accent px-7 font-medium text-white hover:opacity-90"
          >
            <PlayIcon size={16} />
            쇼릴 보기
          </a>
          <a
            href="#contact"
            className="inline-flex min-h-12 items-center rounded-full border-[1.5px] border-ink px-7 font-medium hover:bg-ink hover:text-cream"
          >
            캐스팅 문의
          </a>
        </div>
      </div>
      <div className="w-full min-w-0 max-w-[480px] flex-[1_1_360px]">
        <PhotoFrame
          photo={profile.headshot}
          className="aspect-[4/5] rounded-t-[240px] rounded-b-3xl"
          sizes="(max-width: 768px) 100vw, 480px"
          placeholderLabel="대표 헤드샷 (세로 4:5)"
          priority
        />
      </div>
    </section>
  );
}
