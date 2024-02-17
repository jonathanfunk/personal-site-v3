const Footer = () => {
	return (
		<footer className=' bg-seance-950 border-t border-seance-800 px-20 py-5 lg:w-1/2 lg:ml-[50%]'>
			<p className='text-sm text-seance-300'>
				Copyright © {new Date().getFullYear()} Jonathan Funk
			</p>
		</footer>
	);
};

export default Footer;
