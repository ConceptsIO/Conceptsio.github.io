import React from 'react';

const uuidv4 = require('uuid/v4');
const buffer= Array();

function parseJsonObjectToComponentItem(componentItems) {
    // generate a random uuid into the buffer
    uuidv4(null, buffer, 0);
    // checks the passed in item type to various HTML tags
    switch(componentItems.itemType) {
        // cases to evaluate the passed in item type and returns the component item's contents
        case "a":
            return <a { ...componentItems.itemAttributes } key={ buffer }>{ componentItems.itemContents }</a>;
        case "br":
            return <br key={ buffer }/>;
        case "button":
            return <button { ...componentItems.itemAttributes } key={ buffer }>{ componentItems.itemContents }</button>;
        case "div":
            if(typeof(componentItems.itemContents) === "object") {
                var contents = componentItems.itemContents.map((item) => {
                    return parseJsonObjectToComponentItem(item);
                });
                return <div { ...componentItems.itemAttributes } key={ buffer }>{ contents }</div>;
            }
        case "h1":
            return <h1 { ...componentItems.itemAttributes } key={ buffer }>{ componentItems.itemContents }</h1>;
        case "h2":
            return <h2 { ...componentItems.itemAttributes } key={ buffer }>{ componentItems.itemContents }</h2>;
        case "h3":
            return <h3 { ...componentItems.itemAttributes } key={ buffer }>{ componentItems.itemContents }</h3>;
        case "h4":
            return <h4 { ...componentItems.itemAttributes } key={ buffer }>{ componentItems.itemContents }</h4>;
        case "h5":
            return <h5 { ...componentItems.itemAttributes } key={ buffer }>{ componentItems.itemContents }</h5>;
        case "h6":
            return <h6 { ...componentItems.itemAttributes } key={ buffer }>{ componentItems.itemContents }</h6>;
        case "img":
            return <img { ...componentItems.itemAttributes } key={ buffer }>{ componentItems.itemContents }</img>;
        case "li":
            return <li { ...componentItems.itemAttributes } key={ buffer } >{ componentItems.itemContents }</li>;
        case "nav":
            return <nav { ...componentItems.itemAttributes } key={ buffer }>{ componentItems.itemContents }</nav>;
        case "p":
            if(typeof(componentItems.itemContents) === "object") {
                var contents = componentItems.itemContents.map((item) => {
                    return parseJsonObjectToComponentItem(item);
                });
                return <p { ...componentItems.itemAttributes } key={ buffer }>{ contents }</p>;
            } else {
                return <p { ...componentItems.itemAttributes } key={ buffer }>{ componentItems.itemContents }</p>;
            }
            
        case "span":
            if(typeof(componentItems.itemContents) === "object") {
                var contents = componentItems.itemContents.map((item) => {
                    return parseJsonObjectToComponentItem(item);
                });
                return <span { ...componentItems.itemAttributes } key={ buffer }>{ contents }</span>;
            } else {
                return <span { ...componentItems.itemAttributes } key={ buffer }>{ componentItems.itemContents }</span>;
            }
        case "td":
            return <td { ...componentItems.itemAttributes } key={ buffer }>{ componentItems.itemContents }</td>;
        case "th":
            return <th { ...componentItems.itemAttributes } key={ buffer }>{ componentItems.itemContents }</th>;
        default: 
            return componentItems;
    }
}

export default parseJsonObjectToComponentItem;