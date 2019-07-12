import React from 'react';

// Provide all the imports from the various React Components that are to be used
// import React Component from "./pathto/ReactComponent.jsx";
import Navbar from '../Navbar/Navbar.jsx';
import Jumbotron from '../Jumbotron/Jumbotron.jsx';
import Carousel from '../Carousel/Carousel.jsx';

const App = (props) => {
    return (
        <div>
            <Navbar navBarJSONURL={ props.navbarjsonurl }/>
            <Jumbotron jumbotronJSONURL={ props.jumbotronjsonurl } />
            <Carousel />
        </div>
    );
}

export default App;