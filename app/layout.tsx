import type { Metadata } from 'next';
import './styles/globals.css';
import { nunito_sans, poppins } from './utils/font';

export const metadata: Metadata = {
  title: 'The Ultimate NextJs Project Starter',
  description: 'The Ultimate NextJs Project Starter By Andrew James Okpainmo'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${nunito_sans} ${poppins}`}>
      <body className="nunito_sans">{children}</body>
    </html>
  );
}
