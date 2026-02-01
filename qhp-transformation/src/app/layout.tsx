import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "QHP AI Transformation",
  description: "AI Transformation Initiative for QHP Capital Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
        style={{ fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}
      >
        <div className="min-h-screen bg-[#0d0d0d]">
          <main className="overflow-auto p-6 md:p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
