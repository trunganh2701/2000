import type { Metadata } from "next";
import {
  Cormorant_Garamond,
  Grape_Nuts,
  Playfair_Display,
  Plus_Jakarta_Sans,
  Xanh_Mono,
} from "next/font/google";
import { issue } from "./content";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "vietnamese"],
  style: ["normal", "italic"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "vietnamese"],
  style: ["normal", "italic"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin", "vietnamese"],
});

const xanhMono = Xanh_Mono({
  variable: "--font-xanh",
  subsets: ["latin", "vietnamese"],
  weight: "400",
});

const grapeNuts = Grape_Nuts({
  variable: "--font-grape",
  subsets: ["latin", "vietnamese"],
  weight: "400",
});

export const metadata: Metadata = {
  title: `${issue.masthead} — Six Months Anniversary Issue · ${issue.date}`,
  description: `Tạp chí kỷ niệm sáu tháng yêu nhau, dành riêng cho ${issue.herName} và ${issue.yourName}.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="vi"
      data-scroll-behavior="smooth"
      data-gate="closed"
      className={`${playfair.variable} ${cormorant.variable} ${jakarta.variable} ${xanhMono.variable} ${grapeNuts.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
