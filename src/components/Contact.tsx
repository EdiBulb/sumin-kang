import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

interface ContactItem {
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}

/** 값이 있는 항목만 목록으로 만듭니다. 비어 있는 필드는 화면에 나오지 않습니다. */
function buildContactItems(): ContactItem[] {
  const { agency, phone, email, instagram, youtube, blog } = profile.contact;
  const items: (ContactItem | null)[] = [
    agency
      ? {
          label: "소속사",
          value: agency.manager ? `${agency.name} · ${agency.manager}` : agency.name,
        }
      : null,
    { label: "전화", value: phone, href: `tel:${phone.replace(/[^0-9+]/g, "")}` },
    email ? { label: "이메일", value: email, href: `mailto:${email}` } : null,
    instagram
      ? {
          label: "Instagram",
          value: `@${instagram}`,
          href: `https://www.instagram.com/${instagram}`,
          external: true,
        }
      : null,
    youtube ? { label: "YouTube", value: youtube.name, href: youtube.url, external: true } : null,
    blog ? { label: "Blog", value: blog.name, href: blog.url, external: true } : null,
  ];
  return items.filter((item): item is ContactItem => item !== null);
}

export function Contact() {
  const items = buildContactItems();
  const intro = profile.contact.agency
    ? "작품 제안과 오디션 문의는 소속사로 연락 부탁드립니다."
    : "현재 소속사 없이 활동하고 있습니다. 작품 제안과 오디션 문의는 아래 연락처로 편하게 연락 주세요.";

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-4 bg-sand px-8 py-24">
      <div className="mx-auto flex max-w-6xl flex-wrap items-start gap-14">
        <div className="min-w-0 flex-[1_1_360px]">
          <SectionHeading id="contact-title" eyebrow="Contact" title="캐스팅 · 출연 문의" />
          <p className="max-w-md text-ink-soft">{intro}</p>
        </div>
        <dl className="flex min-w-0 flex-[1_1_400px] flex-col gap-5 rounded-3xl bg-cream p-8">
          {items.map((item) => (
            <div key={item.label}>
              <dt className="text-[13px] text-muted">{item.label}</dt>
              <dd className="mt-0.5 text-lg font-medium">
                {item.href ? (
                  <a
                    href={item.href}
                    className="hover:text-accent"
                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {item.value}
                  </a>
                ) : (
                  item.value
                )}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
