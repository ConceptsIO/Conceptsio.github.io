import React from 'react';
import PropTypes from 'prop-types';

import componentParser from '../Utilities/componentParser.jsx';
import TableRow from './TableRow.jsx';


const TableBody = (props) => {
    const tableBodySubcomponentHandler = function(potentialSubcomponent) {
        switch(potentialSubcomponent.componentType) {
            case "tableRow":
                return <TableRow tableRowData={ potentialSubcomponent } />;
            default:
                break;
        }
    }
    if(props.tableBodyData) {
        return componentParser(props.tableBodyData, tableBodySubcomponentHandler);
    }
}

TableBody.propTypes = {
    tableBodyData : PropTypes.object.isRequired
}

export default TableBody;