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



const Slider = () => {
    return (
        <div className='  hidden md:flex'>
            <Marquee className="text-sm md:text-xl bg-transparent backdrop-blur-sm mt-6 md:mt-16 h-24 text-white">
                <p className="pr-10 md:pr-16 flex items-center gap-2"><img src={Ape} className=' h-8 ' alt="ape terminal" />Ape Terminal</p>
                <p className="pr-10 md:pr-16 flex items-center gap-2"><img src={BscPad} className=' h-8 ' alt="Bsc pad" />BSC Pad</p>
                <p className="pr-10 md:pr-16 flex items-center gap-2"><img src={BullStarter} className=' h-8 ' alt="bull starter" /></p>
                <p className="pr-10 md:pr-16 flex items-center gap-2"><img src={ChainGpt} className=' h-8 ' alt="ChainGPT" /></p>
                <p className="pr-10 md:pr-16 flex items-center gap-2"><img src={Enjin} className=' h-8 ' alt="EnjinStarter" /></p>
                <p className="pr-10 md:pr-16 flex items-center gap-2"><img src={Polk} className=' h-8 ' alt="polkastarter" />polkastarter</p>
                <p className="pr-10 md:pr-16 flex items-center gap-2"><img src={RedKite} className=' h-12 ' alt="RedKite" /></p>
                <p className="pr-10 md:pr-16 flex items-center gap-2"><img src={TrustSwap} className=' h-8 ' alt="polkastarter" />Trustswap</p>
                <p className="pr-10 md:pr-16 flex items-center gap-2"><img src={DaoMaker} className=' h-8 ' alt="polkastarter" />DAO Maker</p>

             
            </Marquee>
        </div>
    )
}

export default Slider