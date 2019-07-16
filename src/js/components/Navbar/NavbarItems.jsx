import React from 'react';

import NavbarDropdown from './NavbarDropdown.jsx';

class NavbarItems extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.resolveTags = this.resolveTags.bind(this);
    }

    resolveTags(index) {
        var currentItem = this.props.navbarItems[index];
        switch(currentItem.liClassName) {
            case "nav-item active":
                return (
                    <li className={ currentItem.liClassName }>
                        <a className={ currentItem.aClassName } href={ currentItem.aHref }>
                            { currentItem.aText }
                            <span className={ currentItem.spanClassName }>(current)</span>
                        </a>
                    </li>
                );         
            case "nav-item":
                return (
                    <li className={currentItem.liClassName }>
                        <a className={ currentItem.aClassName } href={ currentItem.aHref }>
                            { currentItem.aText }
                        </a>
                    </li>
                );
            case "nav-item dropdown":
                return <NavbarDropdown navbarDropdown={ currentItem } />;
        }
    }

    render() {
        var content = this.props.navbarItems.map((item, index) => {
            return this.resolveTags(index);
        });

        return (
            <ul className="navbar-nav mr-auto">
                {content}
            </ul>
        );
    }
}

export default NavbarItems;