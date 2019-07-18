import React from 'react';

const ContentColumn = (props) => {
    var content = props.contentColumnItems.map((item, index) => {
        
    });
    
    return (
        <div className="container-fluid">
            { content }
        </div>
    );
}

export default ContentColumn;