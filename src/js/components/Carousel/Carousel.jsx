import React from 'react';

import CarouselControls from './CarouselControls.jsx';
import CarouselSlide from './CarouselSlide.jsx';

import { getJsonObjectWithID } from '../Utilities/getJsonObject.js';
import parseJsonItem from '../Utilities/parseJsonItem.jsx';

function parseCarouselContents(carouselComponentContents) {
    return carouselComponentContents.map((item) => {
        switch(item.itemType) {
            case "carouselControls":
                return <CarouselControls />
            case "carouselSlide":
                return <CarouselSlide />
            default:
                return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents);
        }
    });
}

function parseCarouselContainer(carouselContainer, carouselContents) {
    return carouselContainer.map((container) => {
        return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, carouselContents);
    });
}

function parseCarouselData(carouselData) {
    return parseCarouselContainer(parseCarouselContents(carouselData));
}

const Carousel = (props) => {
    return parseCarouselData(getJsonObjectWithID(props.carouselJsonUrl, props.id));
}

export default Carousel;

// class Carousel extends React.Component {

//     constructor(props) {
//         super(props);
//         var carouselData  = (function(jsonURL, carouselID) {
//             var json = null;
//             $.ajax({
//                 'url' : jsonURL,
//                 'datatype' : 'json',
//                 async : false,
//                 'success' : function(data) {
//                     json = data;
//                 }
//             });
//             return json.map((item) => {
//                 if (item.componentID === carouselID) {
//                     return item;
//                 }
//             });
//         })(props.carouselJsonUrl, props.carouselID);
//         this.state = {
//             carouselItems: carouselData
//         }
//     }

//     resolveTags(item) {
//         return <CarouselSlide carouselItem={ item }/>;
//     }

//     render() {
//         var content = this.state.carouselItems.map((item) => {
//             return this.resolveTags(item);
//         });

//         return (
//             <div style={{ alignItems: "center", backgroundColor: "lightgray", display: "flex", height: "900px", justifyContent: "center" }} >
//                 <div className="carousel slide" id="MainCarousel" data-ride="carousel" data-interval="7500">
//                     <div className="carousel-inner" style={{ margin: "auto" }}>
//                         { content }
//                         <CarouselControls link={ "#MainCarousel" } />
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }