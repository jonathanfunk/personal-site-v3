import { Envelope, Github, Linkedin } from './icons';

const Footer = () => {
	return (
		<footer className=' bg-seance-950 border-t border-seance-800 px-20 py-5 lg:w-1/2 lg:ml-[50%] lg:flex lg:justify-between lg:items-center'>
			<p className='text-sm text-seance-300 mb-3 lg:mb-0'>
				Copyright © {new Date().getFullYear()} Jonathan Funk
			</p>
			<div className='flex justify-between gap-9'>
				<a href='mailto:jon.m.funk@gmail.com'>
					<Envelope className='fill-current h-4 w-4 text-seance-300' />
				</a>
				<a
					href='https://github.com/jonathanfunk'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Github className='fill-current h-4 w-4 text-seance-300' />
				</a>
				<a
					href='https://www.linkedin.com/in/jonathan-funk/'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Linkedin className='fill-current h-4 w-4 text-seance-300' />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
