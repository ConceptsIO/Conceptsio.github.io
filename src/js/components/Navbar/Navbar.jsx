import React from 'react';

import NavbarCollapse from './NavbarCollapse.jsx';
import NavbarToggler from './NavbarToggler.jsx';

class Navbar extends React.Component {
    
    constructor(props) {
        super(props);
        var navbarItems  = (function(jsonURL) {
            var json = null;
            $.ajax({
                'url' : jsonURL,
                'datatype' : 'json',
                async : false,
                'success' : function(data) {
                    json = data;
                }
            });
            return json;
        })(this.props.navBarJSONURL);

        this.state = {
            navbarItems : navbarItems.navbarItems
        };
    };
    
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <span>
                        <img src="../../../../../src/assets/64x64profile.png" alt="Foxicon"></img>
                    </span>
                </a>
                <NavbarToggler />
                <NavbarCollapse navbarCollapseItems={ this.state.navbarItems } />
            </nav>
        );
    }
}

export default Navbar;