import React from 'react';

class NavbarDropdown extends React.Component {
    
    constructor(props) {
        super(props);

        this.resolveTags = this.resolveTags.bind(this);
    }

    resolveTags(index) {
        var currentItem = this.props.navbarDropdown.innerA[index];
        switch(currentItem.className) {
            case "dropdown-item":
                return (
                    <a className={ currentItem.className } href={ currentItem.aHref }>{ currentItem.aText }</a>
                );
            case "dropdown-divider":
                return (
                    <div className={ currentItem.className } ></div>
                );
        }
    }

    render() {
        var content = this.props.navbarDropdown.innerA.map((item, index) => {
            return this.resolveTags(index); 
        })

        return (
            <li className={ this.props.navbarDropdown.liClassName }>
                <a  className={ this.props.navbarDropdown.aClassName } 
                    href={ this.props.navbarDropdown.aHref }
                    id={ this.props.navbarDropdown.aId }
                    role={ this.props.navbarDropdown.aRole }
                    data-toggle={ this.props.navbarDropdown.aDataToggle }
                    aria-haspopup={ this.props.navbarDropdown.aAriaHasPopup }
                    aria-expanded={ this.props.navbarDropdown.aAriaExpanded }
                >
                    { this.props.navbarDropdown.aValue }
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    { content }
                </div>
            </li>
        );
    }
}

export default NavbarDropdown;