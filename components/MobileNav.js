'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import CalendlyDynamic from './CalendlyDynamic';
import navLinks from '@/data/navLinks';

const MobileNav = () => {
	const [navShow, setNavShow] = useState(false);
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

	const onToggleNav = () => {
		setNavShow((status) => {
			if (status) {
				document.body.style.overflow = 'auto';
			} else {
				document.body.style.overflow = 'hidden';
			}
			return !status;
		});
	};

	return (
		<div className='fixed top-7 right-7 lg:hidden'>
			<button
				className='relative z-20 w-[45px] h-[45px] flex bg-seance-950 rounded-full'
				onClick={onToggleNav}
				aria-label='Navigation toggle'
			>
				<div
					className={`relative origin top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%] transition-all duration-300 w-[20px] h-[2px] rounded before:rounded after:rounded before:transition-bottom before:duration-300 before:ease-out before:content-[""] before:w-[20px] before:h-[2px] before:absolute before:left-0 before:bg-seance-300 after:content-[""] after:w-[20px] after:h-[2px] after:absolute after:left-0 after:bg-seance-300 after:transition-top ${
						navShow
							? 'bg-transparent before:bottom-0 before:-rotate-45 after:top-0 after:rotate-45'
							: 'bg-seance-300 before:bottom-[8px] after:top-[8px]'
					}`}
				></div>
			</button>
			<nav
				className={`fixed left-0 top-0 z-10 h-full w-full transform bg-white duration-300 ease-in-out px-9 py-16 flex flex-col justify-center items-center ${
					navShow ? 'translate-x-0' : 'translate-x-full'
				}`}
			>
				{navLinks.map((link, i) =>
					link.href === 'https://calendly.com/jonathan-funk/30-min' ? (
						<CalendlyDynamic
							key={i}
							className={`text-seance-700 text-2xl font-semibold py-4 block transition-all delay-300 duration-500 ${
								navShow
									? 'opacity-100 translate-y-0'
									: 'opacity-0 translate-y-1'
							}`}
						/>
					) : (
						<Link
							className={`text-seance-700 text-2xl py-4 block transition-all delay-300 duration-500 ${
								navShow
									? 'opacity-100 translate-y-0'
									: 'opacity-0 translate-y-1'
							}`}
							href={link.href}
							key={i}
							onClick={onToggleNav}
						>
							{link.title}
						</Link>
					)
				)}
			</nav>
		</div>
	);
};

export default MobileNav;
