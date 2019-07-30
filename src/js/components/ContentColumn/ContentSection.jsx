import componentParser from '../Utilities/componentParser.jsx';
import { getJsonObjectWithID } from '../Utilities/getJsonObject.js';

const ContentSection = (props) => {
    var contentSectionSubcomponentHandler = function(potentialSubcomponent) {
           
    };
    return componentParser(getJsonObjectWithID(props.contentSectionJsonUrl, props.contentSectionID));
}

export default ContentSection;