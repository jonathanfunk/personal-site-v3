'use client';
import { PopupButton } from 'react-calendly';
import { useEffect, useState } from 'react';

const Calendly = ({ className }) => {
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
			className={className}
		/>
	);
};

export default Calendly;
