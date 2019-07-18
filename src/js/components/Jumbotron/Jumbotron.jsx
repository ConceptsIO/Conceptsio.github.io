import React from 'react';
import PropTypes from 'prop-types';

class Jumbotron extends React.Component {
    constructor(props) {
        super(props);

        /*
            Ex: Expected object from JSON
            
            jumbotronTextFields : {
                text : [
                    "Text 1", "Text 2", ... , "Text N"
                ],
                HTMLtags : [
                    "Text 1 Corresponding HTML Tag (h1, p, etc)", "Text 2 Corresponding HTML Tag", ... "Text N Corresponding HTML Tag"
                ]
            }
        */
        var jumbotronTextFields  = (function(jsonURL) {
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
        })(this.props.jumbotronJSONURL);
        this.state = {
            jumbotronTextFields : jumbotronTextFields
        };
        this.resolveTags = this.resolveTags.bind(this);
    }

    resolveTags(index) {
        switch(this.state.jumbotronTextFields.HTMLtags[index]) {
            case 'h1':
                return <h1>{ this.state.jumbotronTextFields.text[index] }</h1>;
            case 'h2':
                return <h2>{ this.state.jumbotronTextFields.text[index] }</h2>;
            // TODO ADD MORE TAGS

            case 'p':
                return <p>{ this.state.jumbotronTextFields.text[index] }</p>
        }
    }

    resolveTagsWithStyle(index) {
        switch(this.state.jumbotronTextFields.HTMLtags[index]) {
            case 'h1':
                return <h1 style={ this.state.jumbotronTextFields.styles[index] }>{ this.state.jumbotronTextFields.text[index] }</h1>;
        }
    }

    render() {
        const content = this.state.jumbotronTextFields.text.map((text, index) => {
            if (this.state.jumbotronTextFields.styles) {
                return this.resolveTagsWithStyle(index);
            } else {
                return this.resolveTags(index);
            }
        });

        return (
            <div className="jumbotron" style={{ backgroundImage: "url('../../../../src/assets/sadfox.png')", backgroundRepeat: "no-repeat", backgroundPosition: "right", backgrondSize: "cover"}}>
                { content }
            </div>
        );
    }
}

Jumbotron.propTypes = {
    jumbotronJSONURL : PropTypes.string.isRequired
};

export default Jumbotron;