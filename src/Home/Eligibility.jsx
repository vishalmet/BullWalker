import React from 'react'
import { motion } from 'framer-motion'
import Ape from "../assets/apeterminal.png"
import BscPad from "../assets/bscpad.png"
import BullStarter from "../assets/bullstarter.svg"
import ChainGpt from "../assets/chaingpt.svg"
import DaoMaker from "../assets/daomaker.svg"
import Enjin from "../assets/enjinstarter.png"
import Polk from "../assets/polkastarter.png"
import RedKite from "../assets/redkite.png"
import TrustSwap from "../assets/trustswap.webp"


const Eligibility = () => {
    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold text-white mb-6 flex items-center justify-center gap-3">
                Eligibility Criteria
            </h2>

            <div className="text-center mb-12">
                <p className="text-xl text-gray-400">
                    Members of any of the following launchpads are automatically eligible.
                    Not a member? Apply for our whitelist to join the BullWalker community.
                </p>
            </div>

            {/* Launchpad Logos Grid */}

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-white">
                <div className=" border border-cyan-200/20 p-2 rounded-xl">
                    <motion.p className="flex justify-center items-center gap-2 text-sm md:text-2xl font-semibold bg-transparent backdrop-blur-[20px] p-2 rounded"
                        animate={{
                            boxShadow: [
                                '0 0 0px rgba(34,211,238,0)',
                                '0 0 20px rgba(34,211,238,0.2)',
                                '0 0 0px rgba(34,211,238,0)'
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.2
                        }}
                    >
                        <img src={Ape} className=' h-6 md:h-12 ' alt="ape terminal" />Ape Terminal</motion.p>
                </div>
                <div className=" border border-cyan-200/20 p-2 rounded-xl">
                    <motion.p className="flex justify-center items-center gap-2 text-sm md:text-2xl font-semibold bg-transparent backdrop-blur-[20px] p-2 rounded"
                        animate={{
                            boxShadow: [
                                '0 0 0px rgba(34,211,238,0)',
                                '0 0 20px rgba(34,211,238,0.2)',
                                '0 0 0px rgba(34,211,238,0)'
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.2
                        }}
                    >
                        <img src={BscPad} className=' h-6 md:h-12 ' alt="Bsc pad" />BSC Pad</motion.p>
                </div>
                <div className=" border border-cyan-200/20 p-2 rounded-xl">
                    <motion.p className="flex justify-center items-center gap-2 text-sm md:text-2xl font-semibold bg-transparent backdrop-blur-[20px] p-2 rounded"
                        animate={{
                            boxShadow: [
                                '0 0 0px rgba(34,211,238,0)',
                                '0 0 20px rgba(34,211,238,0.2)',
                                '0 0 0px rgba(34,211,238,0)'
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.2
                        }}
                    >
                        <img src={BullStarter} className=' h-6 md:h-12 ' alt="bull starter" /></motion.p>
                </div>
                <div className=" border border-cyan-200/20 p-2 rounded-xl">
                    <motion.p className="flex justify-center items-center gap-2 text-sm md:text-2xl font-semibold bg-transparent backdrop-blur-[20px] p-2 rounded"
                        animate={{
                            boxShadow: [
                                '0 0 0px rgba(34,211,238,0)',
                                '0 0 20px rgba(34,211,238,0.2)',
                                '0 0 0px rgba(34,211,238,0)'
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.2
                        }}
                    >
                        <img src={ChainGpt} className=' h-6 md:h-12 ' alt="ChainGPT" /></motion.p>
                </div>
                <div className=" border border-cyan-200/20 p-2 rounded-xl">
                    <motion.p className="flex justify-center items-center gap-2 text-sm md:text-2xl font-semibold bg-transparent backdrop-blur-[20px] p-2 rounded"
                        animate={{
                            boxShadow: [
                                '0 0 0px rgba(34,211,238,0)',
                                '0 0 20px rgba(34,211,238,0.2)',
                                '0 0 0px rgba(34,211,238,0)'
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.2
                        }}
                    >
                        <img src={Enjin} className=' h-6 md:h-12 ' alt="EnjinStarter" /></motion.p>
                </div>
                <div className=" border border-cyan-200/20 p-2 rounded-xl">
                    <motion.p className="flex justify-center items-center gap-2 text-sm md:text-2xl font-semibold bg-transparent backdrop-blur-[20px] p-2 rounded"
                        animate={{
                            boxShadow: [
                                '0 0 0px rgba(34,211,238,0)',
                                '0 0 20px rgba(34,211,238,0.2)',
                                '0 0 0px rgba(34,211,238,0)'
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.2
                        }}
                    >
                        <img src={Polk} className=' h-6 md:h-12 ' alt="polkastarter" />polkastarter</motion.p>
                </div>
                <div className=" border border-cyan-200/20 p-2 rounded-xl">
                    <motion.p className="flex justify-center items-center gap-2 text-sm md:text-2xl font-semibold bg-transparent backdrop-blur-[20px] p-2 rounded"
                        animate={{
                            boxShadow: [
                                '0 0 0px rgba(34,211,238,0)',
                                '0 0 20px rgba(34,211,238,0.2)',
                                '0 0 0px rgba(34,211,238,0)'
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.2
                        }}
                    >
                        <img src={RedKite} className=' h-6 md:h-12 ' alt="RedKite" /></motion.p>
                </div>
                <div className=" border border-cyan-200/20 p-2 rounded-xl">
                    <motion.p className="flex justify-center items-center gap-2 text-sm md:text-2xl font-semibold bg-transparent backdrop-blur-[20px] p-2 rounded"
                        animate={{
                            boxShadow: [
                                '0 0 0px rgba(34,211,238,0)',
                                '0 0 20px rgba(34,211,238,0.2)',
                                '0 0 0px rgba(34,211,238,0)'
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.2
                        }}
                    >
                        <img src={TrustSwap} className=' h-6 md:h-12 ' alt="polkastarter" />Trustswap</motion.p>
                </div>
                <div className=" border border-cyan-200/20 p-2 rounded-xl">
                    <motion.p className="flex justify-center items-center gap-2 text-sm md:text-2xl font-semibold bg-transparent backdrop-blur-[20px] p-2 rounded"
                        animate={{
                            boxShadow: [
                                '0 0 0px rgba(34,211,238,0)',
                                '0 0 20px rgba(34,211,238,0.2)',
                                '0 0 0px rgba(34,211,238,0)'
                            ]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: 0.2
                        }}
                    >
                        <img src={DaoMaker} className=' h-6 md:h-12 ' alt="polkastarter" />DAO Maker</motion.p>
                </div>
            </div>


            {/* Call to Action */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {/* Check Eligibility Card */}
                <motion.div
                    className="text-center space-y-6 p-8 rounded-xl border border-cyan-500/20 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <h3 className="text-2xl font-bold text-cyan-400">
                        Already a Member?
                    </h3>
                    <p className="text-gray-400">
                        If you're a member of any supported launchpad, you're automatically eligible to join BullWalker. Check your eligibility now.
                    </p>
                    <button className="mt-4 px-8 py-3 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-bold rounded-lg transition-all duration-300 hover:scale-105">
                        Check Eligibility
                    </button>
                </motion.div>

                {/* Whitelist Card */}
                <motion.div
                    className="text-center space-y-6 p-8 rounded-xl border border-cyan-500/20 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                >
                    <h3 className="text-2xl font-bold text-cyan-400">
                        Not a Member Yet?
                    </h3>
                    <p className="text-gray-400">
                        Don't worry! Apply for our whitelist to get early access to BullWalker's revolutionary zero-stake launchpad platform.
                    </p>
                    <button className="mt-4 px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-black font-bold rounded-lg transition-all duration-300 hover:scale-105">
                        Apply for Whitelist
                    </button>
                </motion.div>
            </div>
        </div>
    )
}

export default Eligibility