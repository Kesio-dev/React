import React, {Component} from 'react';
import './App.css';
import Xz from './xz/Xz.js';


class App extends Component {
    state = {
        cars: [
            {name: 'Audi', year: 1999},
            {name: 'Mazda', year: 1949},
            {name: 'Ford', year: 2077}

        ]
    }


    render() {

        const cars = this.state.cars;

        return(
            <div className='xz'>
                <Xz name={cars[0].name} year={cars[0].year}/>
                <Xz name={cars[1].name} year={cars[1].year}/>
                <Xz name={cars[2].name} year={cars[2].year}/>
            </div>
        )
    }
}

export default App;
