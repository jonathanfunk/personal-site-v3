import Link from 'next/link';
import CalendlyDynamic from './CalendlyDynamic';
import navLinks from '@/data/navLinks';

const DesktopNav = () => {
	return (
		<nav className='gap-6 hidden lg:flex'>
			{navLinks.map((link, i) => (
				<Link
					className='text-seance-300 hover:text-white'
					href={link.href}
					key={i}
				>
					{link.title}
				</Link>
			))}
			<CalendlyDynamic className='text-seance-300 hover:text-white transition-colors duration-500' />
		</nav>
	);
};

export default DesktopNav;
