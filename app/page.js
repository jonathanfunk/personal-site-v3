import Image from 'next/image';
import Hero from './../components/Hero';

export default function Home() {
	return (
		<div className='lg:flex'>
			<Hero />
			<main className='lg:min-h-screen lg:w-1/2 bg-slate-50'></main>
		</div>
	);
}
