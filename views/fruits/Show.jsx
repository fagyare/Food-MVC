import React from 'react'

function Show(props) {


    return (
        <div style={{backgroundColor: 'lightblue'}}>
           <h1>Show View</h1>  
            <p> The <strong>{props.fruit.name}</strong> {props.fruit.readyToEat ? 'is ready to eat' : 'is not ready'} </p>
            <p>Its color is <span style={{ color: props.fruit.color }}>{props.fruit.color}</span></p>
            <a href='/fruits'>Go back</a>
        </div>
    )
}
export default Show;
