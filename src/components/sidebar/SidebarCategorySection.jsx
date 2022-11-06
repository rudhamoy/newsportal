import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import CategoryListItem from '../category/CategoryListItem'
import SliderItem from '../home/HotSpotSliderItem'
import huggin from "../../assets/images/couples_hug.png";
import SmallerCardItems from '../home/SmallerCardItems'
import SideBarItem from './SideBarItem';


function SidebarCategorySection({ category }) {
    return (
        <div className="bg-white my-2 w-full rounded">
            <div className="p-2">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-2">
                        <p className="Futura2 text-[#bf912d] font-bold">{category}</p>
                        <div className="h-[2.5px] w-[100px] rounded bg-[#bf912d]"></div>
                    </div>

                </div>
                <div className="">
                    <SideBarItem category={"TV SERIES"} title={"Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far"} image={huggin} />
                    <SideBarItem category={"TV SERIES"} title={"Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far"} image={huggin} />
                    <SideBarItem category={"TV SERIES"} title={"Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far"} image={huggin} />
                    <SideBarItem category={"TV SERIES"} title={"Bob Hearts Abishola Season 4 Release Date, Cast, Plot, and What we know so far"} image={huggin} />

                </div>
                <div class="flex items-center justify-center">
                    <p className="text-[#bf912d] font-semibold text-[16px]">READ ALL</p>
                    <FiChevronRight className="text-[#bf912d] text-[18px]" />
                </div>
            </div>
        </div>
    )
}

export default SidebarCategorySection