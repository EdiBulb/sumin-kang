import { profile } from "@/data/profile";

const navItems = [
  { href: "#profile", label: "프로필" },
  { href: "#filmography", label: "필모그래피" },
  { href: "#reel", label: "영상" },
  { href: "#gallery", label: "갤러리" },
  { href: "#contact", label: "연락처" },
];

export function SiteHeader() {
  return (
    <header className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-8 py-7">
      <a href="#top" className="font-serif text-[22px] font-bold">
        {profile.nameKo}
      </a>
      <nav aria-label="주요 메뉴">
        <ul className="flex flex-wrap gap-x-7 gap-y-1 text-[15px]">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="inline-block py-2.5 hover:text-accent">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
