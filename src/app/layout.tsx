import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import "./globals.css";
import css from "./layout.module.css";

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
          <div className={css.background} />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
