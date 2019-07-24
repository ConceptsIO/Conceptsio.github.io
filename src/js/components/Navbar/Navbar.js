import NavbarBrand from './NavbarBrand.js';
import NavbarCollapse from './NavbarCollapse.js';
import NavbarToggler from './NavbarToggler.js';
import { getJsonObjectWithID } from '../Utilities/getJsonObject.js';
import parseJsonItem from '../Utilities/parseJsonItem.js';

function parseNavbarContents(navbarContents) {
    return navbarContents.map((item) => {
        switch(item.itemType) {
            case "navbarBrand":
                return <NavbarBrand navbarBrandAttributes={ item.itemAttributes } navbarBrandContents={ item.itemContents } />;
            case "navbarCollapse":
                return <NavbarCollapse navbarCollapseAttributes={ item.itemAttributes } navbarCollapseContents={ item.itemContents } />;
            case "navbarToggler":
                return <NavbarToggler navbarTogglerAttributes={ item.itemAttributes } navbarTogglerContents={ item.itemContents } />;
            default:
                return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents);
        }
    })
}

function parseNavbarContainers(navbarContainer, navbarContents) {
    return navbarContainer.map((container) => {
        return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, navbarContents);
    }); 
}

function parseNavbarData(navbarData) {
    return parseNavbarContainers(navbarData.componentContainer, parseNavbarContents(navbarData.componentContents));
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