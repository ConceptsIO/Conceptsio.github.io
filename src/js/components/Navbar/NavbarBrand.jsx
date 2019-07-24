import parseJsonItem from '../Utilities/parseJsonItem.jsx';

function parseNavbarBrandContents(navbarBrandContents) {
    return navbarBrandContents.map((item) => {
        return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents);
    });
}

function parseNavbarBrandContainers(navbarBrandContainers, navbarBrandContents) {
    var container = navbarBrandContainers.map((container) => {
        return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, navbarBrandContents);
    });
    return container;
}

function parseNavbarBrandData(navbarBrandData) {
    return parseNavbarBrandContainers(navbarBrandData.componentContainers, parseNavbarBrandContents(navbarBrandData.componentContents));
}

const NavbarBrand = (props) => {
    return parseNavbarBrandData(props.navbarBrandData);
}

export default NavbarBrand;

{/* <a className="navbar-brand" href="#">
    <span>
        <img src="../../../../../src/assets/64x64profile.png" alt="Foxicon"></img>
    </span>
</a> */}