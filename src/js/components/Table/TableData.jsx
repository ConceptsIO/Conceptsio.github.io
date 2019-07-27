import parseJsonItem from "../Utilities/parseJsonItem.jsx";

function parseTableDataContents(tableDataContents) {
    return tableDataContents.map((item) => {
        if(item.itemType) {
            return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents);
        } else {
            return item;
        }
    });
}

function parseTableDataContainers(tableDataContainers, tableDataContents) {
    return tableDataContainers.map((container) => {
        return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, tableDataContents);
    })
}

function parseTableDataData(tableDataData) {
    return parseTableDataContainers(tableDataData.componentContainers, parseTableDataContents(tableDataData.componentContents));
}

const TableData = (props) => {
    return parseTableDataData(props.tableDataData);
}

export default TableData;