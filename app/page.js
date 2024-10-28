import Image from 'next/image';
import Hero from '@/components/Hero';
import counters from '@/data/counters';
import projects from '@/data/projects';
import Counter from '@/components/Counter';
import ProjectCard from '@/components/ProjectCard';
import CTA from '@/components/CTA';
import CalendlyDynamic from '@/components/CalendlyDynamic';
import Banner from '@/components/Banner';

export const metadata = {
	title: 'Jonathan Funk | Web Designer',
	description:
		'I create minimalistic websites that prioritize ease of use and performance. Send an email to web@jonathanfunk.ca to get started!',
	openGraph: {
		title: 'Jonathan Funk | Web Designer',
		description:
			'I create minimalistic websites that prioritize ease of use and performance. Send an email to web@jonathanfunk.ca to get started!',
		url: 'https://www.jonathanfunk.ca',
		siteName: 'Jonathan Funk | Web Designer',
		images: [
			{
				url: 'https://www.jonathanfunk.ca/images/mobile-mocks.webp',
				width: 600,
				height: 300,
			},
		],
		locale: 'en_CA',
		type: 'website',
	},
};

export default function Home() {
	return (
		<div>
			<Hero />
			<main className='lg:w-1/2 lg:ml-[50%]'>
				<section className='lg:min-h-screen bg-seance-50' id='home'>
					<Banner />
					<Image
						className='md:hidden w-full'
						src='/images/mobile-mocks.webp'
						alt='Mobile Mockups'
						width={600}
						height={300}
						priority
					/>
				</section>
				<section className='px-7 py-20 lg:px-20 lg:py-36' id='about'>
					<div className='container lg:max-w-xl m-auto lg:m-0'>
						<h2 className='text-3xl mb-4 text-seance-950 font-bold'>
							About Me
						</h2>
						<p className='text-xl text-seance-950 mb-6 leading-relaxed'>
							I am dedicated to fostering relations and achieving your online
							goals through tailored web solutions.
						</p>
						<p className='mb-8'>
							Your website is a valuable asset for your business and has the
							potential to pay for itself. While anyone can build a website, it
							takes a special eye to do it right. With my expertise, I go beyond
							mere visual appeal and focus on crafting websites with a clear
							purpose. Let&lsquo;s collaborate to transform your online presence
							and achieve tangible results.
						</p>
						<div>
							<CalendlyDynamic className='btn text-white border-seance-900 bg-seance-900 shadow-md hover:bg-seance-950 hover:border-seance-950' />
						</div>
					</div>
				</section>
				<section className='bg-seance-950 px-7 py-11 lg:p-20'>
					<div className='container md:grid md:grid-cols-3 text-center text-white m-auto lg:m-0'>
						{counters.map((counter, i) => (
							<Counter key={i} {...counter} />
						))}
					</div>
				</section>
				<section className='px-7 py-20 lg:px-20 lg:py-36' id='projects'>
					<div className='container m-auto lg:m-0'>
						<div className='max-w-xl'>
							<h2 className='text-3xl mb-4 text-seance-950 font-bold'>
								Featured Projects
							</h2>
							<p className='mb-8'>
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
							</p>
						</div>
						<div className='grid gap-6 xl:grid-cols-2 mb-8'>
							{projects.map((project, i) => (
								<ProjectCard {...project} key={i} />
							))}
						</div>
						<div className='flex justify-center'>
							<CalendlyDynamic className='btn text-white border-seance-900 bg-seance-900 shadow-md hover:bg-seance-950 hover:border-seance-950' />
						</div>
					</div>
				</section>
				<section
					className='px-7 py-20 lg:px-20 lg:py-36 bg-slate-50'
					id='testimonial'
				>
					<div className='container m-auto lg:m-0'>
						<div className='max-w-3xl'>
							<p className='text-2xl text-center mb-7 text-seance-950'>
								&quot;Jonathan delivered a website redesign that transformed our
								online presence. His thoughtful approach and problem-solving
								skills were evident, even under tight deadlines. The increased
								traffic and customer feedback speak volumes about his work. We
								couldn&lsquo;t be happier.&quot;
							</p>
							<p className='text-lg text-center'>
								Allison Abbott, Business Owner
							</p>
						</div>
					</div>
				</section>
				<CTA />
			</main>
		</div>
	);
}
