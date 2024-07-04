import type {Metadata} from "next";

import {Navbar} from "./components/common/navbar/navbar";
import {Footer} from "./components/common/footer/footer";
import {Roboto} from "next/font/google";

import "./globals.css";

const roboto = Roboto({
   subsets: ["latin"],
   weight: "400",
});

export const metadata: Metadata = {
   title: "DevFest",
   description: "Evento DevFest Belo Horizonte 2024",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body className={roboto.className}>
            <Navbar />
            <main>{children}</main>
            <Footer />
         </body>
      </html>
   );
}
