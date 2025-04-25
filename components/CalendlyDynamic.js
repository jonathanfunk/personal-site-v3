import dynamic from 'next/dynamic';

const LoadingWrapper = ({ className }) => (
	<a
		href='https://calendly.com/jonathan-funk/30-min'
		target='_blank'
		className={className}
	>
		Book a Discovery Call
	</a>
);

const Calendly = dynamic(() => import('./Calendly'), {
	loading: ({ className }) => <LoadingWrapper className={className} />,
	ssr: true,
});

const CalendlyDynamic = ({ className }) => {
	return <Calendly className={className} />;
};

export default CalendlyDynamic;
