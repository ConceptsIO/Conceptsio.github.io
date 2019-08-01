import React from 'react';
import PropTypes from 'prop-types';

import TableData from "./TableData.jsx";
import componentParser from '../Utilities/componentParser.jsx';

const TableRow = (props) => {
    const tableRowSubcomponentHandler = function(potentialSubcomponent) {
        switch(potentialSubcomponent.componentType) {
            case "tableData":
                return <TableData tableDataData={ potentialSubcomponent } />;
        }
    }
    return componentParser(props.tableRowData, tableRowSubcomponentHandler);
}

TableRow.propTypes = {
    tableRowData : PropTypes.object.isRequired
}

export default TableRow;