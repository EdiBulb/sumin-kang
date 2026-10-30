import { profile } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  const { agency, manager, phone, email, instagram } = profile.contact;

  const items = [
    { label: "소속사", value: `${agency} · ${manager}` },
    { label: "전화", value: phone, href: `tel:${phone.replace(/[^0-9+]/g, "")}` },
    { label: "이메일", value: email, href: `mailto:${email}` },
    ...(instagram
      ? [
          {
            label: "Instagram",
            value: `@${instagram}`,
            href: `https://www.instagram.com/${instagram}`,
            external: true,
          },
        ]
      : []),
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-4 bg-sand px-8 py-24">
      <div className="mx-auto flex max-w-6xl flex-wrap items-start gap-14">
        <div className="min-w-0 flex-[1_1_360px]">
          <SectionHeading id="contact-title" eyebrow="Contact" title="캐스팅 · 출연 문의" />
          <p className="max-w-md text-ink-soft">작품 제안과 오디션 문의는 소속사로 연락 부탁드립니다.</p>
        </div>
        <dl className="flex min-w-0 flex-[1_1_400px] flex-col gap-5 rounded-3xl bg-cream p-8">
          {items.map((item) => (
            <div key={item.label}>
              <dt className="text-[13px] text-muted">{item.label}</dt>
              <dd className="mt-0.5 text-lg font-medium">
                {"href" in item && item.href ? (
                  <a
                    href={item.href}
                    className="hover:text-accent"
                    {...("external" in item && item.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
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
