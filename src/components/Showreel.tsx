import { profile, type Clip } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { PlayIcon } from "./icons";

function VideoEmbed({ clip, large }: { clip: Clip; large?: boolean }) {
  if (clip.youtubeId) {
    return (
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${clip.youtubeId}`}
        title={clip.title}
        loading="lazy"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={`aspect-video w-full ${large ? "rounded-[20px]" : "rounded-2xl"}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`${clip.title} (영상 준비 중)`}
      className={`flex aspect-video flex-col items-center justify-center gap-4 bg-ink-soft text-oat ${
        large ? "rounded-[20px]" : "rounded-2xl"
      }`}
    >
      {large && (
        <>
          <span className="flex size-20 items-center justify-center rounded-full bg-cream text-ink">
            <PlayIcon size={28} />
          </span>
          <span className="text-[15px]">쇼릴 영상 준비 중</span>
        </>
      )}
    </div>
  );
}

export function Showreel() {
  return (
    <section id="reel" aria-labelledby="reel-title" className="scroll-mt-4 bg-ink px-8 py-24 text-cream">
      <div className="mx-auto max-w-6xl">
        <SectionHeading id="reel-title" eyebrow="Showreel" title="연기 영상" tone="dark" />
        <VideoEmbed clip={profile.showreel} large />
        {profile.clips.length > 0 && (
          <ul className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
            {profile.clips.map((clip) => (
              <li key={clip.title} className="flex flex-col gap-2.5">
                <VideoEmbed clip={clip} />
                <span className="text-[15px]">{clip.title}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
