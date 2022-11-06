import React, { useState } from 'react'
import girlboobs from '../../assets/images/girlboobs.png'
import beardman from '../../assets/images/beard-man.png';
import SliderItem from './SliderItem';
import rightArrowIcon from '../../assets/icons/right-arrow-icon.svg';
import leftArrowIcon from '../../assets/icons/left-arrow-icon.svg';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';



function HotspotSlider() {
    var [slideValue, setSlideValue] = useState(-400)

    const nextSlide = (e) => {
        e.preventDefault();
        setSlideValue(slideValue -= 400)

        console.log('Next Slide')
        console.log(slideValue);
    }

    const prevSlide = (e) => {
        e.preventDefault();

        setSlideValue(slideValue += 400)

        console.log('Prev Slide')
        console.log(slideValue);
    }

    return (
        <div className="sm:h-[145px] h-[300px] w-[100%] bg-[#ffffff] mt-4 rounded-lg z-[1]">
            <div className="flex justify-between rounded-tl-lg">
                <div className="flex items-center gap-x-2 relative  w-[160px] overflow-hidden rounded-tl-lg" >
                    <p className="text-[#ffffff] text-[20px] z-[1] px-[10px]">HOT SPOT</p>
                    <div className="h-[30px] w-[160px] bg-[#ffc700] absolute top-0 left-[-10px] skew-x-[-18deg]"></div>
                </div >
                <div className="sm:flex hidden gap-x-1 items-center">
                    <div className="h-[3px] w-10 bg-[#d7d7d7] rounded"></div>
                    <div className="h-[3px] w-10 bg-[#ffc700] rounded"></div>
                    <div className="h-[3px] w-10 bg-[#d7d7d7] rounded"></div>
                </div>
                <div className="w-[160px]"></div>
            </div>

            <div className="flex p-2 relative  w-[100%] overflow-hidden">
                <div className="absolute cursor-pointer top-10 left-0 p-2  rounded-full bg-white shadow-xl border-gray-500 z-[1]">
                    <FiChevronLeft onClick={prevSlide} className="text-[25px] text-[#bf912d] " />
                </div>
                <div className={`flex translate-x-[${slideValue}px] w-[2400px] duration-500 ease-in-out`}>
                    <SliderItem category={'CELEBRITY'} image={girlboobs} title={"Shama Sikandar Flaunts in New Instagram Hot Pictures"} />
                    <SliderItem category={'CELEBRITY'} image={girlboobs} title={"Shama Sikandar Flaunts in New Instagram Hot Pictures"} />
                    <SliderItem category={'CELEBRITY'} image={girlboobs} title={"Shama Sikandar Flaunts in New Instagram Hot Pictures"} />
                    <SliderItem category={'CELEBRITY'} image={girlboobs} title={"Shama Sikandar Flaunts in New Instagram Hot Pictures"} />
                </div>

                <div className="absolute cursor-pointer  right-0 top-10 p-2  rounded-full bg-white shadow-xl border-gray-500">
                    <FiChevronRight onClick={nextSlide} className="text-[25px] text-[#bf912d]" />
                </div>
            </div>
            <div className="flex sm:hidden gap-x-1 items-center mx-[40%]">
                <div className="h-[3px] w-10 bg-[#d7d7d7] rounded"></div>
                <div className="h-[3px] w-10 bg-[#bf912d] rounded"></div>
                <div className="h-[3px] w-10 bg-[#d7d7d7] rounded"></div>
            </div>
        </div>
    )
}

export default HotspotSlider


