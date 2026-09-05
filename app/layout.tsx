import type { Metadata } from "next";
import "./globals.css";

// Using system font stacks (defined in tailwind.config.ts) rather than
// next/font/google — this keeps `npm run build` fully offline-capable and
// avoids a runtime dependency on fonts.googleapis.com. Swap in next/font or
// self-hosted font files any time; see tailwind.config.ts `fontFamily`.

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://kilofedi.com"),
  title: "Kilofedi — Design & engineering studio",
  description:
    "Kilofedi is a small studio building brand identity, product design, and web engineering for founders who need to move fast without looking rushed.",
  openGraph: {
    title: "Kilofedi — Design & engineering studio",
    description:
      "Brand identity, product design, and web engineering for founders who need to move fast without looking rushed.",
    url: "/",
    siteName: "Kilofedi",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-paper text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
