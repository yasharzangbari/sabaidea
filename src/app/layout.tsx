import type { Metadata } from "next";
import { IranSansX } from "@/theme/font";
import { Theme } from "@/constants/theme";
import "../theme/global.css";

export const metadata: Metadata = {
  title: "sabaidea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={IranSansX.className}>{children}</body>
    </html>
  );
}
