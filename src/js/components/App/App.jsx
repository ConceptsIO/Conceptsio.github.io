import React from 'react';

// Provide all the imports from the various React Components that are to be used
// import React Component from "./pathto/ReactComponent.jsx";
import Navbar from '../Navbar/Navbar.js';
import Jumbotron from '../Jumbotron/Jumbotron.js';
import Carousel from '../Carousel/Carousel.js';
import ContentColumn from '../ContentColumn/ContentColumn.js';
import Table from '../Table/Table.js';
import Footer from '../Footer/Footer.js';

const App = (props) => {
    return (
        <div>
            
            <Jumbotron jumbotronID={ "mainJumbotron" } jumbotronJsonUrl={ props.jumbotronjsonurl } />            
            
        </div>
    );
}

export default App;

/*
<Navbar id={ "mainPageNavbar" } navbarJsonUrl={ props.navbarjsonurl } />
<Jumbotron jumbotronJsonUrl={ props.jumbotronjsonurl } />
<ContentColumn contentColumnJsonUrl={ props.contentcolumnjsonurl } />
<Carousel carouselJsonUrl={ props.carouseljsonurl } /> <Carousel carouselID={ "staffCarousel" } carouselJsonUrl={ props.carouseljsonurl } />
<br />
<br />
<Table tableJsonUrl={ props.tablejsonurl } /> <Table id={ "pricingTable" } tableJsonUrl={ props.tablejsonurl } />
<Footer footerJsonUrl={ props.footerjsonurl } />

*/

{/* <div>
    <Navbar navBarJSONURL={ props.navbarjsonurl }/>
    <Jumbotron jumbotronJSONURL={ props.jumbotronjsonurl } />
    <br>
    </br>
    <div className="container" id="aboutUs">
        <h2>About Us</h2>
        <img src="../../../../src/assets/ConceptsIOSolutionsCropped.png" style={{ display:"block", marginLeft: "auto", marginRight: "auto" }}/>
        <br />
        <div>
            ConceptsIO Solutions is devoted to working with small 
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
    <Carousel carouselID={ "staffCarousel" } carouselJSONURL={ props.carouseljsonurl }/>
    <br />
    <br />
    <Table />
    <Footer />
</div> */}