import React from 'react';

// Provide all the imports from the various React Components that are to be used
// import React Component from "./pathto/ReactComponent.jsx";
import Navbar from '../Navbar/Navbar.jsx';
import Jumbotron from '../Jumbotron/Jumbotron.jsx';
import Carousel from '../Carousel/Carousel.jsx';
import ContentSection from '../ContentSection/ContentSection.jsx';
import Table from '../Table/Table.jsx';
import Footer from '../Footer/Footer.jsx';

const App = (props) => {
    return (
        <div>
            <Navbar navbarID={ "MainPageNavbar" } navbarJsonUrl={ props.navbarjsonurl } />
            <Jumbotron jumbotronID={ "MainJumbotron" } jumbotronJsonUrl={ props.jumbotronjsonurl } />
            <div className="container-fluid" id="Services" style={{ "backgroundColor": "gray", "color":"white"}}>
                <div className="row" style={{ "marginLeft": "10px" }}>
                    <h1>Services - How We Help You Win</h1>
                </div>
                <br />
                <div className="row" style={{ "marginLeft": "5px" }}>
                    <h5>Websites - Speedy Construction, Reliable Maintenance, Steadfast Support</h5>
                </div>
                <br />
                <div className="row align-items-center" style={{ "marginLeft": "5px" }}>
                    <div className="col col-lg-4 col-xs-3"> 
                        <img alt="mobile responsive"/>
                    </div>
                    <div className="col col-lg-4 col-xs-3">
                        <img alt="maintenance and support" />
                    </div>
                    <div className="col col-lg-4 col-xs-3">
                        <img alt="best in class consulting" />
                    </div>
                </div>
                <br />
                <div className="row" style={{ "marginLeft": "5px" }}>
                    <h5>Social Media - Build Your Brand, Boost Sales, Crush the Competition</h5>
                </div>
                <br />
                <div className="row align-items-center" style={{ "marginLeft": "5px" }}>
                    <div className="col col-lg-4 col-xs-3"> 
                        <img alt="Facebook, Instagram, LinkedIn, and More Ads"/>
                    </div>
                    <div className="col col-lg-4 col-xs-3">
                        <img alt="Copy Writing and Content Production" />
                    </div>
                    <div className="col col-lg-4 col-xs-3">
                        <img alt="Tailored Marketing Strategy for Target Demographics" />
                    </div>
                </div>
                <br/>
                <div className="row" style={{ "marginLeft": "5px" }}>
                    <h5>Next-Gen Community Management and Customer Service - Leveraging Platforms Like Slack, Discord</h5>
                </div>
                <br/>
                <div className="row align-items-center" style={{ "marginLeft": "5px" }}>
                    <div className="col col-lg-4 col-xs-3"> 
                        <img alt="Slack - B2B Customer Service"/>
                    </div>
                    <div className="col col-lg-4 col-xs-3">
                        <img alt="Discord - Safe text, talk, screen-share" />
                    </div>
                    <div className="col col-lg-4 col-xs-3">
                        <img alt="On-website customer service" />
                    </div>
                </div>
                <br/>
                <br/>
            </div>
            <br/>
            <div className="container" id="AboutUs">
                <div className="row">
                    <h1>About Us</h1>
                    <br />
                </div>
                <div className="row align-items-center">
                    <div className="col">
                        <img className="mx-auto d-block" src="../assets/ConceptsIOSolutionsCropped.png"/>
                    </div>
                    <div className="col">
                        ConceptsIO Solutions is devoted to working with small 
                        to medium sized businesses on building, maintaining, and 
                        improving their digital presence. Contemporary businesses drive 
                        new leads and sales with the usage of smart websites and are 
                        legitimized by their online presence. Their websites are analogous 
                        to a storefront that passerby’s can window shop at. Digital marketing 
                        with tools such as social media ads can create new age brand and sales 
                        funnels to a new generation of customers. We serve as partners for SMBs 
                        in constructing beautiful custom websites and help businesses sell their 
                        products effectively online.
                    </div>
                </div>
                <div className="row">
                    <br />
                    <br />
                    We are made up of dedicated professionals who want to produce 
                    tremendous value for our clients and be flexible to their needs. 
                    Our strategy is to guide clients in making the best decision possible 
                    for their website while respecting their expertise in their industry.
                    <br />
                    <br />
                    Thank you to our clients for including us in their journey!
                    <br />
                    <br />
                </div>
            </div>
            <Carousel carouselID={ "StaffCarousel" } carouselJsonUrl={ props.carouseljsonurl } />
            <br />
            <br />
            <Table tableID={ "PriceTable" } tableJsonUrl={ props.tablejsonurl } />
            <br />
            <br />
            <Footer footerID={ "Footer" } footerJsonUrl={ props.footerjsonurl } />
        </div>
    );
}

export default App;

/*
<Navbar navbarID={ "mainPageNavbar" } navbarJsonUrl={ props.navbarjsonurl } />
<Jumbotron jumbotronID={ "mainJumbotron" } jumbotronJsonUrl={ props.jumbotronjsonurl } />
<ContentSection contentSectionJsonUrl={ props.contentSectionjsonurl } />
<Carousel carouselID={ "StaffCarousel" } carouselJsonUrl={ props.carouseljsonurl } />
<br />
<br />
<Table tableID={ "priceTable" } tableJsonUrl={ props.tablejsonurl } />
<Footer footerID={ "footer" } footerJsonUrl={ props.footerjsonurl } />

*/

{/* <div>
    <Navbar navBarJSONURL={ props.navbarjsonurl }/>
    <Jumbotron jumbotronJSONURL={ props.jumbotronjsonurl } />
    <br>
    </br>
    
    <Carousel carouselID={ "staffCarousel" } carouselJSONURL={ props.carouseljsonurl }/>
    <br />
    <br />
    <Table />
    <Footer />
</div> */}