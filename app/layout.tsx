export const metadata = { title: "Leon Letters" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body style={{ margin:0, background:"#000", color:"#fff", fontFamily:"ui-sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
