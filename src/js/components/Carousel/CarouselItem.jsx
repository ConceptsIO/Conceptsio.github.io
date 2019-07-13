import React from 'react';
import Card from '../Card/Card.jsx';

class CarouselItem extends React.Component {
    render() {
        if (this.props.itemType === "card") {
            if (this.props.activeCarousel === "active") {
                return (
                    <div className="carousel-item active">
                        <Card cardTitle={ this.props.value } />
                    </div>
                );
            }
            return (
                <div className="carousel-item">
                    <Card cardTitle={ this.props.value } />
                </div>
            );
        } else if (this.props.itemType === "img") {
            return (
                <div className="carousel-item">
                    <img src={ this.props.value } />
                </div>
            );
        } else if (this.props.itemType === "video") {
            return (
                <div className="carousel-item">
                    <video>
                        <source src={ this.props.value } type="video/mp4"></source>
                    </video>
                </div>
            );
        } else {
            return (
                <div className="carousel-item">
                    <p>{ this.props.value }</p>
                </div>
            );
        }
    }
}

export default CarouselItem;