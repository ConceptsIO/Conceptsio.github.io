import parseJsonItem from "../Utilities/parseJsonItem.js";

function parseNavbarItemContents(navbarItemContents) {
    return navbarItemContents.map((item) => {
        switch(item.itemType) {
            case "navbarDropdown":
                break;
            default:
                return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents);
        }
    });
}

function parseNavbarItemContainers(navbarItemContainers, navbarItemContents) {
    return navbarItemContainers.map((container) => {
        return parseJsonItem(container.containerType, container.containerAttribute, container.containerContents, navbarItemContents);
    });
}

function parseNavbarItemData(navbarItemData) {
    return parseNavbarItemContainers(navbarItemData.componentContainers, parseNavbarItemContents(navbarItemData.componentContents));
}

const NavbarItem = (props) => {
    return parseNavbarItemData(props.navbarItemData);
}

export default NavbarItem;