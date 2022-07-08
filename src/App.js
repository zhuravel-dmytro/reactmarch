import React, {Component} from 'react';
import Cars from "./components/Cars/Cars";
import FormCar from "./components/FormCar/FormCar";

class App extends Component {
    render() {
        return (
            <div>
                 <FormCar/>
                 <Cars/>
            </div>
        );
    }
}

export default App;