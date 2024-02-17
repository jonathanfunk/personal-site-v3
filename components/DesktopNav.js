import Link from 'next/link';
import navLinks from '@/data/navLinks';

const DesktopNav = () => {
	return (
		<nav className='flex gap-6'>
			{navLinks.map((link, i) => (
				<Link className='font-medium text-seance-300' href={link.href} key={i}>
					{link.title}
				</Link>
			))}
		</nav>
	);
};

export default DesktopNav;
