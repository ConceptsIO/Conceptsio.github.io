import React from 'react';

import NavbarItems from './NavbarItems.jsx';
import parseJsonItem from '../Utilities/parseJsonItem.jsx';

function parseNavbarCollapseContents(navbarCollapseContents) {
    return navbarCollapseContents.map((item) => {
        switch(item.componentType) {
            case "navbarItems": 
                return <NavbarItems navbarItemsData={ item }/>;
            default:
                return parseJsonItem(item.itemType, item.itemAttribute, item.itemContents);
        }
    });
}

function parseNavbarCollapseContainers(navbarCollapseContainers, navbarCollapseContents) {
    var collapse = navbarCollapseContainers.map((containers) => {
        return parseJsonItem(containers.containerType, containers.containerAttributes, containers.containerContents, navbarCollapseContents);
    });
    return collapse;
}

function parseNavbarCollapseData(navbarCollapseData) {
    return parseNavbarCollapseContainers(navbarCollapseData.componentContainers, parseNavbarCollapseContents(navbarCollapseData.componentContents));
}

const NavbarCollapse = (props) => {
    return parseNavbarCollapseData(props.navbarCollapseData);
}

export default NavbarCollapse;