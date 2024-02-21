import { Inter } from 'next/font/google';
import { GoogleTagManager } from '@next/third-parties/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${inter.className} text-slate-600 text-lg`}>
				<GoogleTagManager gtmId='GTM-TRMDM8BD' />
				<Header />
				<div id='__next'>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
