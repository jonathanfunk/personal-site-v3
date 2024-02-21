import Image from 'next/image';

const ProjectCard = ({ link, title, description, thumbnail }) => {
	return (
		<a
			href={link}
			target='_blank'
			rel='noreferrer nofollow'
			className='relative h-[225px] rounded-xl bg-black shadow-xl overflow-hidden group'
		>
			<Image
				src={thumbnail}
				alt={title}
				width={400}
				height={200}
				className='object-cover w-full h-full group-hover:scale-110 transition-transform duration-500'
				loading='lazy'
			/>
			<div className='absolute w-full bottom-0 left-0 p-6 pt-9 bg-gradient-to-b from-transparent to-seance-950 text-white'>
				<h3 className='font-bold'>{title}</h3>
				<p className='text-sm'>{description}</p>
			</div>
		</a>
	);
};

export default ProjectCard;
