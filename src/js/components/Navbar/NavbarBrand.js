import parseJsonItem from '../Utilities/parseJsonItem.js';

function parseNavbarBrandContents(navbarBrandContents) {
    return navbarBrandContents.map((item) => {
        return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents);
    });
}

function parseNavbarBrandContainers(navbarBrandContainers, navbarBrandContents) {
    return navbarBrandContainers.map((container) => {
        return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, navbarBrandContents);
    });
}

function parseNavbarBrandData(navbarBrandData) {
    return parseNavbarBrandContainers(navbarBrandData.componentContainer, parseNavbarBrandContents(navbarBrandData.componentContents));
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