import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import Theme from "@/components/shared/Theme";
import UpcomingEvents from "@/components/shared/UpcomingEvents";
import WhyMatter from "@/components/shared/WhyMatter";
import { ThemeProvider } from "@/context/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-black`}>
        <ThemeProvider>
          <Navbar />
          {children}
          <UpcomingEvents />
          <WhyMatter />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
