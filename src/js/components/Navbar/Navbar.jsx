import React from 'react';

import NavbarBrand from './NavbarBrand.jsx';
import NavbarCollapse from './NavbarCollapse.jsx';
import NavbarToggler from './NavbarToggler.jsx';
import parseJsonItem from '../Utilities/parseJsonItem.jsx';

import { getJsonObjectWithID } from '../Utilities/getJsonObject.js';

function parseNavbarContents(navbarContents) {
    return navbarContents.map((item) => {
        switch(item.componentType) {
            case "navbarBrand":
                return <NavbarBrand navbarBrandData={ item } />;
            case "navbarCollapse":
                return <NavbarCollapse navbarCollapse={ item } />;
            case "navbarToggler":
                return <NavbarToggler navbarToggler={ item } />;
            default:
                return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents);
        }
    });
}

function parseNavbarContainers(navbarContainer, navbarContents) {
    return navbarContainer.map((container) => {
        return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, navbarContents);
    }); 
}

function parseNavbarData(navbarData) {
    var navbar = parseNavbarContainers(navbarData.componentContainer, parseNavbarContents(navbarData.componentContents));
    console.log(navbar);
    return navbar;
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