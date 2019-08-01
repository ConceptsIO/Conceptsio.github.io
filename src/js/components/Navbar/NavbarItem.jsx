import React from 'react';
import PropTypes from 'prop-types';

import NavbarDropdown from './NavbarDropdown.jsx';
import componentParser from '../Utilities/componentParser.jsx';

const NavbarItem = (props) => {
    const navbarSubcomponentHandler = function(potentialSubcomponent) {
        switch(potentialSubcomponent.componentType) {
            case "navbarDropdown":
                return <NavbarDropdown navbarDropdownData={ potentialSubcomponent } />;
            default:
                break;
        }
    }
    return componentParser(props.navbarItemData, navbarSubcomponentHandler);
}

NavbarItem.propTypes = {
    navbarItemData : PropTypes.object.isRequired
}

export default NavbarItem;