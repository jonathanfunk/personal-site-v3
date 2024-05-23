'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { Code } from './icons';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Header = () => {
	useEffect(() => {
		const onScroll = (event) => {
			const sections = document.querySelectorAll('.page-scroll');
			const scrollPos =
				window.scrollY ||
				document.documentElement.scrollTop ||
				document.body.scrollTop;

			for (let i = 0; i < sections.length; i++) {
				const currLink = sections[i];
				const val = currLink.getAttribute('href');
				const refElement = document.querySelector(val);
				const scrollTopMinus = scrollPos + 73;
				if (
					refElement.offsetTop <= scrollTopMinus &&
					refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
				) {
					document.querySelector('.page-scroll').classList.remove('active');
					currLink.classList.add('text-white');
				} else {
					currLink.classList.remove('text-white');
				}
			}
		};

		document.addEventListener('scroll', onScroll);

		return () => {
			document.removeEventListener('scroll', onScroll);
		};
	}, []);
	return (
		<header className='w-full p-7 z-10 transition-color duration-500 lg:fixed lg:w-1/2 lg:px-20 absolute'>
			<div className='container flex justify-between items-center'>
				<Link
					href='/'
					className=' text-seance-300 hover:text-white min-h-[45px] flex items-center lg:block lg:h-auto'
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
