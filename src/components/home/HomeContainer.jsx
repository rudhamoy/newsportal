import React from 'react'
import CategoryListItem from '../category/CategoryListItem';
import FeaturedContainer from '../featured_hero/FeaturedContainer';
import MoreButton from '../utils/MoreButton';
import CategorySection from './CategorySection';
import HotspotSlider from './HotspotSlider';
import SidebarCategorySection from '../sidebar/SidebarCategorySection';
import SideAds from '../ads/SideAds';
function HomeContainer() {
    return (
        <div className="sm:mx-40 mx-2 mt-6">
            <FeaturedContainer />
            <HotspotSlider />
            <div className="flex sm:flex-row flex-col gap-x-4">
                <div className="sm:w-[70%] w-full">
                    <CategorySection category={"ENTERTAINMENT"} />
                    <div className="h-[360px] w-full rounded bg-red-400 text-center p-10 text-[34px] text-white font-bold">SLIDER HERE</div>
                    <CategorySection category={"TV SERIES NEWS"} />
                    <CategorySection category={"TECHNOLOGY"} />
                    <CategorySection category={"ANIME NEWS"} />
                    <MoreButton title={"MORE STORIES"} />
                    <CategoryListItem />
                    <CategoryListItem />
                    <CategoryListItem />
                    <CategoryListItem />
                    <CategoryListItem />
                </div>
                <div className="sm:w-[30%] w-full  rounded">
                    <SidebarCategorySection category={"CELEBRITY GOSSIPS"} />
                    <div className="h-[360px]">
                        <SideAds bg={"white"} />
                    </div>
                    <SidebarCategorySection category={"MOVIES NEWS"} />
                    <SidebarCategorySection category={"GAMES & SPORTS"} />
                    <div className="h-[600px]">
                        <SideAds bg={"white"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContainer