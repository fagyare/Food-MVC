import React from 'react'

function Show(props) {


    return (
        <div>
           <h1>Show View</h1>  
            <p> The <strong>{props.fruit.name}</strong> {props.fruit.readyToEat ? 'is ready to eat' : 'is not ready'} </p>
            <p>Its color is <span style={{ color: props.fruit.color }}>{props.fruit.color}</span></p>
           
           <form action={`/fruits/${props.fruit.name}?_method=DELETE`} method='POST'>
           <button>Delete</button>

           </form>
           
           <a href='/fruits'>Go back</a>
        </div>
    )
}
export default Show;
