"use client";
import React, { forwardRef, useImperativeHandle, useRef } from "react";

const BackgroundMusic = forwardRef((props, ref) => {
	const audioRef = useRef<HTMLAudioElement>(null);

	useImperativeHandle(ref, () => ({
		toggle: () => {
			if (audioRef.current?.paused) {
				audioRef.current.play();
				return true;
			} else {
				audioRef.current?.pause();
				return false;
			}
		},
	}));

	return (
		<audio
			ref={audioRef}
			src="./music/tick-of-the-clock.mp3"
			loop
			preload="none"
		/>
	);
});

BackgroundMusic.displayName = "BackgroundMusic";
export default BackgroundMusic;
