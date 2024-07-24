'use client';
import Link from 'next/link';
import { Code } from './icons';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import useScrollSpy from '@/app/useScrollSpy';

const Header = () => {
	useScrollSpy();
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
