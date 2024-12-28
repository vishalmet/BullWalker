import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CustomCursor from '../components/Cursor';

const ProductLanding = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const lines = Array.from({ length: 20 });
    const circles = Array.from({ length: 15 });
    const launchDate = new Date('2024-02-01');

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Background component remains fixed
    const Background = () => (
        <div className="fixed inset-0 bg-black">
            <div className="absolute left-1/2 -translate-x-1/2 w-[800px] h-[400px] overflow-hidden">
                <div className="w-[600px] h-[600px] rounded-full absolute top-[-90%] left-1/2 -translate-x-1/2"
                    style={{
                        background: `radial-gradient(circle, rgba(34,211,238,0.25) 40%, transparent 70%)`,
                    }}
                />
            </div>
            <div
                className="absolute inset-0 z-10"
                style={{
                    background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(34,211,238,0.25), transparent 50%)`
                }}
            />

            <div className="absolute inset-0">
                {lines.map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute h-px bg-cyan-500 blur-[0.5px]"
                        style={{
                            left: 0,
                            top: `${(i * 100) / lines.length}%`,
                            width: '100%',
                            opacity: 0.3
                        }}
                        animate={{
                            opacity: [0.3, 0.8, 0.3],
                            scaleY: [1, 2, 1],
                        }}
                        transition={{
                            duration: 2,
                            delay: i * 0.1,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <div className="absolute inset-0 opacity-30">
                <svg width="100%" height="100%">
                    <pattern
                        id="hexagonPattern"
                        x="0"
                        y="0"
                        width="50"
                        height="44"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M25 2.886L46.647 15.443L46.647 40.557L25 53.114L3.353 40.557L3.353 15.443L25 2.886Z"
                            fill="none"
                            stroke="rgba(45, 212, 191, 0.3)"
                            strokeWidth="1"
                        />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#hexagonPattern)" />
                </svg>
            </div>

            {circles.map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute rounded-full mix-blend-screen"
                    style={{
                        background: `radial-gradient(circle, ${i % 2 ? '#00ffff' : '#ff00ff'
                            }22 30%, transparent 70%)`,
                        width: `${Math.random() * 300 + 100}px`,
                        height: `${Math.random() * 300 + 100}px`,
                    }}
                    animate={{
                        x: [
                            `${Math.random() * 100}vw`,
                            `${Math.random() * 100}vw`,
                            `${Math.random() * 100}vw`,
                        ],
                        y: [
                            `${Math.random() * 100}vh`,
                            `${Math.random() * 100}vh`,
                            `${Math.random() * 100}vh`,
                        ],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: Math.random() * 20 + 10,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                />
            ))}

            <div
                className="absolute inset-0 z-20"
                style={{
                    background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(103,232,249,0.03), transparent 30%)`
                }}
            />

            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black opacity-80" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] opacity-90" />
        </div>
    );

    return (
        <div className="relative">
            <CustomCursor />
            <Background />

            {/* Scrollable content */}
            <div className="relative z-50 min-h-screen overflow-auto">
                <div className="container mx-auto px-4 py-24">
                    <div className="space-y-24">
                        {/* Hero Section */}
                        <div className="text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-10"
                            >
                                {/* Launch Badge */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-block"
                                >
                                    <span className="px-4 py-2 rounded-full text-sm font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                                        Launching Soon 🚀
                                    </span>
                                </motion.div>

                                {/* Main Title */}
                                <div className="space-y-6">
                                    <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 uppercase tracking-tight">
                                        The Zero-Stake <br />Launchpad
                                    </h1>
                                    <h2 className="text-4xl text-cyan-400 font-medium">
                                        Dropping Something Revolutionary
                                    </h2>
                                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                                        No staking requirements. No tier system. Just fair opportunities for everyone.
                                        Be among the first to experience the future of decentralized launches.
                                    </p>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex gap-4 justify-center pt-4">
                                    <button className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-lg transition-all duration-300 hover:scale-105">
                                        Join Waitlist
                                    </button>
                                    <button className="px-8 py-3 border border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 font-bold rounded-lg transition-all duration-300">
                                        Learn More
                                    </button>
                                </div>

                                {/* Coming Soon Timer */}
                                <div className="pt-16">
                                    <div className="grid grid-cols-4 gap-4 max-w-xl mx-auto">
                                        {[
                                            { label: "Days", value: "14" },
                                            { label: "Hours", value: "22" },
                                            { label: "Minutes", value: "36" },
                                            { label: "Seconds", value: "48" }
                                        ].map((time, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.2 + i * 0.1 }}
                                                className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-cyan-500/20"
                                            >
                                                <div className="text-3xl font-bold text-cyan-400">{time.value}</div>
                                                <div className="text-sm text-gray-500">{time.label}</div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Features */}

                        {/* Features */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "No Staking Required",
                                    desc: "Unlike other launchpads, we don't require any token staking. Your opportunity shouldn't depend on your wallet size."
                                },
                                {
                                    title: "Fair Launch Model",
                                    desc: "Equal opportunity for all participants. No complicated tier systems or token holdings requirements."
                                },
                                {
                                    title: "Community First",
                                    desc: "Built for the community, focusing on project quality and equal access rather than token mechanics."
                                }
                            ].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="p-6 rounded-xl border border-cyan-500/20 backdrop-blur-sm"
                                >
                                    <h3 className="text-xl font-bold text-cyan-400 mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-400">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Statistics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { label: "Entry Barrier", value: "$0" },
                                { label: "Required Stake", value: "None" },
                                { label: "Fair Launches", value: "100%" },
                                { label: "Community Power", value: "∞" }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="text-center"
                                >
                                    <div className="text-4xl font-bold text-cyan-400 mb-2">
                                        {stat.value}
                                    </div>
                                    <div className="text-gray-400">{stat.label}</div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Additional Info Sections */}
                        <div className="space-y-24">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-4xl font-bold text-white mb-6">
                                    Why We're Different
                                </h2>
                                <p className="text-gray-400">
                                    Traditional launchpads require users to stake tokens to participate, creating barriers
                                    for many community members. We're changing the game by removing these requirements,
                                    making project launches accessible to everyone. Our focus is on project quality and
                                    community fairness, not token mechanics.
                                </p>
                            </div>

                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-4xl font-bold text-white mb-6">
                                    Coming Soon
                                </h2>
                                <p className="text-gray-400">
                                    Be part of the revolution in fair token launches. Join our community to get early
                                    access and be the first to know when we go live. No staking required, no complicated
                                    tier systems - just pure opportunity for everyone.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductLanding;