import React from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import julia from '../../assets/images/julia.png';
import rashmika from '../../assets/images/rashmika.png';
import bikini from '../../assets/images/bikini.png';
import walker from '../../assets/images/walker.png';
import VisualStoriesItem from './VisualStoriesItem';
function VisualStoriesSlider() {
    const carousalContainer = document.getElementsByClassName('carousal-container');


    const nextSlide = (e) => {
        e.preventDefault();
        let width = carousalContainer[0].clientWidth;
        carousalContainer[0].scrollLeft = carousalContainer[0].scrollLeft - width;
        console.log(width);

    }

    const prevSlide = (e) => {
        e.preventDefault();
        let width = carousalContainer[0].clientWidth;
        carousalContainer[0].scrollLeft = carousalContainer[0].scrollLeft + width;
        console.log(width);
    }

    return (
        <div className="h-[395px] w-[839px] mt-[30px] rounded-[4px] p-2 bg-white relative drop-shadow-container">
            <div className="flex justify-between rounded-tl-lg rounded">
                <div className="flex items-center gap-x-2">
                    <p className="text-[#bf912d] font-semibold text-[18px]">VISUAL STORIES</p>
                    <div className="h-[2px] w-[100px] rounded bg-[#bf912d]"></div>
                </div>
                <div className="text-[#bf912d] font-semibold flex items-center">
                    <p>VIEW ALL</p>
                    <FiChevronRight className="text-[18px]" />
                </div>
            </div>
            <div onClick={prevSlide} className="absolute cursor-pointer top-[50%] left-3 p-2  rounded-full bg-white shadow-xl border-gray-500 z-[1] drop-shadow-3xl">
                <FiChevronLeft className="text-[15px] text-[#bf912d] " />
            </div>
            <div onClick={nextSlide} className="absolute cursor-pointer top-[50%] right-3 p-2  rounded-full bg-white shadow-xl border-gray-500 z-[1] drop-shadow-3xl">
                <FiChevronRight className="text-[15px] text-[#bf912d] " />
            </div>

            <div className="w-[811px] h-[321px] mt-[13px] border-[1px] rounded-[6px] overflow-hidden scroll-smooth overflow-x-scroll carousal-container scrollbar-hide">
                <div className="flex">
                    <div className="h-[300px] carousal-container bg-white my-2 p-[6px] flex gap-x-[12px] rounded">
                        <VisualStoriesItem image={julia} title={"Julia Garnet looks stunning in the dress by Prada"} />
                        <VisualStoriesItem image={rashmika} title={"Rashmika Mandana wins Audience Hearts by Red Lehenga"} />
                        <VisualStoriesItem image={bikini} title={"Heidi Klum shared some bikini photos"} />
                        <VisualStoriesItem image={walker} title={"Walker Season 3 Release Date and Streaming Details"} />
                        <VisualStoriesItem image={walker} title={"Walker Season 3 Release Date and Streaming Details"} />
                        <VisualStoriesItem image={walker} title={"Walker Season 3 Release Date and Streaming Details"} />
                        <VisualStoriesItem image={walker} title={"Walker Season 3 Release Date and Streaming Details"} />
                        <VisualStoriesItem image={walker} title={"Walker Season 3 Release Date and Streaming Details"} />
                    </div>
                </div>

            </div>


        </div>
    )
}

export default VisualStoriesSlider