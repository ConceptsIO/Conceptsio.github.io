import React from 'react';
import CarouselControls from './CarouselControls.jsx';
import CarouselItem from './CarouselItem.jsx';

class Carousel extends React.Component {

    constructor(props) {
        super(props);

        var carouselItems  = (function(jsonURL) {
            var json = null;
            $.ajax({
                'url' : jsonURL,
                'datatype' : 'json',
                async : false,
                'success' : function(data) {
                    json = data;
                }
            });
            return json;
        })(this.props.carouselJSONURL);

        this.state = {
            carouselItems: carouselItems.CarouselItems
        }
    }

    resolveTags(item) {
        return <CarouselItem carouselItem={ item }/>;
    }

    render() {
        var content = this.state.carouselItems.map((item) => {
            return this.resolveTags(item);
        });

        return (
            <div style={{ alignItems: "center", backgroundColor: "lightgrey", display: "flex", height: "900px", justifyContent: "center" }} >
                <div className="carousel slide" id="MainCarousel" data-ride="carousel" data-interval="false">
                    <div className="carousel-inner" style={{ margin: "auto" }}>
                        { content }
                        <CarouselControls link={ "#MainCarousel" } />
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;