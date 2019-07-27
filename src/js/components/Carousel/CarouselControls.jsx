import React from 'react';

import parseJsonItem from "../Utilities/parseJsonItem.jsx";
import CarouselControlPrev from './CarouselControlPrev.jsx';
import CarouselControlNext from './CarouselControlNext.jsx';

function parseCarouselControlsContents(carouselControlsContents) {
    return carouselControlsContents.map((item) => {
        switch(item.componentType) {
            case "prev":
                return <CarouselControlPrev carouselControlPrevData={ item }/>
            case "next":
                return <CarouselControlNext carouselControlNextData={ item }/>
            default:
                return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents);
        }
    });
}

function parseCarouselControlsContainer(carouselControlsContainers, carouselControlsContents) {
    return carouselControlsContainers.map((container) => {
        return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, carouselControlsContents);
    });
}

function parseCarouselControlsData(carouselControlsData) {
    return parseCarouselControlsContainer(carouselControlsData.componentContainers, parseCarouselControlsContents(carouselControlsData.componentContents));
}

const CarouselControls = (props) => {
    return parseCarouselControlsData(props.carouselControlsData);
}

export default CarouselControls;

// (
//     <div>
//         <a className="carousel-control-prev" href={ props.link } role="button" data-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="sr-only">Previous</span>
//         </a>
//         <a className="carousel-control-next" href={ props.link } role="button" data-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="sr-only">Next</span>
//         </a>
//     </div>
// )