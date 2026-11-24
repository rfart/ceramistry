import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ceramistry — Turn Colors Into Kiln-Ready Glaze Recipes",
  description:
    "Take the guesswork out of ceramic glazing. Match real-world colors with your camera, generate measured recipes, and preview fired results before you open the kiln.",
  alternates: { canonical: "/" },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Ceramistry — Turn Colors Into Kiln-Ready Glaze Recipes",
    description:
      "Take the guesswork out of ceramic glazing. Match real-world colors with your camera, generate measured recipes, and preview fired results before you open the kiln.",
    url: "/",
    type: "website",
    locale: "en_US",
    siteName: "Ceramistry",
    images: [{ url: "/images/app-screenshot.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ceramistry — Turn Colors Into Kiln-Ready Glaze Recipes",
    description:
      "Take the guesswork out of ceramic glazing. Match real-world colors with your camera, generate measured recipes, and preview fired results before you open the kiln.",
    images: ["/images/app-screenshot.jpg"],
  },
  keywords: [
    "ceramic glaze",
    "pottery",
    "glaze recipe",
    "color matching",
    "ceramic art",
    "kiln",
    "glaze chemistry",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
