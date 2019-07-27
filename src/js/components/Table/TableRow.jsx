import React from 'react';

import parseJsonItem from '../Utilities/parseJsonItem.jsx';
import TableData from "./TableData.jsx";

function parseTableRowContents(tableRowContents) {
    return tableRowContents.map((item) => {
        switch(item.componentType) {
            case "tableData":
                return <TableData tableDataData={ item } />
            default:
                return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents);
        }
    });
}

function parseTableRowContainers(tableRowContainers, tableRowContents) {
    return tableRowContainers.map((container) => {
        return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, tableRowContents);
    })
}

function parseTableRowData(tableRowData) {
    return parseTableRowContainers(tableRowData.componentContainers, parseTableRowContents(tableRowData.componentContents));
}

const TableRow = (props) => {
    return parseTableRowData(props.tableRowData);
}

export default TableRow;