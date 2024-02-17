import Image from 'next/image';
import Hero from './../components/Hero';

export default function Home() {
	return (
		<div className=' flex'>
			<Hero />
			<main className='min-h-screen w-1/2 bg-slate-50'></main>
		</div>
	);
}
