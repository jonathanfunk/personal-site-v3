import Image from 'next/image';
import Hero from '@/components/Hero';
import counters from '@/data/counters';
import projects from '@/data/projects';
import Counter from '@/components/Counter';
import ProjectCard from '@/components/ProjectCard';
import CTA from '@/components/CTA';
import CalendlyDynamic from '@/components/CalendlyDynamic';

export default function Home() {
	return (
		<div>
			<Hero />
			<main className='lg:w-1/2 lg:ml-[50%]'>
				<section className='lg:min-h-screen bg-seance-50'>
					<Image
						className='hidden md:block w-full lg:min-h-screen object-cover'
						src='/images/desktop-mocks.webp'
						alt='Desktop Mockups'
						width={1600}
						height={1600}
					/>
					<Image
						className='md:hidden w-full'
						src='/images/mobile-mocks.webp'
						alt='Mobile Mockups'
						width={600}
						height={300}
					/>
				</section>
				<section className='px-7 py-20 lg:px-20 lg:py-36' id='about'>
					<div className='container max-w-xl'>
						<h2 className='text-3xl mb-4 text-seance-950 font-bold'>
							About Me
						</h2>
						<p className='text-xl text-seance-950 mb-6 leading-relaxed'>
							I specialize in creating tailored website solutions for businesses
							like yours, helping you achieve your online goals.
						</p>
						<p className='text-lg mb-8'>
							I believe in creating websites that blend captivating design with
							exceptional user experiences. Through transparency, open
							communication, and a focus on your satisfaction, I collaborate
							closely with you to bring your vision to life. With a finger on
							the pulse of industry trends, I incorporate innovative solutions
							that give your website a competitive edge. Let&lsquo;s collaborate
							to transform your online presence and drive tangible results.
						</p>
						<div>
							<CalendlyDynamic className='btn text-white border-seance-900 bg-seance-900 shadow-md hover:bg-seance-950 hover:border-seance-950' />
						</div>
					</div>
				</section>
				<section className='bg-seance-950 px-7 py-11 lg:p-20'>
					<div className='container lg:grid lg:grid-cols-3 text-center text-white'>
						{counters.map((counter, i) => (
							<Counter key={i} {...counter} />
						))}
					</div>
				</section>
				<section className='px-7 py-20 lg:px-20 lg:py-36' id='projects'>
					<div className='container'>
						<h2 className='text-3xl mb-4 text-seance-950 font-bold max-w-xl'>
							Featured Projects
						</h2>
						<p className='text-xl text-seance-950 mb-6 leading-relaxed max-w-xl'>
							I&lsquo;ve worked with diverse businesses, from solopreneurs to
							medium-sized companies. These are a small selection of projects
							I&lsquo;ve worked on as a web designer/developer at{' '}
							<a
								href='https://rtown.ca/'
								target='_blank'
								rel='noreferrer nofollow'
							>
								RTOWN
							</a>
							.
						</p>
						<div className='grid gap-6 lg:grid-cols-2 mb-8'>
							{projects.map((project, i) => (
								<ProjectCard {...project} key={i} />
							))}
						</div>
						<div className='flex justify-center'>
							<CalendlyDynamic className='btn text-white border-seance-900 bg-seance-900 shadow-md hover:bg-seance-950 hover:border-seance-950' />
						</div>
					</div>
				</section>
				<CTA />
			</main>
		</div>
	);
}
