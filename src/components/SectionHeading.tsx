interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  id: string;
  tone?: "light" | "dark";
}

export function SectionHeading({ eyebrow, title, id, tone = "light" }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <p
        className={`font-latin text-[28px] italic ${tone === "dark" ? "text-blush" : "text-accent"}`}
        aria-hidden="true"
      >
        {eyebrow}
      </p>
      <h2 id={id} className="font-serif text-4xl leading-snug">
        {title}
      </h2>
    </div>
  );
}
