import React from 'react'

function Show(props) {


    return (
        <div>
           <h1>Show View</h1>  
            <p> The <strong>{props.vegetable.name}</strong> {props.vegetable.readyToEat ? 'is ready to eat' : 'is not ready'} </p>
            <p>The color is <strong>{props.vegetable.color}</strong></p>
            <a href='/vegetables'>Go back</a>
        </div>
    )
}
export default Show;
