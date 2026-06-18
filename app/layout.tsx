import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "이세경T | 지구과학 · 통합과학",
  description: "서울대학교 졸업, 명쾌한 유형 정리와 높은 적중률의 이세경T 지구과학·통합과학 강의",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
