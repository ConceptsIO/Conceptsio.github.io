import { getJsonObjectWithID } from '../Utilities/getJsonObject.js';
import componentParser from '../Utilities/componentParser.jsx';
import Card from '../Card/Card.jsx';
import Carousel from '../Carousel/Carousel.jsx';
import Footer from '../Footer/Footer.jsx';
import Jumbotron from '../Jumbotron/Jumbotron.jsx';
import Navbar from '../Navbar/Navbar.jsx';
import Table from '../Table/Table.jsx';

const ContentSection = (props) => {
    const contentSectionSubcomponentHandler = function(potentialSubcomponent) {
            switch(potentialSubcomponent.componentType) {
                case "card":
                    if (potentialSubcomponent.componentID) {
                        return <Card cardData={ getJsonObjectWithID(props.cardJsonUrl, potentialSubcomponent.componentID) } />;
                    } else {
                        return <Card cardData={ getJsonObject(props.cardJsonUrl) } />;
                    }
                case "carousel":
                    return <Carousel carouselData={ getJsonObjectWithID(props.carouselJsonUrl, potentialSubcomponent.componentID) }/>;
                case "footer":
                    return <Footer footerData={ getJsonObjectWithID(props.footerJsonUrl, potentialSubcomponent.componentID) }/>;
                case "jumbotron":
                    return <Jumbotron jumbotronData={ getJsonObjectWithID(props.jumbotronJsonUrl, potentialSubcomponent.componentID) }/>;
                case "navbar":
                    return <Navbar navbarData={ getJsonObjectWithID(props.navbarJsonUrl, potentialSubcomponent.componentID) }/>;
                case "table":
                    return <Table tableData={ getJsonObjectWithID(props.tableJsonUrl, potentialSubcomponent.componentID) }/>;
                default:
                    return parseJsonObjectToComponentItem(potentialSubcomponent);
            }
    };
    return componentParser(getJsonObjectWithID(props.contentSectionJsonUrl, props.contentSectionID), contentSectionSubcomponentHandler);
}

export default ContentSection;