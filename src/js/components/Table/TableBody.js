import PropTypes from 'prop-types';

import { getJsonObjectWithID } from '../Utilities/getJsonObject';
import parseJsonItem from '../Utilities/parseJsonItem';

function parseTableBodyContents(tableBodyContents) {
    return tableBodyContents.map((item) => {
        switch(item.itemType) {
            default:
                return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents);
        }
    });
}

function parseTableBodyContainers(tableBodyContainer, tableBodyContents) {
    return tableBodyContainer.map((container) => {
        return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, tableBodyContents);
    });
}

function parseTableBodyData(tableBodyData) {
    return parseTableBodyContainers(tableBodyData.componentContainer, parseComponentContainer(tableBodyData.componentContents));
}

const TableBody = (props) => {
    return parseTableBodyData(getJsonObjectWithID(props.tableBodyJsonUrl, props.tableBodyID));
}

TableBody.propTypes = {
    tableBodyID : PropTypes.string,
    tableBodyJsonUrl : PropTypes.string.isRequired
};

export default TableBody;