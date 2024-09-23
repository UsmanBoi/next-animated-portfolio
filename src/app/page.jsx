"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
	return (
		<motion.div
			className="h-full"
			initial={{ y: "-200vh" }}
			animate={{ y: "0%" }}
			transition={{
				duration: 1,
			}}
		>
			<div className="h-full flex flex-col lg:flex-row gap-8 justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
				{/* IMAGE container */}
				<div className="h-1/2 relative lg:h-full lg:w-1/2">
					<Image
						src="/hero.png"
						alt="hero image"
						fill
						className="object-contain"
					/>
				</div>
				{/* TEXT container */}
				<div className="flex flex-col gap-8 h-1/2 lg:h-full lg:w-1/2 lg:justify-center">
					<h2 className="text-3xl md:text-6xl font-bold">
						Crafting Digital Experiences, Designing Tomorrow.
					</h2>
					<p className="text-base lg:text-xl">
						Welcome to my digital canvas where innovation and creativity
						converge. With a keen eye for aesthetics and a mastery of code, my
						portfolio showcases a diverse collection of projects that reflects
						my commitment to excellence.
					</p>
					<div className="flex hover:gap-6 gap-4 w-full items-start transition duration-300">
						<button className="h-12 w-fit px-2 bg-black hover:bg-opacity-0 rounded-lg text-white hover:border-2 hover:border-black hover:text-black transition duration-300 hover:scale-125">
							View My Work
						</button>
						<button className="h-12 w-fit px-2 border-black border-2 rounded-lg hover:bg-black hover:text-white transition duration-300 hover:scale-125">
							Contact Me
						</button>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Homepage;
