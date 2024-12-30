import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';

const Timer = () => {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const launchDate = new Date('2025-01-26');


    // Add this useEffect to handle the countdown
    useEffect(() => {
        const calculateTimeLeft = () => {
            const difference = +new Date(launchDate) - +new Date();
            let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

            if (difference > 0) {
                timeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                };
            }

            return timeLeft;
        };

        // Initial calculation
        setCountdown(calculateTimeLeft());

        // Update every second
        const timer = setInterval(() => {
            setCountdown(calculateTimeLeft());
        }, 1000);

        // Cleanup
        return () => clearInterval(timer);
    }, [launchDate]);

    return (
        <div className="pt-6">
            <div className="grid grid-cols-4 gap-4 max-w-xl mx-auto">
                {[
                    { label: "Days", value: countdown.days },
                    { label: "Hours", value: countdown.hours },
                    { label: "Minutes", value: countdown.minutes },
                    { label: "Seconds", value: countdown.seconds }
                ].map((time, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        className="bg-black/50 backdrop-blur-sm p-4 rounded-lg border border-cyan-500/20"
                    >
                        <div className="text-xl md:text-3xl font-bold text-cyan-400">
                            {String(time.value).padStart(2, '0')}
                        </div>
                        <div className="text-xs md:text-sm text-gray-500">{time.label}</div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default Timer