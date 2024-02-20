import Link from 'next/link';
import { Code } from './icons';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Header = () => {
	return (
		<header className='absolute  w-full px-8 py-7 z-10 lg:fixed lg:w-1/2 lg:px-20'>
			<div className='container flex justify-between items-center'>
				<Link href='/' className='text-seance-300 hover:text-white'>
					<Code className='fill-current h-8 w-8' />
				</Link>
				<DesktopNav />
				<MobileNav />
			</div>
		</header>
	);
};

export default Header;
