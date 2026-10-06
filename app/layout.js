import { Plus_Jakarta_Sans, Caveat } from 'next/font/google';
import './globals.css';

// Исправлено: максимьный вес для Plus Jakarta Sans — 800
const sans = Plus_Jakarta_Sans({ 
  subsets: ['latin'], 
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'] 
});

const handwritten = Caveat({ 
  subsets: ['latin'], 
  variable: '--font-handwritten',
  weight: ['400', '700']
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${handwritten.variable} scroll-smooth`}>
      <body className="bg-white antialiased text-[#090F1C]">{children}</body>
    </html>
  );
}
