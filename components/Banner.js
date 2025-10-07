'use client';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

function useParallax(value, distance) {
	return useTransform(value, [1, 0], [-distance, distance]);
}

const Banner = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia('(max-width: 768px)');

		// Update state based on media query result
		const handleMediaQueryChange = () => setIsMobile(mediaQuery.matches);
		handleMediaQueryChange();

		// Attach event listener for media query change
		mediaQuery.addEventListener('change', handleMediaQueryChange);
		return () =>
			mediaQuery.removeEventListener('change', handleMediaQueryChange);
	}, []);

	const ref = useRef(null);
	const { scrollYProgress } = useScroll({ target: ref });
	const parallaxScrollDown = useParallax(
		scrollYProgress,
		isMobile ? -75 : -200
	);
	const parallaxScrollUp = useParallax(scrollYProgress, isMobile ? 75 : 200);

	return (
		<div className='h-64 flex md:h-96 lg:h-screen overflow-hidden justify-center items-center'>
			<div className='flex gap-3 md:gap-5 rotate-[30deg]'>
				<div className='md:w-[375px] md:h-[1600px]'>
					<motion.div style={{ y: parallaxScrollDown }}>
            {/* Mobile Image */}
            <Image
              src="/images/mobile-mocks-1.webp"
              alt="Website Mockups"
              className="drop-shadow-md block md:hidden"
              width={300}
              height={1152}
              priority
            />
            {/* Desktop Image */}
            <Image
              src="/images/desktop-mocks-column-1.webp"
              alt="Website Mockups"
              className="drop-shadow-md hidden md:block"
              width={375}
              height={1446}
              priority
            />
					</motion.div>
				</div>
				<div className='md:w-[375px] md:h-[1600px]'>
					<motion.div style={{ y: parallaxScrollUp }}>
            {/* Mobile Image */}
            <Image
              src="/images/mobile-mocks-2.webp"
              alt="Website Mockups"
              className="drop-shadow-md block md:hidden"
              width={300}
              height={1152}
              priority
            />
            {/* Desktop Image */}
            <Image
              src="/images/desktop-mocks-column-2.webp"
              alt="Website Mockups"
              className="drop-shadow-md hidden md:block"
              width={375}
              height={1446}
              priority
            />
					</motion.div>
				</div>
				<div className='md:w-[375px] md:h-[1600px]'>
					<motion.div style={{ y: parallaxScrollDown }}>
          {/* Mobile Image */}
          <Image
            src="/images/mobile-mocks-3.webp"
            alt="Website Mockups"
            className="drop-shadow-md block md:hidden"
            width={300}
            height={1152}
            priority
          />
          {/* Desktop Image */}
          <Image
            src="/images/desktop-mocks-column-3.webp"
            alt="Website Mockups"
            className="drop-shadow-md hidden md:block"
            width={375}
            height={1446}
            priority
          />
					</motion.div>
				</div>
				{isMobile && (
					<div>
						<motion.div style={{ y: parallaxScrollUp }}>
							<Image
								src='/images/mobile-mocks-4.webp'
								alt='Website Mockups'
								className='drop-shadow-md'
								width={300}
								height={1152}
								priority
							/>
						</motion.div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Banner;
