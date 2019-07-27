import parseJsonItem from "../Utilities/parseJsonItem.jsx";

function parseCarouselControlPrevItems(carouselControlPrevContents) {
    return carouselControlPrevContents.map((item) => {
        switch(item.itemType) {
            default:
                return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents);
        }
    });
}

function parseCarouselControlPrevContainers(carouselControlPrevContainers, carouselControlPrevContent) {
    return carouselControlPrevContainers.map((container) => {
        return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, carouselControlPrevContent);
    });
}

function parseCarouselControlPrevData(carouselControlPrevData) {
    return parseCarouselControlPrevContainers(carouselControlPrevData.componentContainers, parseCarouselControlPrevItems(carouselControlPrevData.componentContents));
}

const CarouselControlPrev = (props) => {
    return parseCarouselControlPrevData(props.carouselControlPrevData);
}

export default CarouselControlPrev;