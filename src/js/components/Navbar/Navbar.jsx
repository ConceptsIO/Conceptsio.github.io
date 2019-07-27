import React from 'react';

import { getJsonObjectWithID } from '../Utilities/getJsonObject.js';
import NavbarBrand from './NavbarBrand.jsx';
import NavbarCollapse from './NavbarCollapse.jsx';
import NavbarToggler from './NavbarToggler.jsx';
import parseJsonItem from '../Utilities/parseJsonItem.jsx';

function parseNavbarContents(navbarContents) {
    return navbarContents.map((item) => {
        switch(item.componentType) {
            case "navbarBrand":
                return <NavbarBrand navbarBrandData={ item } />;
            case "navbarCollapse":
                return <NavbarCollapse navbarCollapseData={ item } />;
            case "navbarToggler":
                return <NavbarToggler navbarTogglerData={ item } />;
            default:
                return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents);
        }
    });
}

function parseNavbarContainers(navbarContainers, navbarContents) {
    return navbarContainers.map((container) => {
        return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, navbarContents);
    }); 
}

function parseNavbarData(navbarData) {
    return parseNavbarContainers(navbarData.componentContainers, parseNavbarContents(navbarData.componentContents));
}

const Navbar = (props) => {
    return parseNavbarData(getJsonObjectWithID(props.navbarJsonUrl, props.navbarID));
}

export default Navbar;

// class Navbar extends React.Component {
    
//     constructor(props) {
//         super(props);
//         var navbarItems  = (function(jsonURL) {
//             var json = null;
//             $.ajax({
//                 'url' : jsonURL,
//                 'datatype' : 'json',
//                 async : false,
//                 'success' : function(data) {
//                     json = data;
//                 }
//             });
//             return json;
//         })(this.props.navBarJSONURL);

//         this.state = {
//             navbarItems : navbarItems.navbarItems
//         };
//     };
    
//     render() {
//         return (
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <NavbarBrand />
//                 <NavbarToggler />
//                 <NavbarCollapse navbarCollapseItems={ this.state.navbarItems } />
//             </nav>
//         );
//     }
// }