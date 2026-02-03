"use client";
import React, { useState, useEffect, useRef } from "react";

export const IntroOverlay = ({
	onEnter,
	onStartMusic,
}: {
	onEnter: () => void;
	onStartMusic: () => void;
}) => {
	const [percent, setPercent] = useState(0);
	const [ready, setReady] = useState(false);
	const overlayRef = useRef(null);

	useEffect(() => {
		// To hit 100% in ~1.5 to 1.8 seconds:
		// 20ms interval * 2% increment = 50 steps = 1000ms (1 second)
		// 20ms interval * 1.2% increment = ~1.6 seconds
		const interval = setInterval(() => {
			setPercent((prev) => {
				const next = prev + 2; // Increased increment for speed
				if (next >= 100) {
					clearInterval(interval);
					setReady(true);
					return 100;
				}
				return next;
			});
		}, 25); // Faster interval

		return () => clearInterval(interval);
	}, []);

	const handleStart = () => {
		onStartMusic();

		// @ts-ignore
		if (window.gsap) {
			// @ts-ignore
			window.gsap.to(overlayRef.current, {
				opacity: 0,
				duration: 0.8, // Snappier exit animation
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
			className="fixed inset-0 z-9999 bg-[#0A0A0A] flex items-center justify-center"
		>
			<div className="text-center">
				<h1 className="text-7xl font-black text-white tracking-tighter mb-8">
					HUSAK<span className="text-green-500">.</span>
				</h1>

				<div className="h-20 flex flex-col items-center">
					{!ready ? (
						<div className="w-64">
							<div className="h-[2px] w-full bg-gray-800 rounded-full overflow-hidden">
								<div
									className="h-full bg-green-500 transition-all duration-150 ease-linear"
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
							<div className="absolute inset-0 top-full bg-green-500 transition-all duration-500 ease-out group-hover:top-0" />
							<span className="relative z-10 font-bold uppercase tracking-[0.3em] text-xs transition-colors duration-500 group-hover:text-black">
								Enter Experience
							</span>
						</button>
					)}
				</div>
			</div>
		</div>
	);
};
