function parseCarouselContents(carouselContents) {
    
}

function parseCarouselControlsData(carouselControlsData) {
    
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