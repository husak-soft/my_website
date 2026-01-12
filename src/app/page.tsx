"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Data
const projects = [
  {
    id: 1,
    title: "Sleet",
    description:
      "A logistics management platform with a specialized real-time tracking engine and predictive analytics for the complex supply chain landscape.",
    image: "/images/sleet.png",
    link: "https://sleet.sa/",
  },
  {
    id: 2,
    title: "Ordrio",
    description:
      "A powerful, custom Shopify solution offering deep backend customization and complex API integrations that standard apps cannot provide.",
    image: "/images/ordrio.png",
    link: "https://ordrio.com/",
  },
  {
    id: 3,
    title: "SkipTheCall",
    description:
      "An automated call response system designed to handle customer inquiries efficiently, reducing wait times and operational overhead.",
    image: "/images/skipthecall.png",
    link: "https://skipthecall.com/",
  },
  {
    id: 4,
    title: "MediConnect",
    description:
      "A comprehensive patient management and telemedicine platform streamlining healthcare delivery with real-time consultations.",
    image: "/images/nero.png",
    link: "https://mediconnect.com/",
  },
  {
    id: 5,
    title: "FitTrack",
    description:
      "AI-powered fitness tracking and meal planning application helping users achieve their health goals with personalized recommendations.",
    image: "/images/blockbook.png",
    link: "https://fittrack.com/",
  },
  {
    id: 6,
    title: "CloudStore",
    description:
      "B2B marketplace with advanced inventory management enabling seamless enterprise-level transactions and supply chain optimization.",
    image: "/images/gigle.png",
    link: "https://cloudstore.com/",
  },
];

// Colors
const ACCENT_GREEN = "#39FF14";
const ACCENT_GREEN_RGB = "57, 255, 20";

// Lucide Icons
const Code = ({ className = "w-6 h-6" }: { className?: string }) => (
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
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
);

const Palette = ({ className = "w-6 h-6" }: { className?: string }) => (
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
      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
    />
  </svg>
);

