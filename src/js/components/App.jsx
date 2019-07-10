import React from 'react';

// Provide all the imports from the various React Components that are to be used
// import React Component from "./pathto/ReactComponent.jsx";
import Navbar from './Navbar.jsx';
import Jumbotron from './Jumbotron.jsx';
import Carousel from './Carousel.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Jumbotron />
                <Carousel />
            </div>
        );
    }
}

export default App;