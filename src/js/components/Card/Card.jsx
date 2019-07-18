import React from 'react';

class Card extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cardTitle: props.cardTitle,
            cardText: props.cardText,
            cardImg: props.cardImg,
            cardFooter: props.cardFooter
        };
    }
    render() {
        return (
            <div className="card" style={{ height: "auto", width: "50%", margin: "auto", backgroundColor: "lightseagreen", display: "block" }}>
                <div className="card-body" style={{ color:"white", textAlign:"center" }}>
                    <h3>{ this.state.cardTitle }</h3>
                    <br />
                    <img src={ this.state.cardImg }></img>
                    <br />
                    <br />
                    <h5 className="card-text">
                        { this.state.cardText }
                    </h5>
                </div>
            </div>
        )
    }
}

export default Card;