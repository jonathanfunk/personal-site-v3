import Link from 'next/link';
import CalendlyDynamic from './CalendlyDynamic';
import navLinks from '@/data/navLinks';

const DesktopNav = () => {
	return (
		<nav className='gap-6 hidden lg:flex'>
			{navLinks.map((link, i) =>
				link.href === 'https://calendly.com/jonathan-funk/30-min' ? (
					<CalendlyDynamic
						key={i}
						className='text-seance-300 font-semibold hover:text-white transition-colors duration-500'
					/>
				) : (
					<Link
						className='text-seance-300 hover:text-white'
						href={link.href}
						key={i}
					>
						{link.title}
					</Link>
				)
			)}
		</nav>
	);
};

export default DesktopNav;
