'use client';
import { useState } from 'react';
import Link from 'next/link';
import CalendlyDynamic from './CalendlyDynamic';
import navLinks from '@/data/navLinks';

const MobileNav = () => {
	const [navShow, setNavShow] = useState(false);

	const onToggleNav = () => {
		setNavShow((status) => {
			if (status) {
				document.body.style.overflow = 'auto';
			} else {
				// Prevent scrolling
				document.body.style.overflow = 'hidden';
			}
			return !status;
		});
	};

	return (
		<div className='lg:hidden'>
			<button
				className='relative z-20 w-[35px] h-[31px] flex'
				onClick={onToggleNav}
			>
				<div
					className={`relative translate-y-[13px] transition-all duration-300 bg-seance-300 w-[35px] h-[5px] before:transition-bottom before:duration-300 before:ease-out before:content-[""] before:w-[35px] before:h-[5px] before:absolute before:bottom-[13px] before:left-0 before:bg-seance-300 after:content-[""] after:w-[35px] after:h-[5px] after:absolute after:top-[13px] after:left-0 after:bg-seance-300 ${
						navShow
							? 'bg-transparent before:bottom-0 before:-rotate-45 after:top-0 after:rotate-45'
							: ''
					}`}
				></div>
			</button>
			<nav
				className={`fixed left-0 top-0 z-10 h-full w-full transform bg-white duration-300 ease-in-out px-9 py-16 ${
					navShow ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				{navLinks.map((link, i) => (
					<Link
						className='text-2xl py-3 block'
						href={link.href}
						key={i}
						onClick={onToggleNav}
					>
						{link.title}
					</Link>
				))}
				<CalendlyDynamic className='text-seance-600 text-2xl py-3 block ' />
			</nav>
		</div>
	);
};

export default MobileNav;
