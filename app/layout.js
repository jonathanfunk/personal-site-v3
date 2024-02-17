import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Jonathan Funk | Web Designer',
	description:
		'I create minimalistic websites that prioritize ease of use, performance and boost conversions.',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header />
				<div id='__next'>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
