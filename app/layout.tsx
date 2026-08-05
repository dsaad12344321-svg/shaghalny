import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "شغلنى",
    template: "%s | شغلنى",
  },
  description: "تعلم العمل على الإنترنت خطوة بخطوة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="ar" dir="rtl">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased">
        {children}

        <Script
          src="https://pl30689020.effectivecpmnetwork.com/c5/0c/3e/c50c3e6f2d075d4a31494a207d598f08.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}