"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MessageCircle } from "lucide-react"; // Assuming you use lucide-react for icons
import { projects } from "@/projects";
import { logoFont } from "./fonts";
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

// Colors
const ACCENT_GREEN = "#39FF14";
const ACCENT_GREEN_RGB = "57, 255, 20";

// Lucide Icons
const Code = ({ className = "w-6 h-6" }) => (
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

const Palette = ({ className = "w-6 h-6" }) => (
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

const Brain = ({ className = "w-6 h-6" }) => (
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

const Mail = ({ className = "w-6 h-6" }) => (
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

const Phone = ({ className = "w-6 h-6" }) => (
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

const ChevronDown = ({ className = "w-6 h-6" }) => (
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
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

const Star = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const Lightbulb = ({ className = "w-6 h-6" }) => (
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

const Rocket = ({ className = "w-6 h-6" }) => (
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

const Headphones = ({ className = "w-6 h-6" }) => (
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
      d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
    />
  </svg>
);

const App: React.FC = () => {
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
    // Optional: Add smooth scroll for anchor links
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
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
      {['Home', 'Portfolio', 'Services', 'Workflow', 'FAQ', 'Contact'].map((item) => {
        const href = `#${item.toLowerCase()}`;
        
        return (
          <a
            key={item}
            href={href}
            className="group relative text-white hover:text-green-500 transition-colors duration-300 inline-block"
            onClick={handleClick}
          >
            {item}
            {/* Underline that animates from left to right on hover and completes the animation */}
            <span className="absolute left-0 bottom-0 h-0.5 bg-green-500 w-0 group-hover:w-full transition-all duration-300 ease-out group-hover:transition-all group-hover:duration-300 group-hover:ease-out"></span>
          </a>
        );
      })}
    </nav>
  );
};


    return (
      <header className="sticky top-0 z-50 bg-[#0A0A0A] bg-opacity-95 backdrop-blur-sm border-b border-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center relative">
          <a
            href="#home"
            className={`flex items-center space-x-2 text-2xl font-black tracking-widest text-accent ${logoFont.className}`}
          >
            HUSAK
          </a>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex">
              <NavLinks />
            </div>
            <a
              href="#contact"
              className="hidden md:inline-flex px-5 py-2 rounded-full border border-accent text-accent text-md font-semibold glow-hover hover:bg-accent hover:text-black"
            >
              Start Project
            </a>
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
            <a
              href="#contact"
              className="block w-full text-center px-5 py-3 mb-6 rounded-full bg-accent text-black font-bold text-lg hover:opacity-90 transition duration-300"
              onClick={toggleMenu}
            >
              Start Project
            </a>
          </div>
        </div>
      </header>
    );
  };

  // Home
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

      // Create stars
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
          // Draw star
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(57, 255, 20, ${star.opacity})`;
          ctx.fill();

          // Add glow effect
          ctx.shadowBlur = 10;
          ctx.shadowColor = `rgba(57, 255, 20, ${star.opacity * 0.5})`;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Move star
          star.x += star.speedX;
          star.y += star.speedY;

          // Wrap around edges
          if (star.x < 0) star.x = canvas.width;
          if (star.x > canvas.width) star.x = 0;
          if (star.y < 0) star.y = canvas.height;
          if (star.y > canvas.height) star.y = 0;

          // Pulse opacity
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
        className="hero-tech-bg pt-32 pb-24 md:pt-40 md:pb-32 min-h-[85vh] flex flex-col justify-center items-center text-center relative overflow-hidden"
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
            We engineer tomorrow's technology today, transforming ambitious
            concepts into high-performance, scalable, and user-centric digital
            products.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-accent text-black font-bold text-lg glow-hover hover:opacity-90 shadow-2xl"
            >
              Let's Connect →
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

const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [currentSlide, setCurrentSlide] = useState(0)


  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: false,
    mode: 'free-snap',
    slides: { perView: 1.5, spacing: 20 },
    breakpoints: {
      '(min-width: 640px)': { slides: { perView: 2.5, spacing: 20 } },
      '(min-width: 1024px)': { slides: { perView: 3, spacing: 24 } },
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel)
    },
  })

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
            Explore our collection of completed projects showcasing innovation,
            technical excellence, and design mastery across various industries.
          </p>
        </div>

        {/* Carousel */}
        <div ref={sliderRef} className="keen-slider mb-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="keen-slider__slide bg-[#141414] rounded-2xl overflow-hidden border border-gray-800 glow-hover group"
            >
              <div className="aspect-video bg-gray-900 flex items-center justify-center text-[#A0A0A0] relative overflow-hidden">
                <span className="relative z-10">
                  <Image
                    src={project.image}
                    width={500}
                    height={500}
                    alt={project.title}
                  />
                </span>
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/10 transition-colors" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mt-2 mb-1">
                  {project.title}
                </h3>
                <p className="text-[#A0A0A0] mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-accent hover:opacity-80 transition-opacity"
                >
                  {project.link}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        {slider && (
          <div className="flex justify-center space-x-2 mt-4">
            {Array.from({ length: slider.current?.track?.details.slides.length || 1 }).map(
              (_, idx) => (
                <button
                  key={idx}
                  onClick={() => slider.current?.moveToIdx(idx)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === idx ? 'bg-accent' : 'bg-gray-700'
                  }`}
                />
              )
            )}
          </div>
        )}
      </div>
    </section>
  )
}

  // Services
  const ServicesSection: React.FC = () => (
    <section id="services" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 reveal-on-scroll">
          <h2 className="text-5xl font-extrabold text-white mb-4">Services</h2>
          <p className="text-[#A0A0A0] max-w-xl">
            Our full-spectrum service offering covers everything from initial
            concept and strategy to deployment and long-term optimization.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-8 rounded-xl reveal-on-scroll border border-gray-700 bg-[#141414] glow-hover">
            <Code className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-3">
              Custom Software Engineering
            </h3>
            <p className="text-[#A0A0A0]">
              Building bespoke, high-load web applications and robust backend
              systems using microservices and modern cloud infrastructure.
            </p>
          </div>
          <div
            className="p-8 rounded-xl reveal-on-scroll border border-gray-700 bg-[#141414] glow-hover"
            style={{ transitionDelay: "100ms" }}
          >
            <Palette className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-3">
              Experience Design (UX/UI)
            </h3>
            <p className="text-[#A0A0A0]">
              Data-driven design processes focused on intuitive user journeys,
              accessibility, and pixel-perfect interface execution across all
              devices.
            </p>
          </div>
          <div
            className="p-8 rounded-xl reveal-on-scroll border border-gray-700 bg-[#141414] glow-hover"
            style={{ transitionDelay: "200ms" }}
          >
            <Brain className="w-10 h-10 text-accent mb-4" />
            <h3 className="text-2xl font-semibold text-white mb-3">
              AI & Machine Learning
            </h3>
            <p className="text-[#A0A0A0]">
              Integrating advanced machine learning models for predictive
              analytics, process automation, and intelligent data utilization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );

  // Workflow
  const WorkflowSection: React.FC = () => {
    const workflowSteps = [
      {
        id: 1,
        Icon: Lightbulb,
        title: "Discovery & Strategy",
        subtitle: "Idea",
        description:
          "We dive deep into your business goals, target audience, and technical requirements. Through collaborative workshops, we define the product vision and create a comprehensive roadmap.",
        duration: "1-2 weeks",
      },
      {
        id: 2,
        Icon: Palette,
        title: "Design & Prototyping",
        subtitle: "Design",
        description:
          "Our design team crafts intuitive user experiences and stunning interfaces. We create interactive prototypes for validation before any code is written, ensuring alignment with your vision.",
        duration: "2-4 weeks",
      },
      {
        id: 3,
        Icon: Code,
        title: "Development & Testing",
        subtitle: "Development",
        description:
          "Using agile methodologies, we build your product with clean, scalable code. Continuous testing and integration ensure quality at every stage, with regular demos to keep you informed.",
        duration: "6-12 weeks",
      },
      {
        id: 4,
        Icon: Rocket,
        title: "Launch & Deployment",
        subtitle: "Delivery",
        description:
          "We handle the entire deployment process, from infrastructure setup to performance optimization. Our team ensures a smooth launch with zero downtime and comprehensive monitoring.",
        duration: "1-2 weeks",
      },
      {
        id: 5,
        Icon: Headphones,
        title: "Support & Optimization",
        subtitle: "Support",
        description:
          "Post-launch, we provide ongoing maintenance, performance monitoring, and feature enhancements. Our support team is always ready to ensure your product evolves with your business.",
        duration: "Ongoing",
      },
    ];

    return (
      <section id="workflow" className="py-24 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center reveal-on-scroll">
            <span className="text-sm font-semibold uppercase tracking-[0.5em] text-accent mb-4 block">
              HOW WE WORK
            </span>
            <h2 className="text-6xl md:text-7xl font-extrabold text-white mb-6">
              Our Workflow
            </h2>
            <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto">
              A proven, systematic approach to transforming ideas into
              exceptional digital products. Every step is designed for
              transparency, quality, and your success.
            </p>
          </div>
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-800" />
            {workflowSteps.map((step, idx) => {
              const { Icon } = step;
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.id}
                  className="relative mb-16 md:mb-24 reveal-on-scroll"
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-accent rounded-full items-center justify-center border-4 border-[#1A1A1A] z-10">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <div
                    className={`md:w-[calc(50%-4rem)] ${
                      isEven
                        ? "md:ml-0 md:mr-auto md:pr-16"
                        : "md:ml-auto md:mr-0 md:pl-16"
                    }`}
                  >
                    <div className="bg-[#141414] p-8 rounded-2xl border border-gray-800 glow-hover">
                      <div className="md:hidden flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6 text-black" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                          STEP {step.id}
                        </span>
                      </div>
                      <span className="hidden md:block text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                        STEP {step.id} • {step.subtitle}
                      </span>
                      <h3 className="text-3xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[#A0A0A0] mb-4">{step.description}</p>
                      <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 text-sm">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-20 text-center reveal-on-scroll">
            <div className="bg-[#0A0A0A] p-12 rounded-2xl border border-gray-800">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-[#A0A0A0] mb-8 max-w-2xl mx-auto">
                Our proven workflow ensures quality, transparency, and results.
                Let's bring your vision to life.
              </p>
              <a
                href="#contact"
                className="inline-flex px-8 py-4 rounded-xl bg-accent text-black font-bold text-lg glow-hover hover:opacity-90"
              >
                Initiate Project →
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Team Section
  const TeamSection: React.FC = () => (
    <section id="team" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 reveal-on-scroll">
          <h2 className="text-5xl font-extrabold text-white mb-4">
            Meet The Architects
          </h2>
          <p className="text-[#A0A0A0] max-w-xl">
            Our leadership team: a blend of seasoned engineers, award-winning
            designers, and strategic business architects.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: "Alexei Romanov", role: "Chief Technology Officer" },
            { name: "Lena Sharma", role: "Head of Product Design" },
            { name: "Jin Wei", role: "Data Science Lead" },
            { name: "Marcus Hale", role: "Senior Software Architect" },
          ].map((member, idx) => (
            <div
              key={member.name}
              className="text-center reveal-on-scroll"
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-4 border-2 border-transparent hover:border-accent transition-colors glow-hover">
                <div className="w-full h-full bg-gray-700 flex items-center justify-center text-[#A0A0A0]">
                  [Photo]
                </div>
              </div>
              <p className="font-bold text-white">{member.name}</p>
              <p className="text-sm text-accent">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const WhatsAppContact: React.FC = () => {
    const phoneNumber = "+923176782564";
    const message = encodeURIComponent(
      "Hello! I'm interested in working with the architects."
    );

    return (
      <a
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 group"
      >
        {/* Tooltip */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1 bg-[#1A1A1A] text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10 whitespace-nowrap">
          Chat with us
        </span>

        {/* Button */}
        <div className="relative p-4 rounded-full bg-[#074d1e] border border-white/10 text-white transition-all duration-300 hover:border-accent hover:scale-110 shadow-2xl glow-hover">
          {/* Subtle Green Pulse Indication */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-0 group-hover:opacity-10 blur-md transition-opacity"></div>

          <MessageCircle size={28} className="relative z-10" />
        </div>
      </a>
    );
  };

  // Testimonials
  const TestimonialsSection: React.FC = () => {
    const testimonials = [
      {
        id: 1,
        name: "Sarah Mitchell",
        role: "CEO, TechVentures",
        company: "TechVentures Inc.",
        rating: 5,
        text: "Husak transformed our vision into reality. Their technical expertise and design sensibility are unmatched. The AI trading platform they built has revolutionized our operations.",
      },
      {
        id: 2,
        name: "James Rodriguez",
        role: "CTO, RetailFuture",
        company: "RetailFuture",
        rating: 5,
        text: "Working with Husak was a game-changer. The AR shopping app exceeded our expectations in every way. Their attention to detail and commitment to excellence is remarkable.",
      },
      {
        id: 3,
        name: "Emily Chen",
        role: "Product Lead, HealthTech",
        company: "HealthTech Solutions",
        rating: 5,
        text: "The team delivered a world-class telemedicine platform that our users love. Their agile approach and transparent communication made the entire process seamless.",
      },
      {
        id: 4,
        name: "Michael Thompson",
        role: "Founder, DataVision",
        company: "DataVision Corp",
        rating: 5,
        text: "Husak's expertise in AI and machine learning is phenomenal. They built us a predictive analytics dashboard that gives us a competitive edge in the market.",
      },
      {
        id: 5,
        name: "Lisa Anderson",
        role: "VP Engineering, WellnessNow",
        company: "WellnessNow",
        rating: 5,
        text: "Professional, innovative, and results-driven. The mobile app they developed has a 4.9-star rating and our user engagement has tripled since launch.",
      },
      {
        id: 6,
        name: "David Kim",
        role: "Director, Enterprise Solutions",
        company: "Enterprise Solutions",
        rating: 5,
        text: "From concept to deployment, Husak demonstrated exceptional skill and dedication. Our B2B marketplace is now the industry standard.",
      },
    ];

    return (
      <section id="testimonials" className="py-24 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center reveal-on-scroll">
            <span className="text-sm font-semibold uppercase tracking-[0.5em] text-accent mb-4 block">
              CLIENT FEEDBACK
            </span>
            <h2 className="text-6xl md:text-7xl font-extrabold text-white mb-6">
              Testimonials
            </h2>
            <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto">
              Hear from the leaders and innovators we've partnered with to build
              exceptional digital products.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={testimonial.id}
                className="bg-[#141414] p-8 rounded-2xl border border-gray-800 glow-hover h-full flex flex-col reveal-on-scroll"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent" />
                  ))}
                </div>
                <p className="text-[#A0A0A0] mb-6 grow italic">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                  <div className="w-14 h-14 rounded-full bg-gray-700 flex items-center justify-center text-[#A0A0A0] text-xs border-2 border-accent shrink-0">
                    [Photo]
                  </div>
                  <div>
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-accent">{testimonial.role}</p>
                    <p className="text-xs text-[#A0A0A0]">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-20 text-center reveal-on-scroll">
            <div className="bg-[#0A0A0A] p-12 rounded-2xl border border-gray-800">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-[#A0A0A0] mb-8 max-w-2xl mx-auto">
                Let's discuss how we can transform your vision into a
                market-leading digital product.
              </p>
              <a
                href="#contact"
                className="inline-flex px-8 py-4 rounded-xl bg-accent text-black font-bold text-lg glow-hover hover:opacity-90"
              >
                Start Your Project →
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // FAQ
  const FAQSection: React.FC = () => {
    const [openId, setOpenId] = useState<number | null>(null);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const faqs = [
      {
        id: 1,
        category: "General",
        question: "What types of projects does Husak specialize in?",
        answer:
          "We specialize in custom software development, web and mobile applications, AI/ML integration, e-commerce platforms, and enterprise solutions. Our expertise spans FinTech, HealthTech, E-Commerce, and Multi Tenant B2B SaaS products across multiple industries.",
      },
      {
        id: 2,
        category: "Process",
        question: "How long does a typical project take?",
        answer:
          "Project timelines vary based on complexity and scope. A simple web application might take 8-12 weeks, while complex enterprise solutions can take 4-6 months. We provide detailed timelines during the discovery phase and use agile methodologies to deliver incremental value.",
      },
      {
        id: 3,
        category: "Pricing",
        question: "What is your pricing model?",
        answer:
          "We offer flexible pricing models including fixed-price projects, time & materials, and dedicated team arrangements. After understanding your requirements, we provide a detailed proposal with transparent pricing and milestone-based payments.",
      },
      {
        id: 4,
        category: "Process",
        question: "How involved will I be during development?",
        answer:
          "We believe in collaborative partnerships. You'll have regular check-ins (typically weekly sprints), access to project management tools, and direct communication with the team. Your feedback is crucial at every stage from design to deployment.",
      },
      {
        id: 5,
        category: "Technical",
        question: "What technologies do you work with?",
        answer:
          "Our tech stack includes React, Node.js, Python, TypeScript, Next.js, Nest.js, AWS, Google Cloud, Flask, SQL and NoSQL databases, Multi Payment Gateways, Caching, TensorFlow, and more. We select technologies based on your specific needs, scalability requirements, and long-term maintenance considerations.",
      },
      {
        id: 6,
        category: "Support",
        question: "Do you provide post-launch support?",
        answer:
          "Absolutely. We offer comprehensive maintenance packages including bug fixes, performance monitoring, security updates, and feature enhancements. Our support team ensures your product continues to perform optimally as your business grows.",
      },
      {
        id: 7,
        category: "General",
        question: "Can you work with our existing team?",
        answer:
          "Yes! We frequently collaborate with in-house teams, providing specialized expertise or augmenting capacity. We integrate seamlessly with your processes, tools, and communication channels.",
      },
      {
        id: 8,
        category: "Security",
        question: "How do you ensure data security and IP protection?",
        answer:
          "Security is paramount. We follow industry best practices including encryption, secure coding standards, regular security audits, and compliance with GDPR/HIPAA when required. We sign comprehensive NDAs and IP agreements before project initiation.",
      },
      {
        id: 9,
        category: "Process",
        question: "What happens if the project scope changes?",
        answer:
          "We understand that requirements evolve. Our agile approach accommodates changes through a formal change request process. We assess impact on timeline and budget, then proceed with your approval to ensure alignment.",
      },
      {
        id: 10,
        category: "Technical",
        question: "Do you handle deployment and infrastructure?",
        answer:
          "Yes, we manage the complete deployment process including cloud infrastructure setup (AWS, Azure, GCP), CI/CD pipelines, monitoring, and performance optimization. We ensure your application is production-ready and scalable.",
      },
    ];

    const categories = [
      "All",
      ...Array.from(new Set(faqs.map((f) => f.category))),
    ];
    const filteredFaqs =
      selectedCategory === "All"
        ? faqs
        : faqs.filter((f) => f.category === selectedCategory);

    return (
      <section id="faq" className="py-24 bg-[#0A0A0A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center reveal-on-scroll">
            <span className="text-sm font-semibold uppercase tracking-[0.5em] text-accent mb-4 block">
              QUESTIONS & ANSWERS
            </span>
            <h2 className="text-6xl md:text-7xl font-extrabold text-white mb-6">
              FAQ
            </h2>
            <p className="text-xl text-[#A0A0A0] max-w-2xl mx-auto">
              Find answers to commonly asked questions about our services,
              process, and approach to building exceptional digital products.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-12 reveal-on-scroll">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-accent text-black"
                    : "border border-gray-700 text-white hover:border-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="space-y-4">
            {filteredFaqs.map((faq, idx) => (
              <div
                key={faq.id}
                className="bg-[#1A1A1A] border border-gray-800 rounded-xl overflow-hidden reveal-on-scroll"
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#141414] transition-colors"
                >
                  <div className="flex-1">
                    <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-1 block">
                      {faq.category}
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-6 h-6 text-accent transition-transform shrink-0 ml-4 ${
                      openId === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openId === faq.id && (
                  <div className="px-6 pb-5 text-[#A0A0A0] border-t border-gray-800 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-16 text-center bg-[#1A1A1A] p-10 rounded-2xl border border-gray-800 reveal-on-scroll">
            <h2 className="text-3xl font-bold text-white mb-3">
              Still have questions?
            </h2>
            <p className="text-[#A0A0A0] mb-6">
              We're here to help. Reach out and let's discuss your project.
            </p>
            <a
              href="#contact"
              className="inline-flex px-8 py-4 rounded-xl bg-accent text-black font-bold text-lg glow-hover hover:opacity-90"
            >
              Contact Us →
            </a>
          </div>
        </div>
      </section>
    );
  };

  // Contact
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
            Tell us about your project, your challenges, and your vision. We'll respond within one business cycle.
          </p>

          <div className="space-y-4 w-full max-w-md">
            {/* Email Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-white">
              <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center sm:justify-start">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-[#A0A0A0] break-all sm:break-words text-center sm:text-left">
                  husak.soft@gmail.com
                </span>
              </div>
            </div>
            
            {/* Phone Row */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-white">
              <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center sm:justify-start">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-[#A0A0A0] text-center sm:text-left">
                  +923176782564
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



  // Footer
  const Footer: React.FC = () => (
    <footer className="bg-[#0A0A0A] pt-16 pb-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
          <div className="flex flex-col">
            <a
              href="#home"
              className={`flex items-center space-x-2 text-2xl font-black tracking-widest text-accent mb-2 ${logoFont.className}`}
            >
              Husak
            </a>
            <p className="text-sm text-[#A0A0A0]">
              &copy; 2024 Husak Solutions. All Rights Reserved.
            </p>
          </div>
          <div className="flex flex-wrap space-x-6 text-sm text-[#A0A0A0]">
            <a
              href="#work"
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
            <a
              href="#team"
              className="hover-text-accent transition duration-300"
            >
              About
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
        .focus\\:border-accent:focus { border-color: ${ACCENT_GREEN} !important; }
        .focus\\:ring-accent:focus { --tw-ring-color: ${ACCENT_GREEN} !important; }

        .hero-gradient {
            background: radial-gradient(circle at 50% 10%, #1A1A1A 0%, #0A0A0A 60%);
            animation: gradient-move 30s ease infinite alternate;
        }

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

        @keyframes gradient-move {
            0% { background-position: 0% 0%; }
            100% { background-position: 100% 100%; }
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

      <Header />
      <WhatsAppContact />

      <main>
        <HomeSection />
        {/* <WorkSection /> */}
        <PortfolioSection />
        <ServicesSection />
        <WorkflowSection />
        {/* <TeamSection /> */}
        {/* <TestimonialsSection /> */}
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default App;
