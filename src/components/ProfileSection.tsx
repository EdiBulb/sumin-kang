import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function ProfileSection() {
  return (
    <section id="profile" aria-labelledby="profile-title" className="scroll-mt-4 bg-sand px-8 py-22">
      <div className="mx-auto flex max-w-6xl flex-wrap gap-14">
        <div className="min-w-0 flex-[1_1_300px]">
          <SectionHeading id="profile-title" eyebrow="Profile" title="프로필" />
          <p className="max-w-sm text-ink-soft">{profile.bio}</p>
        </div>
        <dl className="grid min-w-0 flex-[2_1_520px] grid-cols-1 gap-x-10 sm:grid-cols-2">
          {profile.facts.map((fact) => (
            <div key={fact.label} className="border-b border-line py-4.5">
              <dt className="text-[13px] text-muted">{fact.label}</dt>
              <dd className="mt-1 text-lg font-medium">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
