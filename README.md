# 배우 강수민 Sumin Kang — 프로필 사이트

Next.js 16 (App Router) · TypeScript · Tailwind CSS v4

## 시작하기

```bash
npm install
npm run dev   # http://localhost:3000
```

## 콘텐츠 수정

모든 내용은 **`src/data/profile.ts`** 한 파일에서 관리합니다.

- `[대괄호]` 값은 실제 정보로 교체하세요.
- 작품 추가: `filmography.drama` 같은 배열에 `{ year, title, role, note }`를 넣으면 됩니다. 비어 있는 분류는 탭에서 자동으로 숨겨집니다.
- 사진: `public/images/`에 파일을 넣고 `src: "/images/headshot.jpg"`처럼 지정하세요. `src`가 없으면 placeholder가 보입니다.
- 영상: YouTube 링크 `https://youtu.be/XXXX`의 `XXXX`를 `youtubeId`에 넣으세요.

## 구조

```
src/
  app/            layout(폰트·메타데이터), page(섹션 조립), globals.css(디자인 토큰)
  components/     섹션별 컴포넌트 — Filmography만 클라이언트 컴포넌트(탭)
  data/profile.ts 타입 정의 + 콘텐츠
```

## 배포

GitHub에 올린 뒤 Vercel에서 Import 하면 끝입니다. 커스텀 도메인(예: suminkang.com)은 Vercel 설정에서 연결합니다.
