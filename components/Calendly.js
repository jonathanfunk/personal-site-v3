'use client';
import { PopupButton } from 'react-calendly';
import { useEffect, useState } from 'react';

const Calendly = () => {
	const [rootElement, setRootElement] = useState(null);

	useEffect(() => {
		// Wait for the component to be mounted before setting the rootElement
		if (typeof window !== 'undefined') {
			setRootElement(document.getElementById('__next'));
		}
	}, []);

	return (
		<PopupButton
			url='https://calendly.com/jonathan-funk/30-min'
			text='Schedule a Call'
			rootElement={rootElement}
			className='text-center py-3 px-6 text-seance-700 font-bold border-solid border border-white rounded bg-white g-white mb-3 md:mr-6 md:mb-0'
		/>
	);
};

export default Calendly;
