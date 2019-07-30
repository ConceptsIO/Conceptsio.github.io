import React from 'react';
import PropTypes from 'prop-types';

import TableRow from "./TableRow.jsx";
import componentParser from '../Utilities/componentParser.jsx';

const TableHead = (props) => {
    const tableHeadSubcomponentHandler = function(potentialSubcomponent) {
        switch(potentialSubcomponent.componentType) {
            case "tableRow":
                return <TableRow tableRowData={ potentialSubcomponent } />;
        }
    }
    return componentParser(props.tableHeadData, tableHeadSubcomponentHandler);
}

TableHead.propTypes = {
    tableHeadData : PropTypes.object.isRequired
}

export default TableHead;