import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/TransitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Usman Portofolio",
	description: "Animated Portfolio in NextJS",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<TransitionProvider>{children}</TransitionProvider>
			</body>
		</html>
	);
}
