"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";
import { allServices } from "../../data/services";
import { techStack } from "../../data/techStack";

const ServicesPage = () => {
    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white">
            <div className="fixed inset-0 bg-[#0A0A0A] -z-10"></div>

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

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Header */}
            <div className="text-center mb-20">
                <span className="text-sm font-semibold uppercase tracking-[0.5em] text-green-500 mb-4 block">
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
                        className="p-8 rounded-xl border border-gray-700 bg-[#141414] hover:shadow-[0_0_15px_rgba(57,255,20,0.4)] hover:border-green-500 transition-all duration-300"
                    >
                        <Icon className="w-12 h-12 text-green-500 mb-4" />
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
                <span className="text-sm font-semibold uppercase tracking-[0.5em] text-green-500 mb-4 block">
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
                    className="p-6 rounded-xl border border-gray-700 bg-[#141414] hover:border-green-500 transition-all duration-300"
                    >
                    <h3 className="text-xl font-bold text-green-500 mb-4">
                        {stack.category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {stack.tools.map((tool, toolIdx) => (
                        <span
                            key={toolIdx}
                            className="px-3 py-1 rounded-full bg-green-500/10 text-white border border-green-500/20 text-sm"
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
                <Link
                href="/#contact"
                className="inline-flex px-8 py-4 rounded-xl bg-green-500 text-black font-bold text-lg hover:opacity-90 transition-opacity"
                >
                Contact Us →
                </Link>
            </div>
            </div>
        </div>
    );
};

export default ServicesPage;
