import React from 'react';
import PropTypes from 'prop-types';

import { getJSONwithID } from '../Utilities/getJSON.js';

const Jumbotron = (props) => {
    this.jumbotron = getJSONwithID(props.ID)
    const content = this.props.jumbotronContents.map((item) => {
        return resolveContents(item);
    });

    const container = resolveContainer(this.props.jumbotronContainer);

    return (
        { container }
    );
}

Jumbotron.propTypes = {
    jumbotronJSONURL : PropTypes.string.isRequired
};

export default Jumbotron;