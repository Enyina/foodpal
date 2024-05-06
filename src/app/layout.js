import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Foodpal",
  description: "Buy fool online",
  manifest: "./manifest.json",
  icons: ["/apple-touch-icon.png.png"],
  apple: ["/apple-touch-icon.png.png"],
  shortcut: ["/apple-touch-icon.png.png"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
