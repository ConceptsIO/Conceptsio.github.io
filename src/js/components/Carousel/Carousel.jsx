import React from 'react';
import CarouselControls from './CarouselControls.jsx';
import CarouselSlide from './CarouselSlide.jsx';

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
//                 if (item.carouselID === carouselID) {
//                     return item;
//                 }
//             });
//         })(props.carouselJSONURL, props.carouselID);

//         this.state = {
//             carouselItems: carouselData.carouselContents.carouselItems
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

function parseCarouselData(carouselData) {

}

const Carousel = (props) => {

}

export default Carousel;