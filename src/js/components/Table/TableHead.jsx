import parseJsonItem from "../Utilities/parseJsonItem.js";

function parseTableHeadContents(tableHeadContents) {
    return tableHeadContents.map((item) => {
        return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents);
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