import React from 'react'
import { BiCopyright } from 'react-icons/bi'

const MenuFooter = () => {
    return (
        <div className="uppercase bg-[#1d1d1d] p-2">
            <div>
                <p className="uppercase text-center text-white text-[12px] font-nunitoSans my-1">Find more content at</p>
                <div className="flex justify-around items-center p-3">
                    <img src="logo-03.png" alt="" />
                    <img src="new-logo-02.png" alt="" />
                </div>
            </div>
            <div className="text-center flex justify-center">
            <p className='flex text-[10px] font-nunitoSans text-[#dbdbdb]'>
                    <BiCopyright className='text-[12px]' /> <span>2019 - 2022 Daily Research Plot All Rights Reserved.</span>
                </p>
            </div>
        </div>
    )
}

export default MenuFooter