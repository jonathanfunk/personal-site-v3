const Hero = () => {
	return (
		<div className='min-h-96 p-8 flex items-center flex-wrap bg-gradient-to-br from-seance-950 to-seance-800 lg:min-h-screen lg:w-1/2 lg:px-20'>
			<div className='text-white max-w-xl'>
				<h4 className='font-semibold  mb-6'>Hi! My name is Jonathan Funk.</h4>
				<h1 className='text-3xl lg:text-5xl font-extrabold  mb-6'>
					I am a website designer based in Vancouver, BC
				</h1>
				<p className='text-seance-200 lg:text-lg'>
					I create minimalistic websites that prioritize ease of use,
					performance and boost conversions.
				</p>
			</div>
		</div>
	);
};

export default Hero;
