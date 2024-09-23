"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import ExpCard from "@/components/ExpCard";
import Brain from "@/components/Brain";
import ScrollSvg from "@/components/ScrollSvg";

const skills = [
	"JavaScript",
	"Typescript",
	"React.js",
	"Next.js",
	"SCSS",
	"TailwindCSS",
	"MongoDB",
	"PostgreSQL",
	"Node.js",
	"Express.js",
	"GraphQL",
	"Apollo",
	"Redux",
	"Framer Motion",
	"Three.js",
	"WebGL",
];

const AboutPage = () => {
	const containerRef = useRef();

	const { scrollYProgress } = useScroll({ container: containerRef });

	const skillRef = useRef();
	const isSkillRefInView = useInView(
		skillRef,
		{ once: true },
		{ margin: "50px" }
	);

	const expRef = useRef();
	const isExpRefInView = useInView(expRef, { once: true }, { margin: "50px" });

	return (
		<motion.div
			className="h-full"
			initial={{ y: "-200vh" }}
			animate={{ y: "0%" }}
			transition={{
				duration: 1,
			}}
		>
			{/* CONTAINER */}
			<div
				className="h-full overflow-scroll no-scrollbar lg:flex relative p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48"
				ref={containerRef}
			>
				{/* TEXT CONTAINER */}
				<div className=" flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 w-[80%] lg:pr-0 xl:w-1/2 h-full">
					{/* BIOGRAPHY till signature */}
					<div className="flex flex-col gap-12 justify-center">
						<h2 className="text-2xl font-bold">BIOGRAPHY</h2>
						<p className="text-lg font-medium">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
							veritatis debitis dignissimos omnis laudantium, dicta quam
							quibusdam. Quibusdam, temporibus! Eius quisquam quibusdam
							veritatis voluptates, earum laborum saepe neque facilis illo.
						</p>
						{/* Qoute */}
						<span className="italic font-medium">
							Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						</span>
						{/* SIGNAUTRE */}
						<Image
							src="/signature.png"
							alt="sign"
							width={180}
							height={180}
							className="self-end py-4"
						/>
						{/* BIOGRAPHY SCROLL SVG */}
						<ScrollSvg />
					</div>

					{/* Skills */}
					<div className="flex flex-col gap-12" ref={skillRef}>
						{/* HEADING */}
						<motion.h2
							initial={{ x: "-400px" }}
							animate={isSkillRefInView ? { x: 0 } : {}}
							transition={{ delay: 0.1 }}
							className="text-2xl font-bold"
						>
							SKILLS
						</motion.h2>

						<motion.div
							initial={{ x: "-800px", opacity: 0.2 }}
							animate={isSkillRefInView ? { x: 0, opacity: 1 } : {}}
							transition={{ delay: 0.1 }}
							className="flex flex-wrap gap-4 pr-4"
						>
							{skills.map((item) => (
								<div
									key={item}
									className="bg-black hover:bg-white hover:text-black rounded-md py-2 px-2 w-fit text-white "
								>
									{item}
								</div>
							))}
						</motion.div>
						<ScrollSvg />
					</div>
					{/* EXPERIENCE */}

					<div className="flex gap-8 flex-col pb-48" ref={expRef}>
						<motion.h2
							initial={{ x: "-400px" }}
							animate={isExpRefInView ? { x: 0 } : {}}
							transition={{ delay: 0.2 }}
							className="text-2xl font-bold"
						>
							EXPERIENCE
						</motion.h2>
						{/* Exp CONTAINER */}

						<motion.div
							initial={{ y: "200px", opacity: 0.2 }}
							animate={isExpRefInView ? { y: 0, opacity: 1 } : {}}
							transition={{ delay: 0.3 }}
							className="flex gap-12 lg:w-full"
						>
							{/* LEFT SIDE */}

							<div className="flex flex-col w-1/3 justify-between gap-60">
								<ExpCard
									title="Junior React Developer"
									desc="My current employment way better postion than the last one"
									timeline="2023-present"
									company="Apple"
								/>
								<ExpCard
									title="Next JS Developer"
									desc="My current employment way better postion than the last one"
									timeline="2021-2022"
									company="Apple"
								/>
							</div>
							{/* MIDD SIDE */}

							<div className="flex justify-center relative w-[10%] ">
								<div className="h-full flex justify-between gap-8 rounded-md w-1 bg-gray-600"></div>
								<div className="absolute h-full flex flex-col justify-start gap-[14.4rem] ">
									<div className="w-6 h-6 rounded-full border-red-400 border-2 bg-white" />
									<div className="w-6 h-6 rounded-full border-red-400 border-2 bg-white" />
									<div className="w-6 h-6 rounded-full border-red-400 border-2 bg-white" />
								</div>
							</div>
							{/* RIGHT SIDE */}

							<div className="flex flex-col justify-center w-1/3">
								<ExpCard
									title="React JS Developer"
									desc="My current employment way better postion than the last one"
									timeline="2019-2020"
									company="Apple"
								/>
							</div>
						</motion.div>
					</div>
				</div>

				{/* SVG container */}
				<div className="hidden lg:flex absolute -right-48 top-0 z-30 w-1/3 xl:w-1/2 h-full">
					<div className="fixed w-full h-full pointer-events-none">
						<Brain scrollYProgress={scrollYProgress} />
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default AboutPage;
