import { IranSansX } from "@/theme/font";
import "../theme/global.css";
import StyledComponentProviders from "@/providers/styledComponentProviders";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={IranSansX.className}>
        <StyledComponentProviders>{children} </StyledComponentProviders>
      </body>
    </html>
  );
}
