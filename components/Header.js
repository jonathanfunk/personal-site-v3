'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Code } from './icons';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Header = () => {
	const [scrollPositionTop, setscrollPositionTop] = useState(true);

	const handleScroll = () => {
		if (window.scrollY > 0) {
			setscrollPositionTop(false);
		} else {
			setscrollPositionTop(true);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<header
			className={`w-full px-8 py-7 z-10 transition-color duration-500 lg:fixed lg:w-1/2 lg:px-20 ${
				!scrollPositionTop
					? 'fixed bg-white py-4 shadow-md lg:shadow-none lg:bg-transparent lg:py-7'
					: 'absolute'
			}`}
		>
			<div className='container flex justify-between items-center'>
				<Link
					href='/'
					className='text-seance-300 hover:text-white'
					aria-label='Home page link'
				>
					<Code className='fill-current h-8 w-8' />
				</Link>
				<DesktopNav />
				<MobileNav />
			</div>
		</header>
	);
};

export default Header;
