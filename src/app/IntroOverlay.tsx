"use client";
import React, { useState, useEffect, useRef } from "react";

export const IntroOverlay = ({
	onEnter,
	onStartMusic, // This is the key to mobile audio
}: {
	onEnter: () => void;
	onStartMusic: () => void;
}) => {
	const [percent, setPercent] = useState(0);
	const [ready, setReady] = useState(false);
	const overlayRef = useRef(null);

	useEffect(() => {
		const interval = setInterval(() => {
			setPercent((prev) => {
				if (prev >= 100) {
					clearInterval(interval);
					setReady(true);
					return 100;
				}
				return prev + 1;
			});
		}, 30);
		return () => clearInterval(interval);
	}, []);

	const handleStart = () => {
		// 1. Trigger the music function sitting in the Header immediately
		onStartMusic();

		// 2. Start the GSAP fade out
		// @ts-ignore
		if (window.gsap) {
			// @ts-ignore
			window.gsap.to(overlayRef.current, {
				opacity: 0,
				duration: 1,
				onComplete: onEnter,
				ease: "power2.inOut",
			});
		} else {
			onEnter();
		}
	};

	return (
		<div
			ref={overlayRef}
			className="fixed inset-0 z-[9999] bg-[#0A0A0A] flex items-center justify-center"
		>
			{/* REMOVED internal audio tag - it belongs in the Header now */}
			<div className="text-center">
				<h1 className="text-7xl font-black text-white tracking-tighter mb-8">
					HUSAK<span className="text-green-500">.</span>
				</h1>

				<div className="h-20 flex flex-col items-center">
					{!ready ? (
						<div className="w-64">
							<div className="h-[2px] w-full bg-gray-800 rounded-full overflow-hidden">
								<div
									className="h-full bg-green-500 transition-all duration-200"
									style={{ width: `${percent}%` }}
								/>
							</div>
							<p className="text-[10px] text-gray-500 uppercase tracking-[0.5em] mt-4">
								System Initializing {percent}%
							</p>
						</div>
					) : (
						<button
							onClick={handleStart}
							className="group relative px-12 py-4 rounded-full border border-green-500/30 text-green-500 overflow-hidden transition-all duration-700 hover:border-green-400 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]"
						>
							{/* The "Liquid" fill background */}
							<div className="absolute inset-0 top-full bg-green-500 transition-all duration-500 ease-out group-hover:top-0" />

							{/* Button Text */}
							<span className="relative z-10 font-bold uppercase tracking-[0.3em] text-xs transition-colors duration-500 group-hover:text-black">
								Enter Experience
							</span>

							{/* Corner Accents (Decorative) */}
							<div className="absolute top-2 left-4 w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
							<div className="absolute bottom-2 right-4 w-1 h-1 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
						</button>
					)}
				</div>
			</div>
		</div>
	);
};
