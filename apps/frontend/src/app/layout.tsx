import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CampusConnect',
  description: 'Portal de suporte acadêmico',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
