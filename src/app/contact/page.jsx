"use client";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
	const text = "Say Hello";
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState(false);

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
		setError(false);
		setSuccess(false);

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_SERVICE_ID,
				process.env.NEXT_PUBLIC_TEMPLATE_ID,
				form.current,
				{
					publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
				}
			)
			.then(
				() => {
					setSuccess(true);
					form.current.reset();
					console.log("SUCCESS!");
				},
				(error) => {
					setError(true);
				}
			);
	};
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
			<div className="flex flex-col lg:flex-row p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48  h-full relative">
				{/* TEXT CONTAINER */}
				<div className="flex w-full h-1/4 lg:h-full lg:w-1/2 items-center justify-center">
					{text.split("").map((letter, index) => (
						<motion.span
							className="text-6xl"
							key={index}
							initial={{ opacity: 1 }}
							animate={{ opacity: 0.01 }}
							transition={{
								duration: 3,
								delay: index * 0.1,
								ease: "easeInOut",
								repeat: Infinity,
							}}
						>
							{letter === " " ? "\u00A0" : letter}
						</motion.span>
					))}
				</div>
				{/* FORM CONTAINER */}
				<form
					onSubmit={sendEmail}
					ref={form}
					className="flex flex-col h-3/4 lg:absolute lg:h-full lg:w-[45%] xl:[40%] 2xl:w-[35%] lg:top-0 lg:right-12 xl:right-18 2xl:right-32 bg-red-50 px-16 py-16 lg:px-20 lg:py-28 gap-8 font-medium text-base text-gray-800 rounded-lg justify-center"
				>
					<h2 className="text-lg">Lama Dev</h2>
					<textarea
						name="user_message"
						rows={6}
						className="bg-transparent border-b-2 border-b-black outline-none resize-none"
					/>
					<p>My mail address is</p>
					<input
						name="user_email"
						type="text"
						className="bg-transparent border-b-2 border-b-black outline-none "
					/>
					<p>Regards</p>
					<button className="bg-purple-200 rounded p-4 w-full font-semibold text-gray-600 ">
						Send
					</button>
					{success && (
						<span className="text-green-500 font-semibold text-center">
							Your message has been sent successfully. 🎊
						</span>
					)}
					{error && (
						<span className="text-red-500 font-semibold text-center">
							Something went wrong
						</span>
					)}
				</form>
			</div>
		</motion.div>
	);
};

export default ContactPage;
