import React from 'react';

import parseJsonItem from "../Utilities/parseJsonItem.jsx";
import TableRow from "./TableRow.jsx";

function parseTableHeadContents(tableHeadContents) {
    return tableHeadContents.map((item) => {
        switch(item.componentType) {
            case "tableRow":
                return <TableRow tableRowData={ item } />
            default:
                return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents);
        }
    });
}

function parseTableHeadContainers(tableHeadContainers, tableHeadContents) {
    return tableHeadContainers.map((container) => {
        return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, tableHeadContents);
    });
}

function parseTableHeadData(tableHeadData) {
    return parseTableHeadContainers(tableHeadData.componentContainers, parseTableHeadContents(tableHeadData.componentContents));
}

const TableHead = (props) => {
    return parseTableHeadData(props.tableHeadData);
}

export default TableHead;