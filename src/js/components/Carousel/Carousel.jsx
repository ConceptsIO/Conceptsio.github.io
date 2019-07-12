import React from 'react';
import Card from '../Card/Card.jsx';

class Carousel extends React.Component {
    render() {
        return (
            <div className="carousel slide" id="MainCarousel" data-ride="carousel" data-interval="false" style={{ backgroundColor: "black"}}>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <Card cardTitle="I'm a card"/>
                    </div>
                    <div className="carousel-item">
                        <Card cardTitle="I'm also a card"/>
                    </div>
                    <div className="carousel-item">
                        <Card cardTitle="Sup"/>
                    </div>
                    <CarouselItem itemType={"card, img, video, etc."} value={"String value from JSON OBJECT"} />
                </div>
                
                <CarouselControls link={"#MainCarousel"} />

                <a className="carousel-control-prev" href={this.props.link} role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#MainCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}

export default Carousel;