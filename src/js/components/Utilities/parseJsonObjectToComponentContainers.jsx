import React from 'react';
import parseJsonObjectToComponentItem from './parseJsonObjectToComponentItem.jsx';

const uuidv4 = require('uuid/v4');
const buffer= Array();

function parseJsonObjectToComponentContainers(componentContainer, componentContents) {
    var contents = null;
    if(componentContainer.containerContents) {
        contents = componentContainer.containerContents.map((container) => {
            return parseJsonObjectToComponentContainers(container, componentContents);
        });
    }
    uuidv4(null, buffer, 0);
    switch(componentContainer.containerType) {
        case "a":
            if(contents) {
                return <a { ...componentContainer.containerAttributes } key={ buffer }>{ contents }</a>;
            } else {
                return <a { ...componentContainer.containerAttributes } key={ buffer }>{ componentContents }</a>;
            }
        case "button":
            return <button { ...componentContainer.containerAttributes } key={ buffer }>{ componentContents }</button>;
        case "div":
            if(contents) {
                return <div { ...componentContainer.containerAttributes } key={ buffer }>{ contents }</div>;
            } else {
                return <div { ...componentContainer.containerAttributes } key={ buffer }>{ componentContents }</div>;
            }
        case "footer":
            if (contents) {
                return <footer { ...componentContainer.containerAttributes } key={ buffer }>{ contents }</footer>;
            }
        case "li":
            if(contents) {
                return <li { ...componentContainer.containerAttributes } key={ buffer }>{ contents }</li>;
            } else {
                return <li { ...componentContainer.containerAttributes } key={ buffer }>{ componentContents }</li>;
            }    
        case "nav":
            return <nav { ...componentContainer.containerAttributes } key={ buffer }>{ componentContents }</nav>;
        case "span":
            if(contents) {
                return <span { ...componentContainer.containerAttributes } key={ buffer }>{ contents }</span>;
            } else {
                return <span { ...componentContainer.containerAttributes } key={ buffer }>{ componentContents }</span>;
            }
        case "table": 
            return <table { ...componentContainer.containerAttributes } key={ buffer }>{ componentContents }</table>;
        case "tbody":
            return <tbody { ...componentContainer.containerAttributes } key={ buffer }>{ componentContents }</tbody>;
        case "td":
            if(contents) {
                return <td { ...componentContainer.containerAttributes } key={ buffer }>{ contents }</td>; 
            } else {
                return <td { ...componentContainer.containerAttributes } key={ buffer }>{ componentContents }</td>;
            }
        case "thead":
            return <thead { ...componentContainer.containerAttributes } key={ buffer }>{ componentContents }</thead>;
        case "tr":
            if(contents) {
                return <tr { ...componentContainer.containerAttributes } key={ buffer }>{ contents }</tr>;
            } else {
                return <tr { ...componentContainer.containerAttributes } key={ buffer }>{ componentContents }</tr>;
            }
        case "ul":
            return <ul { ...componentContainer.containerAttributes } key={ buffer }>{ componentContents }</ul>;
        default:
            return parseJsonObjectToComponentItem(componentContainer);
    }
}

export default parseJsonObjectToComponentContainers;