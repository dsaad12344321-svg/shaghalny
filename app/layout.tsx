import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "شغلنى",
  description: "تعلم العمل على الإنترنت خطوة بخطوة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}