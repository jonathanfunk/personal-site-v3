import Link from 'next/link';

const Header = () => {
	return (
		<header className='absolute  w-full px-8 py-7 z-10 lg:fixed lg:w-1/2 lg:px-20'>
			<div className='container'>
				<Link href='/' className='text-white'>
					Jonathan Funk
				</Link>
			</div>
		</header>
	);
};

export default Header;
