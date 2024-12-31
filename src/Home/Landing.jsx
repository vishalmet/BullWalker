import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import CustomCursor from '../components/Cursor';
import Timer from './Timer';
import Slider from './Slider';
import { Features, Statistics, AdditionalInfo } from './SubContents';
import Eligibility from './Eligibility';
import BullWalker from "../assets/bullwawalkericon.png"

const ProductLanding = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    const lines = Array.from({ length: 20 });
    const circles = Array.from({ length: 15 });



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
            {/* Top center gradient */}
            <div className="absolute left-1/2 -translate-x-1/2 w-[800px] h-[400px] overflow-hidden">
                <div className="w-[600px] h-[600px] rounded-full absolute top-[-90%] left-1/2 -translate-x-1/2"
                    style={{
                        background: `radial-gradient(circle, rgba(34,211,238,0.25) 40%, transparent 80%)`,
                    }}
                />
            </div>

            {/* Bottom left gradient */}
            <div className="absolute left-0 bottom-0 w-[800px] h-[400px] overflow-hidden">
                <div className="w-[600px] h-[600px] rounded-full absolute bottom-[-50%] left-[-20%]"
                    style={{
                        background: `radial-gradient(circle, rgba(34,211,238,0.5) 90%, transparent 90%)`,
                    }}
                />
            </div>
            {/* Bottom right gradient */}
            <div className="absolute right-0 bottom-0 w-[800px] h-[400px] overflow-hidden">
                <div className="w-[600px] h-[600px] rounded-full absolute bottom-[-50%] right-[-20%]"
                    style={{
                        background: `radial-gradient(circle, rgba(34,211,238,0.5) 90%, transparent 90%)`,
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
                                className="space-y-5"
                            >
                                {/* Launch Badge */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-block"
                                >
                                    <motion.span
                                        className="px-6 py-3 rounded-full text-sm font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center gap-2"
                                        animate={{
                                            boxShadow: ['0 0 0px rgba(34,211,238,0.2)', '0 0 20px rgba(34,211,238,0.2)', '0 0 0px rgba(34,211,238,0.2)']
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        Launching Soon 🚀
                                    </motion.span>
                                </motion.div>

                                {/* Main Title */}
                                <div className="space-y-3 md:space-y-6">
                                    <motion.h1
                                        className="text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 uppercase tracking-tight flex items-center justify-center"
                                        animate={{
                                            backgroundPosition: ['0% center', '100% center', '0% center'],
                                        }}
                                        transition={{
                                            duration: 8,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                        style={{
                                            backgroundSize: '200% 100%'
                                        }}
                                    >
                                        <motion.div
                                            animate={{
                                                rotate: [0, 360]
                                            }}
                                            transition={{
                                                duration: 30,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }}
                                            className="w-16 h-16 md:w-24 md:h-24"
                                        >
                                            <img src={BullWalker} />
                                        </motion.div>
                                        BullWalker
                                        <motion.div
                                            animate={{
                                                rotate: [0, 360]
                                            }}
                                            transition={{
                                                duration: 30,
                                                repeat: Infinity,
                                                ease: "linear"
                                            }}
                                            className="w-16 h-16 md:w-24 md:h-24"
                                        >
                                            <img src={BullWalker} />
                                        </motion.div>
                                    </motion.h1>
                                    <h2 className="text-2xl md:text-4xl text-cyan-400 font-medium flex justify-center items-center">
                                        The Zero-Stack Launchpad
                                    </h2>
                                    <p className="text-base md:text-xl text-gray-400 max-w-3xl mx-auto">
                                        Step into the future of decentralized launches with BullWalker.
                                        No staking requirements. No tier system. Just fair opportunities for everyone.
                                    </p>
                                </div>
                                {/* CTA Buttons */}
                                <div className="flex gap-4 justify-center pt-2 text-sm md:text-base">
                                    <button
                                        onClick={() => {
                                            document.getElementById('eligibility').scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start'
                                            });
                                        }}
                                        className="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-lg transition-all duration-300 hover:scale-105"
                                    >
                                        Check eligibility
                                    </button>
                                    {/* <button
                                        onClick={() => {
                                            document.getElementById('eligibility').scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start'
                                            });
                                        }}
                                        className="px-8 py-3 border border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 font-bold rounded-lg transition-all duration-300"
                                    >
                                        Join Whitelist
                                    </button> */}
                                </div>

                                <Timer />
                                <Slider />
                                <Features />

                                <div className="pt-10" id="eligibility">
                                    <Eligibility />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductLanding;