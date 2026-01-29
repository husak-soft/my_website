"use client";

import { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { IntroOverlay } from "./IntroOverlay"; // Ensure path is correct

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

	/**
	 * MOBILE FIX: This function is triggered by the button in IntroOverlay.
	 * It looks for a function we will define in the Header component.
	 */
	const handleMusicTrigger = () => {
		if (typeof window !== "undefined" && (window as any).startHusakMusic) {
			(window as any).startHusakMusic();
		}
	};

	const handleEnter = () => {
		setHasEntered(true);
	};

	return (
		<html lang="en" className="scroll-smooth">
			<head>
				<link rel="shortcut icon" href="/globe.svg" />
			</head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0A0A0A] text-white`}
			>
				{/* 1. Preloader/Overlay Layer */}
				{!hasEntered && (
					<IntroOverlay
						onEnter={handleEnter}
						onStartMusic={handleMusicTrigger}
					/>
				)}

				{/* 2. Main Website Content Layer */}
				{/* We keep this in the DOM but hidden/faded until entry to ensure 
            the Header is ready to receive the music trigger. */}
				<div
					className={`transition-opacity duration-1000 ease-in-out ${
						hasEntered ? "opacity-100" : "opacity-0 pointer-events-none"
					}`}
				>
					{children}
				</div>

				{/* 3. External Scripts */}
				<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
			</body>
		</html>
	);
}
