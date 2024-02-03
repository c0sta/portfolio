import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gabriel Costa M. | Frontend Dev",
  description: "Gabriel Costa M. | Frontend Dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body
        className={`text-slate-800 dark:bg-blackBackground dark:text-slate-50 ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
