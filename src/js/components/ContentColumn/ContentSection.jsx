import parseJsonItem from '../Utilities/parseJsonItem.jsx';
import { getJsonObjectWithID } from '../Utilities/getJsonObject.js';

const ContentSection = (props) => {
    var contentSectionSubcomponentHandler = function(potentialSubcomponent) {
           
    };
    return componentParser(getJsonObjectWithID(props.contentSectionJsonUrl, props.contentSectionID));
}

export default ContentSection;