// app/layout.tsx
import './globals.css';

export const metadata = {
  title: 'LEONLETTERS',
  description: 'Byggd med Next.js och kärlek 💌',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body style={{margin:0, padding:0}}>
        {children}
      </body>
    </html>
  );
}
