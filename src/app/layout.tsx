import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { BackGrid } from "./_components";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vinzent Zeband - Portfolio",
  description:
    "Fullstack Software Developer, specializing in Java, TypeScript and React",
};

export const viewport: Viewport = {
  themeColor: "black",
  colorScheme: "dark",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const messages = await getMessages();
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <NextIntlClientProvider messages={messages}>
          <BackGrid />

          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
