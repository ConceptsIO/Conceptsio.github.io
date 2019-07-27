import React from 'react';

import parseJsonItem from '../Utilities/parseJsonItem.jsx';
import TableRow from './TableRow.jsx';

function parseTableBodyContents(tableBodyContents) {
    return tableBodyContents.map((item) => {
        switch(item.componentType) {
            case "tableRow":
                return <TableRow tableRowData={ item } />
            default:
                return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents);
        }
    });
}

function parseTableBodyContainers(tableBodyContainers, tableBodyContents) {
    return tableBodyContainers.map((container) => {
        return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, tableBodyContents);
    });
}

function parseTableBodyData(tableBodyData) {
    return parseTableBodyContainers(tableBodyData.componentContainers, parseTableBodyContents(tableBodyData.componentContents));
}

const TableBody = (props) => {
    return parseTableBodyData(props.tableBodyData);
}

export default TableBody;