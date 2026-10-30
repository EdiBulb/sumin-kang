import type { Metadata } from "next";
import { Cormorant_Garamond, Gowun_Batang, Noto_Sans_KR } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const gowunBatang = Gowun_Batang({
  variable: "--font-gowun-batang",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: "500",
  style: "italic",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `배우 ${profile.nameKo} ${profile.nameEn}`,
  description: `배우 ${profile.nameKo}의 프로필, 필모그래피, 쇼릴`,
  openGraph: {
    title: `배우 ${profile.nameKo} ${profile.nameEn}`,
    description: `배우 ${profile.nameKo}의 프로필, 필모그래피, 쇼릴`,
    locale: "ko_KR",
    type: "profile",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ko"
      className={`${notoSansKr.variable} ${gowunBatang.variable} ${cormorant.variable} antialiased`}
    >
      <body className="font-sans leading-relaxed">{children}</body>
    </html>
  );
}
