import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SceneProvider } from "@/context/SceneContext";
import Navigation from "@/components/ui/Navigation";
import Scene from "@/components/canvas/Scene";
import GlobalLoader from "@/components/ui/GlobalLoader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code Breck | Engineering the Future",
  description: "A cinematic, ultra-modern 3D website experience for a global software house.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white antialiased selection:bg-electric selection:text-black`}>
        <GlobalLoader />
        <SceneProvider>
          <Scene />
          <Navigation />
          {children}
        </SceneProvider>
      </body>
    </html>
  );
}
