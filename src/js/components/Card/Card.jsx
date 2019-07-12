import React from 'react';

class Card extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cardTitle: props.cardTitle,
            cardText: props.cardText
        }
    }
    render() {
        return (
            <div className="card center-block" style={{width: "18rem", margin: "auto"}}>
                <div className="card-body">
                    <h5>{ this.state.cardTitle }</h5>
                    <p className="card-text">
                        { this.state.cardText }
                    </p>
                </div>
            </div>
        )
    }
}

export default Card;