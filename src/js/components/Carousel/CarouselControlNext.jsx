import parseJsonItem from "../Utilities/parseJsonItem.jsx";

function parseCarouselControlNextContents(carouselControlNextContents) {
    return carouselControlNextContents.map((item) => {
        switch(item.itemType) {
            default:
                return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents);
        } 
    });
}

function parseCarouselControlNextContainers(carouselControlNextContainers, carouselControlNextContents) {
    return carouselControlNextContainers.map((container) => {
        return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, carouselControlNextContents);
    });
}

function parseCarouselControlNextData(carouselControlNextData) {
    return parseCarouselControlNextContainers(carouselControlNextData.componentContainers, parseCarouselControlNextContents(carouselControlNextData.componentContents));
}

const CarouselControlNext = (props) => {
    return parseCarouselControlNextData(props.carouselControlNextData);
}

export default CarouselControlNext;