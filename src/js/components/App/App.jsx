import React from 'react';

// Provide all the imports from the various React Components that are to be used
// import React Component from "./pathto/ReactComponent.jsx";
import Navbar from '../Navbar/Navbar.jsx';
import Jumbotron from '../Jumbotron/Jumbotron.jsx';
import Carousel from '../Carousel/Carousel.jsx';
import ContentColumn from '../ContentColumn/ContentColumn.jsx';
import Table from '../Table/Table.jsx';
import Footer from '../Footer/Footer.jsx';

const App = (props) => {
    return (
        <div>
            <Navbar navBarJSONURL={ props.navbarjsonurl }/>
            <Jumbotron jumbotronJSONURL={ props.jumbotronjsonurl } />
            <br>
            </br>
            <div className="container" id="aboutUs">
                <h2>About Us</h2>
                <div>ConceptsIO Solutions is devoted to working with small 
                    to medium sized businesses on building, maintaining, and 
                    improving their digital presence. Contemporary businesses drive 
                    new leads and sales with the usage of smart websites and are 
                    legitimized by their online presence. Their websites are analogous 
                    to a storefront that passerby’s can window shop at. Digital marketing 
                    with tools such as social media ads are new age funnels to a new 
                    generation of customers. We serve as partners for SMBs in constructing
                    beautiful custom websites and help businesses sell their products 
                    effectively online.
                    <br />
                    <br />
                    We are made up of dedicated professionals who want to produce 
                    tremendous value for our clients and be flexible to their needs. 
                    Our strategy is to guide clients in making the best decision possible 
                    for their website while respecting their expertise in their industry.
                    <br />
                    <br />
                    Thank you to our clients for including us in their journey!
                </div>
            <br />
            <br />
            </div>
            <Carousel carouselJSONURL={ props.carouseljsonurl }/>
            <br />
            <br />
            <Table />
            <Footer />
        </div>
    );
}

export default App;