import React from 'react';

class NavbarItems extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.resolveTags = this.resolveTags.bind(this);
    }

    resolveTags(index) {

    }

    render() {
        var content = this.props.navBarItems.map((item, ID) => {
            console.log(ID);
            return this.resolveTags(ID);
        });

        return (
            <ul>
                {content}
            </ul>
        );
    }
}