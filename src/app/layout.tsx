import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Viking AI — Next-Gen Artificial Intelligence",
  description:
    "Viking AI — Building production-grade AI systems, autonomous agents, LLM applications, and computer vision solutions. Portfolio of Unit-7.",
  keywords: ["AI", "Machine Learning", "LLM", "Neural Networks", "Next.js", "AI Engineer", "Portfolio"],
  openGraph: {
    title: "Viking AI — Next-Gen Artificial Intelligence",
    description:
      "Portfolio of Viking AI Unit-7 — AI engineer specializing in LLMs, autonomous agents, and full-stack AI platforms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Share+Tech+Mono&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020409] text-gray-200 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