const Brain = ({ className = "w-6 h-6" }: { className?: string }) => (
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
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

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

const Star = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const Database = ({ className = "w-6 h-6" }: { className?: string }) => (
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
      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
    />
  </svg>
);

const Shield = ({ className = "w-6 h-6" }: { className?: string }) => (
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
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    />
  </svg>
);

const Globe = ({ className = "w-6 h-6" }: { className?: string }) => (
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
      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const Cloud = ({ className = "w-6 h-6" }: { className?: string }) => (
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
      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
    />
  </svg>
);

const Smartphone = ({ className = "w-6 h-6" }: { className?: string }) => (
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
      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
);

const Zap = ({ className = "w-6 h-6" }: { className?: string }) => (
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
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
);

const Settings = ({ className = "w-6 h-6" }: { className?: string }) => (
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
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const ArrowRight = ({ className = "w-6 h-6" }: { className?: string }) => (
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
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

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

const TrendingUp = ({ className = "w-6 h-6" }: { className?: string }) => (
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
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    />
  </svg>
);

const ShoppingCart = ({ className = "w-6 h-6" }: { className?: string }) => (
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
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const App: React.FC = () => {
  const [showServicesDetail, setShowServicesDetail] = useState(false);

  // Scroll Reveal
  useEffect(() => {
    const isElementInViewport = (el: Element): boolean => {
      const rect: DOMRect = el.getBoundingClientRect();
      const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
      return (
        rect.top <= windowHeight - 150 &&
        rect.left <=
          (window.innerWidth || document.documentElement.clientWidth) &&
        rect.bottom >= 0 &&
        rect.right >= 0
      );
    };

    const handleScrollReveal = () => {
      const elements: NodeListOf<Element> =
        document.querySelectorAll(".reveal-on-scroll");
      elements.forEach((element: Element) => {
        if (isElementInViewport(element)) {
          if (element instanceof HTMLElement) {
            element.classList.add("active");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollReveal);
    handleScrollReveal();

    return () => {
      window.removeEventListener("scroll", handleScrollReveal);
    };
  }, []);

  // Header
  const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const NavLinks: React.FC<{ isMobile?: boolean }> = ({
      isMobile = false,
    }) => {
      const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (isMobile && toggleMenu) {
          toggleMenu();
        }
        const href = e.currentTarget.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }
      };

      return (
        <nav
          className={
            isMobile
              ? "flex flex-col space-y-4 pt-4 pb-8"
              : "space-x-8 text-lg font-medium"
          }
        >
          {["Home", "Portfolio", "Services", "Contact"].map((item) => {
            const href = `#${item.toLowerCase()}`;
            return (
              <a
                key={item}
                href={href}
                className="group relative text-white hover:text-green-500 transition-colors duration-300 inline-block"
                onClick={handleClick}
              >
                {item}
                <span className="absolute left-0 bottom-0 h-0.5 bg-green-500 w-0 group-hover:w-full transition-all duration-300 ease-out group-hover:transition-all group-hover:duration-300 group-hover:ease-out"></span>
              </a>
            );
          })}
        </nav>
      );
    };

    return (
      <header className="sticky top-0 z-50 bg-[#0A0A0A] bg-opacity-95 backdrop-blur-sm border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-2 flex justify-between items-center relative">
          <a
            href="#home"
            className="flex items-center space-x-2 text-2xl font-black tracking-widest text-accent"
          >
            HUSAK
          </a>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
              <NavLinks />
            </div>
            <div className="hidden md:flex flex-col items-end bg-accent/10 px-4 py-2 rounded-lg">
              <span className="text-green-500 font-semibold flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.494a1 1 0 01-.212 1.04l-2.257 2.257a16.043 16.043 0 006.586 6.586l2.257-2.257a1 1 0 011.04-.212l4.494 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C7.82 21 3 16.18 3 10V5z"
                  />
                </svg>
                <span>Any Question?</span>
              </span>
              <span className="text-white font-bold text-lg mt-1">
                +92-3416429260
              </span>
            </div>

            <button
              className="md:hidden p-2 rounded-lg border border-gray-700 text-white hover-border-accent transition duration-300 z-50 ml-4"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              )}
            </button>
          </div>
        </div>
        <div
          className={`md:hidden absolute w-full transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen
              ? "max-h-screen border-t border-[#1A1A1A] bg-[#0A0A0A] bg-opacity-95 backdrop-blur-md"
              : "max-h-0"
          }`}
          style={{ top: "100%" }}
        >
          <div className="px-4 pt-4 sm:px-6">
            <NavLinks isMobile={true} />
          </div>
        </div>
      </header>
    );
  };

  // Home Section
  const HomeSection: React.FC = () => {
    useEffect(() => {
      const canvas = document.getElementById(
        "tech-stars-canvas"
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
          <p className="text-sm font-semibold uppercase tracking-[0.5em] text-accent mb-6">
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
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(projects.length / itemsPerPage);

    const nextSlide = () => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
      setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const goToSlide = (index: number) => {
      setCurrentIndex(index);
    };

    const visibleProjects = projects.slice(
      currentIndex * itemsPerPage,
      currentIndex * itemsPerPage + itemsPerPage
    );

    return (
      <section id="portfolio" className="py-24 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center reveal-on-scroll">
            <span className="text-sm font-semibold uppercase tracking-[0.5em] text-accent mb-4 block">
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

          {/* Carousel */}
          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-2 rounded-full bg-[#141414] border border-gray-800 hover:border-accent transition-colors hidden md:block"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-2 rounded-full bg-[#141414] border border-gray-800 hover:border-accent transition-colors hidden md:block"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            {/* Projects Grid */}
            <div className="overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                  {visibleProjects.map((project) => (
                    <div key={project.id} className="group">
                      <div className="bg-[#141414] rounded-2xl overflow-hidden border border-gray-800 glow-hover">
                        {/* Project Image */}
                        <div className="aspect-video overflow-hidden">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={600}
                            height={400}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        {/* Project Info */}
                        <div className="p-6">
                          <h3 className="text-2xl font-bold mb-3 text-white">
                            {project.title}
                          </h3>
                          <p className="text-[#A0A0A0] mb-4 text-sm leading-relaxed">
                            {project.description}
                          </p>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-accent hover:underline font-medium text-sm"
                          >
                            {project.link}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dot Navigation */}
            <div className="flex justify-center gap-3 mt-12">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? "bg-accent scale-125"
                      : "bg-gray-600 hover:bg-gray-500"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Services Section
  const ServicesSection: React.FC = () => {
    const services = [
      {
        Icon: Code,
        title: "Custom Software Engineering",
        description:
          "Building bespoke, high-load web applications and robust backend systems using microservices and modern cloud infrastructure.",
      },
      {
        Icon: Palette,
        title: "Experience Design (UX/UI)",
        description:
          "Data-driven design processes focused on intuitive user journeys, accessibility, and pixel-perfect interface execution across all devices.",
      },
      {
        Icon: Brain,
        title: "AI & Machine Learning",
        description:
          "Integrating advanced machine learning models for predictive analytics, process automation, and intelligent data utilization.",
      },
      {
        Icon: Database,
        title: "Database Architecture",
        description:
          "Designing scalable database solutions with optimal performance, data integrity, and efficient query optimization for complex applications.",
      },
      {
        Icon: Shield,
        title: "Cybersecurity Solutions",
        description:
          "Implementing robust security measures, penetration testing, and compliance frameworks to protect your digital assets and user data.",
      },
      {
        Icon: Globe,
        title: "API Development & Integration",
        description:
          "Creating RESTful and GraphQL APIs with comprehensive documentation, third-party integrations, and microservices architecture.",
      },
      {
        Icon: Cloud,
        title: "Cloud Infrastructure",
        description:
          "Architecting and deploying scalable cloud solutions on AWS, Azure, and GCP with automated DevOps pipelines and monitoring.",
      },
      {
        Icon: Smartphone,
        title: "Mobile App Development",
        description:
          "Native and cross-platform mobile applications with seamless performance, offline capabilities, and intuitive user experiences.",
      },
      {
        Icon: Zap,
        title: "Performance Optimization",
        description:
          "Analyzing and enhancing application performance through code optimization, caching strategies, and infrastructure improvements.",
      },
      {
        Icon: Settings,
        title: "Technical Consulting",
        description:
          "Strategic technology guidance including architecture reviews, stack recommendations, code audits, and scalability planning.",
      },
      {
        Icon: TrendingUp,
        title: "Digital Marketing",
        description:
          "Comprehensive digital marketing strategies including SEO, SEM, social media marketing, content marketing, and analytics-driven campaigns.",
      },
      {
        Icon: ShoppingCart,
        title: "E-Commerce Solutions",
        description:
          "End-to-end e-commerce development with custom storefronts, payment integrations, inventory management, and conversion optimization.",
      },
    ];

    return (
      <section id="services" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 reveal-on-scroll">
            <h2 className="text-5xl font-extrabold text-white mb-4">
              Services
            </h2>
            <p className="text-[#A0A0A0] max-w-xl">
              Our full-spectrum service offering covers everything from initial
              concept and strategy to deployment and long-term optimization.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const { Icon } = service;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-xl reveal-on-scroll border border-gray-700 bg-[#141414] glow-hover"
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <Icon className="w-10 h-10 text-accent mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-[#A0A0A0] mb-4">{service.description}</p>
                  <button
                    onClick={() => setShowServicesDetail(true)}
                    className="inline-flex items-center gap-2 text-accent font-semibold hover:opacity-80 transition-opacity"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  };

  // Services Detail Page
  const ServicesDetailPage: React.FC = () => {
    const techStack = [
      {
        category: "Frontend",
        tools: [
          "React",
          "Next.js",
          "Vue.js",
          "Angular",
          "TypeScript",
          "Tailwind CSS",
          "Redux",
          "HTML5/CSS3",
        ],
      },
      {
        category: "Backend",
        tools: [
          "Node.js",
          "Python",
          "Nest.js",
          "Flask",
          "Django",
          "Express.js",
          "GraphQL",
          "RESTful APIs",
        ],
      },
      {
        category: "Mobile",
        tools: ["React Native", "Flutter", "Swift", "Kotlin", "Ionic", "PWA"],
      },
      {
        category: "Databases",
        tools: [
          "PostgreSQL",
          "MongoDB",
          "MySQL",
          "Redis",
          "Firebase",
          "DynamoDB",
          "Elasticsearch",
        ],
      },
      {
        category: "Cloud & DevOps",
        tools: [
          "AWS",
          "Google Cloud",
          "Azure",
          "Docker",
          "Kubernetes",
          "CI/CD",
          "Terraform",
          "Jenkins",
        ],
      },
      {
        category: "AI & ML",
        tools: [
          "TensorFlow",
          "PyTorch",
          "OpenAI",
          "Scikit-learn",
          "Pandas",
          "NumPy",
          "LangChain",
        ],
      },
      {
        category: "Payment Integration",
        tools: [
          "Stripe",
          "PayPal",
          "Square",
          "Razorpay",
          "Braintree",
          "Crypto Payments",
        ],
      },
      {
        category: "Testing & Quality",
        tools: [
          "Jest",
          "Cypress",
          "Selenium",
          "JUnit",
          "Postman",
          "SonarQube",
          "Playwright",
        ],
      },
      {
        category: "Version Control",
        tools: ["Git", "GitHub", "GitLab", "Bitbucket", "Jira", "Confluence"],
      },
      {
        category: "Design & Prototyping",
        tools: [
          "Figma",
          "Adobe XD",
          "Sketch",
          "InVision",
          "Photoshop",
          "Illustrator",
        ],
      },
      {
        category: "E-Commerce",
        tools: [
          "Shopify",
          "WooCommerce",
          "Magento",
          "BigCommerce",
          "Stripe Commerce",
          "Custom Storefronts",
        ],
      },
      {
        category: "Marketing & Analytics",
        tools: [
          "Google Analytics",
          "Mixpanel",
          "HubSpot",
          "Mailchimp",
          "SEMrush",
          "Google Ads",
          "Meta Ads",
        ],
      },
    ];

    const allServices = [
      {
        Icon: Code,
        title: "Custom Software Engineering",
        description:
          "We build custom web applications tailored to your specific business needs. Our team uses cutting-edge technologies and agile methodologies to deliver scalable, maintainable solutions. From MVPs to enterprise-level systems, we handle complex integrations, microservices architecture, and high-load applications.",
      },
      {
        Icon: Palette,
        title: "Experience Design (UX/UI)",
        description:
          "Our design philosophy centers on user research and data-driven decisions. We create intuitive interfaces that delight users while achieving business goals. Our process includes wireframing, prototyping, usability testing, and accessibility compliance (WCAG standards).",
      },
      {
        Icon: Brain,
        title: "AI & Machine Learning",
        description:
          "Leverage the power of artificial intelligence with our ML solutions. We implement predictive models, natural language processing, computer vision, and recommendation systems. Our expertise includes training custom models and integrating pre-trained AI services.",
      },
      {
        Icon: Database,
        title: "Database Architecture",
        description:
          "We design robust database solutions that scale with your business. Our expertise spans SQL and NoSQL databases, data modeling, query optimization, backup strategies, and migration services. We ensure data integrity, security, and optimal performance.",
      },
      {
        Icon: Shield,
        title: "Cybersecurity Solutions",
        description:
          "Protect your digital assets with comprehensive security measures. We conduct security audits, penetration testing, implement encryption, manage authentication systems, and ensure compliance with industry standards like GDPR, HIPAA, and SOC 2.",
      },
      {
        Icon: Globe,
        title: "API Development & Integration",
        description:
          "Build robust APIs that power your applications and enable seamless integrations. We create RESTful and GraphQL APIs with comprehensive documentation, implement OAuth, webhooks, and integrate third-party services efficiently.",
      },
      {
        Icon: Cloud,
        title: "Cloud Infrastructure",
        description:
          "Migrate to the cloud or optimize your existing infrastructure. We architect scalable solutions on AWS, Azure, and GCP, implement auto-scaling, load balancing, and set up monitoring and alerting systems. Our DevOps practices ensure continuous deployment.",
      },
      {
        Icon: Smartphone,
        title: "Mobile App Development",
        description:
          "Create engaging mobile experiences for iOS and Android. Whether native or cross-platform, we build apps with smooth performance, offline capabilities, push notifications, and seamless backend integration. App Store optimization included.",
      },
      {
        Icon: Zap,
        title: "Performance Optimization",
        description:
          "Speed matters. We analyze your application's performance bottlenecks and implement solutions including code optimization, caching strategies, CDN setup, database indexing, and infrastructure improvements to deliver lightning-fast experiences.",
      },
      {
        Icon: Settings,
        title: "Technical Consulting",
        description:
          "Get expert guidance on technology decisions. We provide architecture reviews, technology stack recommendations, code audits, scalability planning, and technical due diligence for investments. Our consultants bring years of industry experience.",
      },
      {
        Icon: TrendingUp,
        title: "Digital Marketing",
        description:
          "Drive growth with our comprehensive digital marketing services. We offer SEO optimization, paid advertising (Google Ads, Meta Ads), social media management, content marketing, email campaigns, and analytics-driven strategy to maximize your ROI.",
      },
      {
        Icon: ShoppingCart,
        title: "E-Commerce Solutions",
        description:
          "Launch and scale your online store with our e-commerce expertise. We build custom storefronts, integrate payment gateways, set up inventory management, implement conversion optimization strategies, and provide ongoing support for platforms like Shopify, WooCommerce, and custom solutions.",
      },
    ];

    return (
      <div className="fixed inset-0 bg-[#0A0A0A] z-50 overflow-y-auto">
        {/* Home Button */}
        <div className="sticky top-0 z-10 bg-[#0A0A0A] border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <button
              onClick={() => setShowServicesDetail(false)}
              className="flex items-center gap-2 text-accent hover:opacity-80 transition-opacity font-semibold"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-20">
            <span className="text-sm font-semibold uppercase tracking-[0.5em] text-accent mb-4 block">
              WHAT WE OFFER
            </span>
            <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto">
              Comprehensive digital solutions designed to transform your
              business and drive innovation.
            </p>
          </div>

          {/* Services Overview */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              Service Overview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {allServices.map((service, idx) => {
                const { Icon } = service;
                return (
                  <div
                    key={idx}
                    className="p-8 rounded-xl border border-gray-700 bg-[#141414] glow-hover"
                  >
                    <Icon className="w-12 h-12 text-accent mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {service.title}
                    </h3>
                    <p className="text-[#A0A0A0] leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold uppercase tracking-[0.5em] text-accent mb-4 block">
                OUR ARSENAL
              </span>
              <h2 className="text-5xl font-bold text-white mb-4">
                Tools & Technologies
              </h2>
              <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto">
                We leverage industry-leading tools and technologies to build
                exceptional digital products.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {techStack.map((stack, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-gray-700 bg-[#141414] glow-hover"
                >
                  <h3 className="text-xl font-bold text-accent mb-4">
                    {stack.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.tools.map((tool, toolIdx) => (
                      <span
                        key={toolIdx}
                        className="px-3 py-1 rounded-full bg-accent/10 text-white border border-accent/20 text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-[#141414] p-12 rounded-2xl border border-gray-800">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-[#A0A0A0] mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our services can transform your business
              and bring your vision to life.
            </p>
            <button
              onClick={() => {
                setShowServicesDetail(false);
                setTimeout(() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="inline-flex px-8 py-4 rounded-xl bg-accent text-black font-bold text-lg glow-hover hover:opacity-90"
            >
              Contact Us →
            </button>
          </div>
        </div>
      </div>
    );
  };

  const WhatsAppContact: React.FC = () => {
    const phoneNumber = "+92-3416429260";
    const message = encodeURIComponent(
      "Hello! I'm interested in working with the architects."
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
      <section id="contact" className="py-24 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#141414] p-8 md:p-12 rounded-2xl reveal-on-scroll border border-gray-800 flex flex-col items-center text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-accent mb-2 block">
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
                  <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-[#A0A0A0] break-all sm:break-words text-center sm:text-left">
                    husak.soft@gmail.com
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-white">
                <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center sm:justify-start">
                  <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-[#A0A0A0] text-center sm:text-left">
                    +92-3416429260
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
              className="flex items-center space-x-2 text-2xl font-black tracking-widest text-accent mb-2"
            >
              Husak
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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

        body {
            font-family: 'Inter', sans-serif;
            background-color: #0A0A0A;
            color: #F0F0F0;
            scroll-behavior: smooth;
        }

        .text-accent { color: ${ACCENT_GREEN} !important; }
        .bg-accent { background-color: ${ACCENT_GREEN} !important; }
        .border-accent { border-color: ${ACCENT_GREEN} !important; }
        .hover-text-accent:hover { color: ${ACCENT_GREEN} !important; }
        .hover-border-accent:hover { border-color: ${ACCENT_GREEN} !important; }

        .hero-tech-bg {
            background: linear-gradient(135deg, #0A0A0A 0%, #0d1209 50%, #0A0A0A 100%);
            position: relative;
        }

        .hero-tech-bg::before {
            content: '';
            position: absolute;
            inset: 0;
            background:
              radial-gradient(circle at 20% 30%, rgba(57, 255, 20, 0.03) 0%, transparent 50%),
              radial-gradient(circle at 80% 70%, rgba(57, 255, 20, 0.02) 0%, transparent 50%);
            pointer-events: none;
        }

        .reveal-on-scroll {
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .reveal-on-scroll.active {
            opacity: 1;
            transform: translateY(0);
        }

        .glow-hover {
            transition: all 0.3s ease-out;
            box-shadow: 0 0 0px #0A0A0A;
            border: 1px solid transparent;
        }
        .glow-hover:hover {
            box-shadow: 0 0 15px rgba(${ACCENT_GREEN_RGB}, 0.4), 0 0 5px rgba(${ACCENT_GREEN_RGB}, 0.2);
            transform: translateY(-2px);
            border-color: ${ACCENT_GREEN};
        }
      `}</style>

      {showServicesDetail ? (
        <ServicesDetailPage />
      ) : (
        <>
          <Header />
          <WhatsAppContact />
          <main>
            <HomeSection />
            <PortfolioSection />
            <ServicesSection />
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
