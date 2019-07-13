import React from 'react';
import Card from '../Card/Card.jsx';
import CarouselControls from './CarouselControls.jsx';
import CarouselItem from './CarouselItem.jsx';

class Carousel extends React.Component {
    render() {
        return (
            <div className="carousel slide" id="MainCarousel" data-ride="carousel" data-interval="false" style={{ backgroundColor: "black"}}>
                <div className="carousel-inner">
                    <CarouselItem activeCarousel={"active"} itemType={"card"} value={"Active Test"} />
                    <div className="carousel-item">
                        <Card cardTitle="I'm also a card"/>
                    </div>
                    <div className="carousel-item">
                        <Card cardTitle="Sup"/>
                    </div>
                    <CarouselItem itemType={"card"} value={"Card Title Test"} />
                </div>
                <CarouselControls link={ "#MainCarousel" } />
            </div>
        );
    }
}

export default Carousel;