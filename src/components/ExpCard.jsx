import React from "react";

const ExpCard = ({ title, desc, timeline, company }) => {
	return (
		<div className="flex flex-col gap-4">
			<div className="bg-blue-50 h-fit rounded-md rounded-tr-none w-44 font-semibold p-2">
				{title}
			</div>
			<div className="italic px-2 w-fit">{desc}</div>
			<div className="text-red-400 px-2">{timeline}</div>
			<div className="bg-blue-50 px-2 rounded-md py-1 w-fit">{company}</div>
		</div>
	);
};

export default ExpCard;
