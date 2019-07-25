import { getJsonObjectWithID } from "../Utilities/getJsonObject";
import parseJsonItem from "../Utilities/parseJsonItem";

function parseCarouselControlNextItem(carouselControlNextComponents) {
    return carouselControlNextComponents.map((item) => {
        switch(item.itemType) {
            default:
                return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents);
        } 
    });
}

function parseCarouselControlNextContainer(carouselControlNextContainer, carouselControlNextContents) {
    return carouselControlNextContainer.map((container) => {
        return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, carouselControlNextContents);
    });
}

function parseCarouselControlNextData(carouselControlNextData) {
    return parseCarouselControlNextContainer(parseCarouselControlNextItem(carouselControlNextData));
}

const CarouselControlsNext = (props) => {
    parseCarouselControlNextData(getJsonObjectWithID(props.carouselControlnextJsonUrl, props.carouselControlNextID));
}

export default CarouselControlsNext;