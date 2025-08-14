export const metadata = { title: "Leon Letters" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body style={{margin:0,fontFamily:"system-ui, Arial"}}>{children}</body>
    </html>
  );
}
