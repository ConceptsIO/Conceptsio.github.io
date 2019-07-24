import React from 'react';

import NavbarDropdown from './NavbarDropdown.jsx';

import parseJsonItem from '../Utilities/parseJsonItem.jsx';

function parseNavbarItemContents(navbarItemContents) {
    return navbarItemContents.map((item) => {
        switch(item.componentType) {
            case "navbarDropdown":
                return <NavbarDropdown navbarDropdownData={ item } />
            default:
                return parseJsonItem(item.itemType, item.itemAttributes, item.itemContents);
        }
    });
}

function parseNavbarItemContainers(navbarItemContainers, navbarItemContents) {
    return navbarItemContainers.map((container) => {
        return parseJsonItem(container.containerType, container.containerAttributes, container.containerContents, navbarItemContents);
    });
}

function parseNavbarItemData(navbarItemData) {
    return parseNavbarItemContainers(navbarItemData.componentContainers, parseNavbarItemContents(navbarItemData.componentContents));
}

const NavbarItem = (props) => {
    return parseNavbarItemData(props.navbarItemData);
}

export default NavbarItem;