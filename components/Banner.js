'use client';
import { useRef } from 'react';
import Image from 'next/image';

import { motion, useScroll, useTransform } from 'framer-motion';

function useParallax(value, distance) {
	return useTransform(value, [1, 0], [-distance, distance]);
}

const Banner = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const parallaxScrollDown = useParallax(scrollYProgress, -200);
	const parallaxScrollUp = useParallax(scrollYProgress, 200);
	return (
		<div className='hidden md:flex h-screen overflow-hidden justify-center items-center'>
			<div className='flex gap-5 rotate-[30deg]'>
				<div className='w-[375px]'>
					<motion.div style={{ y: parallaxScrollDown }}>
						<Image
							src='/images/desktop-mocks-column-1.webp'
							alt='Desktop Mockups'
							width={1600}
							height={1600}
							priority
						/>
					</motion.div>
				</div>
				<div className='w-[375px]'>
					<motion.div style={{ y: parallaxScrollUp }}>
						<Image
							src='/images/desktop-mocks-column-2.webp'
							alt='Desktop Mockups'
							width={1600}
							height={1600}
							priority
						/>
					</motion.div>
				</div>
				<div className='w-[375px]'>
					<motion.div style={{ y: parallaxScrollDown }}>
						<Image
							src='/images/desktop-mocks-column-3.webp'
							alt='Desktop Mockups'
							width={1600}
							height={1600}
							priority
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
