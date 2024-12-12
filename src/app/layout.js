import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header/Header';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Smartphones',
  description: 'FE Challenge',
};

import PropTypes from 'prop-types';

export default function RootLayout({ children }) {
  RootLayout.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.variable} font-sans`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
