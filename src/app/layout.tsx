import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Poppins } from 'next/font/google';
import ThemeRegistry from '@/theme/ThemeRegistry';

const display = Playfair_Display({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const body = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-body', display: 'swap' });

export const metadata: Metadata = {
  title: "Chefs & Pulao Station — Taxila / Wah | Platters, Pulao & Fast Food",
  description:
    'Chefs & Pulao Station, opposite COMSATS University, GT Road Jamilabad, Taxila/Wah. Special platters, yakhni pulao, chicken roast, pizza, steaks & more. Demo website by Aevrix AI Technologies.',
};
export const viewport: Viewport = { themeColor: '#120C09', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
