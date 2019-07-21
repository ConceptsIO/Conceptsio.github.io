import React from 'react';

const CardBody = (props) => {
    return (
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
    );
}

export default CardBody;