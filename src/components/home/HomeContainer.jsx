import React from 'react'
import FeaturedContainer from '../featured_hero/FeaturedContainer';
import CategorySection from './CategorySection';
import HotspotSlider from './HotspotSlider';
function HomeContainer() {
    return (
        <div className="sm:mx-40 mx-2">
            <FeaturedContainer />
            <HotspotSlider />
            <CategorySection category={"ENTERTAINMENT"} />
        </div>
    )
}

export default HomeContainer