import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ConfigProvider } from "antd";

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
  title: "Rent Calculator",
  description: "Calculate the rent split over different incomes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary dark:bg-primary`}
      >
        <ConfigProvider
          theme={{
            components: {
              Button: {
                algorithm: true, // Enable algorithm
              },
            },
            token: {
              colorText: "foreground",
            },
          }}
        >
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
