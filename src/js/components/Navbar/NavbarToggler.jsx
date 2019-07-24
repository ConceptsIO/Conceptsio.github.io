import parseJsonItem from "../Utilities/parseJsonItem.jsx";

function parseNavbarTogglerContents(navbarTogglerContents) {
    return navbarTogglerContents.map((item) => {
        return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents);
    });
}

function parseNavbarTogglerContainers(navbarTogglerContainers, navbarTogglerContents) {
    return navbarTogglerContainers.map((container) => {
        return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, navbarTogglerContents);
    });
}

function parseNavbarTogglerData(navbarTogglerData) {
    if(navbarTogglerData.componentContainers) {
        return parseNavbarTogglerContainers(navbarTogglerData.componentContainers, parseNavbarTogglerContents(navbarTogglerData.componentContents));
    } else {
        return parseNavbarTogglerContents(navbarTogglerData.componentContents);
    }
}

const NavbarToggler = (props) => {
    return parseNavbarTogglerData(props.navbarTogglerData);
}

export default NavbarToggler;

{/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button> */}