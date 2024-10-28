import { Envelope, Github, Linkedin } from './icons';

const Footer = () => {
	return (
		<footer className=' bg-seance-950 border-t border-seance-800 px-20 py-5 flex flex-col items-center lg:flex-row lg:w-1/2 lg:ml-[50%] lg:justify-between lg:items-center'>
			<p className='text-sm text-seance-300  text-center lg:text-left mb-3 lg:mb-0 lg:mr-2'>
				Copyright © {new Date().getFullYear()} Jonathan Funk. Made with Next.js
				& Tailwind CSS.
			</p>
			<div className='flex justify-between gap-9 max-w-32'>
				<a
					href='mailto:web@jonathanfunk.ca'
					className='text-seance-300 hover:text-white'
					aria-label='Email link'
				>
					<Envelope className='fill-current h-4 w-4' />
				</a>
				<a
					href='https://github.com/jonathanfunk'
					target='_blank'
					rel='noopener noreferrer'
					className='text-seance-300 hover:text-white'
					aria-label='Github link'
				>
					<Github className='fill-current h-4 w-4' />
				</a>
				<a
					href='https://www.linkedin.com/in/jonathan-funk/'
					target='_blank'
					rel='noopener noreferrer'
					className='text-seance-300 hover:text-white'
					aria-label='Linkedin link'
				>
					<Linkedin className='fill-current h-4 w-4' />
				</a>
			</div>
		</footer>
	);
};

export default Footer;
