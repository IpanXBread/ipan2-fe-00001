import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";

import { Providers } from './providers'
import { fonts } from "./styles/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Irfan Imran - RFInfinite (FE)",
  description: "Front End Test for RFInfinite.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={fonts.rubik.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
