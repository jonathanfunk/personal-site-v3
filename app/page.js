import Image from 'next/image';
import Hero from '@/components/Hero';
import counters from '@/data/counters';
import projects from '@/data/projects';
import Counter from '@/components/Counter';
import ProjectCard from '@/components/ProjectCard';
import CTA from '@/components/CTA';

export default function Home() {
	return (
		<div>
			<Hero />
			<main className='lg:w-1/2 lg:ml-[50%]'>
				<section className='lg:min-h-screen bg-seance-50'></section>
				<section className='px-7 py-20 lg:px-20 lg:py-36' id='about'>
					<div className='container max-w-xl'>
						<h2 className='text-3xl mb-6 text-seance-950 font-bold'>
							About Me
						</h2>
						<p className='text-seance-900 text-xl font-semibold mb-6'>
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
							<a
								className='py-3 px-6 text-white font-bold border-solid border border-seance-900 rounded bg-seance-900 mr-6 inline-block shadow-md'
								href='#'
							>
								Schedule a Call
							</a>
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
						<p className='text-seance-900 text-xl font-semibold mb-6 max-w-xl'>
							I&lsquo;ve worked with diverse businesses, from solopreneurs to
							medium-sized companies.
						</p>
						<div className='grid gap-6 lg:grid-cols-2 mb-8'>
							{projects.map((project, i) => (
								<ProjectCard {...project} key={i} />
							))}
						</div>
						<div className='flex justify-center'>
							<a
								className='py-3 px-6 text-white font-bold border-solid border border-seance-900 rounded bg-seance-900 inline-block shadow-md text-center'
								href='#'
							>
								Schedule a Call
							</a>
						</div>
					</div>
				</section>
				<CTA />
			</main>
		</div>
	);
}
