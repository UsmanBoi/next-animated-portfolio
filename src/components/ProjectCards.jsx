import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard = ({ color, title, desc, img, link }) => {
	return (
		<div
			className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${color}`}
		>
			<div className="flex flex-col gap-8 text-white">
				<h1 className="text-3xl md:text-5xl font-bold lg:text-6xl xl:text-8xl">
					{title}
				</h1>
				<div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
					<Image src={img} alt={title} fill />
				</div>
				<p className="w-80 md:w-96 lg:w-[500px] xl:w-[600px]">{desc}</p>
				<Link href={link} className="self-end">
					<button className="font-semibold m-4 rounded p-2 md:p-4 lg:p-6 text-gray-600 bg-white text-sm w-fit">
						See Demo
					</button>
				</Link>
			</div>
		</div>
	);
};

const cardData = [
	{
		id: 1,
		color: "from-red-300 to-blue-300",
		title: "React Commerce",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
		img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
		link: "https://www.google.com/",
	},
	{
		id: 2,
		color: "from-blue-300 to-violet-300",
		title: "Next.js Medium Blog",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
		img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
		link: "https://www.google.com/",
	},
	{
		id: 3,
		color: "from-violet-300 to-purple-300",
		title: "Vanilla Book App",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
		img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
		link: "https://www.google.com/",
	},
	{
		id: 4,
		color: "from-purple-300 to-red-300",
		title: "Spotify Music App",
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
		img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		link: "https://www.google.com/",
	},
];

const ProjectCards = () => {
	return (
		<>
			{cardData.map((item) => (
				<ProjectCard
					key={item.id}
					color={item.color}
					title={item.title}
					desc={item.desc}
					img={item.img}
					link={item.link}
				/>
			))}
		</>
	);
};

export default ProjectCards;
