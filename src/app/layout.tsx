import type {Metadata} from "next";
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
            <main>{children}</main>
         </body>
      </html>
   );
}
