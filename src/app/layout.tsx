import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Drivn — Engineered for the Long Game",
  description:
    "The intersection of elite performance and ergonomic luxury. Premium gaming chairs designed for professionals who refuse to compromise.",
  keywords: [
    "gaming chair",
    "ergonomic chair",
    "premium gaming",
    "esports chair",
    "Drivn",
  ],
  openGraph: {
    title: "Drivn — Engineered for the Long Game",
    description:
      "The intersection of elite performance and ergonomic luxury.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
