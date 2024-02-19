import Image from 'next/image';

const ProjectCard = ({ link, title, description, thumbnail }) => {
	return (
		<a
			href={link}
			target='_blank'
			rel='noreferrer nofollow'
			className='relative h-[225px] rounded-xl bg-black shadow-xl overflow-hidden'
		>
			<Image
				src={thumbnail}
				alt={title}
				width={600}
				height={300}
				className='object-cover w-full h-full'
			/>
			<div className='absolute z-10 w-full bottom-0 left-0 p-6 pt-9 bg-gradient-to-b from-transparent to-seance-950 text-white'>
				<h5 className='font-bold'>{title}</h5>
				<p className='text-sm'>{description}</p>
			</div>
		</a>
	);
};

export default ProjectCard;
