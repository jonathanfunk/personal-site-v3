import CalendlyDynamic from './CalendlyDynamic';

const Hero = () => {
	return (
		<section className='bg-seance-950 px-7 py-20 lg:px-20 lg:py-36 flex justify-center'>
			<div className='container max-w-xl text-center'>
				<h2 className='text-3xl mb-6 text-white font-bold'>
					Ready to Discuss Your Project?
				</h2>
				<p className='text-seance-200 mb-8 leading-relaxed'>
					Are you spending more time in front of a computer than working on your
					business? Schedule a call or email me at{' '}
					<a
						href='mailto:jon.m.funk@gmail.com'
						className=' text-seance-300 hover:text-white'
					>
						jon.m.funk@gmail.com
					</a>
					.
				</p>
				<div className='flex flex-col md:flex-row md:justify-center'>
					<CalendlyDynamic className='btn text-seance-700 bg-white hover:bg-seance-900 hover:text-white hover:border-seance-900 mb-3 md:mr-6 md:mb-0' />
					<a
						className='btn text-white border-white hover:bg-white hover:text-seance-700'
						href='mailto:jon.m.funk@gmail.com'
					>
						Send email
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
