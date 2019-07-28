import parseJsonItem from '../Utilities/parseJsonItem.jsx';

function parseCardContents(cardContents) {
    return cardContents.map((item) => {
        return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents);
    });
}

function parseCardContainers(cardContainers, cardContents) {
    return cardContainers.map((container) => {
        return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, cardContents);
    });
}

function parseCardData(cardData) {
    return parseCardContainers(cardData.componentContainers, parseCardContents(cardData.componentContents));
}

const Card = (props) => {
    return parseCardData(props.cardData);
}

export default Card;

/*
    Expected props is an object with the following format,

    Ex:
        {
            "componentType": "card active",
            "componentContainers": [
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
            ]
            "componentContents": {
                "cardHeader": "Card title",
                "cardBody": {
                    "cardImg": "../../../src/url.js",
                    "cardText": "Blah Blah Blah"
                },
                "cardFooter": "My email is blah@gmail.com"
            }
        }
*/