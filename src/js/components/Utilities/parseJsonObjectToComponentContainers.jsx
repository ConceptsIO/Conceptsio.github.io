import React from 'react';
import parseJsonObjectToComponentItem from './parseJsonObjectToComponentItem.jsx';

const uuidv4 = require('uuid/v4');
const buffer= Array();

function parseJsonObjectToComponentContainers(componentContainer, componentContents) {
    uuidv4(null, buffer, 0);
    switch(componentContainer.containerType) {
        case "a":
            if(componentContainer.containerContents) {
                var contents = componentContainer.containerContents.map((container) => {
                    return parseJsonObjectToComponentContainers(container, componentContents);
                });
                return <a { ...componentContainer.containerAttributes } key={ buffer }>{ contents }</a>;
            } else {
                return <a { ...componentContainer.containerAttributes } key={ buffer }>{ componentContents }</a>;
            }
        case "button":
            return <button { ...componentContainer.containerAttributes } key={ buffer }>{ componentContents }</button>;
        case "div":
            if(componentContainer.containerContents) {
                var contents = componentContainer.containerContents.map((container) => {
                    return parseJsonObjectToComponentContainers(container, componentContents);
                });
                return <div { ...componentContainer.containerAttributes } key={ buffer }>{ contents }</div>;
            } else {
                return <div { ...componentContainer.containerAttributes } key={ buffer }>{ componentContents }</div>;
            }
        case "footer":
            if (componentContainer.containerContents) {
                var contents = componentContainer.containerContents.map((container) => {
                    return parseJsonObjectToComponentContainers(container, componentContents);
                });
                return <footer { ...componentContainer.containerAttributes } key={ buffer }>{ contents }</footer>;
            }
        case "li":
            if(componentContainer.containerContents) {
                var contents = componentContainer.containerContents.map((container) => {
                    return parseJsonObjectToComponentContainers(container, componentContents);
                });
                return <li { ...componentContainer.containerAttributes } key={ buffer }>{ contents }</li>;
            } else {
                return <li { ...componentContainer.containerAttributes } key={ buffer }>{ componentContents }</li>;
            }    
        case "nav":
            return <nav { ...componentContainer.containerAttributes } key={ buffer }>{ componentContents }</nav>;
        case "span":
            if(componentContainer.containerContents) {
                var contents = componentContainer.containerContents.map((container) => {
                    return parseJsonObjectToComponentContainers(container, componentContents);
                });
                return <span { ...componentContainer.containerAttributes } key={ buffer }>{ contents }</span>;
            } else {
                return <span { ...componentContainer.containerAttributes } key={ buffer }>{ componentContents }</span>;
            }
        case "table": 
            return <table { ...componentContainer.containerAttributes } key={ buffer }>{ componentContents }</table>;
        case "tbody":
            return <tbody { ...componentContainer.containerAttributes } key={ buffer }>{ componentContents }</tbody>;
        case "td":
            if(componentContainer.containerContents) {
                var contents = componentContainer.containerContents.map((container) => {
                    return parseJsonObjectToComponentContainers(container, componentContents);
                });
                return <td { ...componentContainer.containerAttributes } key={ buffer }>{ contents }</td>; 
            } else {
                return <td { ...componentContainer.containerAttributes } key={ buffer }>{ componentContents }</td>;
            }
        case "thead":
            return <thead { ...componentContainer.containerAttributes } key={ buffer }>{ componentContents }</thead>;
        case "tr":
            if(componentContainer.containerContents) {
                var contents = componentContainer.containerContents.map((container) => {
                    return parseJsonObjectToComponentContainers(container, componentContents)
                });
                return <tr { ...componentContainer.containerAttributes } key={ buffer }>{ contents }</tr>;
            } else {
                return <tr { ...componentContainer.containerAttributes } key={ buffer }>{ componentContents }</tr>;
            }
        case "ul":
            return <ul { ...componentContainer.containerAttributes } key={ buffer }>{ componentContents }</ul>;
        default:
            if(componentContainer.itemType) {
                return parseJsonObjectToComponentItem(componentContainer);
            }
            break;
    }
}

export default parseJsonObjectToComponentContainers;