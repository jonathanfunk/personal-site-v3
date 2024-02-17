import Link from 'next/link';
import CalendlyDynamic from './CalendlyDynamic';

const Hero = () => {
	return (
		<section className='min-h-96 px-8 py-20 flex items-center flex-wrap bg-gradient-to-br from-seance-950 to-seance-800 lg:min-h-screen lg:w-1/2 lg:px-20 lg:fixed'>
			<div className='text-white max-w-xl'>
				<h4 className='font-semibold  mb-6'>Hi! My name is Jonathan Funk.</h4>
				<h1 className='text-3xl lg:text-5xl font-bold  mb-6'>
					I am a website designer based in Vancouver, BC
				</h1>
				<p className='text-seance-200 max-w-md lg:text-lg mb-8'>
					I create minimalistic websites that prioritize ease of use,
					performance and boost conversions.
				</p>
				<div className='flex flex-col md:flex-row'>
					<CalendlyDynamic />
					<Link
						href='#projects'
						scroll={true}
						className='text-center py-3 px-6 text-white font-bold border-solid border border-white rounded'
					>
						See Projects
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;
