import React from 'react';
import './xz.css'

function Cars(props) {
    return(
        <div className='xz'>
            <h3>Car name: {props.name}</h3>
            <p>Year: {props.year}</p>
            { props.children }
        </div>
    )
}


export default Cars;
