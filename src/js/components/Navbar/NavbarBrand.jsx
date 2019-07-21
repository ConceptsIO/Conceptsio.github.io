import React from 'react';

import parseJsonItem from '../Utilities/parseJsonItem.js';

const NavbarBrand = (props) => {
    return parseJsonItem(props.itemContents.itemType, props.itemContents.itemAttributes, props.itemContents.itemContents);
}

export default NavbarBrand;

{/* <a className="navbar-brand" href="#">
    <span>
        <img src="../../../../../src/assets/64x64profile.png" alt="Foxicon"></img>
    </span>
</a> */}