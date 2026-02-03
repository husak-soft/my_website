"use client";
import React, {
	useEffect,
	useState,
	forwardRef,
	useImperativeHandle,
	useRef,
} from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight, ExternalLink } from "lucide-react";
import BackgroundMusic from "./music";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

import { reviews, Review } from "@/data/reviews";
import { projects } from "../data/projects";
import { featuredServices } from "@/data/services";
import { TAG_MAPPING, DefaultIcon } from "../data/techStackIcons";
import { featuredStack } from "../data/techStack";
import { ScrollReveal } from "@/lib/scroll-reveal";
import accentStyles from "@/app/styles/accent";
// Colors
const Mail = ({ className = "w-6 h-6" }: { className?: string }) => (
	<svg
		className={className}
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
		/>
	</svg>
);

const Phone = ({ className = "w-6 h-6" }: { className?: string }) => (
	<svg
		className={className}
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
		/>
	</svg>
);

// const Star = ({ className = "w-6 h-6" }: { className?: string }) => (
// 	<svg className={className} fill="currentColor" viewBox="0 0 24 24">
// 		<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
// 	</svg>
// )

const Home = ({ className = "w-6 h-6" }: { className?: string }) => (
	<svg
		className={className}
		fill="none"
		stroke="currentColor"
		viewBox="0 0 24 24"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
		/>
	</svg>
);

