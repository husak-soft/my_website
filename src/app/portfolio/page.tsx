"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, ExternalLink, Code } from "lucide-react";
import { projects } from "../../data/projects";
import {
  SiRedis,
  SiPostgresql,
  SiAmazonwebservices,
  SiFlask,
  SiNextdotjs,
  SiNestjs,
  SiMapbox,
  SiReact,
  SiShopify,
  SiMongodb,
  SiWhatsapp,
  SiTwilio,
  SiX,
  SiInstagram,
  SiFirebase,
  SiStripe,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";

// Tag Mapping Configuration
const TAG_MAPPING: Record<string, { icon: React.ElementType; color: string }> = {
  // Backend & Database
  Redis: { icon: SiRedis, color: "#DC382D" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Firebase: { icon: SiFirebase, color: "#FFCA28" },
  "Firebase CAPI": { icon: SiFirebase, color: "#FFCA28" },

  // Cloud & Infra
  AWS: { icon: SiAmazonwebservices, color: "#FF9900" },

  // Frameworks & Libs
  Flask: { icon: SiFlask, color: "#FFFFFF" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  Nextjs: { icon: SiNextdotjs, color: "#FFFFFF" },
  Nestjs: { icon: SiNestjs, color: "#E0234E" },
  "React.js": { icon: SiReact, color: "#61DAFB" },
  "Nodejs": { icon: SiNodedotjs, color: "#339933" },
  Tailwind: { icon: SiTailwindcss, color: "#06B6D4" },

  // APIs & Services
  MapBox: { icon: SiMapbox, color: "#4264FB" },
  Shopify: { icon: SiShopify, color: "#96BF48" },
  Whatsapp: { icon: SiWhatsapp, color: "#25D366" },
  Twilio: { icon: SiTwilio, color: "#F22F46" },
  "X(Twitter)": { icon: SiX, color: "#1DA1F2" },
  Instagram: { icon: SiInstagram, color: "#E4405F" },
  Stripe: { icon: SiStripe, color: "#008CDD" },
};

// Fallback Icon
const DefaultIcon = Code;

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-green-500/30">
      {/* Navbar / Header */}
      <div className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link
              href="/"
              className="flex items-center gap-2 text-green-500 hover:opacity-80 transition-opacity font-semibold"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <div className="text-xl font-bold tracking-widest text-white hidden sm:block">
                HUSAK<span className="text-green-500">.</span>
            </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <span className="text-sm font-semibold uppercase tracking-[0.5em] text-green-500 mb-4 block animate-fade-in">
            FULL PORTFOLIO
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Work</span>
          </h1>
          <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto leading-relaxed">
            A comprehensive showcase of our technical expertise, featuring custom solutions
            across fintech, logistics, e-commerce, and more.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className="group bg-[#141414] rounded-2xl overflow-hidden border border-gray-800 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(57,255,20,0.1)] flex flex-col"
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
                        className="px-6 py-3 bg-green-500 text-black font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2"
                    >
                        View Project <ExternalLink size={18} />
                    </a>
                  </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                    {project.title}
                    </h3>
                </div>

                <p className="text-[#A0A0A0] mb-6 leading-relaxed flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="space-y-3">
                  <div className="h-px bg-gray-800 w-full mb-4"></div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                    Technologies Used
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIdx) => {
                      const mapping = TAG_MAPPING[tag];
                      const Icon = mapping?.icon || DefaultIcon;
                      // Use mapped color or default to gray-400 if generic
                      const color = mapping?.color || "#9CA3AF";

                      return (
                        <div
                            key={tagIdx}
                            className="flex items-center gap-1.5 bg-[#1A1A1A] border border-gray-800 px-3 py-1.5 rounded-lg active:scale-95 transition-transform cursor-default hover:border-gray-600"
                            title={tag}
                        >
                            <Icon style={{ color: color }} className="w-4 h-4" />
                            <span className="text-xs font-medium text-gray-300">{tag}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center p-12 rounded-3xl bg-gradient-to-b from-[#141414] to-[#0A0A0A] border border-gray-800">
            <h2 className="text-3xl font-bold mb-6">Have a project in mind?</h2>
            <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black transition-all duration-200 bg-green-500 rounded-xl hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-offset-gray-900"
            >
                Let's Work Together
                <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
        </div>
      </main>
    </div>
  );
};

export default PortfolioPage;
