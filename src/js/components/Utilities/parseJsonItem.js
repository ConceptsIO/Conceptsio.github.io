import React from 'react';

function parseJsonItem(dataItemType, dataItemAttributes, dataItemContents, dataComponentContents) {

    // checks the passed in item type to various HTML tags
    switch(dataItemType) {
        case "br":
            return <br />

        // these tags potentially are containers
        case "div":
            if (dataItemContents) {
                // collect the inner containers through recursive calls
                var content = parseJsonItem(dataItemContents.containerType,
                    dataItemContents.containerAttributes,
                    dataItemContents.containerContent,
                    dataComponentContents);
                return <div { ...dataItemAttributes }>{ content }</div>;
            } else {
                return <div { ...dataItemAttributes }>{ dataComponentContents }</div>
            }
        case "span":
            if(dataItemContents.containerContent) {
                // collect the inner containers through recursive calls
                var content = parseJsonItem(dataItemContents.containerType,
                                            dataItemContents.containerAttributes,
                                            dataItemContents.containerContent);
                return <span { ...dataItemAttributes }>{ content }</span>
            } else {
                return <span { ...dataItemAttributes }>{ dataItemContents }</span>
            }
        
        case "nav":
            return <nav { ...dataItemAttributes }>{ dataComponentContents }</nav>

        case "a":
            return <a { ...dataItemAttributes }>{ dataItemAttributes }</a>;

        case "h1":
            return <h1 { ...dataItemAttributes }>{ dataItemContents }</h1>;
        case "h2":
            return <h2 { ...dataItemAttributes }>{ dataItemContents }</h2>;
        case "h3":
            return <h3 { ...dataItemAttributes }>{ dataItemContents }</h3>;
        case "h6":
            return <h6 { ...dataItemAttributes }> { dataItemContents } </h6>;
        case "p":
            return <p { ...dataItemAttributes }>{ dataItemContents }</p>;
    }
}

export default parseJsonItem;