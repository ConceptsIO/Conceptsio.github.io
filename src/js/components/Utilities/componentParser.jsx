import parseJsonObjectToComponentContainers from './parseJsonObjectToComponentContainers.jsx';
import parseJsonItem from './parseJsonItem.jsx';

const componentParser = function(component = null, subcomponentHandlersList = []) {
    // parse the component object's containers and contents
    return (function(componentContainers, componentContents) {
        // for each outer container of the component, build the container and its inner containers and then
        // add the array of componentContents corresponding to the index of the component's container
        return componentContainers.map((container, index) => {
            return parseJsonContainers(container.containerType, container.containerAttributes, container.containerContents, componentContents, index);
        });
    })(component.componentContainers, (function(componentContents, subcomponentHandlersList) {
        // however before we can build the containers of the component, we must build the componentContents, check to
        // see if there is a subcomponent in the componentContents. If so then we call the componentParser function 
        // from a subcomponent   
        return componentContents.map((item, index) => {
            // if the current item is a subcomponent
            if(item.componentType) {
                
            }
        });
    })(component.componentContents, subcomponentHandlersList));
}