import React from 'react';
import { motion } from 'framer-motion';

// Features Component
const Features = () => (
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
);

// Statistics Component
const Statistics = () => (
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
);

// Additional Info Component
const AdditionalInfo = () => (
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
);

// Main SubContents Component
const SubContents = () => {
    return (
        <div className="space-y-24">
            <Features />
            <Statistics />
            <AdditionalInfo />
        </div>
    );
};

export { Features, Statistics, AdditionalInfo };
export default SubContents;