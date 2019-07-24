import PropTypes from 'prop-types';
import { getJsonObjectWithID } from '../Utilities/getJsonObject';
import parseJsonItem from '../Utilities/parseJsonItem.jsx';

function parseFooterContents(footerContents) {
    return footerContents.map((item) => {
        switch(item.itemType) {
            default:
                return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents);
        }
    });
}

function parseFooterContainers(footerContainer, footerContents) {
    return footerContainer.map((container) => {
        return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, footerContents);
    });
}

function parseFooterData(footerData) {
    return parseFooterContainers(footerData.componentContainer, parseFooterContents(footerData.componentContents));
}

const Footer = (props) => {
    return parseFooterData(getJsonObjectWithID(props.footerJsonUrl, props.footerID));
}

Footer.propTypes = {
    footerID : PropTypes.string,
    footerJsonUrl : PropTypes.string.isRequired
};

export default Footer;

/* import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer style={{ bottom: "0", position: "absolute", width: "100%", display: "contents" }}>
                <div className="container">
                    <br />
                    <div id="contactUs">
                        <h2>Contact Us</h2>
                        <br />
                        Shoot me an email and let's get the ball rolling: <span><a href="mailto:george.le@conceptsio.com">George.Le@conceptsio.com</a></span>
                    </div>
                    <br />
                    <br />
                </div>
                <div style={{ textAlign:"center"}}>
                    <p className="text-muted">&copy; 2019, ConceptsIO Solutions LLC</p>
                    <p className="text-muted">For all your Website and Ecommerce Solutions</p>
                </div>
                <br />
                <br />
                <br />
            </footer>
        );
    }
}

export default Footer; */