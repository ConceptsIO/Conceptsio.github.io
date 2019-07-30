import React from 'react';

function parseJsonItem(dataItemType, dataItemAttributes, dataItemContents, dataComponentContents) {
    // checks the passed in item type to various HTML tags
    switch(dataItemType) {
        case "br":
            return <br />
                
        case "div":
            if (dataItemContents) {
                var containerContents = [];
                for (var i = 0; i < dataItemContents.length; ++i) {
                    if (dataItemContents[i].itemType) {
                        containerContents.push(parseJsonItem(dataItemContents[i].itemType, dataItemContents[i].itemAttributes, dataItemContents[i].itemContents));
                    } else {
                        containerContents.push(parseJsonItem(dataItemContents[i].containerType, dataItemContents[i].containerAttributes, dataItemContents[i].containerContents, dataComponentContents));
                    }
                }
                return <div { ...dataItemAttributes } >{ containerContents }</div>;
            } else {
                return <div { ...dataItemAttributes }>{ dataComponentContents }</div>
            }
        case "span":
            if (typeof(dataItemContents) === "object"){
                if(dataItemContents.containerContents) {
                    // collect the inner containers through recursive calls
                    var content = parseJsonItem(dataItemContents.containerType,
                                                dataItemContents.containerAttributes,
                                                dataItemContents.containerContents);
                    return <span { ...dataItemAttributes }>{ content }</span>
                } else if(dataItemContents.length) {
                    var content = dataItemContents.map((item) => {
                        return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents);
                    });
                    return <span { ...dataItemAttributes }>{ content }</span>;
                }
            }  else if(dataItemContents) {
                return <span { ...dataItemAttributes }>{ dataItemContents }</span>;
            } else {
                return <span { ...dataItemAttributes }>{ dataComponentContents }</span>;
            }
        case "ul":
            return <ul { ...dataItemAttributes }>{ dataComponentContents }</ul>;
        case "li":
            if(dataItemContents) {
                return <li { ...dataItemAttributes }>{ dataItemContents }</li>;
            }
            return <li { ...dataItemAttributes }>{ dataComponentContents }</li>

        case "table":
            return <table { ...dataItemAttributes }>{ dataComponentContents }</table>;
        case "thead":
            if (dataItemContents) {
                return dataItemContents.map((container) => {
                    return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, dataComponentContents);
                });
            } else {
                return <thead { ...dataItemAttributes}>{ dataComponentContents }</thead>;
            }
        case "tbody":
            if (dataItemContents) {
                return dataItemContents.map((item, index) => {
                    return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents, dataComponentContents[index]);
                });
            } else {
                return <tbody { ...dataItemAttributes }>{dataComponentContents}</tbody>;
            }
        case "th":
            if(dataItemContents) {
                return <th { ...dataItemAttributes }>{ dataItemContents }</th>;
            } else {
                return <th { ...dataItemAttributes }>{ dataComponentContents }</th>;
            }
        case "tr":
            return <tr { ...dataItemAttributes }>{ dataComponentContents }</tr>;
        case "td":
            if(dataItemContents) {
                if(dataItemContents.length) {
                    var content = dataItemContents.map((container) => {
                        return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, dataComponentContents)
                    });
                    return <td { ...dataItemAttributes }>{ content }</td>;
                }
            } else {
                return <td { ...dataItemAttributes }>{ dataComponentContents }</td>;
            }
            
        case "nav":
            return <nav { ...dataItemAttributes }>{ dataComponentContents }</nav>

        case "a":
            if(dataItemContents) {
                if(dataItemContents.length && typeof(dataItemContents) === 'object') {
                    var contents = dataItemContents.map((content) => {
                        if(content.containerType) {
                            return parseJsonItem(content.containerType, content.containerAttributes, content.containerContents, dataComponentContents);
                        } else if(content.itemType) {
                            return parseJsonItem(content.itemType, content.itemAttributes, content.itemContents);
                        }
                    });
                    return <a { ...dataItemAttributes }>{ contents }</a>;
                } else {
                    return <a { ...dataItemAttributes }>{ dataItemContents }</a>;
                }
            } else {
                return <a { ...dataItemAttributes }>{ dataComponentContents }</a>;
            }
        case "button":
            return <button { ...dataItemAttributes }>{ dataComponentContents }</button>
        case "img":
            return <img { ...dataItemAttributes }>{ dataItemContents }</img>
            
        case "h1":
            return <h1 { ...dataItemAttributes }>{ dataItemContents }</h1>;
        case "h2":
            return <h2 { ...dataItemAttributes }>{ dataItemContents }</h2>;
        case "h3":
            return <h3 { ...dataItemAttributes }>{ dataItemContents }</h3>;
        case "h6":
            return <h6 { ...dataItemAttributes }> { dataItemContents } </h6>;
        case "p":
            if(typeof(dataItemContents) === "object") {
                return dataItemContents.map((item) => {
                    if (typeof(item) === "object") {
                        return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents, dataComponentContents);
                    } else {
                        return item;
                    } 
                });
            }
            else {
                return <p { ...dataItemAttributes }>{ dataItemContents }</p>; 
            }
        case "footer":
            if (typeof(dataItemContents) === "object") {
                var contents = dataItemContents.map((container) => {
                    return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, dataComponentContents);
                });
                return <footer { ...dataItemAttributes }>{ contents }</footer>;
            }
        default: 
            break;
    }
}

export default parseJsonItem;