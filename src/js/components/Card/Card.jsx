import React from 'react';

class Card extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cardTitle: props.cardTitle,
            cardText: props.cardText,
            cardImg: props.cardImg,
            cardFooter: props.cardFooter
        }
    }
    render() {
        return (
            <div className="card" style={{ height: "750px", width: "35%", margin: "auto", backgroundColor: "transparent", border:"none", display: "block" }}>
                <div className="card-body" style={{ color:"white", textAlign:"center" }}>
                    <div>
                        <h5>{ this.state.cardTitle }</h5>
                        <br />
                        <img src={ this.state.cardImg }></img>
                        <br />
                    </div>
                    <br />
                    <p className="card-text">
                        { this.state.cardText }
                    </p>
                </div>
            </div>
        )
    }
}

export default Card;