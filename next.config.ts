import type { NextConfig } from "next";

/**
 * GitHub Pages는 https://<아이디>.github.io/<레포이름>/ 아래에서 서비스되므로
 * 배포 워크플로가 NEXT_PUBLIC_BASE_PATH=/<레포이름> 을 넣어 줍니다.
 * 로컬 개발이나 커스텀 도메인에서는 비워 두면 됩니다.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export", // 정적 HTML로 out/ 폴더에 빌드 (GitHub Pages용)
  basePath,
  images: { unoptimized: true }, // 정적 export에는 이미지 최적화 서버가 없음
  // cacheComponents / partialPrefetching은 PPR(서버 필요)을 켜서
  // output: "export"와 함께 쓸 수 없음. 데이터 fetch가 없는 정적 사이트라 불필요.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
