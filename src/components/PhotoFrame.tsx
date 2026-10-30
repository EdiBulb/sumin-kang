import Image from "next/image";
import type { Photo } from "@/data/profile";

interface PhotoFrameProps {
  photo: Photo;
  /** Tailwind 클래스로 비율·모서리 지정 */
  className: string;
  sizes: string;
  priority?: boolean;
  placeholderLabel?: string;
}

/** 사진이 있으면 next/image로, 없으면 같은 크기의 placeholder를 보여줍니다. */
export function PhotoFrame({ photo, className, sizes, priority, placeholderLabel }: PhotoFrameProps) {
  return (
    <div className={`relative overflow-hidden bg-oat ${className}`}>
      {photo.src ? (
        <Image
          // basePath는 next/image src에 자동으로 붙지 않아서 직접 붙여 줍니다.
          src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${photo.src}`}
          alt={photo.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={`${photo.alt} (준비 중)`}
          className="flex h-full items-center justify-center text-[15px] text-muted"
        >
          {placeholderLabel ?? photo.caption ?? "사진 준비 중"}
        </div>
      )}
    </div>
  );
}
