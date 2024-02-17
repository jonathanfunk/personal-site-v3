'use client';
import CountUp, { useCountUp } from 'react-countup';

const Counter = ({ number, title }) => {
	useCountUp({
		ref: 'counter',
		enableScrollSpy: true,
		scrollSpyDelay: 1000,
	});
	return (
		<div className=' mb-8 lg:mb-0'>
			<h3 className='text-5xl font-bold mb-3'>
				<CountUp end={number} delay={0} enableScrollSpy>
					{({ countUpRef }) => <span ref={countUpRef} />}
				</CountUp>
				+
			</h3>
			<p className='text-xl'>{title}</p>
		</div>
	);
};

export default Counter;
