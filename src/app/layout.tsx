import ThemeRegistry from "@/components/ThemeRegistry";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
       
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
