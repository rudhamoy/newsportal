import React from 'react'

function MoreButton({ title }) {
    return (
        <div className=" rounded-[5px] bg-[#bf912d] text-center h-[52px] w-[839px] flex items-center justify-center mt-[26px]">
            <p className="text-[#ffd200] text-[34px] font-futura2">{title}</p>
        </div>
    )
}

export default MoreButton