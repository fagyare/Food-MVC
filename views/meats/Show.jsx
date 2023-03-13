import React from 'react'

function Show(props) {


    return (
        <div>
           <h1>Show View</h1>  
            <p> The <strong>{props.meat.name}</strong> {props.meat.readyToEat ? 'is ready to eat' : 'is not ready'} </p>
            <p>Its color is <span style={{ color: props.fruit.color }}>{props.fruit.color}</span></p>
            <a href='/meats'>Go back</a>
        </div>
    )
}
export default Show;
