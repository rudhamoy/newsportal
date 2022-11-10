import React from 'react'

function VisualStoriesItem({ image, title, index, styles }) {
    return (
        <div style={styles} index={index} className={`h-[300px] w-[187px] p-2 relative rounded overflow-hidden cursor-pointer `}>
            <div className="h-[300px] w-[187px]">
                <img src={image} className="h-[100%] w-[100%]" alt="" />
            </div>
            <p className="absolute z-[1] font-proxima bottom-10 left-0 text-[16px] font-semibold text-white p-2 leading-4">{title}</p>
            <p className="absolute z-[1] bottom-4 left-0 text-white font-bold text-[10px] p-2">AUGUEST 5, 2022</p>
            <p className="absolute z-[1] bottom-[4px] left-0 text-[#daa634] font-bold text-[10px] p-2">CELEBRITY</p>
            <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-[#313131] rounded"></div>
            <div className="flex items-center justify-between absolute gap-x-[1px] top-2 left-2">
                <div className="w-[2px] h-[12px] bg-[#ffffff]"></div>
                <div className="w-[8px] h-[16px] bg-[#ffffff]"></div>
                <div className="w-[2px] h-[12px] bg-[#ffffff]"></div>
            </div>
        </div>
    )
}

export default VisualStoriesItem