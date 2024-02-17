const Hero = () => {
	return (
		<section className='min-h-96 p-8 flex items-center flex-wrap bg-gradient-to-br from-seance-950 to-seance-800 lg:min-h-screen lg:w-1/2 lg:px-20 lg:fixed'>
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
					<a
						className='text-center py-3 px-6 text-seance-700 font-bold border-solid border border-white rounded bg-white mb-3 md:mr-6 md:mb-0'
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
