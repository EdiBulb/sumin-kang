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
  /** 프레임 비율과 사진 비율이 다를 때 보여줄 위치 (CSS object-position). 예: "50% 30%" */
  position?: string;
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
    /** 소속사가 생기면 { name, manager } 를 넣으세요. 없으면 연락처에서 줄이 숨겨지고 안내 문구가 바뀝니다. */
    agency?: { name: string; manager?: string };
    phone: string;
    email?: string;
    instagram?: string;
    youtube?: { name: string; url: string };
    /** 블로그 주소. 예: { name: "수만두의 일기", url: "https://blog.naver.com/..." } */
    blog?: { name: string; url: string };
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
  tagline: "정직하게 살자",
  bio: "꾸미지 않은 얼굴로 카메라 앞에 서고 싶습니다. ‘정직하게 살자’는 말처럼, 인물의 감정을 과장하지도 숨기지도 않고 있는 그대로 전하는 배우가 되려 합니다. 숨 한 번, 눈빛 하나에도 진심이 담기도록 오늘도 연습합니다.",
  headshot: {
    src: "/images/headshot.jpg",
    alt: "흰 셔츠와 청바지 차림으로 앉아 미소 짓는 배우 강수민",
    position: "50% 30%",
  },
  facts: [
    { label: "생년", value: "1999년" },
    { label: "신체", value: "164cm · 59kg" },
    { label: "소속사", value: "미소속" },
    { label: "학력", value: "[학교 · 전공]" },
    { label: "특기", value: "뮤지컬, 노래" },
    { label: "언어", value: "한국어" },
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
  showreel: { title: "강수민 자기소개 영상", youtubeId: "RwTctoXdgxk" },
  // 연기 클립이 생기면 { title, youtubeId } 형태로 추가하세요. 비어 있으면 줄이 숨겨집니다.
  clips: [],
  gallery: [
    { src: "/images/gallery-1.jpg", alt: "검은 터틀넥 차림으로 정면을 응시하는 배우 강수민 클로즈업", position: "50% 30%" },
    { src: "/images/gallery-2.jpg", alt: "검은 터틀넥과 청바지 차림으로 앉아 있는 배우 강수민", position: "50% 25%" },
    { src: "/images/gallery-3.jpg", alt: "흰 셔츠 차림으로 미소 짓는 배우 강수민", position: "50% 25%" },
    { src: "/images/gallery-4.jpg", alt: "흰 셔츠와 청바지 차림으로 무릎을 감싸고 앉은 배우 강수민", position: "50% 40%" },
  ],
  contact: {
    phone: "010-4764-9815",
    instagram: "kang_sumandu",
    youtube: { name: "숨의 가장자리", url: "https://www.youtube.com/@hi-sumandu_kang" },
  },
};
