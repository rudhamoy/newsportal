import React from 'react'
import CategoryListItem from '../category/CategoryListItem';
import FeaturedContainer from '../featured_hero/FeaturedContainer';
import MoreButton from '../utils/MoreButton';
import CategorySection from './CategorySection';
import HotspotSlider from './HotspotSlider';
import SidebarCategorySection from '../sidebar/SidebarCategorySection';
import SideAds from '../ads/SideAds';
import VisualStoriesSlider from './VisualStoriesSlider';
function HomeContainer() {
    return (
        <div className="sm:mx-0 mx-2 mt-6 flex flex-col justify-center items-center">
            <div className="pb-[27px] pt-[37px] flex flex-col justify-center items-center">
                <FeaturedContainer />
                <HotspotSlider />
            </div>
            <div className="flex justify-between w-[1264px]">
                {/* content */}
                <div className="">
                    <CategorySection category={"ENTERTAINMENT"} />
                    <VisualStoriesSlider />
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
                {/* sidebar */}
                <div className="rounded">
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