import React from 'react';
import Table from '../Table/Table';
import { threadId } from 'worker_threads';

function parseJsonItem(dataItemType, dataItemAttributes, dataItemContents, dataComponentContents) {

    // checks the passed in item type to various HTML tags
    switch(dataItemType) {
        case "br":
            return <br />

        // these tags potentially are containers
        case "div":
            if (dataItemContents) {
                var containerContents = [];
                for (var i = 0; i < containerContents.length; ++i) {
                    if (containerContents[i].itemType) {
                        containerContents.push(parseJsonItem(dataItemContents[i].itemType, dataItemContents[i].itemAttributes, dataItemContents[i].itemContents));
                    } else {
                        containerContents.push(parseJsonItem(dataItemContents[i].containerType, dataItemContents[i].containerAttributes, dataItemContents[i].containerContents, dataComponentContents));
                    }
                }
                return <div { ...dataItemAttributes }>{ containerContents }</div>;
            } else {
                return <div { ...dataItemAttributes }>{ dataComponentContents }</div>
            }
        case "span":
            if(dataItemContents.containerContents) {
                // collect the inner containers through recursive calls
                var content = parseJsonItem(dataItemContents.containerType,
                                            dataItemContents.containerAttributes,
                                            dataItemContents.containerContents);
                return <span { ...dataItemAttributes }>{ content }</span>
            } else {
                return <span { ...dataItemAttributes }>{ dataItemContents }</span>
            }
        case "table":
            return <table { ...dataItemAttributes }>{ dataItemContents }</table>;
        case "thead":
            if (dataItemContents) {
                return dataItemContents.map((container) => {
                    return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, dataComponentContents);
                });
            } else {
                return <thead></thead>;
            }
        case "tbody":
            if (dataItemContents) {
                return dataItemContents.map((item, index) => {
                    return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents, dataComponentContents[index]);
                });
            } else {
                return <tbody></tbody>;
            }
        case "th":
            return <th { ...dataItemAttributes }>{ dataItemContents }</th>;
        case "tr":
            return <tr { ...dataItemAttributes }>{ dataComponentContents }</tr>;
        case "tr list":
            return dataComponentContents.map((item) => {
                
            })
        case "td":
            return <td { ...dataItemAttributes }>{ dataItemComponents }</td>;
        case "td list":
        
        case "nav":
            return <nav { ...dataItemAttributes }>{ dataComponentContents }</nav>

        case "a":
            return <a { ...dataItemAttributes }>{ dataItemContents }</a>;

        case "h1":
            return <h1 { ...dataItemAttributes }>{ dataItemContents }</h1>;
        case "h2":
            return <h2 { ...dataItemAttributes }>{ dataItemContents }</h2>;
        case "h3":
            return <h3 { ...dataItemAttributes }>{ dataItemContents }</h3>;
        case "h6":
            return <h6 { ...dataItemAttributes }> { dataItemContents } </h6>;
        case "p":
            if (dataItemContents) {
                return dataItemContents.map((item) => {
                    return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents, dataComponentContents);
                });
            } else { 
                return <p { ...dataItemAttributes }>{ dataItemContents }</p>; 
            }
    }
}

export default parseJsonItem;