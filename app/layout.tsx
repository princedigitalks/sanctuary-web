import type {Metadata} from 'next';
import {Inter, Manrope} from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-headline',
});

export const metadata: Metadata = {
  title: 'Sanctuary Health',
  description: 'Refined digital check-in and patient onboarding.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-sans text-on-surface bg-background min-h-screen antialiased" suppressHydrationWarning>
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  );
}
