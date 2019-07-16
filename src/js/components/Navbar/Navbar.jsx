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
                <a className="navbar-brand" href="#">Navbar</a>
                <NavbarToggler />
                <NavbarCollapse navbarCollapseItems={ this.state.navbarItems } />
            </nav>
        );
    }
}

{/* 
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <a className="nav-link" href="#">
                    Home 
                    <span className="sr-only">(current)</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                    Link
                </a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                </div>
            </li>
            <li className="nav-item">
                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
            </li>
        </ul>
        
    </div>
    
    <form className="form-inline my-2 my-lg-0">
    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
</form> */}

export default Navbar;