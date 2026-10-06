import { Plus_Jakarta_Sans, Caveat } from 'next/font/google';
import { LanguageProvider } from './LanguageContext';
import './globals.css';

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

const handwritten = Caveat({
  subsets: ['latin'],
  variable: '--font-handwritten',
  weight: ['400', '700'],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${handwritten.variable} scroll-smooth`}
    >
      <body className="bg-white antialiased text-[#090F1C]">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}