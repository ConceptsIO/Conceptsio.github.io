import { getJsonObjectWithID } from "../Utilities/getJsonObject";
import parseJsonItem from "../Utilities/parseJsonItem.jsx";

function parseCarouselControlsPrevItems(carouselControlsPrevContents) {
    return carouselControlsPrevContents.map((item) => {
        switch(item.itemType) {
            default:
                return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents);
        }
    });
}

function parseCarouselControlsPrevContainers(carouselControlsPrevContainer, carouselControlsPrevContent) {
    return carouselControlsPrevContainer.map((container) => {
        return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, carouselControlsPrevContent);
    });
}

function parseCarouselControlsPrevData(carouselControlsPrevData) {
    return parseCarouselControlsPrevContainers(parseCarouselControlsPrevItems(carouselControlsPrevData));
}

const CarouselControlsPrev = (props) => {
    return parseCarouselControlsPrevData(getJsonObjectWithID(props.carouselControlsPrevJsonUrl, props.carouselControlsPrevID));
}

export default CarouselControlsPrev;