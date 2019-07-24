import parseJsonItem from "../Utilities/parseJsonItem.js";

function parseTableBodyContents(tableBodyContents) {
    return tableBodyContents.map((item) => {
        return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents);
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