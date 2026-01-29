"use client";

import { useState, useEffect } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { IntroOverlay } from "./IntroOverlay";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [hasEntered, setHasEntered] = useState(false);
	const [isMounting, setIsMounting] = useState(true);

	useEffect(() => {
		// Check if user already entered this session to avoid showing loader on every route change
		const sessionEntered = sessionStorage.getItem("husak_entered");
		if (sessionEntered === "true") {
			setHasEntered(true);
		}
		setIsMounting(false);
	}, []);

	const handleMusicTrigger = () => {
		if (typeof window !== "undefined" && (window as any).startHusakMusic) {
			(window as any).startHusakMusic();
		}
	};

	const handleEnter = () => {
		sessionStorage.setItem("husak_entered", "true");
		setHasEntered(true);
	};

	return (
		<html lang="en" className="scroll-smooth">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0A0A] text-white`}
			>
				{/* The Overlay - Only shows if hasEntered is false */}
				{!isMounting && !hasEntered && (
					<IntroOverlay
						onEnter={handleEnter}
						onStartMusic={handleMusicTrigger}
					/>
				)}

				{/* The Main Content - Always wrapped in body tags */}
				<div
					className={`transition-opacity duration-1000 ease-in-out ${
						hasEntered ? "opacity-100" : "opacity-0 pointer-events-none"
					}`}
				>
					{children}
				</div>

				{/* GSAP Script */}
				<script
					src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
					defer
				></script>
			</body>
		</html>
	);
}
