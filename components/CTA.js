const Hero = () => {
	return (
		<section className='bg-seance-950 px-7 py-20 lg:px-20 lg:py-36 flex justify-center'>
			<div className='container max-w-xl text-center'>
				<h2 className='text-3xl mb-6 text-white font-bold'>
					Ready to Discuss Your Project?
				</h2>
				<p className='text-white text-lg mb-8'>
					Reach out to discuss your unique web design needs and goals.
				</p>
				<div className='flex flex-col md:flex-row md:justify-center'>
					<a
						className='text-center py-3 px-6 text-seance-700 font-bold border-solid border border-white rounded bg-white g-white mb-3 md:mr-6 md:mb-0'
						href='#'
					>
						Schedule a Call
					</a>
					<a
						className='text-center py-3 px-6 text-white font-bold border-solid border border-white rounded'
						href='#'
					>
						See Projects
					</a>
				</div>
			</div>
		</section>
	);
};

export default Hero;
