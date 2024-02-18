import Link from 'next/link';
import { Code } from './icons';
import DesktopNav from './DesktopNav';

const Header = () => {
	return (
		<header className='absolute  w-full px-8 py-7 z-10 lg:fixed lg:w-1/2 lg:px-20'>
			<div className='container flex justify-between items-center'>
				<Link href='/'>
					<Code className='fill-current h-6 w-6 text-seance-300' />
				</Link>
				<DesktopNav />
			</div>
		</header>
	);
};

export default Header;
