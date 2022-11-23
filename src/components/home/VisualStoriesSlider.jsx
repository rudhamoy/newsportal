import React, { useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import julia from '../../assets/images/julia.png';
import rashmika from '../../assets/images/rashmika.png';
import bikini from '../../assets/images/bikini.png';
import walker from '../../assets/images/walker.png';
import VisualStoriesItem from './VisualStoriesItem';

import './slider.css'

const data = [
    {
        img: julia,
        title: "Julia Garnet looks stunning in the dress by Prada"
    },
    {
        img: rashmika,
        title: "Julia Garnet looks stunning in the dress by Prada"
    },
    {
        img: walker,
        title: "Julia Garnet looks stunning in the dress by Prada"
    },
    {
        img: bikini,
        title: "Julia Garnet looks stunning in the dress by Prada"
    },
    {
        img: walker,
        title: "Julia Garnet looks stunning in the dress by Prada"
    },
    {
        img: walker,
        title: "Julia Garnet looks stunning in the dress by Prada"
    },
    {
        img: walker,
        title: "Julia Garnet looks stunning in the dress by Prada"
    },
    {
        img: walker,
        title: "Julia Garnet looks stunning in the dress by Prada"
    },
    {
        img: walker,
        title: "Julia Garnet looks stunning in the dress by Prada"
    },
]


function VisualStoriesSlider() {
    const [currentIndex, setCurrentIndex] = useState(0)


    const nextSlide = () => {
        if (currentIndex <= data.length) {
            setCurrentIndex(currentIndex + 1)
        }
        console.log(currentIndex)
    }

    const prevSlide = () => {
        if (currentIndex !== 0) {
            setCurrentIndex(currentIndex - 1)
        }
        console.log(currentIndex)
    }
    console.log(currentIndex)

    // const carousalContainer = document.getElementsByClassName('container');

    // const nextSlide = (e) => {
    //     e.preventDefault();
    //     let width = carousalContainer.clientWidth;
    //     carousalContainer.scrollLeft = carousalContainer.scrollLeft - width;
    //     console.log(width);

    // }

    // const prevSlide = (e) => {
    //     e.preventDefault();
    //     let width = carousalContainer.clientWidth;
    //     carousalContainer.scrollLeft = carousalContainer.scrollLeft + width;
    //     console.log(width);
    // }

    return (
        <div className="h-[395px] w-[95vw] sm:w-[839px] mt-[30px] rounded-[4px] p-2 bg-white relative drop-shadow-container">

            {/* header */}
            <div className="flex justify-between rounded-tl-lg rounded">
                <div className="flex items-center gap-x-2">
                    <p className="text-[#bf912d] font-semibold font-nunitoSans text-[16px] sm:text-[22px]">VISUAL STORIES</p>
                    <div className="h-[2px] w-[80px] sm:w-[100px] rounded bg-[#bf912d]"></div>
                </div>
                <div className="text-[#bf912d] text-[12px] sm:text-[18px] font-semibold font-nunitoSans flex items-center cursor-pointer">
                    <p>VIEW ALL</p>
                    <FiChevronRight className="text-[18px]" />
                </div>
            </div>

            {/* Navigator */}
            <div role="button" onClick={prevSlide} className=" absolute cursor-pointer top-[50%] left-3 p-2  rounded-full bg-white shadow-xl border-gray-500 z-[1] drop-shadow-3xl">
                <FiChevronLeft className="text-[15px] text-[#bf912d] " />
            </div>
            <div role="button" onClick={nextSlide} className=" absolute cursor-pointer top-[50%] right-3 p-2  rounded-full bg-white shadow-xl border-gray-500 z-[1] drop-shadow-3xl">
                <FiChevronRight className="text-[15px] text-[#bf912d] " />
            </div>

            {/* container */}
                <div className='overflowHidden'>
                <div className='flex gap-x-2 p-1 overflow-x-scroll w-[90vw] sm:w-[811px] border'>
                        {data.map((item, index) => {
                            return (
                                <div  key={index}>
                                    <VisualStoriesItem
                                        styles={{ transform: `translate(-${currentIndex * 100}%)` }}
                                        image={item.img}
                                        title={item.title} />
                                </div>
                            )
                        })}
                </div>
                </div>
        </div>
    )
}


export default VisualStoriesSlider