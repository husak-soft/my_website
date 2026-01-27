"use client";
import Link from "next/link";
import { Home } from "lucide-react";
import { allServices } from "../../data/services";
import { techStack } from "../../data/techStack";
import { DefaultIcon, TAG_MAPPING } from "@/data/techStackIcons";
import { useEffect } from "react";
import { ScrollReveal } from "@/lib/scroll-reveal";
import accentStyles from "@/app/styles/accent";

const ServicesPage = () => {
  // Scroll Reveal
  useEffect(() => ScrollReveal(), []);
  return (
    <>
      <style>{accentStyles}</style>
      <div className="min-h-screen text-white">
        <div className="fixed inset-0 -z-10"></div>

        {/* Navbar / Header */}
        <div className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link
              href="/"
              className="flex items-center gap-2 text-accent hover:opacity-80 transition-opacity font-semibold hover:text-green-500"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
            <div className="text-xl font-bold tracking-widest text-white hidden sm:block">
              <a
                href="#home"
                className="flex items-center space-x-2 text-2xl font-black tracking-widest text-white mb-2"
              >
                HUSAK<span className="text-accent">.</span>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-16">
          {/* Header */}
          <div className="text-center mb-16 reveal-on-scroll">
            <span className="text-md font-bold uppercase tracking-[0.5em] text-accent mb-4 block">
              WHAT WE OFFER
            </span>
            <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6">
              Our <span className="text-transparent bg-clip-text text-accent">
                Services
              </span>
            </h1>
            <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto">
              Comprehensive digital solutions designed to transform your
              business and drive innovation.
            </p>
          </div>

          {/* Services Overview */}
          <div className="w-full pb-16 pt-8 reveal-on-scroll">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {allServices.map((service, idx) => {
                  const { Icon } = service;
                  return (
                    <div
                      key={idx}
                      className="p-8 rounded-xl border border-gray-700 bg-[#141414] glow-hover transition-all duration-300 reveal-on-scroll"
                      style={{ transitionDelay: `${(idx % 3) * 50}ms` }}
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
          </div>

          {/* Tech Stack */}
          <div
            className="w-full py-16 bg-[#1A1A1A] reveal-on-scroll"
            id="tools"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-20">
                <span className="text-md font-bold uppercase tracking-[0.5em] text-accent mb-4 block">
                  OUR ARSENAL
                </span>
<h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6">
              Our <span className="text-transparent bg-clip-text text-accent">
                Tools
              </span>
            </h1>
               <p className="text-xl text-[#A0A0A0] max-w-3xl mx-auto">
                  We leverage industry-leading tools and technologies to build
                  exceptional digital products.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-auto grid-flow-dense">
                {techStack.map((stack, idx) => {
                  const { Icon } = stack; // each category can have an SVG icon
                  return (
                    <div
                      key={idx}
                      className="p-8 rounded-xl border border-gray-700 bg-[#141414]   glow-hover transition-all duration-300 flex flex-col h-full reveal-on-scroll"
                      style={{ transitionDelay: `${(idx % 3) * 50}ms` }}
                    >
                      <Icon className="w-12 h-12 text-accent mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-3">
                        {stack.category}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-4 ">
                        {stack.tools.map((tool, toolIdx) => {
                          const mapping = TAG_MAPPING[tool];
                          const ToolIcon = mapping?.icon || DefaultIcon;
                          const color = mapping?.color || "#9CA3AF";
                          return (
                            <span
                              key={toolIdx}
                              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-accent/5 text-gray-300 border border-accent/10 text-sm hover:border-accent/40 hover:bg-accent/10 transition-all duration-300"
                            >
                              <ToolIcon style={{ color }} className="w-4 h-4" />
                              {tool}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center p-12 reveal-on-scroll">
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-[#A0A0A0] mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our services can transform your business
              and bring your vision to life.
            </p>
            <Link
              href="/#contact"
              className="inline-flex px-8 py-4 rounded-xl bg-accent text-black font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Contact Us →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
