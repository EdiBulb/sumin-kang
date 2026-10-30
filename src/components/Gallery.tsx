import { profile } from "@/data/profile";
import { PhotoFrame } from "./PhotoFrame";
import { SectionHeading } from "./SectionHeading";

export function Gallery() {
  if (profile.gallery.length === 0) return null;

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="mx-auto max-w-6xl scroll-mt-4 px-8 py-24"
    >
      <SectionHeading id="gallery-title" eyebrow="Gallery" title="갤러리" />
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-4">
        {profile.gallery.map((photo, index) => (
          <li key={`${photo.alt}-${index}`}>
            <PhotoFrame
              photo={photo}
              className="aspect-[3/4] rounded-2xl"
              sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
