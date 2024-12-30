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
                                    <BullIcon className="w-5 h-5 text-cyan-400" />
                                    Launching Soon 🚀
                                </motion.span>
                            </motion.div>

                            {/* Main Title */}
                            <div className="space-y-6">
                                <motion.h1
                                    className="text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 uppercase tracking-tight"
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
                                    BullWalker
                                </motion.h1>
                                <h2 className="text-4xl text-cyan-400 font-medium flex justify-center items-center gap-3">
                                    <span>The Zero-Stake</span>
                                    <motion.div
                                        animate={{
                                            rotate: [0, 360]
                                        }}
                                        transition={{
                                            duration: 20,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                        className="w-8 h-8"
                                    >
                                        <BullIcon className="text-cyan-400" />
                                    </motion.div>
                                    <span>Launchpad</span>
                                </h2>
                                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                                    Step into the future of decentralized launches with BullWalker.
                                    No staking requirements. No tier system. Just fair opportunities for everyone.
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
                                            <div className="text-3xl font-bold text-cyan-400">
                                                {String(time.value).padStart(2, '0')}
                                            </div>
                                            <div className="text-sm text-gray-500">{time.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>

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
                            <h2 className="text-4xl font-bold text-white mb-6 flex items-center gap-3">
                                Why BullWalker Is Different
                                <BullIcon className="w-8 h-8 text-cyan-400" />
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
                                Coming Soon to Bull Market
                            </h2>
                            <p className="text-gray-400">
                                Be part of the revolution in fair token launches. Join our community to get early
                                access and be the first to know when BullWalker goes live. No staking required, no complicated
                                tier systems - just pure opportunity for everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);