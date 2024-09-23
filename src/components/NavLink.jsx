"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
// using usePathname hook to compare link title to url

const NavLink = ({ link }) => {
	const pathName = usePathname();

	return (
		<Link
			href={link.url}
			className={`${
				pathName === link.url && "text-white rounded p-1 bg-black"
			}`}
		>
			{link.title}
		</Link>
	);
};

export default NavLink;
