import dynamic from 'next/dynamic';

const Calendly = dynamic(() => import('./Calendly'), {
	ssr: false,
});

const CalendlyDynamic = () => {
	return <Calendly />;
};

export default CalendlyDynamic;
