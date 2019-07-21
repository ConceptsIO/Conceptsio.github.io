function parseJsonItem(dataItemType, dataItemAttributes, dataItemContents) {
    // checks the passed in item type to various HTML tags
    switch(dataItemType) {
        case "div":
            if(dataItemContents.containerContent) {
                var content = parseJsonItem(dataItemContents.containerContent.containerType,
                                             dataItemContents.containerContent.containerAttributes,
                                             dataItemContents.containerContent.containerContent)
                return <div { ...dataItemAttributes }>{ content }</div>;
            } else {
                return <div { ...dataItemAttributes }>{ dataItemContents }</div>
            }
        
        // header tags
        case "h1":
            return <h1 { ...dataItemAttributes }>{ dataItemContents }</h1>;
        case "h2":
            return <h2 { ...dataItemAttributes }>{ dataItemContents }</h2>;
        case "h3":
            return <h3 { ...dataItemAttributes }>{ dataItemContents }</h3>
        
        case "p":
            return <p { ...dataItemAttributes }>{ dataItemContents }</p>

        case "span":
            if(dataItemContents.containerContent) {
                var content = parseJsonItem(dataItemContents.containerContent.containerType,
                                            dataItemContents.containerContent.containerAttributes,
                                            dataItemContents.containerContent.containerContent);
                return <span { ...dataItemAttributes }>{ content }</span>
            } else {
                return <span { ...dataItemAttributes }>{ dataItemContents }</span>
            }
    }
}

export default parseJsonItem;