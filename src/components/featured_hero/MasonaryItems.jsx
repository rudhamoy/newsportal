import React from 'react'


function MasonaryItem({ image, category, icon, title }) {
    return (
        <div className="bg-white w-[310px] sm:h-[231px] rounded-[3px] flex sm:flex-col flex-row overflow-hidden cursor-pointer">
            <div className="sm:h-[175px] h-[175px] w-[100%] overflow-hidden relative">
                <img src={image} alt="" className="w-[100%] h-[100%]" />
                <div className="absolute z-[10] bottom-2 sm:left-2  left-2 flex flex-row justify-start gap-2 items-center">
                    <img src={icon} width={15} height={15} className="text-[#ffd200] font-bold" alt="" />
                    <div className="capitalize text-[12px] text-[#ffd200]  font-bold">{category}</div>
                </div>
            </div>
            <div className="sm:p-[10px] p-[6px]">
                <h3 className="text-[18px] sm:leading-5 font-semibold  sm:line-clamp-2 line-clamp-2 font-proxima ">{title}</h3>
            </div>
        </div>
    )
}

export default MasonaryItem