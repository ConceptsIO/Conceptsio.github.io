import React from 'react';

import { getJsonObjectWithID } from '../Utilities/getJsonObject.js';
import parseJsonItem from '../Utilities/parseJsonItem.jsx';
import CarouselControls from './CarouselControls.jsx';
import CarouselSlide from './CarouselSlide.jsx';

function parseCarouselContents(carouselContents) {
    return carouselContents.map((item) => {
        switch(item.componentType) {
            case "carouselControls":
                return <CarouselControls carouselControlsData={ item }/>
            case "carouselSlide":
                return <CarouselSlide carouselSlideData={ item } />
            default:
                return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents);
        }
    });
}

function parseCarouselContainers(carouselContainers, carouselContents) {
    return carouselContainers.map((container) => {
        return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, carouselContents);
    });
}

function parseCarouselData(carouselData) {
    return parseCarouselContainers(carouselData.componentContainers, parseCarouselContents(carouselData.componentContents));
}

const Carousel = (props) => {
    return parseCarouselData(getJsonObjectWithID(props.carouselJsonUrl, props.carouselID));
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