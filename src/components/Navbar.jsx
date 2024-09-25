"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { motion } from "framer-motion";

const links = [
	{ url: "/", title: "Home" },
	{ url: "/about", title: "About" },
	{ url: "/portfolio", title: "Portfolio" },
	{ url: "/contact", title: "Contact" },
];

const Navbar = () => {
	const [active, setActive] = useState(false);

	const topVariant = {
		closed: {
			rotate: 0,
		},
		opened: {
			rotate: 45,
			backgroundColor: "rgb(255,255,255)",
		},
	};

	const centerVariant = {
		closed: {
			opacity: 1,
		},
		opened: {
			opacity: 0,
		},
	};

	const bottomVariant = {
		closed: {
			rotate: 0,
		},
		opened: {
			rotate: -45,
			backgroundColor: "rgb(255,255,255)",
		},
	};

	const listVariant = {
		closed: { x: "100vw" },
		opened: {
			x: 0,
			transition: { when: "beforeChildren", staggerChildren: 0.2 },
		},
	};

	const listItemVariant = {
		closed: { x: -10, opacity: 0 },
		opened: { x: 0, opacity: 1 },
	};
	const handleClick = () => {
		setActive((prev) => !prev);
	};

	return (
		<div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-2">
			{/* Navlinks on medium++ screens */}
			<div className="hidden md:flex items-center justify-center gap-6 flex-1 text-xl ">
				{links.map((link) => (
					<NavLink link={link} key={link.title} />
				))}
			</div>

			{/* LOGO */}

			<div className="md:hidden lg:flex justify-center lg:flex-1">
				<Link
					href="/"
					className="flex items-center text-sm bg-black rounded-lg p-1 font-semibold text-center"
				>
					<span className="text-white px-2">us</span>
					<span className="flex items-center justify-center w-12 h-8 rounded-lg text-black bg-white ">
						.Man
					</span>
				</Link>
			</div>

			{/* SOCIAL MEDIA links */}
			<div className="hidden gap-4 md:flex flex-1 items-center justify-center">
				<Link href="https://github.com/UsmanBoi">
					<Image src="/github.png" alt="github logo" width={24} height={24} />
				</Link>
				<Link href="https://www.facebook.com/usch3363">
					<Image
						src="/facebook.png"
						alt="facebook logo"
						width={24}
						height={24}
					/>
				</Link>
				<Link href="https://www.instagram.com/uss._.man/?hl=en">
					<Image
						src="/instagram.png"
						alt="instagram logo"
						width={24}
						height={24}
					/>
				</Link>
				<Link href="/">
					<Image
						src="/linkedin.png"
						alt="linkedin logo"
						width={24}
						height={24}
					/>
				</Link>
			</div>

			{/* Navbar in small screens */}
			<div className="md:hidden">
				<button
					className="w-10 h-8 flex flex-col justify-center gap-2 z-50 relative"
					onClick={handleClick}
					// onClick={() => setActive((prev) => !prev)}
					// onClick={(() => setActive(!active))}
				>
					<motion.div
						variants={topVariant}
						animate={active ? "opened" : "closed"}
						className="w-10 h-1 bg-black rounded origin-left"
					></motion.div>
					<motion.div
						variants={centerVariant}
						animate={active ? "opened" : "closed"}
						className="w-10 h-1 bg-black rounded"
					></motion.div>
					<motion.div
						variants={bottomVariant}
						animate={active ? "opened" : "closed"}
						className="w-10 h-1 bg-black rounded origin-left"
					></motion.div>
				</button>

				{/* Navlinks in small screen upon click */}
				{active && (
					<motion.div
						variants={listVariant}
						initial="closed"
						animate="opened"
						className="absolute top-0 left-0 w-screen h-screen flex flex-col items-center justify-center gap-8 text-4xl bg-black text-white z-40"
					>
						{links.map((item) => (
							<motion.div
								className=""
								variants={listItemVariant}
								key={item.title}
							>
								<Link href={item.url}>
									<span>{item.title}</span>
								</Link>
							</motion.div>
						))}
					</motion.div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
