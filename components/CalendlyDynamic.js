import dynamic from 'next/dynamic';

const Calendly = dynamic(() => import('./Calendly'), {
	loading: () => (
		<a
			href='https://calendly.com/jonathan-funk/30-min'
			target='_blank'
			className='text-center py-3 px-6 text-seance-700 font-bold border-solid border border-white rounded bg-white g-white mb-3 md:mr-6 md:mb-0'
		>
			Schedule a Call
		</a>
	),
	ssr: false,
});

const CalendlyDynamic = () => {
	return <Calendly />;
};

export default CalendlyDynamic;
