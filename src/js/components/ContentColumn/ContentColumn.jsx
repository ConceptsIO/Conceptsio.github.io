import React from 'react';

const ContentColumn = (props) => {
    // var content = props.contentColumnItems.map((item, index) => {

    // });
    
    return (
        <div className="container-fluid">
            <div className="row">
                <ul className="carousel-indicators">
                    <li className="active">
                        <a data-target="#skillCarousel" data-slide-to="0">Front-end <span className="triangle-down tri-1">&nbsp;</span></a>
                    </li>
                    <li>
                        <a data-target="#skillCarousel" data-slide-to="1">Back-end <span className="triangle-down tri-2">&nbsp;</span></a>
                    </li>
                    <li>
                        <a data-target="#skillCarousel" data-slide-to="2">Mobile Development <span className="triangle-down tri-2">&nbsp;</span></a>
                    </li>
                    <li>
                        <a data-target="#skillCarousel" data-slide-to="3">Data/Web Services <span className="triangle-down tri-2">&nbsp;</span></a>
                    </li>
                </ul>
            </div>

            <div className="row">
                <div className="carousel slide" id="skillCarousel" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                        <div className="item active">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContentColumn;