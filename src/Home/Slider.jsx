import React from 'react'
import Marquee from 'react-fast-marquee'
import Ape from "../assets/apeterminal.png"
import BscPad from "../assets/bscpad.png"
import BullStarter from "../assets/bullstarter.svg"
import ChainGpt from "../assets/chaingpt.svg"
import DaoMaker from "../assets/daomaker.svg"
import Enjin from "../assets/enjinstarter.png"
import Polk from "../assets/polkastarter.png"
import RedKite from "../assets/redkite.png"
import TrustSwap from "../assets/trustswap.webp"

import Eth from "../assets/icons/ETH.png"
import Arbitrum from "../assets/icons/Arbitrum.png"
import aurora from "../assets/icons/aurora.webp"
import avalanche from "../assets/icons/avalanche.webp"
import base from "../assets/icons/base.png"
import bsc from "../assets/icons/bsc.png"
import cronos from "../assets/icons/cronos.png"
import fantom from "../assets/icons/fantom.png"
import moonbeam from "../assets/icons/moonbeam.png"
import optimism from "../assets/icons/optimism.webp"
import polygon from "../assets/icons/polygon.png"



const Slider = () => {
    return (
        <div className='  hidden md:flex'>
            <Marquee className="text-sm md:text-xl bg-transparent backdrop-blur-sm mt-6 md:mt-16 h-24 text-white">
                <p className="pr-10 md:pr-20 flex items-center gap-2"><img src={Eth} className=' h-16 ' alt="ape terminal" /></p>
                <p className="pr-10 md:pr-20 flex items-center gap-2"><img src={Arbitrum} className=' h-16 ' alt="Bsc pad" /></p>
                <p className="pr-10 md:pr-20 flex items-center gap-2"><img src={avalanche} className=' h-16 ' alt="bull starter" /></p>
                <p className="pr-10 md:pr-20 flex items-center gap-2"><img src={base} className=' h-16 ' alt="ChainGPT" /></p>
                <p className="pr-10 md:pr-20 flex items-center gap-2"><img src={bsc} className=' h-16 ' alt="EnjinStarter" /></p>
                <p className="pr-10 md:pr-20 flex items-center gap-2"><img src={optimism} className=' h-16 ' alt="polkastarter" /></p>
                <p className="pr-10 md:pr-20 flex items-center gap-2"><img src={polygon} className=' h-16 ' alt="RedKite" /></p>
                <p className="pr-10 md:pr-20 flex items-center gap-2"><img src={cronos} className=' h-16 ' alt="polkastarter" /></p>
                <p className="pr-10 md:pr-20 flex items-center gap-2"><img src={fantom} className=' h-16 ' alt="polkastarter" /></p>
                <p className="pr-10 md:pr-20 flex items-center gap-2"><img src={moonbeam} className=' h-16 ' alt="polkastarter" /></p>
                <p className="pr-10 md:pr-20 flex items-center gap-2"><img src={aurora} className=' h-16 ' alt="polkastarter" /></p>
                
                <p className="pr-10 md:pr-20 flex items-center gap-2"><img src={Eth} className=' h-16 ' alt="ape terminal" /></p>
                <p className="pr-10 md:pr-20 flex items-center gap-2"><img src={Arbitrum} className=' h-16 ' alt="Bsc pad" /></p>
                <p className="pr-10 md:pr-20 flex items-center gap-2"><img src={avalanche} className=' h-16 ' alt="bull starter" /></p>
                <p className="pr-10 md:pr-20 flex items-center gap-2"><img src={base} className=' h-16 ' alt="ChainGPT" /></p>
                <p className="pr-10 md:pr-20 flex items-center gap-2"><img src={bsc} className=' h-16 ' alt="EnjinStarter" /></p>
                <p className="pr-10 md:pr-20 flex items-center gap-2"><img src={optimism} className=' h-16 ' alt="polkastarter" /></p>
                <p className="pr-10 md:pr-20 flex items-center gap-2"><img src={polygon} className=' h-16 ' alt="RedKite" /></p>
                <p className="pr-10 md:pr-20 flex items-center gap-2"><img src={cronos} className=' h-16 ' alt="polkastarter" /></p>
                <p className="pr-10 md:pr-20 flex items-center gap-2"><img src={fantom} className=' h-16 ' alt="polkastarter" /></p>
                <p className="pr-10 md:pr-20 flex items-center gap-2"><img src={moonbeam} className=' h-16 ' alt="polkastarter" /></p>
                <p className="pr-10 md:pr-20 flex items-center gap-2"><img src={aurora} className=' h-16 ' alt="polkastarter" /></p>

             
            </Marquee>
        </div>
    )
}

export default Slider