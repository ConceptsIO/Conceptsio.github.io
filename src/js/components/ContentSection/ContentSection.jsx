import React from 'react';
import PropTypes from 'prop-types';

import componentParser from '../Utilities/componentParser.jsx';
import Card from '../Card/Card.jsx';
import Carousel from '../Carousel/Carousel.jsx';
import ContentRow from './ContentRow.jsx';
import Footer from '../Footer/Footer.jsx';
import { getJsonObjectWithID } from '../Utilities/getJsonObject.js';
import { getRandomKeyValue } from '../Utilities/getRandomKeyValue.js';
import Jumbotron from '../Jumbotron/Jumbotron.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import Table from '../Table/Table.jsx';

const ContentSection = (props) => {
    const contentSectionSubcomponentHandler = function(potentialSubcomponent) {
        switch(potentialSubcomponent.componentType) {
            case "Card":
                return <Card cardData={ getJsonObjectWithID(potentialSubcomponent.componentJsonUrl, potentialSubcomponent.componentID) } key={ getRandomKeyValue() } />;
            case "Carousel":
                return <Carousel carouselData={ getJsonObjectWithID(potentialSubcomponent.componentJsonUrl, potentialSubcomponent.componentID) } key={ getRandomKeyValue() }/>;
            case "ContentRow":    
                return <ContentRow contentRowData={ potentialSubcomponent } key={ getRandomKeyValue() } />
            case "Footer":
                return <Footer footerData={ getJsonObjectWithID(potentialSubcomponent.componentJsonUrl, potentialSubcomponent.componentID) } key={ getRandomKeyValue() } />;
            case "Jumbotron":
                return <Jumbotron jumbotronData={ getJsonObjectWithID(potentialSubcomponent.componentJsonUrl, potentialSubcomponent.componentID) } key={ getRandomKeyValue() } />;
            case "Navbar":
                return <Navbar navbarData={ getJsonObjectWithID(potentialSubcomponent.componentJsonUrl, potentialSubcomponent.componentID) } key={ getRandomKeyValue() } />;
            case "Table":
                return <Table tableData={ getJsonObjectWithID(potentialSubcomponent.componentJsonUrl, potentialSubcomponent.componentID) } key={ getRandomKeyValue() } />;
        }
    };
    return componentParser(getJsonObjectWithID(props.contentSectionJsonUrl, props.contentSectionID), contentSectionSubcomponentHandler);
};

ContentSection.propTypes = {
    contentSectionID : PropTypes.string.isRequired,
    contentSectionJsonUrl : PropTypes.string.isRequired
};

export default ContentSection;