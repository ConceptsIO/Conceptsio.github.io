import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer style={{ bottom: "0", position: "absolute", width: "100%", display: "contents" }}>
                <div style={{ textAlign: "center" }}>
                    <div className="text-muted" id="contactUs">
                        Email our CEO for any inquiries: <span><a href="mailto:george.le@conceptsio.com">George.Le@conceptsio.com</a></span>
                    </div>
                    <br />
                    <p className="text-muted">&copy; 2019, ConceptsIO Solutions LLC</p>
                    <p className="text-muted">For all your Website and Ecommerce Solutions</p>
                </div>
                
            </footer>
        );
    }
}

export default Footer;