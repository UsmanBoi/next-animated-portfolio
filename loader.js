"use client";

export default function myImageLoader({ src, width, quality }) {
	if (src.startsWith("https://images.pexels.com")) return src;
	return `https://next-animated-portfolio-3388.vercel.app/${src}?w=${width}&q=${
		quality || 75
	}`;
}
