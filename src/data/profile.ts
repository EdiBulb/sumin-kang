/**
 * 사이트의 모든 콘텐츠는 이 파일 하나에서 관리합니다.
 * 동생분이 작품을 추가하거나 정보를 바꿀 때 이 파일만 수정하면 됩니다.
 * 대괄호([ ])로 된 값은 실제 정보로 바꿔야 하는 자리입니다.
 */

export type FilmCategory = "drama" | "film" | "stage" | "ad";

export interface Work {
  year: number | string;
  title: string;
  role: string;
  /** 드라마: 방송사, 영화: 감독, 연극: 극단·극장, 광고: 브랜드 */
  note?: string;
}

export interface Photo {
  /** public/ 기준 경로. 예: "/images/headshot.jpg". 없으면 placeholder가 보입니다. */
  src?: string;
  alt: string;
  caption?: string;
}

export interface Clip {
  title: string;
  /** YouTube 영상 ID (https://youtu.be/XXXX 의 XXXX 부분) */
  youtubeId?: string;
}

export interface ActorProfile {
  nameKo: string;
  nameEn: string;
  copyrightYear: number;
  tagline: string;
  bio: string;
  headshot: Photo;
  facts: { label: string; value: string }[];
  filmography: Record<FilmCategory, Work[]>;
  showreel: Clip;
  clips: Clip[];
  gallery: Photo[];
  contact: {
    agency: string;
    manager: string;
    phone: string;
    email: string;
    instagram?: string;
  };
}

export const categoryMeta: Record<FilmCategory, { label: string; noteLabel: string }> = {
  drama: { label: "드라마", noteLabel: "방송사" },
  film: { label: "영화", noteLabel: "감독" },
  stage: { label: "연극 · 뮤지컬", noteLabel: "극단 · 극장" },
  ad: { label: "광고 · MV", noteLabel: "브랜드" },
};

export const profile: ActorProfile = {
  nameKo: "강수민",
  nameEn: "Sumin Kang",
  copyrightYear: 2026,
  tagline: "[한 줄 소개 — 동생분이 직접 고른 문장이 들어갑니다]",
  bio: "[짧은 자기소개 2~3문장 — 연기를 시작한 계기, 어떤 배우가 되고 싶은지]",
  headshot: { alt: "배우 강수민 헤드샷" },
  facts: [
    { label: "생년", value: "[YYYY]" },
    { label: "신체", value: "[000cm · 00kg]" },
    { label: "소속사", value: "[소속사명]" },
    { label: "학력", value: "[학교 · 전공]" },
    { label: "특기", value: "[예: 무용, 노래, 사투리]" },
    { label: "언어", value: "[한국어 · 영어]" },
  ],
  filmography: {
    drama: [
      { year: "[연도]", title: "[작품명 1]", role: "[배역]", note: "[방송사]" },
      { year: "[연도]", title: "[작품명 2]", role: "[배역]", note: "[방송사]" },
    ],
    film: [{ year: "[연도]", title: "[작품명 1]", role: "[배역]", note: "[감독]" }],
    stage: [{ year: "[연도]", title: "[작품명 1]", role: "[배역]", note: "[극단 · 극장]" }],
    ad: [{ year: "[연도]", title: "[작품명 1]", role: "[배역]", note: "[브랜드]" }],
  },
  showreel: { title: "강수민 쇼릴" },
  clips: [{ title: "[클립 제목 1]" }, { title: "[클립 제목 2]" }, { title: "[클립 제목 3]" }],
  gallery: [
    { alt: "프로필 사진", caption: "프로필 컷" },
    { alt: "일상 사진", caption: "일상 컷" },
    { alt: "작품 스틸컷", caption: "작품 스틸컷" },
    { alt: "무대 사진", caption: "무대 사진" },
  ],
  contact: {
    agency: "[소속사명]",
    manager: "[담당 매니저]",
    phone: "[010-0000-0000]",
    email: "[이메일 주소]",
    instagram: "[인스타그램 아이디]",
  },
};
