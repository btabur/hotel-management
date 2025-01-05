import type { Metadata } from "next";
import { Poppins, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";

const geistSans = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight:["400","500","700","900"],
  style:["italic","normal"],
  
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hotel Management App",
  description: "Dicover the best hotel rooms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistSans.className} ${geistMono.variable} antialiased`}
      >
      <ThemeProvider>

      <main className="font-normal">
       
        <Header/>
        {children}
       
        <Footer/>
      </main>
      </ThemeProvider>
      </body>
    </html>
  );
}
