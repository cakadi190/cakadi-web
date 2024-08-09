import { Signika, JetBrains_Mono, Merriweather } from 'next/font/google';

export const sans = Signika({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['400', '600', '700']
});

export const mono = JetBrains_Mono({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['400', '700']
});

export const serif = Merriweather({
  subsets: ['latin', 'latin-ext', 'vietnamese'],
  weight: ['400', '700']
});
