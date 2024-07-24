import { useEffect } from 'react';

const useScrollSpy = () => {
	useEffect(() => {
		const onScroll = () => {
			const sections = document.querySelectorAll('.page-scroll');
			const scrollPos =
				window.scrollY ||
				document.documentElement.scrollTop ||
				document.body.scrollTop;

			let activeLink = null;

			sections.forEach((currLink) => {
				const val = currLink.getAttribute('href');
				const refElement = document.querySelector(val);
				const scrollTopMinus = scrollPos + 73;

				if (
					refElement.offsetTop <= scrollTopMinus &&
					refElement.offsetTop + refElement.offsetHeight > scrollTopMinus
				) {
					activeLink = currLink;
					currLink.classList.add('text-white');
				} else {
					currLink.classList.remove('text-white');
				}
			});

			// If there is an active link, make sure only it has the 'text-white' class
			if (activeLink) {
				sections.forEach((link) => {
					if (link !== activeLink) {
						link.classList.remove('text-white');
					}
				});
			}

			// Handle the case when the scroll position is at the very top of the page
			if (scrollPos === 0) {
				sections.forEach((link) => {
					const val = link.getAttribute('href');
					const refElement = document.querySelector(val);
					if (refElement && refElement.offsetTop === 0) {
						link.classList.add('text-white');
					} else {
						link.classList.remove('text-white');
					}
				});
			}
		};

		// Call onScroll once to set the initial state
		onScroll();
		// Add event listener for scroll
		window.addEventListener('scroll', onScroll);

		// Clean up the event listener on component unmount
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	}, []);
};

export default useScrollSpy;
