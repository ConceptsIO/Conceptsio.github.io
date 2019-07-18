import React from 'react';
import Card from '../Card/Card.jsx';

class CarouselItem extends React.Component {

    constructor(props) {
        super(props);

        this.resolveTags = this.resolveTags.bind(this);
    }

    resolveTags() {
        switch(this.props.carouselItem.itemType) {
            case "card active":
                return (
                  <div className="carousel-item active">
                      <Card cardTitle={ this.props.carouselItem.card.cardHeader } cardText={ this.props.carouselItem.card.cardBody.cardText } cardImg={ this.props.carouselItem.card.cardBody.cardImg }/>
                  </div>  
                );
            case "card":
                return (
                    <div className="carousel-item">
                        <Card cardTitle={ this.props.carouselItem.card.cardHeader } cardText={ this.props.carouselItem.card.cardBody.cardText } cardImg={ this.props.carouselItem.card.cardBody.cardImg }/>
                    </div>
                );
            case "img":
                return (
                    <div className="carousel-item">
                        <img src={ this.props.carouselItem.img.imgurl } alt=""/>
                    </div>
                );
            case "video":
                return (
                    <div className="carousel-item">
                        <video src={ this.props.carouselItem.video.vidurl }></video>
                    </div>
                );
            default:
                return (
                    <div className="carousel-item">
                        <p>Currently under construction.</p>
                    </div>
                );
        }
    }

    render() {
        return this.resolveTags();
    }
}

export default CarouselItem;