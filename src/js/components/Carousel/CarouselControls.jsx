import React from 'react';

class CarouselControls extends React.Component {
    render() {
        return (
            <div>
                <a className="carousel-control-prev" href={ this.props.link } role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href={ this.props.link } role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        );
    }
}

export default CarouselControls;