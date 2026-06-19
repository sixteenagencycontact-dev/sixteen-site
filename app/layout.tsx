import type { Metadata } from "next";
import { SiteNav } from "@/components/site-nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "SIXTEEN",
  description: "Editorial digital studio for identities, campaigns, and AI content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <SiteNav />
        <main>{children}</main>
      </body>
    </html>
  );
}
