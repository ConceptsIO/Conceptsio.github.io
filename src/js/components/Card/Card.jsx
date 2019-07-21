import React from 'react';

import CardBody from './CardBody.jsx';
import parseJsonData from '../Utilities/parseJsonItem.js';

function parseCardData(cardData) {
    
}

/*
    Expected props is an object with the following format,

    Ex:
        {
            "itemType": "card active",
            "itemContent": {
                "cardContainer": [
                    {
                        "containerType": "div",
                        "containerProperties": {
                            "className": "card",
                            "style": {
                                "backgroundColor": "lightseagreen",
                                "display": "block",
                                "height": "auto",
                                "margin": "auto",
                                "width": "50%"
                            }
                        }
                    }
                ],
                "cardContents" : {
                    "cardHeader": "Card title",
                    "cardBody": {
                        "cardImg": "../../../src/url.js",
                        "cardText": "Blah Blah Blah"
                    },
                    "cardFooter": "My email is blah@gmail.com"   
                }
            }
        }
*/
const Card = (props) => {
    return parseCardData(props.itemContents);
}

export default Card;