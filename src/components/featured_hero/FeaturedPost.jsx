import React from 'react'
import panda from '../../assets/images/panda.png';

import { AiOutlinePicRight } from "react-icons/ai";
function FeaturedPost() {
    return (
        <div className="sm:h-[471px] bg-white w-[635px] rounded-[6px] my-2 sm:my-0 cursor-pointer">
            <div className="sm:h-[325px] w-[635px] overflow-hidden relative ">
                <img className="h-[100%]" src={panda} alt="" />
                <div className="absolute z-[10] bottom-2 left-6 flex flex-row justify-start gap-2 items-center drop-shadow-3xl">
                    <AiOutlinePicRight className="text-[#ffd200] font-bold" />
                    <div className="capitalize text-[12px] text-[#ffd200]  font-bold">TV SERIES</div>
                </div>
            </div>
            <div className="pt-[7px] pb-[12px] px-[14px]">
                <h3 className="text-[25.5px] font-bold leading-8 font-futura2">Kung Fu Panda: The Dragon Knight Season 2 Potential Release Date and More</h3>
                <p className="text-[16.12px] font-proxima">Kung Fu Panda: THe Dragon Knight Season 2 has already not been announced and here we have its Expected Release Data, Cast and possible Plot info</p>
            </div>
        </div>
    )
}

export default FeaturedPost