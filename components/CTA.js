const Hero = () => {
	return (
		<section className='bg-seance-950 px-7 py-20 lg:px-20 lg:py-36 flex justify-center'>
			<div className='container max-w-xl text-center'>
				<h2 className='text-3xl mb-6 text-white font-bold'>
					Ready to Discuss Your Project?
				</h2>
				<p className='text-white text-base mb-8 leading-relaxed'>
					Are you spending more time in front of a computer than on your
					business? Schedule a call or email me at{' '}
					<a href='jon.m.funk@gmail.com'>jon.m.funk@gmail.com</a>.
				</p>
				<div className='flex flex-col md:flex-row md:justify-center'>
					<a
						className='text-center py-3 px-6 text-seance-700 font-bold border-solid border border-white rounded bg-white g-white mb-3 md:mr-6 md:mb-0'
						href='#'
					>
						Schedule a Call
					</a>
					<a
						className='text-center py-3 px-6 text-white font-semibold tracking-wide border-solid border border-white rounded'
						href='mailto:'
					>
						Send email
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
