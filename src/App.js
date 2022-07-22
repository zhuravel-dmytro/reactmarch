import React, {Component} from 'react';

import Cars from "./components/cars/Cars";
import CarForm from "./components/carForm/CarForm";

class App extends Component {
    render() {
        return (
            <div>
                <CarForm/>
                <Cars/>
            </div>
        );
    }
}

export default App;