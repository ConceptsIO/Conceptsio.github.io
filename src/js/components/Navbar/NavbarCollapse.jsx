import React from 'react';

import NavbarItems from './NavbarItems.jsx';

const NavbarCollapse = (props) => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <NavbarItems navbarItems={ props.navbarCollapseItems } />
        </div>
    );
}

export default NavbarCollapse;