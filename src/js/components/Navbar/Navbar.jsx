import React from 'react';

import NavbarBrand from './NavbarBrand.jsx';
import NavbarCollapse from './NavbarCollapse.jsx';
import NavbarToggler from './NavbarToggler.jsx';
import { getJSONwithID } from '../Utilities/getJSON.js';

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

function parseNavbarContents(navbarItemType, navbarItemAttribute, navbarItemContents) {
    switch(navbarItemType) {
        case ""
    }
}

function parseNavbarContainers(navbarContainerType, navbarContainerAttribute, navbarContainerContents) {
    switch(navbar) {
        case "nav":
            if(navbarData.componentContainer.containerContents) {
                var contents = parseNavbarContainers();
                return <nav { ...navbarData.componentContainer.containerAttributes }>{ contents }</nav>;
            } else {
                return <nav { ...navbarData.componentContainer.containerAttributes }>{ navbarData.componentContainer.containerContents }</nav>
            }
    }
}

function parseNavbarData(navbar) {
    
    // build contents first

    // build containers and pass contents into it
    
    // return containers with content in it
    
}

const Navbar = (props) => {
    // read from JSON file an navbarData object with the corresponding id
    var navbarData = getJSONwithID(props.navbarJsonUrl, props.id);

    return parseNavbarData(navbarData);
}

export default Navbar;

// {
//     "navbarItems" : [
//         {
//             "liClassName" : "nav-item active",
//             "aClassName" : "nav-link",
//             "aHref" : "#",
//             "aText" : "Home",
//             "spanClassName" : "sr-only"
//         },
//         {
//             "liClassName" : "nav-item",
//             "aClassName" : "nav-link",
//             "aHref" : "#aboutUs",
//             "aText" : "About Us"
//         },
//         {
//             "liClassName" : "nav-item",
//             "aClassName" : "nav-link",
//             "aHref" : "#PriceTable",
//             "aText" : "Pricing"
//         },
//         {
//             "liClassName" : "nav-item dropdown",
//             "aClassName" : "nav-link dropdown-toggle",
//             "aHref" : "#",
//             "aId" : "navbarDropdown",
//             "aRole" : "button",
//             "aDataToggle":"dropdown",
//             "aAriaHasPopup": true,
//             "aAriaExpanded" : false,
//             "aValue" : "Portfolio",
//             "innerA" : [
//                 {
//                     "className" : "dropdown-item",
//                     "aHref" : "#",
//                     "aText" : "Under Construction"    
//                 },
//                 {
//                     "className" : "dropdown-item",
//                     "aHref" : "#",
//                     "aText" : "Also Under Construction" 
//                 },
//                 {
//                     "className" : "dropdown-item",
//                     "aHref" : "#",
//                     "aText" : "You get the idea" 
//                 },
//                 {
//                     "className" : "dropdown-divider"
//                 },
//                 {
//                     "className" : "dropdown-item",
//                     "aHref" : "#",
//                     "aText" : "Your Website?" 
//                 }
//             ]
//         },
//         {
//             "liClassName" : "nav-item",
//             "aClassName" : "nav-link",
//             "aHref" : "#contactUs",
//             "aText" : "Contact Us"
//         }
//     ]
// }
