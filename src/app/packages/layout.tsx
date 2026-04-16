import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing Plans | Code Breck",
  description: "Flexible, high-performance plans for Web Design, SEO, Branding, and Marketing. Find the perfect fit for your needs.",
  keywords: ["Pricing", "Software House Packages", "Web Development Cost", "SEO Packages", "Marketing Plans"],
};

export default function PackagesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