const App: React.FC = () => {
	// Scroll Reveal
	useEffect(() => ScrollReveal(), []);

	const Header: React.FC = () => {
		const [isMenuOpen, setIsMenuOpen] = useState(false);
		const [isPlaying, setIsPlaying] = useState(true);
		const audioRef = useRef<HTMLAudioElement | null>(null);

		const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

		useEffect(() => {
			(window as any).startHusakMusic = () => {
				if (audioRef.current) {
					audioRef.current
						.play()
						.then(() => setIsPlaying(true))
						.catch((err) => console.log("Audio failed:", err));
				}
			};
		}, []);

		const toggleMusic = () => {
			if (audioRef.current) {
				if (isPlaying) {
					audioRef.current.pause();
					setIsPlaying(false);
				} else {
					audioRef.current
						.play()
						.then(() => setIsPlaying(true))
						.catch(() => console.log("User interaction required"));
				}
			}
		};

		const NavLinks: React.FC<{ isMobile?: boolean }> = ({
			isMobile = false,
		}) => {
			const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
				if (isMobile) toggleMenu();
				const href = e.currentTarget.getAttribute("href");
				if (href && href.startsWith("#")) {
					e.preventDefault();
					const element = document.querySelector(href);
					if (element) element.scrollIntoView({ behavior: "smooth" });
				}
			};

			return (
				<nav
					className={
						isMobile
							? "flex flex-col space-y-6 text-center"
							: "space-x-10 text-sm font-bold uppercase tracking-widest"
					}
				>
					{["Home", "Portfolio", "Services", "Tools", "Contact"].map((item) => (
						<a
							key={item}
							href={`#${item.toLowerCase()}`}
							className="group relative text-white/70 hover:text-green-500 transition-colors duration-300"
							onClick={handleClick}
						>
							{item}
							<span className="absolute -bottom-1 left-0 h-[1px] bg-green-500 w-0 group-hover:w-full transition-all duration-300"></span>
						</a>
					))}
				</nav>
			);
		};

		const MusicToggle = () => (
			<button
				onClick={toggleMusic}
				className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 hover:border-green-500/50 transition-all duration-300 group backdrop-blur-md"
				aria-label={isPlaying ? "Mute music" : "Play music"}
			>
				<div className="relative flex items-center justify-center">
					{isPlaying ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							className="w-4 h-4 text-green-500 animate-pulse"
						>
							<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
							<path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							className="w-4 h-4 text-white/40"
						>
							<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
							<line x1="23" y1="9" x2="17" y2="15"></line>
							<line x1="17" y1="9" x2="23" y2="15"></line>
						</svg>
					)}
				</div>
			</button>
		);

		return (
			<header className="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300">
				{/* Glassmorphism Container */}
				<div className="absolute inset-0 bg-[#0A0A0A]/40 backdrop-blur-md pointer-events-none border-b border-white/5" />

				<audio
					ref={audioRef}
					src="/music/tick-of-the-clock.mp3"
					loop
					preload="auto"
					playsInline
				/>

				<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center relative z-10">
					{/* Logo */}
					<a
						href="#home"
						className="text-2xl font-black tracking-tighter text-white"
					>
						HUSAK<span className="text-green-500">.</span>
					</a>

					{/* Desktop Nav */}
					<div className="hidden md:block">
						<NavLinks />
					</div>

					{/* Right Side Actions */}
					<div className="flex items-center space-x-4">
						<MusicToggle />

						{/* Contact Pill */}
						{/* <div className="hidden lg:flex items-center space-x-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-lg">
							<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
							<span className="text-xs font-bold text-white/90 tracking-wider">
								+92-3265773718
							</span>
						</div> */}

						<div className="hidden lg:flex items-center space-x-4 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full backdrop-blur-lg hover:border-green-500/30 transition-colors duration-300 group/pill">
							{/* Status Indicator */}
							<div className="relative flex items-center justify-center">
								<div className="absolute w-2 h-2 bg-green-500 rounded-full animate-ping opacity-75" />
								<div className="relative w-2 h-2 bg-green-500 rounded-full" />
							</div>

							<div className="flex flex-col leading-tight">
								<span className="text-[10px] uppercase tracking-[0.2em] text-white/40 font-bold">
									Any Questions?
								</span>
								<a
									href="tel:+923265773718"
									className="text-xs font-bold text-white/90 tracking-wider group-hover/pill:text-green-500 transition-colors"
								>
									+92-3265773718
								</a>
							</div>
						</div>

						{/* Mobile Menu Toggle */}
						<button className="md:hidden text-white p-2" onClick={toggleMenu}>
							{isMenuOpen ? (
								<span className="text-2xl font-light">✕</span>
							) : (
								<div className="space-y-1.5">
									<div className="w-6 h-0.5 bg-white"></div>
									<div className="w-4 h-0.5 bg-green-500 ml-auto"></div>
								</div>
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu Overlay */}
				<div
					className={`md:hidden absolute w-full bg-[#0A0A0A]/95 backdrop-blur-2xl transition-all duration-500 ease-in-out border-b border-white/10 overflow-hidden ${
						isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
					}`}
				>
					<div className="p-12 flex flex-col items-center">
						<NavLinks isMobile={true} />
						<div className="mt-10 pt-8 border-t border-white/5 w-full flex justify-center">
							<span className="text-white/40 text-xs tracking-[0.3em] uppercase">
								Connect With Me
							</span>
						</div>
					</div>
				</div>
			</header>
		);
	};

	const HomeSection: React.FC = () => {
		useEffect(() => {
			const canvas = document.getElementById(
				"tech-stars-canvas",
			) as HTMLCanvasElement;
			if (!canvas) return;

			const ctx = canvas.getContext("2d");
			if (!ctx) return;

			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;

			const stars: Array<{
				x: number;
				y: number;
				size: number;
				speedX: number;
				speedY: number;
				opacity: number;
			}> = [];
			const numStars = 80;

			for (let i = 0; i < numStars; i++) {
				stars.push({
					x: Math.random() * canvas.width,
					y: Math.random() * canvas.height,
					size: Math.random() * 2 + 0.5,
					speedX: (Math.random() - 0.5) * 0.3,
					speedY: (Math.random() - 0.5) * 0.3,
					opacity: Math.random() * 0.5 + 0.3,
				});
			}

			function animate() {
				if (!ctx || !canvas) return;
				ctx.clearRect(0, 0, canvas.width, canvas.height);

				stars.forEach((star) => {
					ctx.beginPath();
					ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
					ctx.fillStyle = `rgba(57, 255, 20, ${star.opacity})`;
					ctx.fill();

					ctx.shadowBlur = 10;
					ctx.shadowColor = `rgba(57, 255, 20, ${star.opacity * 0.5})`;
					ctx.fill();
					ctx.shadowBlur = 0;

					star.x += star.speedX;
					star.y += star.speedY;

					if (star.x < 0) star.x = canvas.width;
					if (star.x > canvas.width) star.x = 0;
					if (star.y < 0) star.y = canvas.height;
					if (star.y > canvas.height) star.y = 0;

					star.opacity += (Math.random() - 0.5) * 0.02;
					star.opacity = Math.max(0.2, Math.min(0.8, star.opacity));
				});

				requestAnimationFrame(animate);
			}

			animate();

			const handleResize = () => {
				canvas.width = window.innerWidth;
				canvas.height = window.innerHeight;
			};

			window.addEventListener("resize", handleResize);
			return () => window.removeEventListener("resize", handleResize);
		}, []);

		return (
			<section
				id="home"
				className="hero-tech-bg pt-24 pb-24 md:pt-28 md:pb-32 min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center relative overflow-hidden"
			>
				<canvas id="tech-stars-canvas" className="absolute inset-0 z-0" />
				<div className="max-w-6xl mx-auto px-4 reveal-on-scroll relative z-10">
					<p className="text-md font-bold uppercase tracking-[0.5em] text-accent mb-6">
						STRATEGY | DESIGN | CODE
					</p>
					<h1 className="text-6xl md:text-8xl lg:text-[100px] font-extrabold tracking-tighter leading-none mb-8 text-white">
						Scaling Digital <br /> Realities.
					</h1>
					<p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto mb-12">
						We engineer tomorrow&apos;s technology today, transforming ambitious
						concepts into high-performance, scalable, and user-centric digital
						products.
					</p>
					<div className="flex flex-col sm:flex-row justify-center gap-6">
						<a
							href="#contact"
							className="px-8 py-4 rounded-xl bg-accent text-black font-bold text-lg glow-hover hover:opacity-90 shadow-2xl"
						>
							Let&apos;s Connect →
						</a>
						<a
							href="#portfolio"
							className="px-8 py-4 rounded-xl border border-gray-700 text-white font-semibold text-lg hover-border-accent glow-hover"
						>
							See Our Impact
						</a>
					</div>
				</div>
			</section>
		);
	};

	// Portfolio Section
	const PortfolioSection: React.FC = () => {
		// Show top 3 projects
		const topProjects = projects.slice(0, 3);

		return (
			<section id="portfolio" className="py-24 bg-[#1A1A1A]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mb-16 reveal-on-scroll text-center">
						<span className="text-md font-bold uppercase tracking-[0.5em] text-accent mb-4 block">
							OUR WORK
						</span>
						<h2 className="text-6xl md:text-7xl font-extrabold text-white mb-6">
							Portfolio
						</h2>
						<p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto">
							Explore our collection of completed projects showcasing
							innovation, technical excellence, and design mastery across
							various industries.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{topProjects.map((project, index) => (
							<div
								key={project.id}
								className={`group ${index > 0 ? "hidden md:block" : ""}`}
							>
								<div
									className="bg-[#141414] rounded-2xl overflow-hidden border border-gray-800 glow-hover h-full flex flex-col reveal-on-scroll"
									style={{ transitionDelay: `${(index % 3) * 50}ms` }}
								>
									{/* Image Container */}
									<div className="aspect-video overflow-hidden relative">
										<Image
											src={project.image}
											alt={project.title}
											fill
											className="object-cover transition-transform duration-700 group-hover:scale-110"
										/>
										<div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
											<a
												href={project.link}
												target="_blank"
												rel="noopener noreferrer"
												className="px-6 py-3 bg-accent text-black font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2"
											>
												View Project <ExternalLink size={18} />
											</a>
										</div>
									</div>
									{/* Project Info */}
									<div className="p-6 flex flex-col grow">
										<h3 className="text-2xl font-bold mb-3 text-white">
											{project.title}
										</h3>
										<p className="text-[#A0A0A0] mb-4 text-sm leading-relaxed grow">
											{project.description}
										</p>
										<div className="mt-auto">
											<div className="flex flex-wrap gap-2 mb-4">
												{project.tags.slice(0, 3).map((tag, i) => {
													const mapping = TAG_MAPPING[tag];
													const Icon = mapping?.icon || DefaultIcon;
													const color = mapping?.color || "#9CA3AF";
													return (
														<span
															key={i}
															className="flex items-center gap-1 text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full border border-gray-700 hover:border-gray-600 transition-colors"
														>
															<Icon style={{ color }} className="w-3 h-3" />
															{tag}
														</span>
													);
												})}
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					</div>

					<div className="mt-12 text-center reveal-on-scroll">
						<a
							href="/portfolio"
							className="px-8 py-4 rounded-xl border border-gray-700 text-white font-semibold text-lg hover:border-accent glow-hover inline-flex items-center gap-2 group transition-all duration-300"
						>
							Show More Projects
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</a>
					</div>
				</div>
			</section>
		);
	};

	// Services Section
	const ServicesSection: React.FC = () => {
		return (
			<section id="services" className="py-24 bg-[#0A0A0A]">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mb-16 reveal-on-scroll text-center">
						<span className="text-md font-bold uppercase tracking-[0.5em] text-accent mb-4 block">
							WHAT WE OFFER
						</span>
						<h2 className="text-6xl md:text-7xl font-extrabold text-white mb-6">
							Services
						</h2>
						<p className="text-[#A0A0A0] max-w-xl mx-auto">
							Our full-spectrum service offering covers everything from initial
							concept and strategy to deployment and long-term optimization.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{featuredServices.map((service, idx) => {
							const { Icon } = service;
							// Show only first 3 on mobile (idx < 3), all 6 on desktop
							const hiddenClass = idx >= 3 ? "hidden md:block" : "";

							return (
								<div
									key={idx}
									className={`p-8 rounded-xl reveal-on-scroll border border-gray-700 bg-[#141414] glow-hover ${hiddenClass}`}
									style={{ transitionDelay: `${(idx % 3) * 50}ms` }}
								>
									<Icon className="w-10 h-10 text-accent mb-4" />
									<h3 className="text-2xl font-semibold text-white mb-3">
										{service.title}
									</h3>
									<p className="text-[#A0A0A0] mb-4">{service.description}</p>
								</div>
							);
						})}
					</div>

					<div className="mt-12 text-center reveal-on-scroll">
						<Link
							href="/services"
							className="px-8 py-4 rounded-xl border border-gray-700 text-white font-semibold text-lg hover:border-accent glow-hover inline-flex items-center gap-2 group transition-all duration-300"
						>
							View All Services
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</Link>
					</div>
				</div>
			</section>
		);
	};

	const TechStackSection: React.FC = () => {
		return (
			<section id="tools" className="py-24 bg-[#1A1A1A]">
				<div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<div className="mb-16 reveal-on-scroll">
						<span className="text-md font-bold uppercase tracking-[0.5em] text-accent mb-4 block">
							OUR ARSENAL
						</span>
						<h2 className="lg:text-6xl text-5xl md:text-balance sm:text-balance md:text-7xl font-extrabold text-white mb-6">
							Tools & Technologies
						</h2>
						<p className="text-xl    text-[#A0A0A0] max-w-2xl mx-auto">
							We leverage industry-leading tools and technologies to build
							exceptional digital products.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{featuredStack.map((stack, idx) => {
							const hiddenClass = idx >= 3 ? "hidden md:block" : "";
							const { Icon } = stack;
							return (
								<div
									key={idx}
									className={`p-8 rounded-xl border border-gray-700 bg-[#141414] glow-hover text-left flex flex-col h-full ${hiddenClass} reveal-on-scroll`}
									style={{ transitionDelay: `${(idx % 3) * 50}ms` }}
								>
									<Icon className="w-10 h-10 text-accent mb-4" />
									<h3 className="text-2xl font-semibold text-white mb-3">
										{stack.category}
									</h3>
									<div className="flex flex-wrap gap-3 mt-auto">
										{stack.tools.map((tool, toolIdx) => {
											const mapping = TAG_MAPPING[tool];
											const Icon = mapping?.icon || DefaultIcon;
											const color = mapping?.color || "#9CA3AF";
											return (
												<span
													key={toolIdx}
													className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/5 text-gray-300 border border-accent/10 text-sm hover:border-accent/40 hover:bg-accent/10 transition-all duration-300"
												>
													<Icon style={{ color }} className="w-4 h-4" />
													{tool}
												</span>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>
					<div className="mt-12 text-center reveal-on-scroll">
						<Link
							href="/services#tools"
							className="px-8 py-4 rounded-xl border border-gray-700 text-white font-semibold text-lg hover:border-accent glow-hover inline-flex items-center gap-2 group transition-all duration-300"
						>
							View All Tools
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</Link>
					</div>
				</div>
			</section>
		);
	};

	const ClientReviews: React.FC = () => {
		const [index, setIndex] = useState(0);
		const [isFading, setIsFading] = useState(false);

		// Auto-rotate logic
		useEffect(() => {
			const timer = setInterval(() => {
				triggerTransition((index + 1) % reviews.length);
			}, 4000); // 4 seconds for better readability
			return () => clearInterval(timer);
		}, [index]);

		const triggerTransition = (nextIndex: number) => {
			setIsFading(true);
			setTimeout(() => {
				setIndex(nextIndex);
				setIsFading(false);
			}, 400);
		};

		const currentReview = reviews[index];

		return (
			<section id="reviews" className="py-24 bg-[#0A0A0A] overflow-hidden">
				<div className="max-w-5xl mx-auto px-6">
					{/* Header Section */}
					<div className="text-center mb-16">
						<div className="inline-flex items-center space-x-2 bg-[#39FF14]/10 border border-[#39FF14]/20 px-4 py-1.5 rounded-full mb-6">
							<div className="w-2 h-2 bg-[#39FF14] rounded-full animate-pulse shadow-[0_0_8px_#39FF14]" />
							<span className="text-[#39FF14] text-[10px] font-black uppercase tracking-[0.3em]">
								Happy Clients
							</span>
						</div>

						<h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-4">
							Success Stories<span className="text-[#39FF14]">.</span>
						</h2>
						<p className="text-[#A0A0A0] text-lg max-w-xl mx-auto font-medium">
							Hear from the innovators and leaders we've partnered with.
						</p>
					</div>

					<div className="relative">
						{/* The Single Animated Card */}
						<div
							className={`relative z-10 p-10 md:p-20 rounded-3xl bg-[#141414] border border-white/5 transition-all duration-500 ease-in-out shadow-2xl ${
								isFading
									? "opacity-0 translate-y-4 scale-95"
									: "opacity-100 translate-y-0 scale-100"
							}`}
						>
							{/* Huge Background Quote Decoration */}
							<Quote className="absolute top-10 left-10 w-32 h-32 text-[#39FF14]/5 -z-10" />

							<div className="flex flex-col items-center text-center">
								{/* Stars */}
								<div className="flex gap-1.5 mb-10">
									{[...Array(5)].map((_, i) => (
										<Star
											key={i}
											size={20}
											className={
												i < currentReview.rating
													? "fill-[#39FF14] text-[#39FF14] drop-shadow-[0_0_5px_#39FF14]"
													: "text-gray-800"
											}
										/>
									))}
								</div>

								{/* Review Content */}
								<blockquote className="text-2xl md:text-4xl text-white font-bold tracking-tight leading-[1.1] mb-12">
									"{currentReview.content}"
								</blockquote>

								{/* Author Branding */}
								<div className="flex flex-col items-center">
									<div className="w-16 h-16 rounded-2xl bg-[#39FF14]/5 border border-[#39FF14]/20 flex items-center justify-center text-[#39FF14] font-black text-3xl mb-4 rotate-3 group-hover:rotate-0 transition-transform">
										{currentReview.name.charAt(0)}
									</div>
									<h4 className="text-white text-xl font-bold tracking-tight">
										{currentReview.name}
									</h4>
									<p className="text-[#39FF14] text-xs font-black uppercase tracking-[0.4em] mt-1">
										{currentReview.role}
									</p>
								</div>
							</div>
						</div>

						{/* Navigation Dots (Progress Style) */}
						<div className="mt-12 flex justify-center items-center gap-4">
							{reviews.map((_, i) => (
								<button
									key={i}
									onClick={() => triggerTransition(i)}
									className={`transition-all duration-500 rounded-full ${
										i === index
											? "w-10 h-1.5 bg-[#39FF14] shadow-[0_0_15px_#39FF14]"
											: "w-1.5 h-1.5 bg-white/10 hover:bg-white/30"
									}`}
								/>
							))}
						</div>

						{/* Desktop Arrows */}
						<button
							onClick={() =>
								triggerTransition((index - 1 + reviews.length) % reviews.length)
							}
							className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 lg:-translate-x-24 p-4 text-white/10 hover:text-[#39FF14] transition-all hidden md:block"
						>
							<ChevronLeft size={48} strokeWidth={1} />
						</button>
						<button
							onClick={() => triggerTransition((index + 1) % reviews.length)}
							className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 lg:translate-x-24 p-4 text-white/10 hover:text-[#39FF14] transition-all hidden md:block"
						>
							<ChevronRight size={48} strokeWidth={1} />
						</button>
					</div>
				</div>
			</section>
		);
	};
	const WhatsAppContact: React.FC = () => {
		const phoneNumber = "+923265773718";
		const message = encodeURIComponent(
			"Hello! I'm interested in working with the architects.",
		);

		return (
			<a
				href={`https://wa.me/${phoneNumber}?text=${message}`}
				target="_blank"
				rel="noopener noreferrer"
				className="fixed bottom-8 right-8 z-40 group"
			>
				<span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1 bg-[#1A1A1A] text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10 whitespace-nowrap">
					Chat with us
				</span>
				<div className="relative p-4 rounded-full bg-[#074d1e] border border-white/10 text-white transition-all duration-300 hover:border-accent hover:scale-110 shadow-2xl glow-hover">
					<div className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 group-hover:opacity-10 blur-md transition-opacity"></div>
					<MessageCircle size={28} className="relative z-10" />
				</div>
			</a>
		);
	};

	const ContactSection: React.FC = () => {
		return (
			<section id="contact" className="py-24  bg-[#1A1A1A]">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-[#141414] p-8 md:p-12 rounded-2xl reveal-on-scroll border border-gray-800 flex flex-col items-center text-center">
						<span className="text-md font-bold uppercase tracking-widest text-accent mb-2 block">
							Initiate Connection
						</span>
						<h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
							Ready To Start Your Project?
						</h2>
						<p className="text-[#A0A0A0] mb-8 max-w-lg">
							Tell us about your project, your challenges, and your vision.
							We&apos;ll respond within one business cycle.
						</p>

						<div className="space-y-4 w-full max-w-md">
							<div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-white">
								<div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center sm:justify-start">
									<Mail className="w-5 h-5 text-accent shrink-0" />
									<span className="text-[#A0A0A0] break-all sm:wrap-break-words text-center sm:text-left">
										husak.softdev@gmail.com
									</span>
								</div>
							</div>

							<div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-white">
								<div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center sm:justify-start">
									<Phone className="w-5 h-5 text-accent shrink-0" />
									<span className="text-[#A0A0A0] text-center sm:text-left">
										+92-3265773718
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	};

	const Footer: React.FC = () => (
		<footer className="bg-[#0A0A0A] pt-16 pb-6 border-t border-gray-800">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
					<div className="flex flex-col">
						<a
							href="#home"
							className="flex items-center space-x-2 text-2xl font-black tracking-widest text-white mb-2"
						>
							HUSAK<span className="text-accent">.</span>
						</a>
						<p className="text-sm text-[#A0A0A0]">
							&copy; 2024 Husak Solutions. All Rights Reserved.
						</p>
					</div>
					<div className="flex flex-wrap space-x-6 text-sm text-[#A0A0A0]">
						<a
							href="#portfolio"
							className="hover-text-accent transition duration-300"
						>
							Work
						</a>
						<a
							href="#services"
							className="hover-text-accent transition duration-300"
						>
							Services
						</a>
						<a href="#" className="hover-text-accent transition duration-300">
							Privacy
						</a>
					</div>
				</div>
			</div>
		</footer>
	);

	return (
		<>
			<style>{accentStyles}</style>
			<Header />
			<WhatsAppContact />
			<main>
				<HomeSection />
				<PortfolioSection />
				<ServicesSection />
				<TechStackSection />
				<ClientReviews />
				<ContactSection />
			</main>
			<Footer />
		</>
	);
};

export default App;
