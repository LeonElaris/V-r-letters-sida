export const metadata = { title: "LeonLetters" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body style={{margin:0, background:"#000", color:"#fff", fontFamily:"system-ui, Arial"}}>
        {children}
      </body>
    </html>
  );
}
