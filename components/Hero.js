import Link from 'next/link';
import CalendlyDynamic from './CalendlyDynamic';

const Hero = () => {
	return (
		<section className='min-h-96 px-8 pb-20 pt-32 flex items-center flex-wrap bg-gradient-to-br from-seance-950 to-seance-800 lg:min-h-screen lg:w-1/2 lg:px-20 lg:fixed'>
			<div className='text-white max-w-xl'>
				<h4 className='font-semibold mb-6 text-seance-200'>
					Hi! My name is Jonathan Funk.
				</h4>
				<h1 className='text-3xl lg:text-5xl font-bold  mb-6'>
					I am a{' '}
					<span className=' text-seance-300 italic'>website designer</span>{' '}
					based in Vancouver, BC
				</h1>
				<p className='text-seance-200 max-w-md lg:text-lg mb-8'>
					I create minimalistic websites that prioritize ease of use,
					performance and drive conversions.
				</p>
				<div className='flex flex-col md:flex-row'>
					<CalendlyDynamic className='btn text-seance-700 bg-white hover:bg-seance-900 hover:text-white hover:border-seance-900 mb-3 md:mr-6 md:mb-0' />
					<Link
						href='#projects'
						scroll={true}
						className='btn text-white border-white hover:bg-white hover:text-seance-700'
					>
						See Projects
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;
