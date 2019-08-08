import React from 'react';
import PropTypes from 'prop-types';

import componentParser from '../Utilities/componentParser.jsx';
import ContentColumn from './ContentColumn.jsx';
import { getRandomKeyValue } from '../Utilities/getRandomKeyValue.js';

const ContentRow = (props) => {
    const contentRowSubcomponentHandler = function(potentialSubcomponent) {
        switch(potentialSubcomponent.componentType) {
            case "ContentColumn":
                return <ContentColumn contentColumnData={ potentialSubcomponent } key={ getRandomKeyValue() }/>;
        }
    }
    return componentParser(props.contentRowData, contentRowSubcomponentHandler);
};

ContentRow.propTypes = {
    contentRowData : PropTypes.object
};

export default ContentRow;