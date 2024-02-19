'use client';
import CountUp from 'react-countup';

const Counter = ({ number, title }) => {
	return (
		<div className='mb-8 lg:mb-0 last:mb-0'>
			<h3 className='text-5xl font-bold mb-3'>
				<CountUp end={number} enableScrollSpy scrollSpyOnce>
					{({ countUpRef }) => <span ref={countUpRef} />}
				</CountUp>
				+
			</h3>
			<p className='text-xl'>{title}</p>
		</div>
	);
};

export default Counter;
