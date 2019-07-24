import PropTypes from 'prop-types';

import { getJsonObjectWithID } from '../Utilities/getJsonObject.js';
import parseJsonItem from '../Utilities/parseJsonItem.jsx';

function parseJumbotronContents(jumbotronContents) {
    // return a list of items which make up the contents of a jumbotron
    return jumbotronContents.map((item) => {
        switch(item.itemType) {
            // This switch statement exists in case we decide to add child components to the Jumbotron
            default:
                return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents.itemText);
        }
    });
}

function parseJumbotronContainers(jumbotronContainer, jumbotronContents) {
    var container = jumbotronContainer.map((container) => {
        return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, jumbotronContents);
    });
    return container;
}

function parseJumbotronData(jumbotronData) {
    return parseJumbotronContainers(jumbotronData.componentContainer, parseJumbotronContents(jumbotronData.componentContents));
}

const Jumbotron = (props) => {
    return parseJumbotronData(getJsonObjectWithID(props.jumbotronJsonUrl, props.jumbotronID));
}

Jumbotron.propTypes = {
    jumbotronID : PropTypes.string,
    jumbotronJsonUrl : PropTypes.string.isRequired
};

export default Jumbotron;