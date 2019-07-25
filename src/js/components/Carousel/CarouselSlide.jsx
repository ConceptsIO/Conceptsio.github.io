import Card from '../Card/Card.jsx';
import { getJsonObjectWithID } from '../Utilities/getJsonObject.js';
import parseJsonItem from '../Utilities/parseJsonItem.jsx';

function parseCarouselSlideContents(carouselSlideContents) {
    return carouselSlideContents.map((item) => {
        switch(item.itemType) {
            case "card":
                return <Card cardData={ item }/>;
            default:
                return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents);
        }
    });
}

function parseCarouselSlideContainers(carouselSlideContainer, carouselSlideContents) {
    return carouselSlideContainer.map((container) => {
        return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, carouselSlideContents);
    });
}

function parseCarouselSlideData(carouselSlideData) {
    return parseCarouselSlideContainers(parseCarouselSlideContents(carouselSlideData));
}

const CarouselSlide = (props) => {
    parseCarouselSlideData(getJsonObjectWithID(props.carouselSlideData));
}

export default CarouselSlide;

// constructor(props) {
//     super(props);

//     this.resolveTags = this.resolveTags.bind(this);
// }

// resolveTags() {
//     switch(this.props.carouselItem.itemType) {
//         case "card active":
//             return (
//               <div className="carousel-item active">
//                   <Card cardTitle={ this.props.carouselItem.card.cardHeader } cardText={ this.props.carouselItem.card.cardBody.cardText } cardImg={ this.props.carouselItem.card.cardBody.cardImg }/>
//               </div>
//             );
//         case "card":
//             return (
//                 <div className="carousel-item">
//                     <Card cardTitle={ this.props.carouselItem.card.cardHeader } cardText={ this.props.carouselItem.card.cardBody.cardText } cardImg={ this.props.carouselItem.card.cardBody.cardImg }/>
//                 </div>
//             );
//         case "img":
//             return (
//                 <div className="carousel-item">
//                     <img src={ this.props.carouselItem.img.imgurl } alt=""/>
//                 </div>
//             );
//         case "video":
//             return (
//                 <div className="carousel-item">
//                     <video src={ this.props.carouselItem.video.vidurl }></video>
//                 </div>
//             );
//         default:
//             return (
//                 <div className="carousel-item">
//                     <p>Currently under construction.</p>
//                 </div>
//             );
//     }
// }

// render() {
//     return this.resolveTags();
// }