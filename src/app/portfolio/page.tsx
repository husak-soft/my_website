"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, ExternalLink, Code } from "lucide-react";
import { projects } from "../../data/projects";
import { TAG_MAPPING, DefaultIcon } from "../../data/techStackIcons";
import { ScrollReveal } from "@/lib/scroll-reveal";
import accentStyles from "@/app/styles/accent";

const PortfolioPage = () => {
    useEffect(() => ScrollReveal(), []);
  return (
    <>
      <style>{accentStyles}</style>
      <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-accent/30">
        {/* Navbar / Header */}
        <div className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link
              href="/"
              className="flex items-center gap-2 text-accent hover:opacity-80 transition-opacity font-semibold"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <div className="text-xl font-bold tracking-widest text-white hidden sm:block">
              HUSAK<span className="text-accent">.</span>
            </div>
          </div>
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-20  reveal-on-scroll">
            <span className="text-md font-bold uppercase tracking-[0.5em] text-accent mb-4 block animate-fade-in">
              FULL PORTFOLIO
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
              Our{" "}
              <span className="text-transparent bg-clip-text text-accent">
                Work
              </span>
            </h1>
            <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto leading-relaxed">
              A comprehensive showcase of our technical expertise, featuring
              custom solutions across fintech, logistics, e-commerce, and more.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <div
                key={project.id}
                className="group bg-[#141414] rounded-2xl overflow-hidden border border-gray-800 hover:border-green-500/50 transition-all duration-300 glow-hover flex flex-col reveal-on-scroll"
                 style={{ transitionDelay: `${(idx % 3) * 50}ms` }}
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

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white">
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
                            <Icon
                              style={{ color: color }}
                              className="w-4 h-4"
                            />
                            <span className="text-xs font-medium text-gray-300">
                              {tag}
                            </span>
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
          <div className="mt-24 text-center p-12 rounded-3xl border border-gray-800">
            <h2 className="text-3xl font-bold mb-6">Have a project in mind?</h2>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black transition-all duration-200 bg-accent rounded-xl hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 focus:ring-offset-gray-900"
            >
              Let's Work Together
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </main>
      </div>{" "}
    </>
  );
};

export default PortfolioPage;
