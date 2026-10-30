import { profile } from "@/data/profile";

export function SiteFooter() {
  return (
    <footer className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-8 py-8 text-[13px] text-muted">
      <span>
        © {profile.copyrightYear} {profile.nameKo} {profile.nameEn}
      </span>
      <a href="#top" className="py-1 hover:text-accent">
        맨 위로
      </a>
    </footer>
  );
}
