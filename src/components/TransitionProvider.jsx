"use client";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import Navbar from "./Navbar";
import { usePathname } from "next/navigation";

const TransitionProvider = ({ children }) => {
	const pathName = usePathname();
	return (
		<AnimatePresence mode="wait">
			<div
				key={pathName}
				className="h-screen bg-gradient-to-b from-blue-100 to-red-100"
			>
				<motion.div
					className="w-screen h-screen fixed bg-black rounded-b-[10rem] z-40"
					animate={{ height: "0vh" }}
					exit={{ height: "140vh" }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				/>
				<motion.div
					className="m-auto fixed top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default w-fit h-fit z-50 pointer-events-none"
					initial={{ opacity: 0.8 }}
					animate={{ opacity: 0 }}
					transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
				>
					{pathName.substring(1)}
				</motion.div>
				<motion.div
					className="w-screen h-screen fixed bg-black rounded-t-[10rem] bottom-0 z-30"
					initial={{ height: "140vh" }}
					animate={{ height: "0vh", transition: { delay: 0.5 } }}
				/>
				<div className="h-24">
					<Navbar />
				</div>
				<div className="h-[calc(100vh-6rem)]">{children}</div>
			</div>
		</AnimatePresence>
	);
};

export default TransitionProvider;
