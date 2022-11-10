import React from 'react'
import { FiChevronRight } from 'react-icons/fi';
import CategoryListItem from '../category/CategoryListItem';
import SmallerCardItems from './SmallerCardItems';

function CategorySection({ category }) {
    return (
        <div className="bg-white mt-[15px] sm:mt-[30px] w-[95vw] sm:w-[839px] sm:h-[560px] rounded-[4px] drop-shadow-container">
            <div className="p-2">
                <div className="flex justify-between items-center mb-[17px]">
                    <div className="flex items-center gap-x-2">
                        <p className="Futura2 text-[#bf912d] font-bold">{category}</p>
                        <div className="h-[2.5px] w-[100px] rounded bg-[#bf912d]"></div>
                    </div>
                    <div className="flex items-center cursor-pointer">
                        <p className="text-[#bf912d] font-bold">READ ALL</p>
                        < FiChevronRight className="text-[#bf912d] text-[25px]" />
                    </div>
                </div>
                <CategoryListItem width="810px" />
                {/* <div className="grid sm:grid-cols-2 gap-2"> */}
                <div className="flex justify-between flex-wrap">
                    <SmallerCardItems />
                    <SmallerCardItems />
                    <SmallerCardItems />
                    <SmallerCardItems />
                </div>
            </div>
        </div>
    )
}

export default CategorySection