import React from 'react'

function SideBarItem({ category, title, image }) {
    return (

        <div className="flex flex-row items-center cursor-pointer rounded-md w-full p-2 my-2 z-0 border-2">
            <div className="h-[80px] w-[80px] bg-black overflow-hidden rounded-md">
                <img className="h-[100px]" src={image} alt="" />
            </div>
            <div className="px-2 relative h-[80px] w-[250px]">
                <p className="font-futura2 text-[#bf912d] font-bold text-[10px] capitalize">{category}</p>
                <p className="font-proxima text-[14px] leading-5 text-black font-bold">
                    {title}
                </p>
            </div>
        </div>

    )
}

export default SideBarItem