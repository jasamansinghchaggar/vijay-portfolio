import type { Metadata } from "next";
import "./globals.css";
import { Motion } from "./motion";

export const metadata: Metadata = {
  title: "Viz — Video editor",
  description: "Viz shapes raw footage into content worth watching.",
  openGraph: {
    title: "Viz — Video editor",
    description: "Video editing for creators, brands and stories with something to say.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><Motion />{children}</body>
    </html>
  );
}
