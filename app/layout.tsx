import type {Metadata} from 'next';
import { Manrope, Inter } from 'next/font/google';
import './globals.css';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'ClinicFlow | Patient Check-in',
  description: 'Self-service kiosk for quick patient check-in',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body suppressHydrationWarning className="antialiased min-h-screen bg-[#fcf8ff] text-[#1b1b24] font-inter">
        {children}
      </body>
    </html>
  );
}
